import * as dotenv from 'dotenv';

dotenv.config();

export const MongoConfig = {
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017', 
};
