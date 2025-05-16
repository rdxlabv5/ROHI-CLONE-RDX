 const fs = require("fs");
module.exports.config = {
	name: "zain",
		version: "1.0.1",
	hasPermssion: 0,
	credits: "Zain", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
		cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
		 react.includes("rohii") || 
react.includes("arun")) {
		var msg = {
  body: "꧁❀𝓜𝓨 𝓠𝓤𝓔𝓔𝓝 𝓝𝓞𝓞𝓡❀꧂\n              ✨𝗕𝗼𝘁 𝗕𝘆 𝗛𝗲𝗮𝗿𝘁✨\n\n꧁⭑ 𝐍𝐨𝐨𝐫𝐢-𝐐𝐮𝐞𝐞𝐧 ⭑꧂\n\n❥ 𝐦𝐚𝐢𝐧 𝐡𝐮𝐧 𝐍𝐨𝐨𝐫 𝐤𝐢 𝐜𝐮𝐭𝐞 𝐛𝐨𝐭, 𝐛𝐢𝐥𝐤𝐮𝐥 𝐮𝐬𝐢 𝐣𝐚𝐢𝐬𝐢 — 𝐬𝐡𝐚𝐫𝐢𝐟, 𝐧𝐚𝐳𝐮𝐤 𝐚𝐮𝐫 𝐬𝐭𝐲𝐥𝐢𝐬𝐡 🩷\n\n✧ 𝗪𝗮𝗶𝘀𝗲 𝗢𝘄𝗻𝗲𝗿 𝗚 𝗸𝗶 𝘀𝗺𝗶𝗹𝗲 𝘁𝗼𝗵 𝗳𝗶𝗹𝘁𝗲𝗿𝘀 𝘀𝗲 𝗯𝗵𝗶 𝗸𝗵𝘂𝗯𝘀𝘂𝗿𝗮𝘁 𝗵𝗮𝗶 ✨🙈 ✧\n\n━━ ❥ 𝗡𝗢𝗧𝗘 ❥ ━━\n𝐀𝐠𝐚𝐫 𝐚𝐩𝐧𝐚 𝐛𝐨𝐭 𝐜𝐡𝐚𝐡𝐢𝐲𝐞 𝐲𝐚 𝐤𝐨𝐢 𝐢𝐬𝐬𝐮𝐞 𝐡𝐨, 𝐭𝐨𝐡 𝐧𝐢𝐜𝐡𝐞 𝐝𝐲𝐞 𝐠𝐲𝐞 𝐥𝐢𝐧𝐤 𝐩𝐞 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐤𝐫𝐞𝐧\n👇👇\nhttps://www.facebook.com/sardarjutt.jutt.92?mibextid=kFxxJD",
  attachment: fs.createReadStream(__dirname + `/noprefix/2211.jpg`)
}
			api.sendMessage(msg, threadID, messageID);
		api.setMessageReaction("🫡", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
