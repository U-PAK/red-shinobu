const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {
    timeout: 60000,
    data: new SlashCommandBuilder()
    .setName("finish")
    .setDescription("I will see you soon"),
    
    async run(client, interaction){
try{

interaction.reply("**Bye Bitch**")
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
