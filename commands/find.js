import {MongoGO, TODO_DATABASE} from '../mongogo.js'
const client = new MongoGO()

export const findAllTodosForId = async (id) => {
  const result = await client.find(TODO_DATABASE, id)
  return result
}