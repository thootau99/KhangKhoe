import MongoClient from 'mongodb'
export const TODO_DATABASE = "TODOList"
export class MongoGO {
  constructor() {
    this.USERNAME = process.env.USERNAME || 'root'
    this.PASSWORD = process.env.PASSWORD || 'example'
    this.HOST_IP = process.env.HOST_IP
    this.DATABASE_URL = `mongodb://${this.USERNAME}:${this.PASSWORD}@${this.HOST_IP}:28017`
  }
  async insert (database, path, data) {
    const connectWithDB = await MongoClient.connect(this.DATABASE_URL)
    const databaseInterface = connectWithDB.db(database)
    const collection = databaseInterface.collection(path)
    return await collection.insertOne(data)
  }
  async find (database, path, data={}) {
    const connectWithDB = await MongoClient.connect(this.DATABASE_URL)
    const databaseInterface = connectWithDB.db(database)
    const collection = databaseInterface.collection(path)
    const result = await collection.find(data).toArray()
    console.log(result)
    return await collection.find(data).toArray()
  }
}