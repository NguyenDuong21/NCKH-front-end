const express = require('express');
const crudController = require('../controllers/crud-controller');
let router = express.Router();

router.get("/", crudController.index);
router.post("/", crudController.login);
router.get("/home", crudController.adminPage);

router.get("/roles", crudController.getRoles);
router.get("/create", crudController.create);
router.get('/edit', crudController.edit);
router.get('/delete', crudController.delete);
router.get('/fetch', crudController.fetch);

module.exports = router;