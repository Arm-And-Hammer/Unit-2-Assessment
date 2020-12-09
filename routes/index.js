var express = require('express');
var todosCtrl = require('../controllers/todos');
var router = express.Router();

/* GET home page. */
router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);
router.delete('/:id', todosCtrl.delete);

module.exports = router;
