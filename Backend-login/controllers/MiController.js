const models = require('../models');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

exports.signin = async (req, res, next) => {
    try {
        const user = await models.user.findOne(
            { where: { email: req.body.email } });
        if (user) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
            if (passwordIsValid) {
                const token = jwt.sign({
                    id: user.id,
                    nombre: user.nombre,
                    rol: user.rol,
                    email: user.email
                }, 'cadena secreta',
                    { expiresIn: 86400 });

                res.status(200).send({
                    auth: true, accessToken: token, user: user
                });
            } else {
                res.status(401).send({ auth: false, accessToken: null, reason:
                    "Invalid Password!" });
            }
        } else {
            res.status(404).send('User Not Found.');
        }
    } catch (e) {
        res.status(500).json({ message: 'Error!!!!' });
        next('error en login', e);
    }
};