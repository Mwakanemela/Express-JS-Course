import express from "express";

const app = express();

const PORT = process.env.PORT || 2002;

app.get("/", (req, res) => {
  res.send("Welcome, to Mwaka Web Server");
});

app.get("/api/users", (req, res) => {
  res.send([
    { id: 1, username: "Mwaka", fullName: "Mwakanemela Kayange" },
    { id: 2, username: "Mwaka", fullName: "Mwakanemela Kayange" },
    { id: 3, username: "Mwaka", fullName: "Mwakanemela Kayange" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
