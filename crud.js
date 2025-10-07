// crud.js
// Demonstrates basic CRUD operations in MongoDB using Node.js

const { MongoClient } = require('mongodb');

// Connection details
const uri = 'mongodb://localhost:27017'; // Use your Atlas string if needed
const dbName = 'plp_bookstore';
const collectionName = 'books';

async function runCRUD() {
  const client = new MongoClient(uri);

  try {
    // 1️⃣ Connect to MongoDB
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db(dbName);
    const books = db.collection(collectionName);

    // 2️⃣ CREATE: Insert a new book
    const newBook = {
      title: 'The Power of Now',
      author: 'Eckhart Tolle',
      genre: 'Spiritual',
      published_year: 1997,
      price: 15.99,
      in_stock: true,
      pages: 236,
      publisher: 'New World Library'
    };
    const insertResult = await books.insertOne(newBook);
    console.log(`📘 New book inserted with ID: ${insertResult.insertedId}`);

    // 3️⃣ READ: Find all books in Fiction genre
    console.log('\n📚 Books in Fiction genre:');
    const fictionBooks = await books.find({ genre: 'Fiction' }).toArray();
    console.log(fictionBooks);

    // 4️⃣ UPDATE: Update the price of a book
    const updateResult = await books.updateOne(
      { title: '1984' },
      { $set: { price: 14.99 } }
    );
    console.log(`💲 Updated ${updateResult.modifiedCount} book(s)`);

    // 5️⃣ DELETE: Remove a book by title
    const deleteResult = await books.deleteOne({ title: 'Moby Dick' });
    console.log(`🗑️ Deleted ${deleteResult.deletedCount} book(s)`);

    // 6️⃣ READ: Display all remaining books
    console.log('\n📚 Remaining books:');
    const allBooks = await books.find().toArray();
    allBooks.forEach((b, i) => console.log(`${i + 1}. ${b.title} (${b.author})`));

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await client.close();
    console.log('🔒 Connection closed');
  }
}

// Run the CRUD script
runCRUD();
