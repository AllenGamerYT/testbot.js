module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp'],
	description: 'Avatar',
	execute(message, args) {
    if (!message.mentions.users.size) {
      return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
    }
  }
}
