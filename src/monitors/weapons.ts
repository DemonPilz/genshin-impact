// THIS MONITOR ALLOWS MULTIPLE WORDS TO TRIGGER A COMMAND FOR WEAPONS
import { botCache } from "../../deps.ts";
import { weapons } from "../constants/weapons.ts";
import { parsePrefix } from "./commandHandler.ts";

botCache.monitors.set("weapons", {
  name: "weapons",
  ignoreDM: false,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    // THIS MESSAGE DOESNT START WITH PREFIX SO CANCEL
    if (!message.content.startsWith(prefix)) return;

    // IF ONLY 1 WORD, SKIP
    const words = message.content.substring(prefix.length).split(" ");
    if (words.length <= 1) return;

    // MORE THAN 1 WORD FOUND, VALIDATE IF ITS A WEAPON
    const name = words.join("").toLowerCase();
    const weapon = weapons.get(name);
    // NO WEAPON FOUND BY THIS NAME
    if (!weapon) return;

    console.log(`Weapons monitor ran for ${name} by ${message.author.id} in ${message.guild?.name || "DM"}`);
    // A VALID WEAPON WAS FOUND, TRIGGER THE COMMAND
    botCache.commands.get("weapon")?.execute?.(message, { name });
  },
});
