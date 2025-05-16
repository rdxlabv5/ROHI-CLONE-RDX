module.exports.config = {
        name: "joinNoti",
        eventType: ["log:subscribe"],
        version: "1.0.1",
        credits: "CatalizCS", //fixing ken gusler
        description: "Notify bot or group member with random gif/photo/video",
        dependencies: {
                "fs-extra": "",
                "path": "",
                "pidusage": ""
        }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

        const path = join(__dirname, "cache", "joinGif");
        if (existsSync(path)) mkdirSync(path, { recursive: true });        

        const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
        const { join } = global.nodemodule["path"];
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                const fs = require("fs");
                return api.sendMessage("Hello Everyone 🙋‍♀️ 𝐁𝐨𝐭 𝐢𝐬 𝐍𝐨𝐰 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝⛓️", event.threadID, () => api.sendMessage({body:`
              🌸 ꧁R͟Õ͟Ǫ͟H̃͟I͟꧂🌸     
               
                ׂ╰┈➤»CONNECTED«

...🦋💫Ɱɣ ❍wɳɛʀ ɪs 𝐌𝐢𝐬𝐬 𝐑𝐨𝐨𝐡𝐢...🕊️🌷

${global.config.PREFIX}🌺🍃Ƈɑɭɭɑɗ føɽ Ɑɳʏ ɪʂʂuɛ 
<<<<<------------------------------>>>>>
A̸N̸D̸ F̸O̸R̸ A̸N̸Y̸ R̸E̸P̸O̸R̸T̸ O̸R̸ C̸O̸N̸T̸A̸C̸T̸ B̸O̸T̸ D̸E̸V̸A̸L̸O̸P̸E̸R̸....💖✨

💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞꧁𝐑𝐨𝐨𝐡𝐢꧂☜ 💫\n💜 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚎𝚛 𝙍𝙊𝙊𝙃𝙄 💜


💎━━━━━🌟━━━━━💎
✨ IMPORTANT NOTE ✨
💎━━━━━🌟━━━━━💎

📌 YA BOT ID SIRF 5 DIN CHLY GI  
📌 PHIR AUTOMATIC BAND HO JAYE GI  
📌 NEW BOT CHAHIYE TOH ADMIN KO ADD KAREIN  
📌 BOT AGAR BAND HO JAYE TOH NEW ID SE CHALAYA JA SAKTA HAI 😊  

AGR AP KO APNE GROUP MA APNE NAME WALA BOT CHAHIYE TO CONTACT KREIN:  
📞 +923363762926

💖 THANKS FOR USING RDX BOT 💖  
💎━━━━━🌟━━━━━💎
⟦🕊️⟦──🎀🧸💖🧸🎀──❀💞⟧  
🌷✨✧𝑅𝑜𝑜𝒽𝒾✧✨🌷  
⟧🕊️⟧──🎀🧸💖🧸🎀──❀💞⟧
`, attachment: fs.createReadStream(__dirname + "/cache/botjoin.mp4")} ,threadID));
        }
        else {
                try {
                        const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs } = await api.getThreadInfo(threadID);

                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};
                        const path = join(__dirname, "cache", "joinGif");
                        const pathGif = join(path, `${threadID}.gif`);

                        var mentions = [], nameArray = [], memLength = [], i = 0;

                        for (id in event.logMessageData.addedParticipants) {
                                const userName = event.logMessageData.addedParticipants[id].fullName;
                                nameArray.push(userName);
                                mentions.push({ tag: userName, id });
                                memLength.push(participantIDs.length - i++);
                        }
                        memLength.sort((a, b) => a - b);

                       (typeof threadData.customJoin == "undefined") ? msg = "✨ Welcome, {name} ✨\n\nYou’re now the {soThanhVien}th glowing star shining in the universe of 『 {threadName} 』\n\n𖧷 Chill. Connect. Conquer.\n𖧷 This space is yours to vibe.\n\n— With love, Noor ♕\n𝑺𝒉𝒆’𝒔 𝒔𝒐𝒇𝒕. 𝑺𝒉𝒆’𝒔 𝒔𝒂𝒗𝒂𝒈𝒆. 𝑺𝒉𝒆’𝒔 𝒕𝒉𝒆 𝒓𝒖𝒍𝒆.\n\nStay iconic. Stay you." : msg = threadData.customJoin; msg = msg
                        .replace(/\{name}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);

                        if (existsSync(path)) mkdirSync(path, { recursive: true });

                        const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

                        if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
                        else if (randomPath.length != 0) {
                                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
                        }
                        else formPush = { body: msg, mentions }

                        return api.sendMessage(formPush, threadID);
                } catch (e) { return console.log(e) };
        }
                    }
