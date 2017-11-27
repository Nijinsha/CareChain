pragma solidity ^0.4.4;

contract CareRecord{
    
    
    struct Record{
        uint64 uid;
        string datetime;
        string disease;

    }
    mapping(uint256 => Record) public records;
    struct Patient{
        uint64 uid;
        string birthdate;
        uint16 height;
        uint16 weight;
        string btype; 
        uint128[] recindex;
    }
    mapping(uint64 => Patient) public patients;
    function createPatient(uint64 uid )public returns (bool){
        
        patients[uid].uid= uid;
        return true;
    }
    function updatePatient(uint64 uid,string birthdate,uint16 height,uint16 weight,string btype)public returns(bool){
        
        patients[uid].birthdate = birthdate;
        patients[uid].height = height;
        patients[uid].weight = weight;
        patients[uid].btype = btype;
        return true;
    }
    function createRecord(uint64 uid,uint64 rid,string datetime,string disease)public returns (bool){
        
        uint128 realrid = uid+rid;
        records[realrid].datetime = datetime;
        records[realrid].disease = disease;
        patients[uid].recindex.push(realrid);
        return true;       
    }  
    function getpatient(uint64 uid )public constant returns (Patient){
       return patients[uid];
       
    }
    function getrecords(uint64 uid )public constant returns (uint128[]){
    
       return patients[uid].recindex;
       
    }
    function getrecords(uint128 rid )public constant returns (Record){
            return records[rid];
       
       
    }

    function CareRecord(string _greeting) public {
       return;
    }
}