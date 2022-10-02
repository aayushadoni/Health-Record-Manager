import { Hero } from "@components/ui/common"
import { BaseLayout } from "@components/ui/layout"
import HospitalList from "@components/HospitalList"
import  {getAllHospitals}  from "@content/fetcher"

export default function Home({Hospitals}) {
  return (
    <>
      <Hero />
      
      <HospitalList
        Hospitals={Hospitals}
      />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllHospitals()
  return {
    props: {
      Hospitals: data
    }
  }
}

Home.Layout = BaseLayout