const assert = require("assert");
const updateInterns = function(db, callback){
    // get the intern collection
    const collection = db.collection("interns");
    //update the intern collection
    let newValue = { $set:{ movie: "Iron Man", year: 2008, rating: 7.9} }
    collection.updateMany({ movie: "The Banker"}, newValue, function(err,res){
        if(err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        callback(res);
    });
};
module.exports = updateInterns;