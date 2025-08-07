const neutralNames = ["Shorts", "Tank", "Camisole", "Thong", "Cincher", "Tights", "Hipster", "Fishnets",
                "Leather", "Socks", "Silk", "Belt", "Harness", "Suspenders", "Cuffs", "Ascot", "Cravat", "Binder", "Latex",
                "Bikini", "Choker", "Pantyhose", "Ribbon", "Velvet", "Satin", "Spandex", "Straps", "Thigh-High", "Anklet", "Bracelet",
                "Skimpy", "Shades", "Heels", "Boots", "Sandals", "Gloves", "Brooch", "Beret", "Scarf", "Beanie", "Girdle",
                "Chemise", "Bloomer", "Pantaloons", "Denim", "Scrunchie"];
const femaleNames = [ "Bralette", "Brazier", "Bustier", "Daisy Duke", "Babydoll", "Negligee", "Teddy", "Miniskirt"];
const maleNames = ["Boxers", "Jockstrap", "Condom", "Codpiece", "Loincloth", "Kilt", "Necktie", "Bowtie", "Trunks", "Namba",
                "Mankini", "Speedo"];
const genders = ["male", "female", "other"];
const goodTraits = ["Brave", "Compassionate", "Clever", "Loyal", "Charming", "Honest", "Creative", "Generous", "Wise", "Optimistic",
                "Empathetic", "Industrious", "Charismatic", "Courteous", "Intelligent", "Courageous", "Earnest",
                "Funny", "Reliable", "Neat", "Stable", "Energetic", "Adaptable", "Friendly", "Patient", "Respectful", "Thoughtful",
                "Trustworthy", "Understanding", "Witty", "Diligent", "Resourceful", "Sincere", "Supportive", "Tolerant", "Visionary",
                "Open-minded", "Passionate", "Analytical", "Artistic", "Humble", "Disciplined", "Innovative", "Insightful",
                "Perceptive", "Proactive", "Resilient", "Self-aware", "Pragmatic", "Forgiving", "Optimistic"];
    const neutralTraits = ["Curious", "Skeptical", "Cautious", "Practical", "Realistic", "Pensive", "Reserved", "Introverted",  "Extroverted", "Quirky", "Idealistic",
                "Ambitious", "Serious", "Silly", "Picky", "Mellow", "Practical", "Decisive", "Nonchalant", "Meticulous", "Outspoken", "Bold",
                "Emotional", "Calculating", "Shy", "Assertive", "Persistent", "Eccentric", "Skeptical"];
    const badTraits = ["Arrogant", "Impulsive", "Jealous", "Stubborn", "Cynical", "Deceitful", "Greedy", "Moody", "Reckless", "Vain",
                "Pessimistic", "Aloof", "Aggressive", "Apathetic", "Manipulative", "Lazy", "Critical", "Dimwitted", "Bossy",
                "Careless", "Cynical", "Defensive", "Childish", "Naive", "Short-tempered", "Jealous", "Controlling", "Obnoxious",
                "Sloppy", "Inflexible", "Selfish", "Dishonest", "Unreliable", "Disrespectful", "Arrogant", "Overconfident", "Indecisive",
                "Untrustworthy", "Vindictive", "Hypocritical", "Egotistical", "Conceited", "Gullible", "Overbearing",
                "Disorganized", "Unmotivated", "Resentful", "Impulsive", "Insecure", "Paranoid", "Overly critical", "Cowardly"];


function randomizeGender() {
    const gender = genders[Math.floor(Math.random() * genders.length)];
    document.getElementById("gender").value = gender;
}

function randomizeName() {
    const gender = document.getElementById("gender").value;
    let random; 

    if (gender === "female") {
        //Select randomly from female or neutral list
        random = Math.random() < 0.5 ? femaleNames[Math.floor(Math.random() * femaleNames.length)] : neutralNames[Math.floor(Math.random() * neutralNames.length)];
    } else if (gender === "male") {
        //Select randomly from male or neutral list
        random = Math.random() < 0.5 ? maleNames[Math.floor(Math.random() * maleNames.length)] : neutralNames[Math.floor(Math.random() * neutralNames.length)];
    } else {
        random = neutralNames[Math.floor(Math.random() * neutralNames.length)];
    }

    document.getElementById("name").value = random;
}

function randomizeAge() {
    //If species = angel or demon, age between 18 and 2000. Else, age between 18 and 50.
    const species = document.getElementById("species").value;
    let age;
    if (species === "angel" || species === "demon") {
        age = Math.floor(Math.random() * 1983) + 18;
    } else { //Human
        age = Math.floor(Math.random() * 33) + 18; 
    }
    document.getElementById("age").value = age;
}

function randomizeSpecies() {
    const speciesList = ["human", "angel", "demon", "hybrid"];
    const species = speciesList[Math.floor(Math.random() * speciesList.length)];
    document.getElementById("species").value = species;
}

function randomizeColors() {
    //This function selects a random color palette for the character. It does this by selecting two random Hex values.
    const color1 = "#" + Math.floor(Math.random()*16777215).toString(16); //Generate random hex color
    const color2 = "#" + Math.floor(Math.random()*16777215).toString(16); 
    document.getElementById("colors").value = color1 + ", " + color2; //Set the colors input to the two random colors
}

function randomizeHair() {
    const hairStyles = ["Short", "Long", "Curly", "Straight", "Wavy", "Bald", "Mohawk", "Ponytail", "Braided", "Afro", "Dreadlocks", "Buzzcut", "Spiky", 
                        "Pixie Cut", "Updo", "Perm", "Bob", "Cornrows", "Pompadour", "Feathered", "Hime Cut", "Mullet", "Long Bob", "Odango", "Ringlets"
    ];
    const hairStyle = hairStyles[Math.floor(Math.random() * hairStyles.length)];
    document.getElementById("hair").value = hairStyle;
}

function randomizeHairColor() {
    const hairColors = ["Black", "Brown", "Blonde", "Red", "Gray", "White", "Blue", "Green", "Pink", "Purple", "Orange", "Chestnut", "Auburn", "Silver", "Magenta",
                        "Turquoise", "Dirty Blonde", "Pastel Pink", "Lavender", "Teal"
    ];
    const hairColor = hairColors[Math.floor(Math.random() * hairColors.length)];
    document.getElementById("hairColor").value = hairColor;
}

function randomizeWeapon() {
    const weapons = ["Sword", "Axe", "Bow", "Dagger", "Spear", "Staff", "Mace", "Crossbow", "Flail", "Whip", "Machete", "Boomerang",
                    "Hammer", "Katana", "Scythe", "Lance", "Halberd", "Trident", "Knife", "Rifle", "Gun", "Kama", "Sabre",
                    "Scimitar", "Sickle", "Rapier", "Shortsword", "Dagger", "Baseball Bat", "Chainsaw", "Sai", "Crowbar",
                    "Taser", "Club", "Shield", "Brass Knuckles", "Nunchaku", "Bo Staff", "Throwing Stars", "Chakram", "Sling"];
    const weapon = weapons[Math.floor(Math.random() * weapons.length)];
    document.getElementById("weapon").value = weapon;
}

function randomizeAlignment() {
    const alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", 
                        "Lawful Evil", "Neutral Evil", "Chaotic Evil"];
    const alignment = alignments[Math.floor(Math.random() * alignments.length)];
    document.getElementById("alignment").value = alignment;
}

function randomizeLikes() {
    //This function selects a random set of likes for the character. It does this by selecting 3 random items from a predefined list.
    const likesList = ["Chocolate", "Coffee", "Tea", "Pizza", "Ice Cream", "Books", "Pop Music", "Country Music", "Nature", "Animals",
                "Sports", "Art", "Technology", "Fashion", "Traveling", "Cooking", "Baking", "Gaming", "Photography",
                "Dancing", "Hiking", "Fishing", "Camping", "Gardening", "Romcoms", "Action Movies", "Sci-Fi", "Fantasy",
                "Mystery movies", "Thrillers", "Comedys", "Dramas", "Documentaries", "Anime", "Cartoons", "Dogs", "Cats",
                "Classical Music", "Makeup", "Fitness", "Yoga", "Meditation", "Crafting", "DIY Projects", "Fighting", "Board Games",
                "Puzzles", "Knitting", "Sewing", "Woodworking", "Metalworking", "Pottery", "Martial Arts", "Swimming", "Bugs", "Snakes",
                "Spiders", "Birdwatching", "Astronomy", "History", "Philosophy", "Psychology", "Economics", "Politics", "Mathematics",
                "Physics", "Chemistry", "Biology", "Geology", "Linguistics", "Sociology", "Anthropology", "Archaeology", "Architecture",
                "Engineering", "Robotics", "Clowns", "Horror", "Gambling", "Spiders", "Alcohol", "Junk Food", "Fast Food", "Photography",
                "Sweets", "Reading", "Writing", "Poetry", "Theater", "Parties", "Clubbing", "Metal Music", "Drag", "Cooking", "Baking",
                "Rock and Roll", "Jazz", "Blues", "Folk Music", "World Music", "Reality TV", "Singing", "Playing an Instrument", "Volleyball",
                "Basketball", "Soccer", "Baseball", "Tennis", "Golf", "Skateboarding", "Surfing", "Snowboarding", "Skiing", "Ice Skating",
                "Rollerskating", "Hockey", "Rugby", "Cricket", "Lacrosse", "Coding", "Boxing", "Wrestling", "Gymnastics", "Healthy Food",
                "Spicy Food", "Hot Weather", "Cold Weather", "Rainy days", "Sunny days", "Cloudy days", "BBQ", "Wine", "Dubstep", "Hip Hop",
                "Billiards", "Darts", "Poker", "Chess", "Magic Tricks", "Origami", "Calligraphy", "Scrapbooking", "Model Building", "Blogging",
                "Scented Candles", "Dungeons and Dragons", "Sushi", "Astrology", "Shopping", "Amusement Parks", "Zoos & Aquariums",
                "Museums", "Concerts", "Festivals", "Parades", "Carnivals", "Superheroes", "Comics", "Horses", "Tax Evasion", "Rock Climbing",
                "Parkour", "Puns", "Pranks", "Archery", "Fencing", "Sailing", "Kayaking", "Canoeing", "Scuba Diving", "Solitude", "Thunderstorms",
                "Pumpkin Spice", "Bowling", "Arcade Games", "Ping-Pong", "Karaoke"];
    const randomLikes = [];
    while (randomLikes.length < 3) {
        const randomLike = likesList[Math.floor(Math.random() * likesList.length)];
        if (!randomLikes.includes(randomLike)) {
            randomLikes.push(randomLike);
        }
    }
    // Actually set the textarea value!
    document.getElementById("likes").value = randomLikes.join(", ");
}

function randomizeDislikes() {
    //This function selects a random set of dislikes for the character. It does this by selecting 3 random items from a predefined list.
    const dislikesList = ["Spiders", "Snakes", "Heights", "Crowds", "Public Speaking", "Clowns", "Darkness", "Thunderstorms",
                "Needles", "Blood", "Germs", "Loud Noises", "Silence", "Boredom", "Failure", "Rejection", "Loneliness",
                "Conflict", "Dishonesty", "Injustice", "Rudeness", "Traffic Jams", "Waiting in Line", "Slow Internet",
                "Cold Weather", "Hot Weather", "Rainy Days", "Snowy Days", "Mice", "Roaches", "Mosquitoes", "Ants",
                "Littering", "Smoking", "Alcoholism", "Drug Addiction", "Gambling Addiction", "Fast Food",
                "Junk Food", "Sweets and Desserts", "Spicy Food", "Public Restrooms", "Housework", "Cleaning", "Politics",
                "Paying Taxes", "Emojis", "Themselves", "Losing Money", "Being Late", "Being Ignored", "Being Interrupted",
                "Being Criticized", "Being Judged", "Being Misunderstood", "Fighting", "Arguments", "Losing", "Being Wrong",
                "Thunderstorms", "Physical Exertion", "Exercise", "Dieting", "Healthy Food", "Vegetables", "Fruits", "Cooking", "Baking",
                "Hospitals", "Dentists", "Old People", "Children", "Homophobes", "Transphobes", "Racists", "Sexists", "Misogynists", "Misandrists",
                "People Who Don't Tip", "People Who Chew With Their Mouth Open", "People Who Talk Loudly", "People Who Don't Use Turn Signals",
                "People Who Cut In Line", "People Who Don't Cover Their Mouth When Coughing", "People Who Don't Wash Their Hands",
                "People Who Don't Flush Public Toilets", "People Who Don't Clean Up After Their Pets", "People Who Don't Respect Personal Space",
                "Mansplaining", "Gatekeeping", "Toxic Positivity", "Cancel Culture", "Influencers", "Reality TV Stars", "Social Media",
                "The Sitcom Friends", "Pineapple on Pizza", "The 1%", "The Government"
                ];
    const randomDislikes = [];
    while (randomDislikes.length < 3) {
        const randomDislike = dislikesList[Math.floor(Math.random() * dislikesList.length)];
        if (!randomDislikes.includes(randomDislike)) {
            randomDislikes.push(randomDislike);
        }
    }
    // Actually set the textarea value!
    document.getElementById("dislikes").value = randomDislikes.join(", ");
}

// Fixed function name and implementation
function getRandomTraits(traitsArray, count) {
    const shuffled = [...traitsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generatePersonality() {
    const numGood = Math.floor(Math.random() * 3) + 1;     // 1 to 3
    const numNeutral = Math.floor(Math.random() * 2) + 1;  // 1 to 2
    const numBad = Math.floor(Math.random() * 3) + 1;      // 1 to 3

    const good = getRandomTraits(goodTraits, numGood);
    const neutral = getRandomTraits(neutralTraits, numNeutral);
    const bad = getRandomTraits(badTraits, numBad);

    // Combine all traits into one array and join with commas
    const allTraits = [...good, ...neutral, ...bad];
    const personalityText = allTraits.join(", ");
    
    // Set the textarea value!
    document.getElementById("personality").value = personalityText;
}

function randomizeStyle() {
    //This function randomly selects an aesthetic style for the character from a predefined list.
    const styles = ["Casual", "Formal", "Sporty", "Gothic", "Punk", "Bohemian", "Vintage", "Futuristic", "Streetwear", "Preppy",
                    "Hipster", "Grunge", "Elegant", "Minimalist", "Maximalist", "Eclectic", "Androgynous", "Retro", "Art Deco",
                    "Cyberpunk", "Steampunk", "Avant-Garde", "Kawaii", "Lolita", "Gyaru", "Harajuku", "Athleisure", "Business Casual", "Rockabilly", "Pin-Up", "Military", "Cowboy",
                    "Nautical", "Hippie", "Skater", "Biker", "Surfer", "Fairycore", "90s", "80s", "70s", "60s", "Grunge", "Art Hoe", "E Boy/Girl", "Ethereal", "Dark Wave", "Pastel Goth",
                    "Luxe", "Glam", "Chic", "Boho-Chic", "Cottagecore", "Dark Academia", "Light Academia", "Coastal", "Rustic",
                    "Preppy", "Bubblegum Bitch", "Barbiecore", "Burlesque" 
                ];
    const style = styles[Math.floor(Math.random() * styles.length)];
    document.getElementById("style").value = style;
}

document.getElementById("characterForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const species = document.getElementById("species").value;
    const likes = document.getElementById("likes").value;
    const dislikes = document.getElementById("dislikes").value;
    const personality = document.getElementById("personality").value;
    const style = document.getElementById("style").value;

    const result = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Species:</strong> ${species}</p>
        <p><strong>Likes:</strong> ${likes}</p>
        <p><strong>Dislikes:</strong> ${dislikes}</p>
        <p><strong>Personality:</strong> ${personality}</p>
        <p><strong>Style:</strong> ${style}</p>
    `;
    document.getElementById("result").innerHTML = result;
});