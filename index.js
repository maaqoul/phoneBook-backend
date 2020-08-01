require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const port = process.env.PORT
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
morgan.token('body', (req) => { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.static('build'))



app.get('/info', (req, res, next) => {
    Person
        .find()
        .then(people => res.send(`PhonBook has info for ${people.length} persons </br> ${new Date()}`))
        .catch(error => next(error))
})

app.get('/api/persons', (req, res, next) => {
    Person
        .find({})
        .then(people => res.json(people))
        .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    const { name, number } = req.body
    const person = new Person({ name, number })
    person
        .save()
        .then(person => res.json(person))
        .catch(error => next(error))
})

app.get('/api/persons/:personId', (req, res, next) => {
    const { personId } = req.params
    Person
        .findById(personId)
        .then(person => person ? res.json(person) : res.status(404).end())
        .catch(error => next(error))
})

app.put('/api/persons/:personId', (req, res, next) => {
    const { number, name } = req.body
    const { personId } = req.params
    Person
        .findByIdAndUpdate(personId, { number, name }, { new: true })
        .then(person => res.json(person))
        .catch(error => next(error))
})

app.delete('/api/persons/:personId', (req, res, next) => {
    const { personId } = req.params
    Person
        .findByIdAndRemove(personId)
        .then(() => res.status(204).end())
        .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
    console.log(error.message)

    if (error.name === 'CastErrors') {
        return response.status(400).send({ error: 'malformed id' })
    }

    if (error.name === 'ValidationError') {
        return response.status(400).send({ error: error.message })
    }

    next(error)
}
const unknownEndPoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndPoint)
app.use(errorHandler)


app.listen(port, () => console.log(`server listening on port : ${port}`))


