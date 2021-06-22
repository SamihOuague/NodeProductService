const router = require('express').Router();
const { addProd, listProds, deleteProd, getProd, updateProd } = require("./Controller");
const { isAuth } = require("../utils/middleware");

router.post('/add', isAuth, addProd);
router.get('/list', listProds);
router.get('/prod/:id', getProd);
router.delete('/delete/:id', isAuth, deleteProd);
router.put('/update/:id', isAuth, updateProd);

module.exports = router;