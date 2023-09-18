const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    const sent = await interaction.deferReply({ fetchReply: true });

    return interaction.editReply(
      `Websocket HeartBeat: ${
        interaction.client.ws.ping
      }ms\nRoundtrip Latency: ${
        sent.createdTimestamp - interaction.createdTimestamp
      }ms`,
    );
  },
};
