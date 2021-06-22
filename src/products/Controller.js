const Model = require("./Model");

module.exports = {
    addProd: (req, res) => {
        const { title, describ, price, img } = req.body;
        if (title && describ && price && img) {
            let model = new Model({
                title,
                describ,
                price,
                img
            });
            model.save((err, product) => {
                if (err) console.log(err);
                res.json({ success: true, product });
            });
        } else
            res.send({ success: false });
    },
    getProd: (req, res) => {
        Model.find({_id: req.params.id}, (err, docs) => {
            if (err) res.send({err});
            else res.send({docs});
        });
    },
    listProds: (req, res) => {
        Model.find({}, (err, docs) => {
            if (err) { res.send(err); }
            else { res.send(docs); }
        });
    },
    updateProd: (req, res) => {
        const { title, describ, price, img } = req.body;
        if (title && describ && price && img) {
            Model.findOneAndUpdate({_id: req.params.id}, {title, describ, price, img}, (err, docs) => {
                if (err) res.send({err});
                else res.send({docs});
            });
        } else {
            res.send({ success: false });
        }
    },
    deleteProd: (req, res) => {
        Model.findOneAndDelete({_id: req.params.id}, (err, docs) => {
            if (err) res.send({err});
            else res.send({docs});
        });
    }
};