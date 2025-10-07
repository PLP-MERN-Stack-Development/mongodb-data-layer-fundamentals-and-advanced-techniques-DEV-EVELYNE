// queries.js
// All MongoDB queries for PLP Week 1

// --- Basic CRUD Operations ---

// 1. Find all books in a specific genre
db.books.find({ genre: "Fiction" })

// 2. Find books published after 1950
db.books.find({ published_year: { $gt: 1950 } })

// 3. Find books by a specific author
db.books.find({ author: "George Orwell" })

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 13.99 } }
)

// 5. Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" })

// --- Advanced Queries ---

// 6. Find books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// 7. Projection: show only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// 8. Sort by price ascending
db.books.find().sort({ price: 1 })

// 9. Sort by price descending
db.books.find().sort({ price: -1 })

// 10. Pagination: page 1 (5 per page)
db.books.find().limit(5)

// 11. Pagination: page 2
db.books.find().skip(5).limit(5)

// --- Aggregation Pipelines ---

// 12. Average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
])

// 13. Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
])

// 14. Group books by publication decade
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      }
    }
  },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
])

// --- Indexing ---

// 15. Create an index on title
db.books.createIndex({ title: 1 })

// 16. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// 17. Explain query performance
db.books.find({ title: "1984" }).explain("executionStats")