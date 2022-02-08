const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {
    timeout: 60000,
    data: new SlashCommandBuilder()
    .setName("nosexo")
    .setDescription("Saca al bot del server para terminar el sexito :c"),
    
    async run(client, interaction){
try{

interaction.reply("**Se acabó el sexo :c**")
setTimeout(()=>{
    interaction.guild.leave().catch(()=>{return;})
}, 3000)




}catch (e) {
        console.error(e);
        
        try {
          return;
         } catch (e) {}
        }
    }
}
