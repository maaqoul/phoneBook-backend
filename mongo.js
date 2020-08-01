const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Pleas provide a password as an argument : node mongo.js <password>')
}
const password = process.argv[2]

const url = `mongodb+srv://hicham_admin:${password}@cluster0.kp7y3.mongodb.net/phone-book?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

const name = process.argv[3]
const number = process.argv[4]

if (name || number) {
    const person = new Person({ name, number })
    person.save().then(() => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
} else {
    Person.find({}).then(people => {
        console.log('phonebook: ')
        people.forEach(({ name, number }) => console.log(name, number))
        mongoose.connection.close()
    })
}