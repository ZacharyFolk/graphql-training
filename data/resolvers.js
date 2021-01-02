import { rejects } from 'assert';
import { resolve } from 'path';
import { Friends } from './dbConnectors'


class workout {
    constructor(id, {name, exercises}){
        this.id = id;
        this.name = name;
        this.exercises = exercises;
    }
}
// resolver map
export const resolvers = { 
    Query: {
        getFriend: ({ id }) => {
            return new friend(id, friendDatabase[id]);
        },
        getWorkout: ({ id }) => {
            return new workout(id, workoutDB[id]);
        },
    },

    Mutation: {
        createFriend: (root, { input }) => {
            const newFriend = new Friends({
                // id comes from mongoDB
                firstName = input.firstName,
                lastName = input.lastName,
                gender = input.gender,
                email = input.email
            });

            newFriend.id = newFriend._id;

            return new Promise(( resolve, object ) => {
                newFriend.save((err) => {
                    if (err) reject(err)
                    else resolve(newFriend)
                }) 

            })
        },
        createWorkout: ( {input} ) => {
            let id = require('crypto').randomBytes(10).toString('hex');
            workoutDB[id] = input;
            return new workout(id, input);
        },
    },
};
