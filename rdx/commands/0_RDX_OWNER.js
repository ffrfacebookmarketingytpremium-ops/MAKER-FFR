const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  config: {
    name: 'owner',
    aliases: ['dev', 'creator', 'developer'],
    description: 'Show bot owner information',
    credits: 'SARDAR RDX',
    usage: 'owner',
    category: 'Info',
    prefix: false
  },

  async run({ api, event, send, config }) {
    const { threadID, messageID } = event;

    const ownerPics = [
      'https://i.ibb.co/FGVYMT9/f5ea048a249b.jpg',
      '',
      '',
      ''
    ];

    const randomPic = ownerPics[Math.floor(Math.random() * ownerPics.length)];

    const ownerInfo = `
╔═══════════════════════════
║  🍒𝐒𝐇𝐀𝐑𝐄𝐄𝐅 𝐋𝐀𝐃𝐊𝐀 𝐈𝐍𝐅𝐎🐼         
╠═══════════════════════════
║                                    
║𝐍𝐀𝐌𝐄: 𝐀𝐌𝐀𝐍     
║𝐀𝐆𝐄  : 22                             
║𝐋𝐈𝐕𝐈𝐍𝐆:𝐈𝐍𝐃𝐈𝐀.𝐇𝐏
║𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏:𝐒𝐈𝐍𝐆𝐋𝐄
║𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘:24.August,2003
║𝐇𝐄𝐈𝐆𝐇𝐓:5 𝐅𝐓 8 𝐈𝐍𝐂𝐇 
║𝐖𝐄𝐈𝐆𝐇𝐓:65𝐊𝐆
║𝐑𝐄𝐆𝐈𝐎𝐍 :𝐈𝐍𝐃𝐈𝐀𝐍
╠═══════════════════════════
║  📱 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐈𝐧𝐟𝐨:           
║                           
║  📲 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩:              
║  wa.me/919882093062 
║                           
╠═══════════════════════════
║  🤖 𝐁𝐨𝐭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬:           
║                           
║  📛 Name: ${config.BOTNAME || 'SARDAR RDX'}
║  ⚡ Prefix: ${config.PREFIX || '.'}
║  💻 Version: 0.5       
║  🛠️ Framework: RDX-FCA   
║                           
╠═══════════════════════════
║  💝▶️𝐓𝐇𝐀𝐍𝐊𝐔 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆!    
╚═══════════════════════════
     ▬▬▬𝐌𝐀𝐒𝐓𝐈 𝐀𝐋𝐋 𝐓𝐈𝐌𝐄▬▬
╚═══════════════════════════

    `.trim();

    try {
      const cacheDir = path.join(__dirname, 'cache');
      fs.ensureDirSync(cacheDir);
      const imgPath = path.join(cacheDir, `owner_${Date.now()}.jpg`);
      
      const resp    onse = await axios.get(randomPic, { responseType: 'arraybuffer' });
      fs.writeFileSync(imgPath, Buffer.from(response.data));
      
      api.sendMessage(
        {
          body: ownerInfo,
          attachment: fs.createReadStream(imgPath)
        },
        threadID,
        () => {
          try { fs.unlinkSync(imgPath); } catch {}
        },
        messageID
      );
    } catch (error) {
      return send.reply(ownerInfo);
    }
  }
};
