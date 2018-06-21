
// write a function to grab a random value from each array and log to the console
console.log('startup running')
var thisArray = ["Skynet", "Digital Music Distribution",
  "FitBit", "Realtime Data", "ManPacks", "Landing Page",
  "Conversion Funnel", "Social Network", "Airbnb", "SnapChat",
  "Bang With Friends", "HTML5 App", "Google Analytics", "Mapreduce Query",
  "Node.js Server", "KickStarter", "Match.com", "Adultfriendfinder",
  "Pinterest", "Amber Alert System", "Groupon", "Appstore", "Digital Magazine",
  "Distributed Social Network", "Quadcopter", "Daring Fireball",
  "Content Distribution Network", "Analytics Platform", "OpenTable",
  "LinkedIn", "Brick and Mortar Solution", "Aggregator", "Social Game", "jQuery Plugin", "Game-based Incentive", "Foursquare", "YouTube", "WeedMaps", "Texts From Last Night", "Ponzi Scheme", "1-800-Flowers", "Cash4Gold", "Online Marketplace", "Viral Marketer", "Wearable Computer", "Google Glass App", "Facebook Marketplace", "Zivity", "Playboy", "Cloud Storage Provider", "Kindle Fire App", "Pandora", "Green Tech Program", "Eco-Friendly Marketplace",
  "Netflix", "Amazon", "Zappos", "Reddit", "Enron", "Wordpress", "iPhone App", "Android App", "Meme Generator", "Crowdsourcing App", "Mac App", "SEO Optimizer", "Apartment Guide", "Social CRM", "Database Abstraction Layer", "Microblogging Service", "Product Curation Service", "API", "New Social Platform", "Tumblr", "Deal Finder", "CPA Ad Network", "Collaborative Filter", "Shopping Site", "Digg 2.0",
  "Recommendation Engine", "News Recommender", "Neural Network", "Tesseract OCR engine", "Unreadable CAPTCHA", "Mobile Ecosystem", "Flickr", "Salesforce.com", "Twitter Filter", "Wikipedia", "Yelp"];

var thatArray = ["Facebook Platform", "Erlang Enthusiasts", "Ex-Girlfriends",
  "Mitt Romney's Hair", "Laundromats", "Celebrity Gossip", "Endangered Species", "Pandas", "Middle Schoolers", "Alpha Phi Girls", "Funeral Homes", "Chinese Take-out", "Ex-Convicts", "Fast Casual Restaurants", "Marketers", "Qualifying Leads", "Funeral Homes", "Farmers", "Cougars", "Pilots", "Gynecologists",
  "Cracked iPhone Apps", "Stolen Goods", "Adult Dancers", "People Who Hate Groupon", "Hunters", "Sysadmins", "Bath Salts", "Nootropics", "California", "Government Corruption", "Political Attack Ads", "Whiskey Lovers", "Parking Tickets", "Highway Accidents", "Traveling", "Airlines", "Presentation Tools", "Your Boss", "Ponzi Schemes", "Your Finances", "Restroom Attendants", "Your Aquarium", "Your Cat's Litter Box", "Pets", "Alcoholics",
  "Camp Counselors", "Nature Blogs", "World of Warcraft", "Models", "Family Guy Enthusiasts", "The Army", "Cheap Vodka", "Tech Incubators", "Star Trek Conventions", "Presentation Tools", "Small Businesses", "Beer", "Nightclub Lines", "Semi-Active Volcanoes", "Sanctimonial Artifacts", "Traveling Abroad", "Your Mom", "Billionaires", "Happy Hours", "Ugg Boots", "The Homeless", "Blacking Out", "Red Wine", "Happy Families", "Social Outcasts",
  "Surgeons", "Pounding Jagger Bombs", "Textbooks", "Coffee Shops", "Baristas"];

// create a random interger between two variables
// worked out I didn't need this function

// function getRandomInt(max) {
//   min = 0
//   max = Math.floor(max)
//   return Math.floor(Math.random()*(max - min + 1)) + min
//   Math.floor(Math.random()*max.length)
// }

//create an array to save the values
var startUpList = []

// create a function 

function startUp(arr1, arr2, arr3) {
    // get random numbers based on the length of the arrays
    var firstRand = Math.floor(Math.random() * arr1.length)
    var secondRand = Math.floor(Math.random() * arr2.length)
    // log the result
    console.log(arr1[firstRand] + ' for ' + arr2[secondRand])
    // push results
    arr3.push(arr1[firstRand] + ' for ' + arr2[secondRand])
    // if 
    if (arr3.length  === 4){
      console.log(' 1. ' + arr3[0] + ' 2. ' + arr3[1] + ' 3. ' + arr3[2] + ' 4. ' + arr3[3] + ' 5. ' + arr3[4])
    }
}



