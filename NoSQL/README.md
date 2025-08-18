# NoSQL

▶ **Introduction**

This directory contains MongoDB shell scripts and Python utilities built with PyMongo to practice NoSQL fundamentals: listing databases, CRUD operations, simple queries, and log statistics. It’s intended to help you get comfortable with MongoDB both from the shell and via Python.

▶ **Table of Contents**

- Overview[#overview]
- Concepts[#concepts]
- Example[#example]
- Installation[#installation]
- Author[#author]


## Overview
This project demonstrates basic MongoDB operations and small utilities:
- Shell scripts for quick DB tasks (listing DBs, inserting, updating, deleting).
- Python helpers using PyMongo for listing, inserting, and updating documents.
- A stats script that summarizes Nginx logs stored in MongoDB.


## Concepts

- NoSQL vs. SQL (document stores vs. relational tables)
- MongoDB document model (BSON), databases, collections, documents
- CRUD operations: insert, find, update, remove/delete
- MongoDB shell (legacy `mongo`) and modern `mongosh`
- PyMongo basics: connecting, `find()`, `insert_one()`, `update_many()`
- Counting documents and simple filters
- Using MongoDB Database Tools (`mongorestore`) to load sample data
- Running MongoDB locally or with Docker


## Example

```bash
 db.school.insert({ name: "Holberton school" })
```


## Installation

```bash
git clone https://github.com/kamisos3/holbertonschool-web_back_end/tree/main/NoSQL
```

## Author

Kami Sostre — https://github.com/kamisos3
