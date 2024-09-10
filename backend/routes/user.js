import router from "express"
const userRoute = router();
import userSignupValidationSchema from "../zod/validation.js"
import User from "../db/model.js"

userRoute.post('/', async (req, res) => {
    const { data } = userSignupValidationSchema.safeParse(req.body);

    if (!data) {
        return res.status(411).json({
            msg: "Fill all data/ Incorrect data type"
        });
    }

    const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        college: req.body.college,
        year: req.body.year
    })

    res.json({
        user
    })

});

export default userRoute


/*
const crypto = require('crypto');
const User = require('../models/users.models');
const {
    userSignupValidationSchema,
    userSigninValidationSchema
} = require('../lib/validators/users.validators');
const JWT = require('jsonwebtoken');

async function handleGetAllUsers(req, res) {
    const { token } = req.body;
    const payload = JWT.verify(token, '$tudyTr!gger@2021');
    console.log("payload");
    console.log(payload);
    if (payload.role !== 'admin')
        return res.status(403).json({ "error": "You are not allowed" });

    const users = await User.find({});
    return res.json({ users });
}

async function handleGetCurrentUser(req, res) {
    const { token } = req.body;
    const payload = JWT.verify(token, '$tudyTr!gger@2021');
    return res.status(200).json({ message: `Hey You are ${payload.email}` })
}

async function handleUserSignUp(req, res) {
    //const body=req.body;
    const validationResult = await userSignupValidationSchema.safeParseAsync(req.body);

    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error });
    }

    const { firstName, lastName, email, password } = validationResult.data;

    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.createHmac('sha256', salt).update(password).digest('hex');

    console.log("Salt is ", salt);
    console.log("Hash is ", hash);
    console.log(validationResult.data);
    try {
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hash,
            salt,
        });

        return res.status(201).json({ data: { id: user._id } });
    } catch (err) {
        if (err.code === 11000) return res.status(400).json({ error: err.message });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function handleUserSignIn(req, res) {
    const validationResult = await userSigninValidationSchema.safeParseAsync(req.body);

    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error });
    }

    const { email, password } = validationResult.data;

    const userInDB = await User.findOne({ email: email });

    if (!userInDB) return res.status(404).json({ error: 'User not found' });

    const hash = crypto.createHmac('sha256', userInDB.salt).update(password).digest('hex');

    if (hash !== userInDB.password) return res.status(400).json({ error: 'Invalid password' });

    const token = JWT.sign({ id: userInDB._id, email: userInDB.email, role: userInDB.role ?? 'user' }, '$tudyTr!gger@2021'); //Payload

    return res.json({ message: `success in sign in for ${userInDB.firstName}`, token });

}

module.exports = { handleGetAllUsers, handleUserSignUp, handleUserSignIn, handleGetCurrentUser };
*/