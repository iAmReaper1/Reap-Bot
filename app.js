
var Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require('fs');
var profanities = require('profanities')
const prefix = '::';



//calling userdata file
var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));
var commandsList = fs.readFileSync('Storage/commands.txt', 'utf8');


//Functions
function userInfo(user) {
  var finalString = '';

//Name.
finalString += '**' + user.username + '**, with the **ID** of **' + user.id + '**';

//Created at date
var userCreated = user.createdAt.toString().split(' ');
finalString += ', was **created on ' + userCreated[1] + ' ' + userCreated[2] + ', ' + userCreated[3] + '**.'

//Messages Sent.
finalString += 'Since then, they have **sent ' + userData[user.id].messagesSent + ' messages** to this discord server.'

  return finalString;
}

bot.on('message', message => {

    let msg = message.content.toUpperCase();
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    var sender = message.author;


    //profanities
    for (x = 0; x < profanities.length; x++) {
      if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
          message.channel.send('Hey! Dont say that!')
          message.delete();
          return;
      }
    }

    //Making it so the bot wont delete ist own words
    if (sender.id === '429364304047767552') {
      return;
    }


//help command
if (msg === prefix + 'HELP' || msg === prefix + 'COMMANDS') {
  message.delete();
  message.author.send(commandsList)
}

    //Ping pong command
    if (msg === prefix + 'PING') {

      message.channel.send({embed:{
          title:"Ping!",
          description:"Pong!",
          color: 0xFF0000
      }})
    }

    //cheat update
    if (msg === prefix + 'UPDATE') {
        message.delete();
        message.channel.send('@everyone A new updated version of the cheat has been released!! Check it out in x77cheats-releases')
    }

    //PURGE COMMAND
    if (msg.startsWith(prefix + 'PURGE')) {
        message.delete();
        async function purge() {
            message.delete();

            if (!message.member.roles.find("name", "bot-commander")) {
                message.channel.send('You need the \`bot-commander\` role to use this command.');
                return;
            }
            if (isNaN(args[0])) {
              message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <ammount>');
              return;
            }
            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' messages found, deleting...');

            message.channel.bulkDelete(fetched)
                  .catch(error => message.channel.send(`Error: ${error}`));
        }
        purge();
    }

    //SiegHeil command
    if (msg === prefix + 'SIEGHEIL') {
      message.delete();
      message.channel.send('Heil Hitler! 卍')
    }

    //Deleting specific messages in a certain channel
    if (message.channel.id === '') {
      if (isNaN(message.content)) {
          message.delete()
          message.author.send('This is an invalid character only use number')
        }
    }

    //This is the coee that removes banned words
    if (msg.includes('FUCK')) {
      message.delete();
      message.author.send('The word **Fuck** is banned sooo dont use it')
    }

    //userstats command
    if (msg.startsWith(prefix + 'USERINFO')) {

        if (msg === prefix + 'USERINFO') {
          message.channel.send(userInfo(sender));
        }
    }

    //makes sure there username is there before writing the
    if (!userData[sender.id]) userData[sender.id] = {
      messagesSent: 0
    }

    //increases the messagesSent and writes to the final file
    userData[sender.id].messagesSent++;

    // this saves the file.
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);// makes console lof for errors.
    })

    //makes sure there username is there before writing the
    if (!userData[sender.id]) userData[sender.id] = {
      messagesSent: 0
    }

    //increases the messagesSent and writes to the final file
    userData[sender.id].messagesSent++;

    // this saves the file.
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);// makes console lof for errors.
    })

    //makes sure there username is there before writing the
    if (!userData[sender.id]) userData[sender.id] = {
      messagesSent: 0
    }

    //increases the messagesSent and writes to the final file
    userData[sender.id].messagesSent++;

    // this saves the file.
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);// makes console lof for errors.
    })

    //makes sure there username is there before writing the
    if (!userData[sender.id]) userData[sender.id] = {
      messagesSent: 0
    }

    //increases the messagesSent and writes to the final file
    userData[sender.id].messagesSent++;

    // this saves the file.
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);// makes console lof for errors.
    })

    //makes sure there username is there before writing the
    if (!userData[sender.id]) userData[sender.id] = {
      messagesSent: 0
    }

    //increases the messagesSent and writes to the final file
    userData[sender.id].messagesSent++;

    // this saves the file.
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);// makes console lof for errors.
    })

    //makes sure there username is there before writing the
    if (!userData[sender.id]) userData[sender.id] = {
      messagesSent: 0
    }

    //increases the messagesSent and writes to the final file
    userData[sender.id].messagesSent++;

    // this saves the file.
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);// makes console lof for errors.
    })

    //makes sure there username is there before writing the
    if (!userData[sender.id]) userData[sender.id] = {
      messagesSent: 0
    }

    //increases the messagesSent and writes to the final file
    userData[sender.id].messagesSent++;

    // this saves the file.
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);// makes console lof for errors.
    })

    //makes sure there username is there before writing the
    if (!userData[sender.id]) userData[sender.id] = {
      messagesSent: 0
    }

    //increases the messagesSent and writes to the final file
    userData[sender.id].messagesSent++;

    // this saves the file.
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);// makes console lof for errors.
    })

    //makes sure there username is there before writing the
    if (!userData[sender.id]) userData[sender.id] = {
      messagesSent: 0
    }

    //increases the messagesSent and writes to the final file
    userData[sender.id].messagesSent++;

    // this saves the file.
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);// makes console lof for errors.
    })

    //makes sure there username is there before writing the
    if (!userData[sender.id]) userData[sender.id] = {
      messagesSent: 0
    }

    //increases the messagesSent and writes to the final file
    userData[sender.id].messagesSent++;

    // this saves the file.
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);// makes console lof for errors.
    })

});

// Bot login message in console
bot.on('ready', () => {
    console.log('Reap-Bot has been launched...')//THis is the message that is desplayed in the console when the bot is started

    //Status/Game/Stream for the Bot

    //Status
    bot.user.setStatus('Online')

    //Game & Streaming
    bot.user.setGame('With Ya Mum')

    });

    //listens for when someone joins the server
    bot.on('guildMemberAdd', member =>{

      console.log('User ' + member.user.username + ' has joined the server!')
      console.log(member)
      //Adds role when they join
      var role = member.guild.roles.find('name', 'User');

      //This adds the roles
      member.addRole(role)

      //Sends a message when someome joins the server
      member.guild.channels.get('').send('**' + member.user.username + '**, has joined the server');


    });

    //When someone leaves this sends the message



    bot.on('guildMemberRemove', member => {


      member.guild.channels.get('').send('**' + member.user.username + '**, has left the server');

    })



//This is how the bot logs on
bot.login(process.env.TOKEN);
