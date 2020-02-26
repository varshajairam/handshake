const express = require('express');

const router = express.Router();

const Student = require('../../models/student');

router.post('/login', async (req, res) => {
    try {
        const {email_id, password} = req.body;
        const userStudent = await Student.findOne({
            where: {
                email_id: email_id,
                password: password,
            },
        });
        if (userStudent) {
            return res.status(200).json('Successful');
        }
        return res.status(422).json('Invalid credentials. Please try again.');
    } catch (e) {
        return res.status(500).json('Unable to log in. Please try again.');
    }
});

router.post('/signup', async (req, res) => {
    try {
        if (req.body.entity === 'student') {
            const student = req.body;
            let userStudent = await Student.findOne({
                where: {
                    email_id: student.email_id,
                },
            });
            if (userStudent) {
                return res.status(404).send('Email already exists! Please sign in or create a new account.');
            }
            userStudent = new Student({
                ...student,
            });
            await userStudent.save();
            res.status(200).json('Successful');
        }
    } catch (e) {
        return res.status(500).json('Unable to sign up. Please try again.');
    }
});

module.exports = router;
