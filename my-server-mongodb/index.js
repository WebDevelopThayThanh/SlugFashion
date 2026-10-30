const express = require('express');
const app = express();
const port = 3002;

const morgan=require("morgan")
app.use(morgan("combined"))

const path=require("path")
const fs = require('fs');
app.use(express.static(path.join(__dirname,"public")))

const cors=require("cors")
app.use(cors())
const bodyParser=require("body-parser")
app.use(bodyParser.json({ limit: '50mb' })); 
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.listen(port,()=>{
    console.log(`My Server listening on port ${port}`)
})

app.get("/",(req,res)=>{
    res.send("This Web server is processed for MongoDB")
})
const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData");      
fashionCollection = database.collection("Fashion");

app.get("/fashions",cors(),async (req,res)=>{   
    const result = await fashionCollection.find({}).toArray();
    res.send(result)
    }
)

app.get("/fashions/:id",cors(),async (req,res)=>{
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({_id:o_id}).toArray();    
    res.send(result[0])
    }
)

app.post("/fashions",cors(),async(req,res)=>{
    // Tự sinh IdF = số lớn nhất hiện có + 1
    const last = await fashionCollection.find().sort({ IdF: -1 }).limit(1).toArray();
    req.body.IdF = last.length ? last[0].IdF + 1 : 1;

    await fashionCollection.insertOne(req.body)
    res.send(req.body)
})
app.put("/fashions",cors(),async(req,res)=>{       
    //update json Fashion into database
    await fashionCollection.updateOne(
        {_id:new ObjectId(req.body._id)},//condition for update
        { $set: { //Field for updating
                style: req.body.style,
                fashion_subject:req.body.fashion_subject,
                fashion_detail:req.body.fashion_detail,
                fashion_image:req.body.fashion_image
            } 
        }
        )
    //send Fahsion after updating
    var o_id = new ObjectId(req.body._id);
    const result = await fashionCollection.find({_id:o_id}).toArray();    
    res.send(result[0])
})
app.delete("/fashions/:id",cors(),async(req,res)=>{   
    //find detail Fashion with id
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({_id:o_id}).toArray(); 
    //update json Fashion into database
    await fashionCollection.deleteOne(
        {_id:o_id}
        )
    //send Fashion after remove
    res.send(result[0])
})










