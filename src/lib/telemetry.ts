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
