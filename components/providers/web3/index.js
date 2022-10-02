const { createContext, useContext, useEffect, useState, useMemo } = require("react");
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { setupHooks } from "./hooks/setupHooks";
import { loadContract } from "@utils/loadcontract";
import { getHospitals } from "./hooks/getHospitals";
import { getHospitalsData } from "./hooks/getHospitalData";
import { getOwner } from "./hooks/getOwner";
import { isPatient } from "./hooks/isPatient";
import { getPatientEHR } from "./hooks/getPatientEHR";
import { isHospital } from "./hooks/isHospital";
import { getPatients } from "./hooks/getPatients";
const Web3Context = createContext(null)
export default function Web3Provider({children}) {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
    Hospitals:null,
    HospitalData:null,
    isaHospital:null,
    PatientData:null,
    Owner:null,
    account:null,
    Patient:null,
    PatientsEHR:null,
    isLoading: true,
    hooks: setupHooks()
  })
  const [array,setarray] =useState([]);
  const [array1,setarray1] =useState([]);

  
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

  useEffect(() => {
    const loadProvider = async () => {

      const provider = await detectEthereumProvider()
      if (provider) {
        const web3 = new Web3(provider)
        const contract = await loadContract("emr", web3)
        const Hospitals = await getHospitals(contract)
        const Owner= await getOwner(contract)
        const accounts= web3&&provider ? await web3.eth.getAccounts():null
        const Patient= accounts[0] ? await isPatient(contract,accounts[0]):null
        const PatientEHR=null
        const PatientsArray=null
        const isaHospital= accounts[0]?await isHospital(contract,accounts[0]):null
        if(isaHospital)
        {PatientsArray=await getPatients(contract,accounts[0])}
        if(Patient)
        { PatientEHR = await getPatientEHR(contract,accounts[0]) }

      Hospitals?.map(  (Hospital)=>{getHospitalsData(contract,Hospital)
        .then((res)=>{
         let arra = array;
         arra.push(res);
         
         let ar1 = getUniqueListBy(arra,'u.3');
         setarray(ar1);

        })})

        PatientsArray?.map(  (P)=>{ getPatientEHR(contract,P)
          .then((value)=>{
            let arr1 = array1
           arr1.push(value)
           let arr = getUniqueListBy(arr1,'u');
           setarray1(arr)
  
          })})

        setWeb3Api({
          provider,
          web3,
          contract,
          Hospitals,
          HospitalData:array,
          isaHospital,
          PatientData:array1,
          Owner,
          Patient,
          PatientEHR,
          isLoading: false,
          hooks: setupHooks(web3, provider)
        })
        
      } else {
        setWeb3Api(api => ({...api, isLoading: false}))
        console.error("Please, install Metamask.")
      }
    }
    loadProvider()
  }, [])

  const _web3Api = useMemo(() => {
    const { web3, provider, isLoading } = web3Api
    return {
      ...web3Api,
      // isWeb3Loaded: web3 != null,
      requireInstall: !isLoading && !web3 ,
      connect: provider ?
        async () => {
          try {
            await provider.request({method: "eth_requestAccounts"})
          } catch {
            location.reload()
          }
        } :
        () => console.error("Cannot connect to Metamask, try to reload your browser please.")
    }
  }, [web3Api])

  return (
    <Web3Context.Provider value={_web3Api}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  return useContext(Web3Context)
}

export function useHooks(cb) {
  const { hooks } = useWeb3()
  return cb(hooks)
}
