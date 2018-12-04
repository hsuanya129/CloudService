var express = require('express');
var router = express.Router();
var ideaController = require('../controllers/ideaController.js');

/*
 * GET
 */
router.get('/', ideaController.list);

/*
 * GET
 */
router.get('/:id', ideaController.show);

/*
 * POST
 */
router.post('/', ideaController.create);

/*
 * PUT
 */
router.put('/:id', ideaController.update);

/*
 * DELETE
 */
router.delete('/:id', ideaController.remove);

module.exports = router;
