export const isHospital= async (contract,account) =>{
    const isaHospital= await contract.methods.Hospitals(account).call()
    return isaHospital
    }