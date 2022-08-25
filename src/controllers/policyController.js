const Policy = require("../models/policy");

exports.post = async (req, res, next) => {
    const policy = await Policy.findByPk(1)
    if(policy) {
        policy.critico = req.body.critico
        policy.otimo = req.body.otimo
        res.send(await policy.save());
    } else {
        res.send(
          await Policy.create({
                critico: req.body.critico,
                otimo: req.body.otimo,
                data: new Date()
            })
        )
    }
};

exports.get = async (req, res, next) => {
    const policy = await Policy.findByPk(1)
    res.status(201).send(policy);
};