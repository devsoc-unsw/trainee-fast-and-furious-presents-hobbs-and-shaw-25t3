export async function getUserHistory() {
  const res = await fetch('http://localhost:8080/api/history', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => '');
    throw new Error(msg || 'Failed to save restaurant');
  }

  return res.json().catch(() => { });
}
