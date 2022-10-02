
import { useWeb3 } from "@components/providers";
import { Modal,Button } from "@components/ui/common";
import { useEffect, useState } from "react";
import { useAccount } from "@components/hooks/web3";
const DefaultData = {
    HospitalWalletAddress1: "",
    HospitalWalletAddress2: "",
    PatientWalletAddress:""
  }

export default function TransferModal({bool, onClose, onSubmit,padd}) {
  const [isOpen, setIsOpen] = useState(false)
  const [Data, setData] = useState(DefaultData)
  const {account}=useAccount()
Data.HospitalWalletAddress1=account.data
Data.PatientWalletAddress=padd
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
                Transfer Patient
              </h3>
              <div className="mt-2 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Hospital's Wallet Address</label>
                </div>
                <input

                  onChange={({target: {value}}) => {
                    setData({
                      ...Data,
                      HospitalWalletAddress2: value
                    })
                  }}

                  type="text"
                  name="HospitalWalletAddress"
                  id="HopspitalWalletAddress"
                  className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0xaB954600206A68687397189c42A4202A2d77c0e4"
                />
              </div>
              
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex">
          <Button
          onClick={()=>onSubmit(Data)}>
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
