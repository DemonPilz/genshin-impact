import { Embed } from "../utils/Embed.ts";
import { createCommand, createSubcommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
  name: `help`,
  arguments: [{ name: "subcommand", type: "subcommand" }],
  guildOnly: true,
  execute: async function (message, args) {

    if (!args.name) {
      return message.reply({content: "https://discord.gg/26MjArxVP3", embed: new Embed()
      .setTitle("Need help, Traveler?")
      .setDescription([
        "To set up your profile run `p!setup` and go to my DMs!",
        "",
        "To check your profile, run the command `p!profile`!",
        "",
        "To access the command list, please use the command `p!commands`!",
        "",
        "Need further help? Visit our Support Server!",])
      })
    }

    if (!createCommand) {
      return message.reply({content: "https://discord.gg/26MjArxVP3", embed: new Embed()
      .setTitle("Need help, Traveler?")
      .setDescription([
        "To set up your profile run `p!setup` and go to my DMs!",
        "",
        "To check your profile, run the command `p!profile`!",
        "",
        "To access the command list, please use the command `p!commands`!",
        "",
        "Need further help? Visit our Support Server!",])
      })

  }
},
});