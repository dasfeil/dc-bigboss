require("dotenv").config();
const { fetch } = require("undici");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rheinmetall")
    .setDescription("Call for support"),
  async execute(interaction) {
    await interaction.deferReply();
    const url =
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RHM.DE&apikey=" + process.env.FUNKY_KEY;
    const res = await fetch(url);
    const json = await res.json();
    console.log(json)
    let stock = json["Time Series (Daily)"];
    const today = stock[Object.keys(stock).at(0)];
    const green =
      parseFloat(today["4. close"]) - parseFloat(today["1. open"]) > 0;
    return await interaction.editReply(
      green ? ":miriam: :thumbup:" : ":bleakiam: :thumbdown:"
    );
  },
};
