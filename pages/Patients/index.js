
import Image from "next/image"
import { Button } from "@components/ui/common"
import { BaseLayout } from "@components/ui/layout"
import { useWeb3 } from "@components/providers"
import TransferModal from "@components/ui/ehr/PatientModal/TransferPatient"
import { useState } from "react"
import { useAccount } from "@components/hooks/web3"
import Link from "next/link"
export default function PatientsPage() {
const {PatientData}=useWeb3()
const [Open,setOpen]=useState(null)
const[data,setdata]=useState(null)
const{contract}=useWeb3()
const {account}=useAccount()

  const Transfer = async (Data)=>{
            
    try {
                const result = await contract.methods.EHR_Transfer(
                  Data.HospitalWalletAddress2,Data.HospitalWalletAddress1,Data.PatientWalletAddress
                ).send({from: account.data})
                console.log(result)
              } catch {
                console.error("Purchase course: Operation has failed.")
              }
        }

  return (
    <>
      <div className="py-4">
      </div>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5 mt-5 p-5">
      { PatientData?.map( P =>
        <div
        className="bg-slate-800 border-2 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:border-sky-400 hover:scale-105 hover:animate-pulse">
        <div className="flex-col h-full">
          <div className="flex justify-center next-image-wrapper">
            <Image
            src="/icon-5359553_1280.webp"
              className="object-cover"
              layout="fixed"
              width="200"
              height="230"
              alt="gg"
            />
          </div>
          <div className="p-8 flex-2">
            <div
              className="uppercase tracking-wide text-sm text-sky-400 font-bold">
              {P[0]}
            </div>
              <a
                className="h-12 block mt-1 text-lg leading-tight font-bold text-white hover:underline">
                {P[1]}
              </a>
            
            <p
              className="mt-2 text-gray-400">
              {P[2]}
            </p>

            <p
              className="mt-2 text-gray-400">
              {P[3]}
            </p>
             <div className="mt-4 ">
              <Button className = 'w-full bg-gray-400 text-white'  variant="lightPurple"
              onClick={()=>{setOpen(true),setdata(P[5])}}>
                Transfer
              </Button>
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
    {console.log(data)}
    <TransferModal bool={Open} onSubmit={Transfer} onClose={()=>setOpen(false)} padd={data}/>
    </>
  )
}


PatientsPage.Layout = BaseLayout