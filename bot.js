import {Client, MessageEmbed} from 'discord.js'
import {createTodoForId} from './commands/create.js'
import {findAllTodosForId} from './commands/find.js'
const client = new Client();
const TOKEN = process.env.BOT_TOKEN
let ID = ""
client.on("ready", () => {
  console.log("I'm ready!!")
  ID = client.user.id
})

client.on("message", async (message) => {
  // Your bot on message code goes to here.
  createTodoForId(message.author.id, message.content)
  if (message.content.startsWith('!')) {
    const command = message.content.split('!')[1]
    const embed = new MessageEmbed()
    if (command === 'find') {
      const found = await findAllTodosForId(message.author.id)
      embed.addFields(found.map(foundRecord => {
        return {name: 'normal', value: foundRecord.message}
      }))
      message.channel.send(embed)
      message.channel.send(JSON.stringify(found))
    }
    else if (command === 'remove') {}
  }
});

client.login(TOKEN)