
export const getPatients = async (contract,address) =>{
    const PatientsArray = await contract.methods.getPatientsAddress(address).call()
    return PatientsArray
    }