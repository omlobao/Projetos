const { ObjectId } = require("mongodb");

const mongoClient = require("mongodb").mongoClient;
const objectId = require("mongodb").objectId;

debugger
mongoClient.conect("mongodb://127.0.0.1",
{useUnifieldTopology: true, enableUtf8Validation: false})
.then(conn => global.conn = conn.db("loja"))
.catch(err => console.log(err))


function findAll(){
    return global.conn.collection("produtos").find().toArray();

}
function findOne(chave){
    return global.conn.collection("produtos")
    .findOne({_id: ObjectId(chave)});
}
function insert(produto){
    return global.conn.collection ("produtos")
    .insertOne(produto);
}
function deleteOne(chave){
    return global.conn.collection("produtos")
    .deleteOne({_id: ObjectId(chave)});
}

module.exports = { findAll, insert, deleteOne, findOne}