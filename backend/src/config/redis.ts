import dotenv from 'dotenv';
import { Redis } from '@upstash/redis';

// Get dotenv vars
dotenv.config({ path: '.env' })

// Set up redis client
const redis = Redis.fromEnv();

export default redis;
