import { makeExecutableSchema } from 'graphql-tools';
import { resolvers} from './resolvers';


const typeDefs = `
type Friend {
     id: ID
     firstName: String
     lastName: String
     gender: Gender
     language: String
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
}

type Query {
   getFriend(id: ID): Friend
   getWorkout(id: ID): Workout
}

input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
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

input WorkoutInput {
    id: ID
    name: String
    exercises: [ExerciseInput]
}

type Mutation {
    createFriend(input: FriendInput): Friend
    createWorkout(input: WorkoutInput): Workout
}

scalar  Date
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };