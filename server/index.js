const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
let data = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Doe" },
  { id: 3, firstName: "Smith", lastName: "Doe" },
  { id: 4, firstName: "Brook", lastName: "Doe" },
  { id: 5, firstName: "Cook", lastName: "Doe" },
];

app.get("/", (req, res) => {
  res.json({ data });
});

app.post("/", (req, res) => {
  const { firstName, lastName } = req.body;
  const newId = data.length + 1;
  data.push({ id: newId, firstName, lastName });
  res.send("Done");
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  data = data.filter((i) => i.id != id);
  res.send("Done");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
