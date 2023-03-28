import { MongoClient } from 'mongodb';

const user = process.env.MONGODB_USER;
const pass = process.env.MONGODB_PASS;
const cluster = process.env.MONGODB_CLUSTER;
const uri = `mongodb+srv://${user}:${pass}@${cluster}.qm5r2ur.mongodb.net/?retryWrites=true&w=majority`;
const options = {};
let clientPromise: Promise<MongoClient>
let client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;