
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


const resolvers = { 
    getFriend: ({ id }) => {
        return new friend(id, friendDatabase[id]);
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

export default resolvers;