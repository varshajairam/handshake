const express = require('express');

const router = express.Router();

const Student = require('../../models/student');
const Education = require('../../models/education');

router.get('/details', async (req, res) => {
    try {
        const basicDetails = await Student.findOne({
            where: {
                student_id: req.student_id,
            },
        });
        if (basicDetails) {
            return res.status(200).json(basicDetails);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/details', async (req, res) => {
    try {
        const basicDetails = await Student.findOne({
            where: {
                student_id: req.student_id,
            },
        });
        if (basicDetails) {
            return res.status(200).json(basicDetails);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.get('/objective', async (req, res) => {
    try {
        const objective = await Student.findOne({
            where: {
                student_id: req.student_id,
            },
        });
        if (objective) {
            return res.status(200).json(objective);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/objective', async (req, res) => {
    try {
        const objective = await Student.findOne({
            where: {
                student_id: req.student_id,
            },
        });
        if (objective) {
            return res.status(200).json(objective);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.get('/education', async (req, res) => {
    try {
        const education = await Education.findAll({
            where: {
                student_id: req.query.student_id,
            },
        });
        if (education) {
            return res.status(200).json(education);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/education', async (req, res) => {
    try {
        const education = req.body;
        // let educationEntry = await Education.findOne({
        //     where: {
        //         student_id: req.student_id,
        //     },
        // });
        // if (educationEntry) {
        //     return res.status(404).send('');
        // }
        const educationEntry = new Education({
            ...education,
        });
        await educationEntry.save();
        res.status(200).json('Successful');
    } catch (e) {
        return res.status(500).json('Unable to save data.');
    }
});

router.get('/experience', async (req, res) => {
    try {
        const experience = await Student.findOne({
            where: {
                student_id: req.student_id,
            },
        });
        if (experience) {
            return res.status(200).json(experience);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/experience', async (req, res) => {
    try {
        const experience = await Student.findOne({
            where: {
                student_id: req.student_id,
            },
        });
        if (experience) {
            return res.status(200).json(experience);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.get('/skillset', async (req, res) => {
    try {
        const skillset = await Student.findOne({
            where: {
                student_id: req.student_id,
            },
        });
        if (skillset) {
            return res.status(200).json(skillset);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/skillset', async (req, res) => {
    try {
        const skillset = await Student.findOne({
            where: {
                student_id: req.student_id,
            },
        });
        if (skillset) {
            return res.status(200).json(skillset);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.get('/profilepic', async (req, res) => {
    try {
        const profilepic = await Student.findOne({
            where: {
                student_id: req.student_id,
            },
        });
        if (profilepic) {
            return res.status(200).json(profilepic);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.post('/profilepic', async (req, res) => {
    try {
        const profilepic = await Student.findOne({
            where: {
                student_id: req.student_id,
            },
        });
        if (profilepic) {
            return res.status(200).json(profilepic);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

router.get('/contactInfo', async (req, res) => {
    try {
        const contactInfo = await Student.findOne({
            where: {
                student_id: req.student_id,
            },
        });
        if (contactInfo) {
            return res.status(200).json(contactInfo);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});


router.post('/contactInfo', async (req, res) => {
    try {
        const contactInfo = await Student.findOne({
            where: {
                student_id: req.student_id,
            },
        });
        if (contactInfo) {
            return res.status(200).json(contactInfo);
        }
    } catch (e) {
        return res.status(500).json('Unable to fetch data.');
    }
});

module.exports = router;
