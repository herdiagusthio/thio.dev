import { test } from 'node:test';
import assert from 'node:assert/strict';
import { forLegacy3D, html, normalizeSnapshot, raw, stateClass } from './office-data.ts';
import { AGENTS } from '../data/agents.ts';

const XSS = '<img src=x onerror=alert(1)>';

test('html: escapes every interpolation, keeps raw and nested html', () => {
  assert.equal(html`<b>${XSS}</b>`.value, '<b>&lt;img src=x onerror=alert(1)&gt;</b>');
  assert.equal(html`<a title="${'" onmouseover="x'}">`.value, '<a title="&quot; onmouseover=&quot;x">');
  assert.equal(html`<i>${"it's"}</i>`.value, '<i>it&#39;s</i>');
  assert.equal(html`<p>${html`<b>${'&'}</b>`}</p>`.value, '<p><b>&amp;</b></p>');
  assert.equal(html`${['<a>', html`<b>`]}`.value, '&lt;a&gt;<b>');
  assert.equal(html`${raw('<hr>')}${null}${undefined}${false}${0}`.value, '<hr>0');
});

test('stateClass: lowercase letters only', () => {
  assert.equal(stateClass('Working'), 'working');
  assert.equal(stateClass('x" onclick="alert(1)'), 'xonclickalert');
});

const station = (over: Record<string, unknown> = {}) => ({
  id: 'prime', name: 'Prime', state: 'Idle', room: 'Lounge', seat: 2, ...over,
});

test('normalizeSnapshot: rejects payloads without a usable station', () => {
  for (const bad of [null, 'x', {}, { stations: 'x' }, { stations: [] }, { stations: [{ id: 'a' }] }]) {
    assert.equal(normalizeSnapshot(bad, AGENTS), null, JSON.stringify(bad));
  }
});

test('normalizeSnapshot: validates stations and merges the static roster', () => {
  const snap = normalizeSnapshot(
    {
      agents: [
        station({ role: 'Live Role', colors: { hair: '#111', skin: '#fed7aa', shirt: '#abcdef', pants: '#000000' } }),
        station({ id: 'lexa', name: 'Lexa', seat: 6, colors: { hair: 'red; background:url(//evil)', skin: '#fff', shirt: '#fff', pants: '#fff' } }),
        station({ id: 'ghost', name: 'Ghost', seat: 9 }),
        station({ id: 'nosat', seat: '2' }),
        station({ id: `x" onclick="alert(1)` }),
        station({ id: 'odd', state: 'Working" onmouseover="alert(1)' }),
        station({ id: 'new-state', state: 'Sleeping' }),
        { name: 'missing id' },
      ],
      updatedAt: '2026-10-25T00:00:00Z',
    },
    AGENTS,
  );
  assert.ok(snap);
  assert.deepEqual(snap.agents.map((a) => a.id), ['prime', 'lexa', 'ghost']);
  const [prime, lexa, ghost] = snap.agents;
  assert.equal(prime.role, 'Live Role');
  assert.equal(prime.colors.shirt, '#abcdef');
  assert.deepEqual(prime.skills, AGENTS[1].skills, 'skills come from the static roster');
  assert.deepEqual(lexa.colors, AGENTS[5].colors, 'invalid colors fall back to static');
  assert.equal(ghost.mission, '');
  assert.deepEqual(ghost.skills, []);
  assert.match(ghost.colors.hair, /^#[0-9a-f]{3,8}$/i);
  assert.equal(snap.updatedAt, '2026-10-25T00:00:00Z');
  assert.equal(snap.activities, null);
  assert.equal(snap.channels, null);
  assert.equal(snap.summary, null);
});

test('forLegacy3D: escapes the free text the prebuilt 3D bundle puts into innerHTML', () => {
  const [a] = forLegacy3D([{ ...AGENTS[0], name: XSS, currentTask: 'a & <b>' }]);
  assert.equal(a.name, '&lt;img src=x onerror=alert(1)&gt;');
  assert.equal(a.currentTask, 'a &amp; &lt;b&gt;');
  assert.equal(a.id, AGENTS[0].id);
  assert.equal(a.state, AGENTS[0].state, 'state stays raw: the bundle compares it');
});

test('normalizeSnapshot: activities, channels and summary', () => {
  const snap = normalizeSnapshot(
    {
      stations: [station()],
      liveActivity: [{ agent: 'Prime', action: XSS }, { icon: 7, agent: null, action: 'x' }],
      channels: { topics: ['#raw', { category: 'eng', name: 'Engineering' }, { name: 'Product Strategy' }, { bogus: true }] },
      summary: { totalAgents: 7, working: 3, idle: 4 },
      fetchedAt: '2026-10-25T01:00:00Z',
    },
    AGENTS,
  );
  assert.ok(snap);
  assert.deepEqual(snap.activities, [
    { icon: '⚡', agent: 'Prime', action: XSS, timeAgo: 'recently' },
    { icon: '⚡', agent: '', action: 'x', timeAgo: 'recently' },
  ]);
  assert.deepEqual(snap.channels, [
    { name: '#raw', target: '#raw' },
    { name: '#eng', target: 'Engineering' },
    { name: '#product-strategy', target: 'Product Strategy' },
  ]);
  assert.deepEqual(snap.summary, { totalAgents: 7, active: 3, idle: 4 });
  assert.equal(snap.updatedAt, '2026-10-25T01:00:00Z');
  assert.equal(normalizeSnapshot({ stations: [station()], summary: { totalAgents: '7' } }, AGENTS)?.summary, null);
});
