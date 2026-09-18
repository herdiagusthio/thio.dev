export function getPulseData() {
  return {
    active: true,
    signal: "SYSTEM ACTIVE",
    auth_level: "PRINCIPAL",
    timestamp: new Date().toISOString(),
  };
}

export function resolveMetadata(component: string) {
  return {
    component_id: component,
    rendered_at: Date.now(),
  };
}
ponytail: minimal hardcoded telemetry.ts mock. add live ws/redis fetch when real backend exists.
