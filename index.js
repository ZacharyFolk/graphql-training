import express from "express";
import schema from './schema';
import { graphqlHTTP } from 'express-graphql'

const app = express();

app.get('/', (req, res) => {
    res.send('Sending a response!');
});

// fake db for now

const friendDatabase = {};

class friend {
    constructor(id, { firstName, lastName, gender, email}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
}


const root = { 
    friend: () => {
        return {
            "id" : 3433434343,
            "firstName": "Zac",
            "lastName": "Folk",
            "gender": "Male",
            "email": "zacharyfolk@gmail.com"
        }
    },

    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new friend(id, input);
    },
    
    exercise: () => {
        return {
            "id": 1234,
            "name" : "pushups",
            "reps" : 3,
            "weight" : 30

        }
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));