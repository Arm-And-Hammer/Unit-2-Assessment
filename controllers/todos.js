const todos = require('../data/todos');

module.exports = {
    index,
    create,
    delete: deleteOne
}

function index(req, res) {
    res.render('index', {title: 'todos', todos});
}

function create(req, res) {
    todos.push(req.body.todo);
    res.render('index' , { todos , done: false })
    return (done ? ' - Not Done' : ' - Done');
}

function deleteOne(req, res) {
    todos.splice(req.params.id, 1);
    res.redirect('/');
}
