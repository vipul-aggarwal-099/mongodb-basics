var mongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost: 27017/vipul_aggarwal_099';
mongoClient.connect(url, function (err, db) {
if (err) throw err
console. log('Database created by vipul-aggarwal-099!');
db.close();
});
