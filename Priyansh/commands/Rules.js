const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "rules",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Modified by ZAIN IFTIKHAR",
  description: "Shows group rules when someone types 'rules'",
  commandCategory: "NoPrefix",
  usages: "NoPrefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function ({ api, event, args, Threads, Users }) {
  const moment = require("moment-timezone");
  const { threadID, messageID, body, senderID } = event;
  const name = await Users.getNameUser(senderID);
  const lowerBody = body.toLowerCase();

  // Only trigger on exact word "rules"
  if (lowerBody === "rules") {
    const rulesMessage = 
`╔══❖•ೋ° °ೋ•❖══╗
Official Group Rules
╚══❖•ೋ° °ೋ•❖══╝

✦ 1. 𝐍𝐨 𝐆𝐫𝐨𝐮𝐩 𝐋𝐢𝐧𝐤𝐬
⤷ Kisi bhi group ka link send karna strictly mana hai.

✦ 2. 𝐍𝐨 𝐈𝐁 𝐁𝐞𝐡𝐚𝐯𝐢𝐨𝐮𝐫
⤷ Kisi ladki ke inbox mein bina wajah jana allowed nahi.

✦ 3. 𝐑𝐞𝐬𝐩𝐞𝐜𝐭 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞
⤷ Sab members ke sath tameez se pesh aao — no badtameezi.

✦ 4. 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐀𝐝𝐦𝐢𝐧
⤷ Koi issue ho to admin ko DM karo, public drama nahi.

✦ 5. 𝐋𝐢𝐦𝐢𝐭𝐬 𝐢𝐧 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬
⤷ IB ya relation mein ho to apni limits mein raho.

✦ 6. 𝐄𝐦𝐨𝐣𝐢 𝐂𝐨𝐧𝐭𝐫𝐨𝐥
⤷ Har message mein emoji ka overload mat karo — warning ya remove ho sakta.

✦ 7. 𝐍𝐨 𝟏𝟖+ 𝐂𝐨𝐧𝐭𝐞𝐧𝐭
⤷ Koi adult ya inappropriate meme ya post nahi chalegi.

✦ 8. 𝐁𝐞𝐡𝐚𝐯𝐢𝐨𝐮𝐫 𝐰𝐢𝐭𝐡 𝐆𝐢𝐫𝐥𝐬
⤷ Respectfully baat karo, aur zarurat se zyada baat na karo.

╭─★••★─╮
Follow or Get Removed
╰─★••★─╯

❤️ 𝕆𝕎ℕ𝔼ℝ : ꧁𝐑𝐃𝐗꧂`;

    return api.sendMessage({ body: rulesMessage }, threadID, messageID);
  }
};

module.exports.run = function ({ api, event, client, __GLOBAL }) { };
