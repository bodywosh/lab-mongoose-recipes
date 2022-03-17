const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return //Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    /*const newRecipe = Recipe.create({
      title: "Saucisson Nutella",
      level: "Amateur Chef",
      ingredients: [
        "1/2 Nutella",
        "5 Saucisson",
      ],
      cuisine: "Comfort food",
      dishType: "main_course",
      duration: 40,
      creator: "Chef Tristan"
    })*/
    //Recipe.insertMany(data)
    const query = { title: "Rigatoni alla Genovese" };
    
    //return Recipe.findOneAndUpdate(query, { duration: 100})
    return Recipe.deleteOne({ title: 'Carrot Cake' })
  })
  .then(() => {
    return mongoose.connection.close()
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  