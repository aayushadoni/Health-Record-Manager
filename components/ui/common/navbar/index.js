



import { useWeb3 } from "@components/providers"
import Link from "next/link"
import { Button } from "@components/ui/common"
import { useAccount } from "@components/hooks/web3"
import { useNetwork } from "@components/hooks/web3"
import { useState } from "react"
import HospitalModal from "@components/ui/Hospital/Hospitalmodal"
import AddPaients from "@components/ui/ehr/PatientModal/AddPatient"
export default function Navbar() {
  const [Open,setOpen]=useState(null)
  const [Open2,setOpen2]=useState(null)
  const { connect, isLoading, web3,Owner,Patient,contract,isaHospital } = useWeb3()
  const AddHospital= async (Hospital)=>{
            
    try {
                const result = await contract.methods.Add_Hospitals(
                  Hospital.HospitalWalletAddress,Hospital.ManagerWalletAddress,Hospital.HospitalName,Hospital.HospitalAddress
                ).send({from: account.data})
                console.log(result)
              } catch {
                console.error("Purchase course: Operation has failed.")
              }
        }

        const AddPa= async (P)=>{
            
          try {
                      const result = await contract.methods.Add_Patient(
                      P.PatientWalletAddress
                      ).send({from: account.data})
                      console.log(result)
                      try {
                        const result2 = await contract.methods.Add_Patient_EHR(
                          P.PatientName,P.PastSurgeries,P.BloodGrp,P.Allergies,P.Diabetic,
                          P.Age,P.PatientWalletAddress
                        ).send({from: account.data})
                        console.log(result2)
                      } catch {
                        console.error("Purchase course: Operation has failed.")
                      }
                    } catch {
                      console.error("Purchase course: Operation has failed.")
                    }
              }

  const { account } = useAccount()
  const { network } = useNetwork()
  return (
    <section>
      <div className="relative py-2 px-4 sm:px-6 lg:px-8 border-4 bg-slate-800 rounded-xl mt-7">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between items-center ">
            <div>
              
             <Link href="/" >
                <a
                  className="font-medium  mr-8 text-white hover:text-sky-400">
                  Home
                </a>
              </Link>
              {account.data==Owner?
              <Link href="/Hospitals" >
                <a
                  className="font-medium mr-8 text-white hover:text-sky-400">
                  Hospitals
                </a>
              </Link>:<></>}
              {(Patient)?
              <Link href="/EHR" >
                <a
                  className="font-medium mr-8 text-white hover:text-sky-400">
                  EHR
                </a>
              </Link>:<></>}

              { (isaHospital) ?<Link href="/Patients" >
                <a
                  className="font-medium mr-8 text-white hover:text-sky-400">
                  Patients
                </a>
              </Link>:<></>}

            </div>
            <div>
              { account.data==Owner?
                <button
                  className="font-medium mr-8 text-white hover:text-sky-400"
                  onClick={()=>setOpen(true)}>
                  Add Hospitals
                </button>:<></>}

                { isaHospital?
                <button
                  className="font-medium mr-8 text-white hover:text-sky-400"
                  onClick={()=>setOpen2(true)}>
                  Add Patients
                </button>:<></>}
              
              { isLoading ?
                <Button
                  disabled={true}
                  onClick={connect}>
                    Loading...
                </Button> :
                web3 != null ?
                account.data ?
                (<Button
                  hoverable={false}
                  className="cursor-default bg-slate-400 text-white border-0 text-lg">
                  Hi there !
                </Button>) :
                <Button
                  onClick={connect}>
                  Connect
                </Button> :
                <Button
                  onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
                  Install Metamask
                </Button>
              }
            </div>
          </div>
        </nav>
      </div>
      { account.data &&
        <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
          <div className="text-white bg-slate-400 rounded-md mt-2 p-3">
            {account.data}
          </div>
        </div>
      }

      <HospitalModal bool={Open} onSubmit={AddHospital} onClose={()=>setOpen(false)}/>
      <AddPaients bool={Open2} onSubmit={AddPa} onClose={()=>setOpen2(false)} />
    </section>
  )
}
