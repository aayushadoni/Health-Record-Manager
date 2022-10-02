export const getPatientEHR= async (contract,address) =>{
    const PatientEHR= await contract.methods.getEHRsummary(address).call()
    return PatientEHR
    }