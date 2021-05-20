import {Client, MessageEmbed} from 'discord.js'
import {MongoGO} from './mongogo.js'
const client = new Client();
const TOKEN = process.env.BOT_TOKEN
const db = new MongoGO();
let ID = ""
client.on("ready", () => {
  console.log("I'm ready!!")
  ID = client.user.id
})

client.on("message", (message) => {
  // Your bot on message code goes to here.
  // db.insert("dc", message.author.id, {message: message.content})
  if (message.content.startsWith('!')) {
    const command = message.content.split('!')[1]
    const embed = new MessageEmbed()
      .setTitle(`You used the ${command} command`)
      .setColor(0xff0000)
      .setDescription("This is what the command you used")
    if (command === 'create') {}
    else if (command === 'remove') {}
    message.channel.send(embed)
  }
});

client.login(TOKEN)