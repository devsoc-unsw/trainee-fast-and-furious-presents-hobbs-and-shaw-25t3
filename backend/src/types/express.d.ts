import 'express';

// merges with Express’s built-in Request interface
declare module 'express-serve-static-core' {
  interface Request {
    userId?: string;
  }
}
