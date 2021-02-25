import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";
import { createPagination } from "../../utils/pagination.ts";

createSubcommand("material", {
  name: "nectar",
  aliases: ["whopperflowernectar", "shimmeringnectar", "energynectar"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Nectar") 
      .setDescription([
        "**Item type:** Common Ascension Material",
        "",
        "**Source:**",
        "🔹 Dropped by Whopperflower\n🔹 Crafting", 
        "", 
        "**Nectar** is used for the following weapon and character ascensions:" 
      ])
      .addField("⭐⭐⭐", "Ferrous Shadow\nHalberd", true)
      .addField("⭐⭐⭐⭐", "Blackcliff Warbow\nDeathmatch\nFavonius Warbow\nFrostbearer\nIron Sting\nSerpent Spine\nSolar Pearl\nThe Bell\n\n<:Sucrose:798578072756158475> Sucrose", true)
      .addField("⭐⭐⭐⭐⭐", "<:Ganyu:798579013084774504> Ganyu\n<:Keqing:798578899956006914> Keqing\n<:Mona:798582495674105876> Mona", true)
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/46/Item_Shimmering_Nectar.png/revision/latest/scale-to-width-down/256?cb=20210112155006")
      .setFooter("Page 1/4")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
    .setTitle("Whopperflower Nectar")
      .setDescription([
        "**Rarity:** ⭐",
        "",
        "**Item type:** Common Ascension Material",
        "",
        "**Source:**",
        "🔹 Dropped by Whopperflower",
        "",
        "**Description:**",
        "Nectar extracted from the stamen of a Whopperflower that contains trace amounts of elements. The taste of the nectar has a hint of Sweet Flower in it."
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/8b/Item_Whopperflower_Nectar.png/revision/latest/scale-to-width-down/256?cb=20210109215225")
      .setFooter("Page 2/4")
      .setTimestamp()
      .setColor("RANDOM");
      

    const thirdEmbed = new Embed()
    .setTitle("Shimmering Nectar")
    .setDescription([
      "**Rarity:** ⭐⭐",
      "",
      "**Item type:** Common Ascension Material",
      "",
      "**Source:**",
      "🔹 Dropped by Lv. 40+ Whopperflower\n🔹 Crafting: 3x Whopperflower Nectar, 25 Mora",
      "",
      "**Description:**",
      "Nectar that is full of pure elements.\nScholars generally concur that Whopperflowers are advanced life forms among the elemental plants, but there has yet to be a satisfactory explanation regarding their predatory habits."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/46/Item_Shimmering_Nectar.png/revision/latest/scale-to-width-down/256?cb=20210112155006")
    .setFooter("Page 3/4")
    .setTimestamp()
    .setColor("RANDOM");

    const fourthEmbed = new Embed()
    .setTitle("Energy Nectar")
    .setDescription([
      "**Rarity:** ⭐⭐⭐",
      "",
      "**Item type:** Common Ascension Material",
      "",
      "**Source:**",
      "🔹 Dropped by Lv. 60+ Whopperflower\n🔹 Crafting: 3x Shimmering Nectar, 50 Mora",
      "",
      "**Description:**",
      "A thick and sticky honey that is full of energy. The Whopperflower hunts by tricking its prey, a process it uses to possibly evolve into a more powerful and pure form."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Energy_Nectar.png/revision/latest/scale-to-width-down/256?cb=20210112155010")
    .setFooter("Page 4/4")
    .setTimestamp()
    .setColor("RANDOM");

    createPagination(message, [
      firstEmbed,
      secondEmbed,
      thirdEmbed,
      fourthEmbed,
    ]);
  },
});