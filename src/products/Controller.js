const { CategoriesModel, ProductModel } = require("./Model");

module.exports = {
    mainPage: async (req, res) => {
        const prods = await ProductModel.find({});
        const cat = await CategoriesModel.find({});
        return res.send({prods, cat});
    },
    addProduct: async (req, res) => {
        const { title, weight, categoryTag, price } = req.body;
        if (!(title && weight && categoryTag && price)) return res.sendStatus(400);
        let prod = new ProductModel({
            title,
            weight,
            categoryTag,
            price,
        });
        await prod.save();
        return res.status(201).send(prod);
    },
    deleteProduct: async (req, res) => {
        const { name } = req.body;
        if (!name) return res.sendStatus(400);
        let prod = await ProductModel.findOneAndDelete({title: name});
        return res.status(200).send(prod);
    },
    deleteSubCat: async (req, res) => {
        if (!req.body.name || !req.params.name) return res.sendStatus(400);
        let cat = await CategoriesModel.findOne({category: {
            $regex: new RegExp("^" + req.params.name.replace("-", " ").toLowerCase(), "i"),
        }});
        if (!cat) return res.sendStatus(404);
        cat.subcategory = cat.subcategory.filter((value) => {
            return value.name !== req.body.name;
        });
        await cat.save();
        return res.status(200).send(cat);
    },
    deleteCategory: async (req, res) => {
        if (!req.body.name) return res.sendStatus(400);
        let deletedCat = await CategoriesModel.findOneAndDelete({category: req.body.name});
        if (!deletedCat) return res.sendStatus(404);
        return res.send(deletedCat);
    },
    addCategory: async (req, res) => {
        if (!req.body.name) return res.sendStatus(400);
        let exist = await CategoriesModel.findOne({category: req.body.name});
        if (exist) return res.sendStatus(400);
        let cat = new CategoriesModel({
            category: req.body.name
        });
        await cat.save();
        return res.status(201).send(cat);
    },
    addSubCategory: async (req, res) => {
        if (!req.params.name || !req.body.name) return res.sendStatus(400);
        let cat = await CategoriesModel.findOne({category: {
            $regex: new RegExp("^" + req.params.name.replace("-", " ").toLowerCase(), "i"),
        }});
        if (!cat) return res.sendStatus(404);
        cat.subcategory.push({name: req.body.name});
        await cat.save();
        return res.status(201).send(cat);
    },
    listCategories: async (req, res) => {
        const cat = await CategoriesModel.find({});
        return res.send(cat);
    }
};