// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract EMR {

    struct EHR {
        string patient_name;
        mapping(address=>string) past_surgeries;
        string blood_grp;
        bool diabetic;
        mapping(address=>string) allergies;
        uint age;
        address payable patient_address;
    }

    struct HospitalData {
        uint key;
        string name;
        string addr;
        address manager;
    }

    address public Owner;
    uint HospitalCount=0;
    uint PatientCount=0;
    mapping(address => bool) public Hospitals;
    mapping(uint => address) public HospitalsAddr;
    mapping(address => bool) public Patients; 
    mapping(address => address) public Hospital_patients; //many to one
    mapping(address => address[]) public PatientsAddr;
    mapping(address => EHR) public Patients_EHR;
    mapping(address => HospitalData) public Hospital_Data;

    constructor() {
        Owner = 0x4104788980f0486eC9e183e04D63de81255cdEeE;
    }

   modifier restrictedToHospital() {
        require(Hospitals[msg.sender]);
        _;
    }

    modifier restrictedTopatients() {
        require(Patients[msg.sender]);
        _;
    }

    function Add_Hospitals(address Hospital,address manager,  string calldata name,string calldata addr) public  {
        require(msg.sender==Owner);
        HospitalData storage newHospitalData = Hospital_Data[Hospital];
        Hospitals[Hospital]=true;
        HospitalsAddr[HospitalCount]=Hospital;
        HospitalCount ++;
        newHospitalData.key=HospitalCount;
        newHospitalData.name=name;
        newHospitalData.addr=addr;
        newHospitalData.manager=manager;
    }

     function getHospitalsAddress() public view returns(address[] memory)
    {
      address[] memory ret = new address[](HospitalCount);
    for (uint i = 0; i < HospitalCount; i++) {
        ret[i]=HospitalsAddr[i];
    }
    return ret;
    }

    function getHospitalData(address Hospital) public view  returns (uint,string memory,string memory,address) 
    {
        return(
    Hospital_Data[Hospital].key,
    Hospital_Data[Hospital].name,
    Hospital_Data[Hospital].addr,
    Hospital_Data[Hospital].manager);

    }

    function Add_Patient(address patient) restrictedToHospital public  {
    
        Hospital_patients [patient] = msg.sender;
        PatientsAddr[msg.sender].push(patient);
        Patients[patient]=true;
        PatientCount ++;
    }

    function getPatientsAddress(address Hospital) public view returns(address[] memory)
    {
    return PatientsAddr[Hospital];
    }

    function Add_Patient_EHR(string calldata patient_name,string calldata past_surgeries, string calldata blood_grp, string calldata allergies,bool diabetic,uint age,address payable patient_address) restrictedToHospital public {
    require(Hospital_patients [patient_address] == msg.sender);
    EHR storage newEHR = Patients_EHR[patient_address];
    newEHR.patient_name=patient_name;
    newEHR.past_surgeries[patient_address]=past_surgeries;
    newEHR.blood_grp=blood_grp;
    newEHR.allergies[patient_address]=allergies;
    newEHR.diabetic=diabetic;
    newEHR.age=age;
    newEHR.patient_address=patient_address;

    }

    function updateEHR(address patient,string calldata patient_name,string calldata past_surgeries, string calldata blood_grp, bool diabetic,uint age,address payable patient_address) public restrictedToHospital{
    require(patient==Hospital_patients[msg.sender]);
    Patients_EHR[patient].patient_name=patient_name;
    Patients_EHR[patient].past_surgeries[patient]=past_surgeries;
    Patients_EHR[patient].blood_grp=blood_grp;
    Patients_EHR[patient].diabetic=diabetic;
    Patients_EHR[patient].age=age;
    Patients_EHR[patient].patient_address=patient_address;
    }

    function getEHRsummary(address patient) public view  returns (string memory,string memory,string memory, bool, uint,address) 
    {
        return(
    Patients_EHR[patient].patient_name,
    Patients_EHR[patient].past_surgeries[patient],
    Patients_EHR[patient].blood_grp,
    Patients_EHR[patient].diabetic,
    Patients_EHR[patient].age,
    Patients_EHR[patient].patient_address);
    }

    function Emergency_EHR_Transfer(address To,address From,address payable patient_address) public {
    require(Hospital_patients [patient_address] == msg.sender);
    require(msg.sender==Hospital_Data[From].manager);
    Hospital_patients[patient_address]=To;
    }

    function EHR_Transfer(address To,address From,address payable patient_address) public {
    require(Hospital_patients [patient_address] == From);
     Hospital_patients [patient_address] = To;
        PatientsAddr[To].push(patient_address);
    
    }

}