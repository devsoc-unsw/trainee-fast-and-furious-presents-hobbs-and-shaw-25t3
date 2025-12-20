export function determineType(
  priceRange: string,
  partySize: string
) {
    if (partySize === "solo") {
        if (priceRange === "1") {
            return "fast_food";
        }
        return "fast_food|cafe"
    }

    if (partySize === "duo") {
        return "cafe|restaurant"
    }

    if (partySize === "group") {
        if (priceRange === "1") {
            return "fast_food"
        }
        return "fast_food|restaurant"
    }

    return "fast_food|cafe|restaurant"
}

export async function getRestaurants({
    cuisines,
    priceRange,
    partySize,
    radiusKm
}: {
    cuisines: string;
    priceRange: string;
    partySize: string;
    radiusKm: number;
}) {
    const radiusMeters = radiusKm * 1000;
    const type = determineType(priceRange, partySize);
      const query = `
        [out:json];
        node
        ["amenity"~"${type}"]
        ["name"]
        ["cuisine"~"${cuisines}",i]
        (around:${radiusMeters},-33.8688,151.2093);
        out tags center 30;
    `;
    const res = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        headers: {
        "Content-Type": "text/plain",
        },
        body: query,
    });

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();

    return (data.elements as {
        id: number;
        lat: number;
        lon: number;
        tags?: Record<string, string>;
    }[]).map((el) => ({
        id: el.id,
        name: el.tags?.name,
        lat: el.lat,
        lng: el.lon,
        tags: el.tags,
    }));
}