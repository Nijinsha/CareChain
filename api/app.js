var express = require('express');
var uniqid = require('uniqid');
var app = express();
var Web3            = require('web3'),
path            = require('path'),
crJSON  = require(path.join(__dirname, '../build/contracts/CareRecord.json'));
var acc = '0xc343d09273ff3db84059c293c8f9ab0b6d3ba292';
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:9545"));
var contract = new web3.eth.Contract(crJSON.abi,'0x345ca3e014aaf5dca488057592ee47305d9b3e10')
// const contract = new web3.eth.Contract(crJSON.abi);
// contract.deploy({
//     data: crJSON.bytecode,
//     arguments: ["abc"]
// })
// .send({ 
//     from: "0x0d1d4e623d10f9fba5db95830f7d3839406c6af2",
//     gas: 1500000,
//     gasPrice: '30000000000000'
// }, function(error, transactionHash){
    

// });

var qrid;
var data;
var usrid;
contract.deploy({
    data: crJSON.bytecode,
    arguments: ['lol']
})
.send({
    from: acc,
    gas: 1500000,
    gasPrice: '300000'
});
contract.methods.createPatient(44).send({from: acc},function(error, result){
    console.log(result)
    
 });


// contract.methods.getbirth(12112).call({from: acc}, function(error, result){
//         console.log(result)
//         console.log(error)
//      });
app.get('/key',(req,res)=>{
    var uid = uniquid(); 
    usrid=uid;   
    res.send(uid)
});
app.get('/view',(req,res)=>{
    contract.methods.getbirth(44).call({from: acc})
    .then(function(res){
        console.log(res);
    });
})
app.post('/insert',(req,res)=>{
    var data = req.body;
    var qrid = uniqid();
    res.send({
        'qrid': qrid
    });
})
app.post('/qr',(req,res)=>{
    var id = req.body.key;
    var gotqrid = req.body.qrid;
    var rid = uniqid();
    if(gotqrid == qrid){
        contract.methods.createRecord(id,rid,"26-11-2017",data).send({from: acc}, function(error, result){
        console.log(result);
        
        
       
     });
    }
})
app.listen(3000,()=>{
    console.log("server running");
});