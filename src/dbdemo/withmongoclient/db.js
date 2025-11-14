//db.js
import { MongoClient } from "mongodb";


const uri = process.env.MONGO_URI || "mongodb://localhost:27017/demodb"
const client = new MongoClient(uri);

try {
    // connect to Mongodb
    await client.connect();
    console.log("connected to MOnngodb!");

    // select databse 
    const db = client.db("demoDB");

    // select collection 
    const studdentCollection = db.collection("student");

    // insert a douc
    await studdentCollection.insertOne({name:"YAsh",age:"Nineteen",enrolled:"yes"});

    //query docu
    const student = await studdentCollection.find({age:22}).toArray();
    
} catch (err) {
    console.error("error connecting:",err);
}finally{
    await client.close();
}