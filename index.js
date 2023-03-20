const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
require('dotenv').config();
const chalk = require('chalk');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages ] });
const fs = require('node:fs');
const path = require('node:path');
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
/*.

If you have questions, do not hesitate to contact me!
USER#TAG(Impre𐤉#4720)
USERID(1077774033271144518)

*/
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    }
    else {
        console.log(`${chalk.yellow('[WARNING]')} The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}
client.once(Events.ClientReady, c => {
    console.log(` ${chalk.greenBright('Ready')} Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    }
    catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});
client.login(process.env.BOT_TOKEN);
