const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {

    data: new SlashCommandBuilder()
    .setName("servericon")
    .setDescription("Cambia el icono del server")
    .addStringOption(data => data.setName('link').setDescription('Coloca el link de la imagen que deseas poner. Ej: (https://cool-link.png)').setRequired(true)),

    async run(client, interaction){
try{

    const link = await interaction.options.getString('link')
    interaction.guild.setIcon(link).catch(()=>{
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
