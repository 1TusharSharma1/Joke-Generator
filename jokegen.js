const jokes = [
  "Why did an old man fall in a well? Because he couldn’t see that well!",
  "Why did the actor fall through the floorboards? They were going through a stage!",
  "Why did a scarecrow win a Nobel prize? He was outstanding in his field!",
  "Why are peppers the best at archery? Because they habanero!",
  "What did the duck say after she bought chapstick? Put it on my bill!",
  "What do you call a fake noodle?An impasta!",
  "What did the three-legged dog say when he walked into a saloon? I’m looking for the man who shot my paw!”",
  "How do you tell the difference between a bull and a cow? It is either one or the udder!",
  "What’s red and smells like blue paint? Red paint!",
  "What’s the difference between a hippo and a Zippo? One is very heavy, the other is a littl ighter!",
  "What do you call an illegally parked frog? Toad!",
  "Why can’t you send a duck to space? Because the bill would be astronomical!",
  "What does Jeff Bezos do before he goes to sleep? He puts his PJ-Amazon!",
  "What happened when the world's tongue-twister champion got arrested? They gave him a tough sentence!",
  "What did the mama cow say to the calf? It’s pasture bedtime!",
  "How does a vampire start a letter? Tomb it may concern!",
  "What did one plate say to the other? Dinner is on me!",
  "Why do hummingbirds hum? Because they don’t know the words!",
  "What do sprinters eat before a race?",
  "Nothing. They fast!",
  "Knock, knock. Who’s ther ? Ice cream. Ice cream who? ICE CREAM SO YOU CAN HEAR ME!",
  "Knock, knock. Who’s there? Figs. Figs who? Figs the doorbell, I’ve been knocking forever!",
  "Knock, knock. Who’s there? Theodore. Theodore who? Theodore wasn’t opened so I knocked!",
  "Knock, knock. Who’s there? Tank. Tank who? You’re welcome!",
  "Knock, knock. Who’s there? Isabel. Isabel who? Isabel not working?",
  "Knock, knock. Who’s there? Icy. Icy who? Icy you in there!",
  "Knock, knock. Who’s there? Dozen. Dozen who? Dozen anyone want to let me in?",
  "Knock, knock. Who’s there? Scold. Scold who? Scold outside, let me in!",
  "Knock, knock. Who’s there? Water. Water who? Water you asking so many questions for, just open up!",
  "Knock, knock. Who’s there? Cargo. Cargo who? Car go, “Toot toot, vroom, vroom!",
  "Which is faster, hot or cold? Hot, because you can catch cold.",
  "What did one plate say to the other plate? Dinner's on me.",
  "Why do oranges wear sunscreen? So they don't peel.",
  "My wife told me to stop acting like a flamingo, so I had to put my foot down.",
  "What do you call a pig that does karate? A pork chop.",
  "Where does Batman go to the bathroom? The batroom.",
  "What do you call a pony with a sore throat? A little horse.",
  "What did the left eye say to the right eye? Between you and me, something smells.",
  "What did the mama tomato say to the baby tomato? Catch up!",
  "Why didn't the melons get married? Because they cantaloupe.",
  "What do you call a fake noodle? An impasta.",
  "How did the pig get to the hogspital? In a hambulance.",
  "I'm so good at sleeping I can do it with my eyes closed!",
  "Why does Humpty Dumpty love autumn? Because he had a great fall.",
  "What happens when a strawberry gets run over crossing the street? Traffic jam.",
  "Why did the cow jump over the moon? The farmer had cold hands.",
  "A termite walks into a bar and says, So, is the bar tender here?",
  "How does an octopus go into battle? Well-armed.",
  "What do you call a pudgy psychic? A four-chin teller.",
  "Why don't scientists trust atoms? Because they make up everything",
  "I told my wife she was drawing her eyebrows too high. She looked surprised",
  "Why did the tomato turn red? Because it saw the salad dressing",
  "Why did the scarecrow win an award? Because he was outstanding in his field",
  "Why did the hipster burn his tongue? He drank his coffee before it was cool",
  "What did the janitor say when he jumped out of the closet? 'Supplies!'",
  "Why don't oysters give to charity? Because they're shellfish",
  "I'm reading a book on anti-gravity. It's impossible to put down",
  "What's the difference between a poorly dressed man on a trampoline and a well-dressed man on a trampoline? Attire",
  "Why do we tell actors to 'break a leg?' Because every play has a cast",
  "Why did the math book look so sad? Because it had too many problems",
  "I used to play piano by ear, but now I use my hands",
  "What did one wall say to the other wall? 'I'll meet you at the corner.'",
  "Why did the banana go to the doctor? Because it wasn't peeling well",
  "I'm on a whiskey diet. I've lost three days already",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one",
  "Why don't seagulls fly by the bay? Because then they'd be bagels",
  "Did you hear about the kidnapping at the playground? They woke up",
  "I'm not arguing, I'm just explaining why I'm right",
  "Why don't skeletons fight each other? They don't have the guts",
  "I'm reading a book about teleportation. It's bound to take me places",
  "Why did the cookie go to the doctor? Because it was feeling crummy",
  "Why don't scientists trust atoms? Because they make up everything",
  "What do you get when you cross a snowman and a shark? Frostbite",
  "I'm not lazy, I'm just conserving energy",
  "I used to be a baker, but I couldn't raise the dough",
  "I'm trying to organize a hide and seek tournament, but good players are really hard to find",
  "Why do we tell actors to 'break a leg?' Because every play has a cast",
  "What did the grape say when it got stepped on? Nothing, it just let out a little wine",
  "Why don't scientists trust atoms? Because they make up everything",
  "What's the difference between a bird and a fly? A bird can fly, but a fly can't bird",
  "I'm reading a book about teleportation. It's bound to take me places",
  "Why did the scarecrow win an award? Because he was outstanding in his field",
  "Why do cows wear bells? Because their horns don't work",
  "What did the janitor say when he jumped out of the closet? 'Supplies!'",
  "Why did the computer go to the doctor? Because it had a virus",
  "Why don't oysters give to charity? Because they're shellfish",
  "Why did the tomato turn red? Because it saw the salad dressing",
  "I told my wife she was drawing her eyebrows too high. She looked surprised",
  "Why do we tell actors to 'break a leg?' Because every play has a cast",
  "I'm on a whiskey diet. I've lost three days already",
  "I'm not arguing. I'm just explaining why I'm right",
];

let selector = Math.floor(Math.random() * 90);

let next = document.getElementById("next");

let heading = document.querySelector(".heading");
heading.innerText = jokes[selector];

next.addEventListener("click", () => {
  window.location.reload();
});
