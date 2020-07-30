const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 3001;

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "023156654",
        id: 3
    },
    {
        name: "Mary Poppendieck ",
        number: "3212312313654",
        id: 4
    }
];
app.use(cors());
app.use(express.json());
morgan.token('body', (req, res) => { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(express.static('build'))
function generateId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

app.get('/info', (req, res) => {
    res.send(`PhonBook has info for ${persons.length} persons </br> ${new Date()}`)
});

app.get('/api/persons', (req, res) => {
    res.json(persons)
});

app.post('/api/persons', (req, res) => {
    const { name, number } = req.body;
    if (name && number) {
        const foundPerson = persons.find(person => {
            return person.name === name
        });
        if (!foundPerson) {
            const newPerson = {
                name: name,
                number: number,
                id: generateId(10)
            }
            persons.push(newPerson);
            res.json(newPerson)
        } else {
            res.status(400).json({
                error: 'name must be unique'
            })
        }
    } else {
        res.status(400).json({
            error: 'name or number missing'
        })
    }
});

app.get('/api/persons/:personId', (req, res) => {
    const { personId } = req.params;
    const person = persons.find(person => person.id === Number(personId));
    if (person) {
        res.json(person);
    } else {
        res.status(404).end()
    }
})


app.delete('/api/persons/:personId', (req, res) => {
    const { personId } = req.params;
    persons = persons.filter(person => person.id !== Number(personId));
    res.status(204).end()
})

app.listen(port, () => console.log(`server listening on port : ${port}`));


