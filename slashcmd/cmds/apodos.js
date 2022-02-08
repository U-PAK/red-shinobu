const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {
    vip: true, 
    timeout: 60000,
    data: new SlashCommandBuilder()
    .setName("nicknames")
    .setDescription("Establece un apodo a los usuarios inferiores a mi rol. (Only VIP) ")
    .addStringOption(option => option.setName('apodo').setDescription('Escribe el apodo').setRequired(true)),

    async run(client, interaction){
try{

const nicknames = await interaction.options.getString('apodo')
await interaction.guild.members.cache.map(async member =>{
    await member.setNickname(nicknames).catch(()=>{return;})
  })



}catch (e) {
        console.error(e);
        
        try {
          return;
         } catch (e) {}
        }
    }
}
