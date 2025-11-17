//import express and create app
const express = require("express");
const app = express();
app.use(express.json());

let books=[]; //create book array

//start server

app.listen(3000,()=>{
    console.log("server running");

});


//add routes one by one
//start with GET

app.get("/books",(req,res)=>{
    res.json(books);
});

// add POST /books

app.post("/books",(req,res)=>{
    const {title,author}=req.body;

    const newBook={
        id:books.length+1,title,author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

//add put 

app.put("/books/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  const { title, author } = req.body;
  book.title = title;
  book.author = author;

  res.json(book);
});


//delete route

app.delete("/books/:id", (req, res) => {
  const bookId = Number(req.params.id);
  books = books.filter(b => b.id !== bookId);
  res.json({ message: "Book deleted" });
});

