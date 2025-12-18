export async function saveRestaurant(restaurantName: string) {
  const res = await fetch('http://localhost:8080/api/visited', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ restaurantName }),
    credentials: 'include' // allows auth info to be sent 
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => '');
    throw new Error(msg || 'Failed to save restaurant');
  }

  console.log(`saved restaurant: ${restaurantName}`)
  return res.json().catch(() => { });
}
