

import { Modal,Button } from "@components/ui/common";
import { useEffect, useState } from "react";

const DefaultHospital = {
    PatientWalletAddress: "",
    PatientName:"",
    PastSurgeries: "",
    BloodGrp: "",
    Allergies:"",
    Diabetic:"",
    Age:""
  }

export default function AddPaients({bool, onClose, onSubmit}) {
  const [isOpen, setIsOpen] = useState(false)
  const [P, setP] = useState(DefaultHospital)
  useEffect(() => {
    if (bool) {
      setIsOpen(true)
    }
  }, [bool])

  const closeModal = () => {
    setIsOpen(false)
    onClose()
  }

  return (
    <Modal isOpen={isOpen}>
      <div className="inline-block justify-center align-bottom bg-white rounded-lg text-left overflow-auto shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="mb-7 text-lg font-bold leading-6 text-gray-900" id="modal-title">
                Add Patient
              </h3>
              <div className="mt-1 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-1 font-bold">Patient's Wallet Address</label>
                  <div className="text-xs text-gray-700 flex">
                
                  </div>
                </div>
                <input

                  onChange={({target: {value}}) => {
                    setP({
                      ...P,
                      PatientWalletAddress: value
                    })
                  }}

                  type="text"
                  name="PatientWalletAddress"
                  id="PatientWalletAddress"
                  className="disabled:opacity-50 w-80 mb-1 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0x75121f7c896602009e98Eeb53C336Fc0cDd5C4fb"
                />
                
              </div>
              <div className="mt-1 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Name</label>
                </div>
                <input

                  onChange={({target: {value}}) => {
                    setP({
                      ...P,
                      PatientName: value
                    })
                  }}

                  type="text"
                  name="PatientName"
                  id="PatientName"
                  className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0xaB954600206A68687397189c42A4202A2d77c0e4"
                />
              </div>
              <div className="mt-1 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Past Surgeries</label>
                </div>
                <input

                  onChange={({target: {value}}) => {
                    setP({
                      ...P,
                      PastSurgeries: value
                    })
                  }}

                  type="text"
                  name="PastSurgeries"
                  id="PastSugeries"
                  className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0xaB954600206A68687397189c42A4202A2d77c0e4"
                />
              </div>
              <div className="my-1 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Blood Grp</label>
                </div>
                <input

                  onChange={({target: {value}}) => {
                    setP({
                      ...P,
                      BloodGrp: value
                    })
                  }}

                  type="text"
                  name="BloodGrp"
                  id="BloodGrp"
                  className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md" placeholder="ABC1" />
              </div>
              <div className="my-1 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Allergies</label>
                </div>
                <input

                   onChange={({target: {value}}) => {
                    setP({
                      ...P,
                      Allergies: value
                    })
                  }}
                
                  type="text"
                  name="Allergies"
                  id="Allergies"
                  className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md" placeholder="XYZ1" />
              </div>
              <div className="my-1 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Diabetic</label>
                </div>
                <input

                   onChange={({target: {value}}) => {
                    setP({
                      ...P,
                      Diabetic: value
                    })
                  }}
                
                  type="text"
                  name="Allergies"
                  id="Allergies"
                  className="w-full focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md" placeholder="XYZ1" />
              </div>
              <div className="my-1 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-1 font-bold">Age</label>
                </div>
                <input

                   onChange={({target: {value}}) => {
                    setP({
                      ...P,
                      Age: value
                    })
                  }}
                
                  type="text"
                  name="Allergies"
                  id="Allergies"
                  className="w-full focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md" placeholder="XYZ1" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 w-full px-4 py-3 sm:px-6 sm:flex">
          <Button
          onClick={()=>onSubmit(P)} className='bg-gray-400 hover:bg-gray-400 m-2'>
            Submit
          </Button>
          <Button
            onClick={closeModal}
            className='m-2'
            variant="red">
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  )
}
