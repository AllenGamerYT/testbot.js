module.exports = {
	name: 'uinfo',
	description: 'User-Info',
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
