import express from "express";

const app = express();

const PORT = process.env.PORT || 2002;

const myUsers = [
  { id: 1, username: "Mwaka", fullName: "Mwakanemela Kayange" },
  { id: 2, username: "Mwaka", fullName: "Mwakanemela Kayange" },
  { id: 3, username: "Mwaka", fullName: "Mwakanemela Kayange" },
  { id: 3, username: "Software", fullName: "Software Engineer" },
];
//get requests
app.get("/", (req, res) => {
  res.send("Welcome, to Mwaka Web Server");
});

app.get("/api/users", (req, res) => {
  console.log(req.query);
  const {
    query: { filter, value },
  } = req;

  //   if (!filter && !value) return res.send(myUsers);

  if (filter && value) {
    return res.send(myUsers.filter((user) => user[filter].includes(value)));
  }

  return res.send(myUsers);
});

//route parameters
app.get("/api/users/:id", (req, res) => {
  // console.log(req.params)
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) {
    return res.status(400).send({ msg: "Bad Request: Invalid ID" });
  }

  const findUser = myUsers.find((user) => user.id === parsedId);
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
});

//query parameters

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
