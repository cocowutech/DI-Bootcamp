let quotes = {
    "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
    "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
    "- Will Rogers": '"Don’t Let Yesterday Take Up Too Much Of Today."',
    "- Unknown": '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
    "- Vince Lombardi": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
    "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
    "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
    "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
    "- Florence Nightingale": '"I attribute my success to this: I never gave or took any excuse."',
    "- Michael Jordan": '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
    "- Babe Ruth": '"Every strike brings me closer to the next home run."',
    "- John Lennon": '"Life is what happens to you while you’re busy making other plans."',
    "- Earl Nightingale": '"We become what we think about."',
    "- Mark Twain": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
    "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
    "- Buddah": '"The mind is everything. What you think you become."',
    "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
    "- Woody Allen": '"Eighty percent of success is showing up."',
    "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
    "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
    "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
    "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    "- Maya Angelou": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
    "- Jim Rohn": '"Either you run the day, or the day runs you."',
    "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
    "- Frank Sinatra": '"The best revenge is massive success."',
    "- Zig Ziglar": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
    "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
    "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
    "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
    "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
    "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."'
  };

// fundemantal reviews

// let list1 = ['Walt Disney','The Way Get Started Is To Quit Talking And Begin Doing.']
// 
// let list2 = ['Winston Churchill','The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.']
// 
// console.log(list1[0],list1[1])
// 
// let quotes2 = [list1,list2]
// console.log(quotes2[1][0],"qoute: ",quotes2[1][1])

// console.log(Object.keys(quotes)[0])
// 
// console.log(quotes['- Walt Disney'])



// Task1


function getRandomQuote() {
  let rndNum = Math.random();
  let authorIndex = rndNum * (Object.keys(quotes).length-1)
  authorIndex = Math.floor(authorIndex)
  console.log(authorIndex)
  // let authorIndex =Math.floor(Math.random(Object.keys(quotes).length-1));
  // console.log(num)
  // 2. access that no. of key and value 
  let authorName =Object.keys(quotes)[authorIndex]

  quoteAuthor = {
    name:authorName,
    quote:quotes[authorName]  }
  return quoteAuthor;
  
}

function updateQuoteContent(quoteAuthor){
  let quoteEle = document.getElementById("quoteContent");
  let authorEle = document.getElementById("authorName");
  quoteEle.innerText = quoteAuthor.quote
  authorEle.innerText = quoteAuthor.name
}


function updateRandomQuoteContent(){
  let quoteAuthor = getRandomQuote();
  updateQuoteContent(quoteAuthor);
}



// Task2
// Function to handle the retrieval of the input value
function getInputValue() {
  // Select the input element
  let inputQuoteEle = document.getElementById("inputQuote");
  let inputAuthorEle = document.getElementById("inputAuthor");

  // Get the value of the input field
  let inputQuoteValue = inputQuoteEle.value;
  let inputAuthorValue = inputAuthorEle.value;

  // Do something with the value
  let newQuoteEle = document.getElementById("newQuotes");
  quotes[inputAuthorValue] = inputQuoteValue;
  console.log(quotes)

  newQuoteEle.innerText = newQuoteEle.innerText + inputQuoteValue + " by " + inputAuthorValue + "\n";
}

// Add an event listener to the button
//document.getElementById("myButton").addEventListener("click", getInputValue);

// Display Quotes Dictionary in newQuotes
function immediateQuotes() {
  
  let newQuoteEle = document.getElementById("newQuotes");
  let num = 0
  let authorNames = Object.keys(quotes)
  while (num < authorNames.length) {
    newQuoteEle.innerText = newQuoteEle.innerText + quotes[authorNames[num]]+ authorNames[num] + "\n"
    num += 1;
  } 

}
immediateQuotes()


// Instructions
// Part 1 : Quote Generator
// Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…

// Populate the array with a few quotes that you like.

// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.


// Part 2 : Add Buttons
// In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

// In the HTML file, under the displayed quote, create a few more buttons:
// A button that gives the number of character inside each quote (space included)
// A button that gives the number of character inside each quote (space NOT included)
// A button that gives the number of words in each quote
// A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.