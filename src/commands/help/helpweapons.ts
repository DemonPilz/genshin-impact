import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";
import { createPagination } from "../../utils/pagination.ts";

createSubcommand("help", {
  name: "weapons",
  aliases: ["weapon"],
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {
    const prefix = parsePrefix(message.guildID);
    const first = new Embed()
      .setTitle("Bows")
      .setDescription([
        `🔹 \`${prefix}help sharpshootersoath\``,
        `🔹 \`${prefix}help slingshot\``,
        `🔹 \`${prefix}help ravenbow\``,
        `🔹 \`${prefix}help messenger\``,
        `🔹 \`${prefix}help recurvebow\``,
        "",
        `🔹 \`${prefix}help compoundbow\``,
        `🔹 \`${prefix}help blackcliffwarbow\``,
        `🔹 \`${prefix}help theviridescenthunt\``,
        `🔹 \`${prefix}help prototypecrescent\``,
        `🔹 \`${prefix}help sacrificialbow\``,
        `🔹 \`${prefix}help rust\``,
        `🔹 \`${prefix}help thestringless\``,
        `🔹 \`${prefix}help favoniuswarbow\``,
        "",
        `🔹 \`${prefix}help amosbow\``,
        `🔹 \`${prefix}help skywardharp\``,
      ])
      .setTimestamp()
      .setFooter("Page 1/5")

    const second = new Embed()
      .setTitle("Polearms")
      .setDescription([
        `🔹 \`${prefix}help halberd\``,
        `🔹 \`${prefix}help blacktassel\``,
        `🔹 \`${prefix}help whitetassel\``,
        "",
        `🔹 \`${prefix}help crescentpike\``,
        `🔹 \`${prefix}help deathmatch\``,
        `🔹 \`${prefix}help royalspear\``,
        `🔹 \`${prefix}help favoniuslance\``,
        `🔹 \`${prefix}help dragonspinespear\``,
        `🔹 \`${prefix}help prototypestarglitter\``,
        `🔹 \`${prefix}help dragonsbane\``,
        `🔹 \`${prefix}help blackcliffpole\``,
        `🔹 \`${prefix}help lithicspear\``,
        "",
        `🔹 \`${prefix}help vortexvanquisher\``,
        `🔹 \`${prefix}help skywardspine\``,
        `🔹 \`${prefix}help primordialjadewinged-spear\``,
        `🔹 \`${prefix}help staffofhoma\``,
      ])
      .setTimestamp()
      .setFooter("Page 2/5")

    const third = new Embed()
      .setTitle("Claymores")
      .setDescription([
        `🔹 \`${prefix}help whiteirongreatsword\``,
        `🔹 \`${prefix}help skyridergreatsword\``,
        `🔹 \`${prefix}help quartz\``,
        `🔹 \`${prefix}help ferrousshadow\``,
        `🔹 \`${prefix}help debateclub\``,
        `🔹 \`${prefix}help bloodtaintedgreatsword\``,
        "",
        `🔹 \`${prefix}help blackcliffslasher\``,
        `🔹 \`${prefix}help whiteblind\``,
        `🔹 \`${prefix}help snow-Tombedstarsilver\``,
        `🔹 \`${prefix}help sacrificialgreatsword\``,
        `🔹 \`${prefix}help serpentspine\``,
        `🔹 \`${prefix}help thebell\``,
        `🔹 \`${prefix}help royalgreatsword\``,
        `🔹 \`${prefix}help rainslasher\``,
        `🔹 \`${prefix}help prototypearchaic\``,
        `🔹 \`${prefix}help favoniusgreatsword\``,
        `🔹 \`${prefix}help lithicblade\``,
        "",
        `🔹 \`${prefix}help The Unforged\``,
        `🔹 \`${prefix}help Wolf's Gravestone\``,
        `🔹 \`${prefix}help Skyward Pride\``,
      ])
      .setTimestamp()
      .setFooter("Page 3/5")

    const fourth = new Embed()
      .setTitle("Swords")
      .setDescription([
        `🔹 \`${prefix}help skyridersword\``,
        `🔹 \`${prefix}help filletblade\``,
        `🔹 \`${prefix}help travelershandysword\``,
        `🔹 \`${prefix}help harbingerofdawn\``,
        `🔹 \`${prefix}help darkironsword\``,
        `🔹 \`${prefix}help coolsteel\``,
        "",
        `🔹 \`${prefix}help blackclifflongsword\``,
        `🔹 \`${prefix}help sacrificialsword\``,
        `🔹 \`${prefix}help swordofdescension\``,
        `🔹 \`${prefix}help favoniussword\``,
        `🔹 \`${prefix}help theblacksword\``,
        `🔹 \`${prefix}help theflute\``,
        `🔹 \`${prefix}help royallongsword\``,
        `🔹 \`${prefix}help prototyperancour\``,
        `🔹 \`${prefix}help lionsrRoar\``,
        `🔹 \`${prefix}help ironsting\``,
        `🔹 \`${prefix}help festeringdesire\``,
        "",
        `🔹 \`${prefix}help summitshaper\``,
        `🔹 \`${prefix}help aquilafavonia\``,
        `🔹 \`${prefix}help skywardblade\``,
        `🔹 \`${prefix}help primordialjadecutter\``,
      ])
      .setTimestamp()
      .setFooter("Page 4/5")

    const fifth = new Embed()
      .setTitle("Catalysts")
      .setDescription([
        `🔹 \`${prefix}help magicguide\``,
        `🔹 \`${prefix}help thrillingtalesofdragonslayers\``,
        `🔹 \`${prefix}help twinnephrite\``,
        `🔹 \`${prefix}help otherworldlystory\``,
        `🔹 \`${prefix}help emeraldorb\``,
        "",
        `🔹 \`${prefix}help solarpearl\``,
        `🔹 \`${prefix}help eyeofperception\``,
        `🔹 \`${prefix}help thewidsith\``,
        `🔹 \`${prefix}help frostbearer\``,
        `🔹 \`${prefix}help sacrificialfragments\``,
        `🔹 \`${prefix}help royalgrimoire\``,
        `🔹 \`${prefix}help prototypeamber\``,
        `🔹 \`${prefix}help mappamare\``,
        `🔹 \`${prefix}help favoniuscodex\``,
        `🔹 \`${prefix}help blackcliffagate\``,
        "",
        `🔹 \`${prefix}help lostprayertothesacredwinds\``,
        `🔹 \`${prefix}help memoryofdust\``,
        `🔹 \`${prefix}help skywardatlas\``,
      ])
      .setTimestamp()
      .setFooter("Page 5/5")

      createPagination(message, [
        first,
        second,
        third,
        fourth,
        fifth
      ]);
    },
  });