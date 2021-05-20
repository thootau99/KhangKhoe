import {MongoGO, TODO_DATABASE} from '../mongogo.js'
const client = new MongoGO()

export const createTodoForId = (id, content) => {
  const message = {message: content}
  client.insert(TODO_DATABASE, id, message)
}