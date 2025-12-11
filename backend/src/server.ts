import express, { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import redis from './config/redis';
import { addRestaurantToHistory, getRestaurantHistory } from './implementation/restaurantHistory'

const PORT = 8080;
const MONTH_MS = 1000 * 60 * 60 * 24 * 28;

// Get dotenv vars
dotenv.config({ path: '.env' })

// Setup express app
const app = express();
app.use(express.json({ limit: "20mb" }));

// Middleware
const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(",") : [];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow REST clients like Postman
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));
app.use(cookieParser());

// UserId handler
app.use(async (req: Request, res: Response, next: NextFunction) => {
  let { userId } = req.cookies;
  if (!userId) {
    userId = uuidv4();
    res.cookie('userId', userId, {
      maxAge: MONTH_MS,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    })
  }

  req.userId = userId;

  next();
})

// Save restaurant for a user
app.post('/api/visited', async (req: Request, res: Response) => {
  const userId = req.userId as string;
  const { restaurantId } = req.body;

  if (!restaurantId) {
    return res.status(400).json({ message: 'Missing restaurantId.' });
  }

  try {
    await addRestaurantToHistory(redis, userId, restaurantId);
    return res.status(200).json({ message: 'History update successful.' });
  } catch (e) {
    console.log('Error adding restaurant: ', e);
    res.status(500).json({ message: 'Failed to update history.' });
  }
});

// Fetch user's history
app.get('/api/history', async (req: Request, res: Response) => {
  const userId = req.userId as string;

  try {
    const result = await getRestaurantHistory(redis, userId);
    res.status(200).json(result);
  } catch (e) {
    console.log('Error adding restaurant: ', e);
    res.status(500).json({ message: 'Failed to get history.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
