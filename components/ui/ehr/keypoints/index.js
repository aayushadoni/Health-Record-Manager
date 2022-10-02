
import { useWeb3 } from "@components/providers"

export default function Keypoints() {
const {PatientEHR}=useWeb3()
console.log(PatientEHR)
const array=[PatientEHR[0],PatientEHR[1],PatientEHR[2],PatientEHR[3],PatientEHR[4],PatientEHR[5]]
  return (
    <section>
      <div className="py-12 bg-slate-800">
                <h5 className=" text-center tracking-wide font-serif text-xl text-white font-bold">Patient EHR (Electronic Health Record)</h5>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0  md:grid md:grid-cols-2 md:gap-x-14 md:gap-y-10 px-11 py-5">
            <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-400 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Patient Name</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">
                  {array[0]}
                </dd>
              </div>
            <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-400 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Past Surgeries</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">
                  {array[1]}
                </dd>
              </div>
            <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-400 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Patient Blood Group</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">
                  {array[2]}
                </dd>
              </div>
            <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-400 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Diabetic</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">
                  {array[3]?"Yes":"No"}
                </dd>
              </div>
            <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-400 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Patient's Age</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">
                  {array[4]}
                </dd>
              </div>
            <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-400 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">Patient Address</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">
                  {array[5]}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}