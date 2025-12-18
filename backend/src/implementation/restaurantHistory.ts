import { Redis } from "@upstash/redis";

const HISTORY_LIMIT = 5;

export async function addRestaurantToHistory(redis: Redis, userId: string, restaurantName: string) {
  await redis.lpush(userId, restaurantName);

  await redis.ltrim(userId, 0, HISTORY_LIMIT - 1);
}

export async function getRestaurantHistory(redis: Redis, userId: string) {
  return await redis.lrange(userId, 0, -1);
}
