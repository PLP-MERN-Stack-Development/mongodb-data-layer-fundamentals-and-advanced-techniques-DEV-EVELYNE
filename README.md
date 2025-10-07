# PLP Bookstore - Node.js & MongoDB Project

A Node.js project demonstrating interaction with a MongoDB database.  
This project includes scripts to populate a database with sample book data, perform CRUD operations, and run queries. It follows best practices for environment management and version control.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Project Structure](#project-structure)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [Database Connection](#database-connection)  
- [Scripts](#scripts)  
- [Example Queries](#example-queries)  
- [Git & Version Control](#git--version-control)  
- [Notes](#notes)  
- [License](#license)  

---

## Project Overview

This project demonstrates:

- Connecting to MongoDB (local or Atlas) using Node.js  
- Populating a collection with predefined book data (`insert_books.js`)  
- Performing CRUD operations on the books collection (`crud.js`)  
- Organizing code with a reusable database connection module (`db.js`)  
- Writing queries to find, filter, and sort books (`queries.js`)  

The `books` collection contains the following fields:

- `title`  
- `author`  
- `genre`  
- `published_year`  
- `price`  
- `in_stock`  
- `pages`  
- `publisher`  

---

## Project Structure
PLP-Bookstore/
│
├── .gitignore # Excludes node_modules, .env, etc.
├── .env # Environment variables (not pushed)
├── package.json # Project metadata and dependencies
├── package-lock.json # Locked dependency versions
├── insert_books.js # Script to populate books collection
├── crud.js # CRUD operations on the books collection
├── db.js # MongoDB connection module
├── queries.js # Example MongoDB queries
├── sceenshot.png # Screenshots or visual reference
└── node_modules/ # Installed npm packages (not pushed)
