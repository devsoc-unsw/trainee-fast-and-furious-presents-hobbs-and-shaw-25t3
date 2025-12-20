import type { Preferences, Location } from "../utils/types";

export async function submitPreferences(preferences: Preferences, location: Location) {
  const res = await fetch('/api/restaurants', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...preferences, ...location }),
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => '');
    throw new Error(msg || 'Failed to update field');
  }

  return res.json().catch(() => ({}));
}
