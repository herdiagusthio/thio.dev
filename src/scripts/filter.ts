// Search + tag filter for card lists. Markup contract, inside any [data-filter-root]:
//   [data-filter-input]           search box
//   [data-filter-chip="<tag>"]    tag buttons ("all" resets), with aria-pressed
//   [data-filter-card]            cards carrying lowercase data-title / data-summary / data-tags (comma-separated)
//   [data-filter-count]           optional label updated to [COUNT:n]
//   [data-filter-status]          optional visually hidden role="status" element, announces "n results"
//   [data-filter-empty]           optional "No matches" element, shown when nothing matches

for (const root of document.querySelectorAll<HTMLElement>('[data-filter-root]')) {
  const input = root.querySelector<HTMLInputElement>('[data-filter-input]');
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-filter-card]'));
  const chips = Array.from(root.querySelectorAll<HTMLElement>('[data-filter-chip]'));
  const count = root.querySelector<HTMLElement>('[data-filter-count]');
  const status = root.querySelector<HTMLElement>('[data-filter-status]');
  const empty = root.querySelector<HTMLElement>('[data-filter-empty]');
  let activeTag = 'all';

  const apply = () => {
    const q = (input?.value ?? '').trim().toLowerCase();
    let visible = 0;
    for (const card of cards) {
      const { title = '', summary = '', tags = '' } = card.dataset;
      const tagList = tags.split(',');
      const show =
        (activeTag === 'all' || tagList.includes(activeTag)) &&
        (!q || title.includes(q) || summary.includes(q) || tagList.some((t) => t.includes(q)));
      card.style.display = show ? 'flex' : 'none';
      if (show) visible++;
    }
    if (count) count.textContent = `[COUNT:${visible}]`;
    if (status) status.textContent = `${visible} ${visible === 1 ? 'result' : 'results'}`;
    if (empty) empty.hidden = visible > 0;
  };

  input?.addEventListener('input', apply);
  for (const chip of chips) {
    chip.addEventListener('click', () => {
      for (const c of chips) {
        c.classList.toggle('active', c === chip);
        c.setAttribute('aria-pressed', String(c === chip));
      }
      activeTag = (chip.dataset.filterChip ?? 'all').toLowerCase();
      apply();
    });
  }
}
