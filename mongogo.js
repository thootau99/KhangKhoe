import MongoClient from 'mongodb'

export class MongoGO {
  constructor() {
    this.USERNAME = process.env.USERNAME || 'root'
    this.PASSWORD = process.env.PASSWORD || 'example'
    this.HOST_IP = process.env.HOST_IP
    this.DATABASE_URL = `mongodb://${this.USERNAME}:${this.PASSWORD}@${this.HOST_IP}:28017`
  }
  insert (database, path, data) {
    MongoClient.connect(this.DATABASE_URL, (err, client) => {
      if (err) throw err;
      const db = client.db(database)
      db.collection(path).insertOne(data).then(doc => console.log(`${doc} inserted`))
      client.close();
    })
  }

}