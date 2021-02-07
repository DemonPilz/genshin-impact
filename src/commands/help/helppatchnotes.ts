import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "patchnotes",
  aliases: ["update", "update", "version"],
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help Edit/Add")
      .setDescription([
        "🔹 `p!patchnote`",
        "🔹 `p!patchnotes`",
        "🔹 `p!update`",
        "🔹 `p!sversion`",
        "Lists all available updates/versions.",
        "",
        "🔹 `p!patchnote (version)`",
        "🔹 `p!patchnotes (version)`",
        "🔹 `p!update (version)`",
        "🔹 `p!version (version)`",
        "Shows all informations about a version."
      ])
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
