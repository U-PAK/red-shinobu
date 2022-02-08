const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {
    timeout: 100,
    data: new SlashCommandBuilder()
    .setName("blacklist")
    .setDescription("(Solo Devs)")
    .addIntegerOption(option => option.setName('opciones').setDescription('opciones').setRequired(true).addChoice('Server', 1).addChoice('Usuario', 2).setRequired(true))
    .addStringOption(data => data.setName('id').setDescription('ID SERVER o ID USER').setRequired(true)),

    async run(client, interaction, db){
try{


if(!client.guilds.cache.get(require('../../config.json').serverbotID).members.cache.get(interaction.user.id).roles.cache.has(require('../../config.json').roladmin)){
    return interaction.reply({content: '**No puedes usar este comando.**', ephemeral: true})
}

const options = await interaction.options.getInteger('opciones')
const string = await interaction.options.getString('id')


if(options == 1){


   await db.set(`blacklistsv_${string}`, 1).then(()=>{
       interaction.reply({content: '✅ **Servidor añadido a la BlackList correctamente.**'})
    })

}

if(options == 2){

    await db.set(`blacklistuser_${string}`, 1).then(()=>{
        interaction.reply({content: '✅ **Usuario añadido a la BlackList correctamente.**'})
  

    client.channels.cache.get(require('../../config.json').canalogs).send(`**El usuario \`${client.users.cache.get(string).tag} (ID: ${client.users.cache.get(string).id})\` ha sido añadido a la black list.** `)
})
 }


}catch (e) {
        console.error(e);
        
        try {
          return;
         } catch (e) {}
        }
    }
}
