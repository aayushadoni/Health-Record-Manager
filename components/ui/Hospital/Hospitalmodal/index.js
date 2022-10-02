

import { Modal,Button } from "@components/ui/common";
import { useEffect, useState } from "react";

const DefaultHospital = {
    HospitalWalletAddress: "",
    ManagerWalletAddress: "",
    HospitalName: "",
    HospitalAddress:""
  }

export default function HospitalModal({bool, onClose, onSubmit}) {
  const [isOpen, setIsOpen] = useState(false)
  const [Hospital, setHospital] = useState(DefaultHospital)
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
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="mb-7 text-lg font-bold leading-6 text-gray-900" id="modal-title">
                Add Hospital
              </h3>
              <div className="mt-1 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Hospital's Wallet Address</label>
                  <div className="text-xs text-gray-700 flex">
                
                  </div>
                </div>
                <input

                  onChange={({target: {value}}) => {
                    setHospital({
                      ...Hospital,
                      HospitalWalletAddress: value
                    })
                  }}

                  type="text"
                  name="HospitalWalletAddress"
                  id="HospitalWalletAdderss"
                  className="disabled:opacity-50 w-80 mb-1 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0x75121f7c896602009e98Eeb53C336Fc0cDd5C4fb"
                />
                
              </div>
              <div className="mt-2 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Manager's Wallet Address</label>
                </div>
                <input

                  onChange={({target: {value}}) => {
                    setHospital({
                      ...Hospital,
                      ManagerWalletAddress: value
                    })
                  }}

                  type="text"
                  name="ManagerWalletAddress"
                  id="ManagerWalletAddress"
                  className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0xaB954600206A68687397189c42A4202A2d77c0e4"
                />
              </div>
              <div className="my-2 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Hospital's Name</label>
                </div>
                <input

                  onChange={({target: {value}}) => {
                    setHospital({
                      ...Hospital,
                      HospitalName: value
                    })
                  }}

                  type="text"
                  name="HospitalName"
                  id="HospitalName"
                  className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md" placeholder="ABC1" />
              </div>
              <div className="my-2 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Hospital's Address</label>
                </div>
                <input

                   onChange={({target: {value}}) => {
                    setHospital({
                      ...Hospital,
                      HospitalAddress: value
                    })
                  }}
                
                  type="text"
                  name="HospitalAddress"
                  id="HospitalAddress"
                  className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md" placeholder="XYZ1" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex">
          <Button
          onClick={()=>onSubmit(Hospital)}>
            Submit
          </Button>
          <Button
            onClick={closeModal}
            variant="red">
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  )
}
