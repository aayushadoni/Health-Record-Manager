
export const getHospitals = async (contract) =>{
const Hospitals = await contract.methods.getHospitalsAddress().call()
return Hospitals
}

     