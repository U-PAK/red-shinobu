const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {
    timeout: 4000,
    data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Obtén una invitación del bot para añadir en un servidor."),

    async run(client, interaction){
try{



}catch (e) {
        console.error(e);
        
        try {
          return;
         } catch (e) {}
        }
    }
}
