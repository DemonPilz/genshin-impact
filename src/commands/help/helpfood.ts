import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";
import { createPagination } from "../../utils/pagination.ts";

createSubcommand("help", {
  name: "food",
  aliases: ["dish", "dishes"],
  guildOnly: true,
      execute: async function (message) {
        const prefix = parsePrefix(message.guildID);
        const firstEmbed = new Embed()
        .setTitle("Help Food")
        .setDescription([
          "**Food/Dishes ⭐**",
          `🔹 \`${prefix}food sunsettia\``,
          `🔹 \`${prefix}food apple\``,
          `🔹 \`${prefix}food definitelynotbarfood\``,
          `🔹 \`${prefix}food popsteas\``,
          `🔹 \`${prefix}food survivalgrilledfish\``,
          `🔹 \`${prefix}food outriderschampionsteak\``,
          `🔹 \`${prefix}food fruityskewers\``,
          `🔹 \`${prefix}food qiankunmorameat\``,
          `🔹 \`${prefix}food stir-friedfilet\``,
          `🔹 \`${prefix}food grilledtigerfish\``,
          `🔹 \`${prefix}food teyvatfriedegg\``,
          `🔹 \`${prefix}food steak\``,
          `🔹 \`${prefix}food radishveggiesoup\``,
          `🔹 \`${prefix}food mondstadtgrilledfish\``,
          `🔹 \`${prefix}food chicken-mushroomskewer\``,
          `🔹 \`${prefix}food flash-friedfilet\``,
          `🔹 \`${prefix}food teyvatcharredegg\``
        ])
        .setFooter("Page 1/4")
        .setTimestamp()
        .setColor("RANDOM");
    
        const secondEmbed = new Embed()
        .setTitle("Help Food")
        .setDescription([
          "**Food/Dishes ⭐⭐**",
          `🔹 \`${prefix}food stoneharbordelicacies\``,
          `🔹 \`${prefix}food fish-flavoredtoast\``,
          `🔹 \`${prefix}food all-delicacyparcels\``,
          `🔹 \`${prefix}food coldnoodleswithmountaindelicacies\``,
          `🔹 \`${prefix}food spicystew\``,
          `🔹 \`${prefix}food noodleswithmountaindelicacies\``,
          `🔹 \`${prefix}food goulash\``,
          `🔹 \`${prefix}food rockinriffinchicken\``,
          `🔹 \`${prefix}food derweisheitletzterschluss\``,
          `🔹 \`${prefix}food mysteriousbolognese\``,
          `🔹 \`${prefix}food lighter-than-airpancake\``,
          `🔹 \`${prefix}food applecider\``,
          `🔹 \`${prefix}food berrymintburst\``,
          `🔹 \`${prefix}food wolfhookjuice\``,
          `🔹 \`${prefix}food almondtofu\``,
          `🔹 \`${prefix}food lotusseedandbirdeggsoup\``,
          `🔹 \`${prefix}food crystalshrimp\``,
          `🔹 \`${prefix}food teacreakpancake\``,
          `🔹 \`${prefix}food northernsmokedchicken\``,
          `🔹 \`${prefix}food flamingredbolognese\``,
          `🔹 \`${prefix}food fishermansstoast\``,
          `🔹 \`${prefix}food creamstew\``,
          `🔹 \`${prefix}food satisfyingsalad\``,
          `🔹 \`${prefix}food sweetmadame\``,
          `🔹 \`${prefix}food matsutakemeatrolls\``,
          `🔹 \`${prefix}food jueyunchilichicken\``,
          `🔹 \`${prefix}food jewelrysoup\``,
          `🔹 \`${prefix}food friedradishballs\``,
          `🔹 \`${prefix}food vegetarianabalone\``,
          `🔹 \`${prefix}food morameat\``,
          `🔹 \`${prefix}food sweetdream\``,
          `🔹 \`${prefix}food ghostlymarch\``
          ])
          .setFooter("Page 2/4")
          .setTimestamp()
          .setColor("RANDOM");

          const thirdEmbed = new Embed()
        .setTitle("Help Food")
        .setDescription([
          "**Food/Dishes ⭐⭐⭐**",
          `🔹 \`${prefix}food prosperouspeace\``,
          `🔹 \`${prefix}food universalpeace\``,
          `🔹 \`${prefix}food sunshinesprat\``,
          `🔹 \`${prefix}food slow-cookedbambooshootsoup\``,
          `🔹 \`${prefix}food bambooshootsoup\``,
          `🔹 \`${prefix}food woodlanddream\``,
          `🔹 \`${prefix}food jueyunguoba\``,
          `🔹 \`${prefix}food adventurersbreakfastsandwich\``,
          `🔹 \`${prefix}food lotusflowercrisp\``,
          `🔹 \`${prefix}food qingcestirfry\``,
          `🔹 \`${prefix}food aprizecatch\``,
          `🔹 \`${prefix}food lotusflowercrisp\``,
          `🔹 \`${prefix}food triple-layeredconsomme\``,
          `🔹 \`${prefix}food goldenshrimpballs\``,
          `🔹 \`${prefix}food northernapplestew\``,
          `🔹 \`${prefix}food comeandgetit\``,
          `🔹 \`${prefix}food squirrelfish\``,
          `🔹 \`${prefix}food barbatosratatouille\``,
          `🔹 \`${prefix}food pileemup\``,
          `🔹 \`${prefix}food sauteedmatsutake\``,
          `🔹 \`${prefix}food zhongyuanchopsuey\``,
          `🔹 \`${prefix}food stickyhoneyroast\``,
          `🔹 \`${prefix}food mushroompizza\``,
          `🔹 \`${prefix}food mondstadthashbrown\``,
          `🔹 \`${prefix}food coldcutplatter\``,
          `🔹 \`${prefix}food callalilyseafoodsoup\``,
          `🔹 \`${prefix}food nutritiousmeal\``,
          `🔹 \`${prefix}food notomorrow\``,
          `🔹 \`${prefix}food abuoyantbreeze\``,
          `🔹 \`${prefix}food invigoratingpizza\``,
          `🔹 \`${prefix}food dieheiligesinfonie\``,
          `🔹 \`${prefix}food onceuponatimeinmondstadt\``,
          `🔹 \`${prefix}food wanminrestaurantsboiledfish\``,
          `🔹 \`${prefix}food puppy-pawhashbrown\``,
          `🔹 \`${prefix}food holywater\``,
          `🔹 \`${prefix}food crabhamandveggiebake\``,
          ])
          .setFooter("Page 2/4")
          .setTimestamp()
          .setColor("RANDOM");

          const fourthEmbed = new Embed()
        .setTitle("Help Food")
        .setDescription([
          "**Food/Dishes ⭐⭐⭐⭐**",
          `🔹 \`${prefix}food tianshumeat\``,
          `🔹 \`${prefix}food moonpie\``,
          `🔹 \`${prefix}food goldencrab\``,
          `🔹 \`${prefix}food jadeparcels\``,
          "",
          "**Food/Dishes ⭐⭐⭐⭐⭐**",
          `🔹 \`${prefix}food adeptustemptation\``,
          ])
          .setFooter("Page 4/4")
          .setTimestamp()
          .setColor("RANDOM")


      createPagination(message, [
        firstEmbed,
        secondEmbed,
        thirdEmbed,
        fourthEmbed
      ]);
    },
  });