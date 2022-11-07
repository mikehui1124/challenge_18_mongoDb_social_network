const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Grace',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const emails = [
  'user01@email.com',
  'user02@email.com',
  'user03@email.com',
  'user04@email.com',
  'user05@email.com',
  'user06@email.com',
  'user07@email.com',
  'user08@email.com',
  'user09@email.com',
  'user10@email.com',
  'user11@email.com',
];


const thoughtTexts = [
  'Decision Tracker',
  'Find My Phone',
  'Learn Piano',
  'Starbase Defender',
  'Tower Defense',
  'Monopoly Money Manager',
  'Movie trailers',
  'Hello world',
  'Stupid Social Media App',
  'Notes',
  'Messages',
  'Email',
  'Compass',
  'Firefox',
  'Running app',
  'Cooking app',
  'Poker',
  'Deliveries',
];

const listReactions = [
  'html',
  'css',
  'javascript',
  'typescript',
  'go',
  'cpp',
  'python',
  'rust',
  'React',
  'React Native',
  'NextJS',
  'Tailwind',
  'Vue',
  'mongodb',
  'sql',
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomName = () =>
  `${getRandomArrItem(names)}`;

// Gets a random email
const getRandomEmail = () =>
  `${getRandomArrItem(emails)}`;

// Function to generate random thoughts that we can add to the database. Includes a thought's reactions.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      
      thoughtText: getRandomArrItem(thoughtTexts),
      username: getRandomArrItem(names),
      reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

// Create the tags that will be added to each application
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(listReactions);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(listReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomEmail, getRandomThoughts };
