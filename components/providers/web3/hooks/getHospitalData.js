
export const getHospitalsData = async (contract,address) =>{
    const HospitalsData = await contract.methods.getHospitalData(address).call()
    return HospitalsData
    }
    
         