require('dotenv').config(); // Load .env variables
const { MongoClient } = require('mongodb');

// Use MongoDB URI and DB name from .env
const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

let dbConnection;

async function connectDB() {
  if (dbConnection) return dbConnection;

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('✅ Connected successfully to MongoDB Atlas');
    dbConnection = client.db(dbName);
    return dbConnection;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
}

module.exports = connectDB;
