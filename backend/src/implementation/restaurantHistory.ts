import { Redis } from "@upstash/redis";

const HISTORY_LIMIT = 6;

export async function addRestaurantToHistory(redis: Redis, userId: string, restaurantId: number) {
  await redis.lpush(userId, restaurantId);

  await redis.ltrim(userId, 0, HISTORY_LIMIT - 1);
}

export async function getRestaurantHistory(redis: Redis, userId: string) {
  return await redis.lrange(userId, 0, -1);
}
