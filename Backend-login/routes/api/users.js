const router = require('express').Router();
const model = require('../../models');
const bcrypt = require('bcryptjs');
const { json } = require('body-parser');
const UserController = require('../../controllers/MiController.js')

//.com/api/auth/
router.get('/' , async (req, res) => {
        try{
            const users =  await model.user.findAll();
            res.status(200).json(users);
        }
        catch(e){
            console.log('error en bd 1',e);
        }
    });

//.com/api/auth/register/
router.post('/register' , async (req, res) => {
    try{
        req.body.password= bcrypt.hashSync(req.body.password,10);
        const users =  await model.user.create(req.body);
        res.status(200).json(users);
    }
    catch(e){
        console.log('error en bd 2',e);
    }
    });

//.com/api/auth/signin/
router.post('/signin', UserController.signin);

module.exports = router;
