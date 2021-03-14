import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "domain",
  aliases: ["domains"],
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    const embed = new Embed()
      .setTitle("Help Domains")
      .setDescription([
        `🔹 \`${prefix}domain [clearpoolandmountaincavern | clearpool | mountaincavern]\``,
        `🔹 \`${prefix}domain [domainofguyun | guyun]\``,
        `🔹 \`${prefix}domain [hiddenpalaceoflianshanformula | lianshanformula]\``,
        `🔹 \`${prefix}domain [hiddenpalaceofzhouformula | zhouformula]\``,
        `🔹 \`${prefix}domain [peakofvindagnyr | vindagnyr]\``,
        `🔹 \`${prefix}domain [valleyofremembrance | remembrance]\``,
        `🔹 \`${prefix}domain ceciliagarden\``,
        `🔹 \`${prefix}domain forsakenrift\``,
        `🔹 \`${prefix}domain midsummercourtyard\``,
        `🔹 \`${prefix}domain taishanmansion\``,
      ])
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
