const router = require('express').Router();
const { addProd, listProds, deleteProd } = require("./Controller");

router.post('/add', addProd);
router.get('/list', listProds);
router.delete('/delete/:id', deleteProd);

module.exports = router;
