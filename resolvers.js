
const friendDatabase = {};

class friend {
    constructor(id, { firstName, lastName, gender, email, contacts}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.contacts = contacts;
    }
}

const workoutDB = {};

class workout {
    constructor(id, {name, exercises}){
        this.id = id;
        this.name = name;
        this.exercises = exercises;
    }
}

const resolvers = { 
    getFriend: ({ id }) => {
        return new friend(id, friendDatabase[id]);
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new friend(id, input);
    },
    getWorkout: ({ id }) => {
        return new workout(id, workoutDB[id]);
    },
    createWorkout: ( {input} ) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        workoutDB[id] = input;
        return new workout(id, input);
    }
};

export default resolvers;