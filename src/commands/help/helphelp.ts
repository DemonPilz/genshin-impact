import { Embed } from "../../utils/Embed.ts";
import { parsePrefix } from "../../monitors/commandHandler.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "help",
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    const embed = new Embed()
      .setTitle("Help Help")
      .setDescription([
        `🔹 \`${prefix}help [gadgets | gadget]\``,
        `🔹 \`${prefix}help [materials | material]\``,
        `🔹 \`${prefix}help [patchnote | patchnotes | update | version]\``,
        `🔹 \`${prefix}help [weapon | weapons]\``,
        `🔹 \`${prefix}help edit\``,
        `🔹 \`${prefix}help help\``,
        `🔹 \`${prefix}help profile\``,
        `🔹 \`${prefix}help remove\``,
        `🔹 \`${prefix}help reset\``,
        `🔹 \`${prefix}help setup\``,
      ])
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
