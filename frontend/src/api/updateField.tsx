export async function updateField(field: string, value: string) {
  const res = await fetch('/api/update-field', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ field, value }),
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => '');
    throw new Error(msg || 'Failed to update field');
  }

  return res.json().catch(() => ({}));
}
