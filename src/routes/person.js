const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

router.get('/', async (req, res) => {
    try {
        const people = await Person.find();
        res.status(200).json(people);
    } catch (error) {
        res.status(400).json({ error });
    }
});


router.post('/', async (req, res) => {
    const person = new Person({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        dateOfBirth: req.body.dateOfBirth
    });

    try {
        const savedPerson = await person.save();
        res.status(201).json(savedPerson);
    } catch (error) {
        res.status(400).json({ error })
    }
});


router.get('/:personId', async (req, res) => {
    try {
        const people = await Person.findById(req.params.personId);
        res.status(200).json(people);
    } catch (error) {
        res.status(400).json({ error });
    }
})

router.delete('/:personId', async (req, res) => {
    try {
        const removedPerson = await Person.findOneAndDelete({ _id: req.params.personId });
        res.status(200).json(removedPerson);
    } catch (error) {
        res.status(400).json({ error });
    }
})

router.put('/:personId', async (req, res) => {
    try {
        const updatedPerson = await Person.findOneAndUpdate(req.params.personId, req.body);
        res.status(200).json(updatedPerson);
    } catch (error) {
        res.status(400).json({ error });
    }
})

module.exports = router;