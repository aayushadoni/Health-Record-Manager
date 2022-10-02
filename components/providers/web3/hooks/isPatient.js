export const isPatient= async (contract,account) =>{
    const isPatient= await contract.methods.Patients(account).call()
    return isPatient
    }