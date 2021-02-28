function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let diseases = [
  "Phlegm Fetish",
  "Bleed-from-the-armpit-itis",
  "Goat-horn-kemia",
  "Palmdog",
  "Headburn",
  "Skinleak",
  "Broadskull",
  "Thic-knee",
  "Jamblood",
  "Tighteye"
];
let diseaseImages = [
  "/pics/phlegm.png",
  "/pics/armpit.png",
  "/pics/goat-horn-kemia.png",
  "/pics/palmdog.png",
  "/pics/headburn.png",
  "/pics/skinleak.png",
  "/pics/broadskull.png",
  "/pics/thicknee.png",
  "/pics/jamblood.png",
  "/pics/tighteye.png"
];
let diseaseDescription = [
  "You have a fetish with phlegm. Every time you see phlegm, you seem to get a sudden rush of excitement. There is no cure, but perhaps if you desensitized yourself to phlegm the addiction will eventually fade. People who have a Phlegm Fetish usually suffer with it for life.",
  "Sometime in the future, you will bleed from your armpits. It may come more than once in your lifetime, but sufferers usually only experience it during one terrible night. To cure this disease, you must drink a bottle of your great-great-grandfather's blood, but people usually cannot gain access to this.",
  "Unfortunately, you have a genetic predisposition to growing horns. Don't worry, you're not the devil. You are a goat. You may experience occasional bleating, and along with that, some embarrassment. Many can control their symptoms by eating a pound of hay before bed every night.",
  "You grow dogs on your palm. It's a little difficult to control this disease, but it's usually OK because everyone loves dogs. If the dog gets too big, your arm may break from the weight. However, you come away from it with a free loyal friend. You're lucky, actually, this is one of the more pleasant diseases.",
  "This disease is pretty self-explanatory. Your head will burn. The more you think about it, the hotter your head will get. Some patients have reported their heads catching on fire, and thus their hair, so to manage this, we recommend you shave your head. You may feel like a candle if you look in the mirror, and that may bring some distress.",
  "Your skin will leak tar. This is quite uncomfortable, and we're sorry to inform you that you will most likely die from this disease. There is an extremely low survival rate, but if you'd like we can pray for you. There is no guarantee that our prayers will work, but at your request, we can employ a more qualified pastor.",
  "Your brain will get bigger! That's great, you genius. Well, the part of your brain that expands is that part that is involved in setting up mouse traps. Therefore, you will be setting A LOT of mouse traps. Excessively. You may go bankrupt from buying mouse traps before you manage to pay the medical bill to cure this disease.",
  "Unfortunately, your knees will get so large that you will have trouble seeing past them. Say good-bye to hugs and sports, because with this disease you will hardly be able to reach other objects or move.",
  "Your blood will slowly but surely turn into jam. There might be a period of time every day where you become very hyper because of all the sugar in the jam. The flavor of jam you will develop in your bloodstream is random, but 80% of our patients get blueberry. Raspberry is the rarest. On the bright side, now you won't have to worry about what toppings to put on your pancakes.",
  "The skin over your eyes will gradually get tighter and tighter until you can no longer see. There are currently no glasses for sale that can help your vision, but if you stay OPTICAL-istic, maybe Bill Gates will come up with something in the next couple of years."
];

let peeNumber = randomIntFromInterval(0, diseases.length - 1);

document.getElementById("diseases").innerHTML = diseases[peeNumber];
document.getElementById("image").src = diseaseImages[peeNumber];
document.getElementById("description").innerHTML =
  diseaseDescription[peeNumber];
