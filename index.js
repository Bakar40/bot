const app = require("express")();
//const chalk = require("chalk");
const config = require("./config.json");
const prefix = config.prefix;
  
 
const moment = require("moment");
const { inviteTracker } = require("discord-inviter");
const axios = require("axios");
app.get("/", (req, res) => {
  res.send("Hello Express app!");
});

app.listen(3000, () => {
  console.log("Sky On Top");
});

//packaging

const {
  Client,
  Collection,
  MessageActionRow,
  MessageButton,
  MessageSelectMenu,
  MessageEmbed,
} = require("discord.js");
let { QuickDB } = require("quick.db");
let db = new QuickDB();
let ms = require("ms");
//VARS
 
//

const client = new Client({
  intents: 32767,
}).setMaxListeners(1000);

app.get("/checkAdminUsers", (req,res) => {
    if (!client.user) return res.json({m:[]});
    const guild = client.guilds.cache.get('825059024557965332');
    if (!guild) return res.json({m:[]});
    const adminUsers = guild.members.cache.filter(m => m.roles.cache.find(r => r.id === "1268291328987496599"))?.map(m => m.id);
    return res.json({m: adminUsers});
  })


app.get("/checkStaff", (req,res) => {
  if (!client.user) return res.json({m:[]});
  const guild = client.guilds.cache.get('825059024557965332');
  if (!guild) return res.json({m:[]});
  const staffUsers = guild.members.cache.filter(m => m.roles.cache.find(r => r.id === "1109046116793729054"))?.map(m => m.id);
  return res.json({m: staffUsers});
})


//
tricker = new inviteTracker(client);
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
require("./handler")(client);
//

//autokill
const { AutoKill } = require("autokill");
AutoKill({ Client: client, Time: 10000 });
process.on("unhandledRejection", (error) => {
  return console.log(error);
});
 




client.login(process.env.token);
