const mongoClient = require("mongodb").MongoClient;
//const createInterns = require("./interns");
const findInterns = require("./findInterns");
const updateInterns = require("./updateInterns");
//connection url
const url = "mongodb://localhost:27017/vipul_aggarwal_099"
//Database to connect to
const dbName = "vipul_aggarwal_099";
const client = new mongoClient(url,{ useUnifiedTopology: true, useNewUrlParser: true });
client.connect(function(err){
    if (err) throw err;
    console.log("Database created by vipul_aggarwal_099");
    const db = client.db(dbName);
     createInterns(db,function(result){
         console.log(result);
         client.close
     });

    findInterns.findFirstIntern(db, function(){
        client.close;
    });
    findInterns.findInternMovieTitles(db, function(){
        client.close;
    });
    findInterns.findInternRatingSeven(db, function(){
        client.close;
    });

    updateInterns(db, function(){
        client.close;
    });
});