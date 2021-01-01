import { buildSchema } from 'graphql';

const schema = buildSchema(`
type Friend {
     id: ID
     firstName: String
     lastName: String
     gender: String
     email: String
}

type Email {
    email: String
}

type Exercise {
    id: ID
    name: String!
    reps: Int
    weight: Int
    duration: Int
}

type Workout {
    id: ID
    name: String
    exercises: [Exercise]!
    date: Date
}

type Query {
    friend: Friend
    exercise: Exercise
}

input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: String
        email: String
}

type Mutation {
    createFriend(input: FriendInput): Friend
}

scalar  Date
`)

export default schema;