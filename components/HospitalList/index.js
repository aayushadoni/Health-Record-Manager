import Image from "next/image"

export default function HospitalList({Hospitals}) {
    return (
      <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        { Hospitals.map((Hospital) =>
          <div
            key={Hospital.id}
            className="bg-slate-800 border-2 rounded-xl  shadow-md overflow-hidden md:max-w-2xl hover:border-sky-400 hover:animate-pulse :">
            <div className="flex h-full">
            <div className="flex h-full">
                <Image
                  className="object-cover"
                  src={Hospital.coverImage}
                  layout="fixed"
                  width="200"
                  height="230"
                  alt={Hospital.title}
                />
              </div>
              <div className="p-8">
                <div
                  className="uppercase tracking-wide text-sm text-sky-400 font-semibold">
                  {Hospital.type}
                </div>
                <div
                  className="block mt-1 text-lg leading-tight font-medium text-white">
                  {Hospital.title}
                </div>
                <p
                  className="mt-2 text-gray-400">
                  {Hospital.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    )
  }