var Todo = require("../models/todo");

function index(req, res) {
  res.render("index", {
    todos: Todo.getAll(),
  });
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect("/");
}

function create(req, res) {
  console.log("req.body", req.body);
  req.body.done = false;
  Todo.create(req.body);
  res.redirect("/");
}

module.exports = {
  index,
  create,
  delete: deleteTodo,
};
