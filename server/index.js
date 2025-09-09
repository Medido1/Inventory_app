const path = require("path");
const express = require("express");
const app = express();
const booksRouter = require("./routes/books");
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());
app.use("/api/books", booksRouter);

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
})

app.listen(PORT, (error) => {
  if (error) {
    throw(error)
  }
  console.log(`Server running on port ${PORT}`)
})