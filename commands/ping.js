module.exports = {
	name: 'ping',
	description: 'Ping!',
	async execute(message, args) {
    message.channel.send("Ping?");
    message.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  },
};
