export const getOwner = async (contract) =>{
    const Owner = await contract.methods.Owner().call()
    return Owner
    }
    