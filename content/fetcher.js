

import Hospitals from "./index.json"

export const getAllHospitals = () => {

  return {
    data: Hospitals,
    HospitalMap: Hospitals.reduce((a, c, i) => {
      a[c.id] = c
      a[c.id].index = i
      return a
    }, {})
  }
}