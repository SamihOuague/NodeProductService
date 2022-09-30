const router = require('express').Router();
const { 
    mainPage, 
    addCategory, 
    addSubCategory, 
    listCategories, 
    addProduct, 
    deleteSubCat, 
    deleteCategory,
    deleteProduct,
} = require("./Controller");

router.get('/', mainPage);
router.get('/categories', listCategories);
router.post('/', addProduct);
router.post('/category', addCategory);
router.post('/category/:name', addSubCategory);
router.delete('/category', deleteCategory);
router.delete('/category/:name', deleteSubCat)
router.delete('/', deleteProduct);

module.exports = router;