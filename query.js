//2. Insert kedalam collection menggunakan insert one, satu document dengan informasi nama buku, author, tags buku, harga buku, stock
db.buku.insertOne(
    { judul: "No SQL Mongo DB", author: "John Doe", tags: "Technology", harga: 20000, stock: 80 } 
)

// 3. Gunakan insert many untuk bulk insert kedalam collection book
db.buku.insertMany([
    {judul: "Football 101", author: "Robin van Persie", tags: "Sport", harga: 10000, stock: 4},
    {judul: "Comfort Food Recipe", author: "Gordon Ramsay", tags: "Culinary", harga: 40000, stock: 2},
    {judul: "Asian Food", author: "Uncle Roger", tags: "Culinary", harga: 40000, stock: 2},
    {judul: "Python", author: "Guido van Rossum", tags: "Technology", harga: 25000, stock: 4},
    {judul: "Tenggelamnya Kapal Van der Wijk", author: "Buya Hamka", tags: "Fiction", harga: 50000, stock: 7},
    {judul: "Date Warehouse 101", author: "Kimball", tags: "Technology", harga: 10000, stock: 3},
])

//4. Tampilkan buku yang memiliki stock < 5 dan harganya > 10000
db.buku.find(
    {stock:{$lt:5},
     harga:{$gt:10000}
    }
)

//5. Berikan contoh penggunaan updateone, update many, deleteone dan delemany 
// updateone
db.buku.updateOne(
    { judul:"Tenggelamnya Kapal Van der Wijk" },
    { 
      $set: { tags:"Novel"},
      $currentDate: {lastModified: true}
    }
)

// updatemany
db.buku.updateMany(
    { tags:"Technology" },
    { 
      $set: { stock:10, harga:70000 },
      $currentDate: {lastModified: true}
    }
)

// deleteone
db.buku.deleteOne(
  { tags:"Sport" }
)

// deletemany
db.buku.deleteMany(
    { tags: "Culinary" }
)

db.buku.deleteMany({})



db.buku.find({})



