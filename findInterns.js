const assert = require("assert");
const findFirstIntern = function(db, callback){
    // get interns collection
    const collection = db.collection("interns");
    //find documents from interns collection
    collection.findOne({}, function(err, res){
        assert.equal(err, null);
        console.log(res);
        callback(res);
    });
};
const findInternRatingSeven = function(db,callback){
    // get interns collection
    const collection = db.collection("interns");
    //find documents from interns collection
    collection.find({rating: 7}).toArray(function(err, res){
        assert.equal(err, null);
        console.log(res);
        callback(res);
    });
};
const findInternMovieTitles = function(db,callback){
    // get interns collection
    const collection = db.collection("interns");
    //find documents from interns collection
    collection.find({},
        { projection: {_id: 0, year: 0, rating: 0} }).toArray(function(err, res){
        assert.equal(err, null);
        console.log(res);
        callback(res);
    });
};
module.exports = {
    findFirstIntern: findFirstIntern, 
    findInternMovieTitles: findInternMovieTitles, 
    findInternRatingSeven: findInternRatingSeven
};