const { Events, AttachmentBuilder } = require("discord.js");

module.exports = {
  name: Events.GuildMemberAdd,
  once: true,
  execute(member) {
    const attachment = new AttachmentBuilder(
      "https://media.discordapp.net/attachments/1143824495493259275/1363270121602420938/IMG_0018.jpg?ex=6806147d&is=6804c2fd&hm=733fde30cc604de69e9d4519eced0ffc61c840ab46839bf4936882823c052aed&=&format=webp&width=902&height=936"
    );
    const channel = member.guild.channels.cache.find(i => i.name === "those-without-eyes");
    channel.send({content: `${member}`, files: [attachment]});
  },
};
