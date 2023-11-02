const { MongoClient } = require("mongodb");
const fs = require("fs");

// MongoDB connection URI (replace with your own)
const uri = "mongodb://127.0.0.1:27017/company";

async function importPersons() {
  // Read the JSON file
  const jsonFileData = fs.readFileSync("Persons.json", "utf8");
  const persons = jsonFileData;

  // Connect to the MongoDB server
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("fisrt");

    // Get a reference to the database and collection
    const database = client.db("company");
    console.log("second");
    const collection = database.collection("persons");
    console.log();"third"
    // Insert the JSON documents into the collection
    console.log("Type of persons:", Array.isArray(persons));
    const result = await collection.insertMany(persons);

    console.log(`${result.insertedCount} documents inserted.`);
  }
   finally {
    // Close the MongoDB connection
    await client.close();
  }
}

// Call the importPersons function
importPersons().catch(console.error);
