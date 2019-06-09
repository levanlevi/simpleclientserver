const express = require("express");
const TodoController = require("./todo-controller");

const app = express();

const cors = require('cors');
app.use(cors());
app.options('*', cors());

const todo = new TodoController();

app.get("/api/todos", async (req, res) => {
  const dateTo = new Date(req.dateTo);
  const items = await todo.get(dateTo);
  res.status(200);
  res.send(items);
});

app.post("/api/todos", (req, res) => {
  try {
    const newItem = new TodoItem(req.body);
  } catch{
    res.status = 400;
    res.send("invalid item");
  }
  todo.add(newItem);
  res.status(201);
  res.send(newItem);
});


app.listen(8800, () => {
  console.log('server running');
})