const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {

    data: new SlashCommandBuilder()
    .setName("servername")
    .setDescription("Cambia el nombre del server")
    .addStringOption(data => data.setName('texto').setDescription('Escribe el nuevo nombre para el server.').setRequired(true)),

    async run(client, interaction){
try{
const texto = await interaction.options.getString('texto')


interaction.guild.setName(texto).catch(()=>{
    return;
})



}catch (e) {
        console.error(e);
        
        try {
          return;
         } catch (e) {}
        }
    }
}
