import { buildSchema } from 'graphql';

const schema = buildSchema(`
type Friend {
     id: ID
     firstName: String
     lastName: String
     gender: Gender
     email: String
     contacts: [Contact]
}

type Contact {
    firstName: String
    lastName: String
}

enum Gender {
    MALE
    FEMALE
    OTHER
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
    exercises: [Exercise]
    date: Date
}

type Query {
   getFriend(id: ID): Friend
}

input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        email: String
        contacts: [ContactInput]
}

input ContactInput {
    firstName: String
    lastName: String
}

input ExerciseInput {
    id: ID
    name: String!
    reps: Int
    weight: Int
    duration: Int
}

type Mutation {
    createFriend(input: FriendInput): Friend
}

scalar  Date
`)

export default schema;