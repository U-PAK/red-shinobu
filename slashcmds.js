const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guild } = require("./config.json")
const { readdirSync } = require('fs')
const commands = []
const fs = require('fs')

const slashcommandsFiles = fs.readdirSync(`./slashcmd/cmds/`).filter(file => file.endsWith("js"))

for(const file of slashcommandsFiles){
    const slash = require(`./slashcmd/cmds/${file}`)
    commands.push(slash.data.toJSON())

}

const rest = new REST({ version: "9"}).setToken(require('./config.json').token)

createSlash()

async function createSlash(){
    try {
        await rest.put(
            Routes.applicationCommands(clientId),{
                body: commands
            }
            
        )
        console.log("Slash Commnads agregados. ")
    } catch (e) {
        console.error(e)
    
    }

}
