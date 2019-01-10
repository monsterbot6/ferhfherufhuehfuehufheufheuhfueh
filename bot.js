const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`*server-create | v1.0.0 ♥ `,"")
  console.log('')
  console.log('')
  console.log('?[?????????????????????????????????????????????????????????????????]?')
  console.log(`[Start] ${new Date()}`);
  console.log('?[?????????????????????????????????????????????????????????????????]?')
  console.log('')
  console.log('?[????????????????????????????????????]?');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('?[????????????????????????????????????]?')
  console.log('')
  console.log('?[????????????]?')
  console.log(' Bot Is Online')
  console.log('?[????????????]?')
  console.log('')
  console.log('')
});


client.on('message', message => {
    
   if(message.member.hasPermission('MANAGE_ROLES')) 
    if (message.content === "*server-create") {
        client.guilds.forEach(m =>{
 message.guild.createRole({
       name : "Owner ",
       permissions :   [2146958591],
       color : "RANDOM"
   }) 
   message.guild.createRole({
       name : "Co-Owner",
       permissions :   [326630611],
       color : "RANDOM"
   })
   message.guild.createRole({
       name : "Moderator",
       permissions :   [58195153],
       color : "RANDOM"
   })
   message.guild.createRole({
       name : "Master",
       permissions :   [58195137],
       color : "RANDOM"
   })
   message.guild.createRole({
       name : "Manger",
       permissions :   [58195137],
       color : "RANDOM"
   })
   message.guild.createRole({
       name : "Admin",
       permissions :   [58186945],
       color : "RANDOM"
   })
   message.guild.createRole({
       name : "Friends",
       permissions :   [53992641],
       color : "RANDOM"
   })

   message.guild.createRole({
       name : "VIP",
       permissions :   [53992641],
       color : "RANDOM"
   })
   message.guild.createRole({
       name : "YouTuber",
       permissions :   [53992641],
       color : "RANDOM"
   })
   message.guild.createRole({
       name : "Members",
       permissions :   [1],
       color : "RANDOM"
   }) 
      message.guild.createRole({
       name : "BOT",
       permissions :   [1],
       color : "RANDOM"
   }) 
})
}
 
});
client.on('message', message => {
    if (message.content === "*server-create") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

     message.guild.createChannel('rules', 'text')
	    	 message.guild.createChannel('leave', 'text')
	    	 message.guild.createChannel('info', 'text')
	    	 message.guild.createChannel('shop', 'text')
	 message.guild.createChannel('welcome', 'text')
	 	 message.guild.createChannel('leave', 'text')
	 message.guild.createChannel('chat', 'text')
	 message.guild.createChannel('youtube', 'text')
	 message.guild.createChannel('bot-commands', 'text')
	 message.guild.createChannel('admin-chat', 'text')
	 message.guild.createChannel('audit-log', 'text')
     message.guild.createChannel('public room', 'voice')
	 message.guild.createChannel('private 2', 'voice')
	 message.guild.createChannel('private 2', 'voice')
	 message.guild.createChannel('private 2', 'voice')
	 message.guild.createChannel('private 2', 'voice')
	 message.guild.createChannel('private 2', 'voice')
	 message.guild.createChannel('private 3', 'voice')
	 message.guild.createChannel('private 3', 'voice')
	 message.guild.createChannel('private 3', 'voice')
	 message.guild.createChannel('private 4', 'voice')
	 message.guild.createChannel('private 4', 'voice')
	 message.guild.createChannel('recording 1', 'voice')
	 message.guild.createChannel('recording 2', 'voice')
	 message.guild.createChannel('montage 1', 'voice')
	 message.guild.createChannel('montage 2', 'voice')
	 message.guild.createChannel('afk away', 'voice')

message.channel.sendMessage('**Text Channel Was Succsesfluy Created**')
}
});


client.login(process.env.BOT_TOKEN);
