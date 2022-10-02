import Image from "next/image";
import { BaseLayout } from "@components/ui/layout";
import { useWeb3 } from "@components/providers";
export default function HospitalsPage() {
const {HospitalData}=useWeb3()
    return (
      <section className="grid md:grid-cols-2 rounded-xl lg:grid-cols-4 gap-6 mb-5 mt-5 p-5">
        { HospitalData?.map((Hospital) =>
          <div
            key={Hospital[0]}
            className="bg-slate-800 border-2 rounded-xl shadow-md overflow-hidden md:max-w-xl hover:border-sky-400 hover:scale-105">
            <div className="flex-col h-full ">
            <div className="flex next-image-wrapper">
                <Image
                src="/josue-soto-E2HeA71Folo-unsplash.jpg"
                  className="object-cover"
                  layout="fixed"
                  width="200"
                  height="230"
                  alt="aa"
                />
              </div>
              <div className="p-8">
                <div
                  className="uppercase tracking-wide text-sm text-sky-400 font-bold">
                  {Hospital[0]}
                </div>
                <div
                  className="block mt-1 text-lg leading-tight font-bold text-white">
                  {Hospital[1]}
                </div>
                <p
                  className="mt-2 text-gray-400">
                  {Hospital[2]}
                </p>
                <div className="mt-4">
            </div>
              </div>
            </div>
          </div>
        )}
      </section>
    )
  }

  HospitalsPage.Layout = BaseLayout