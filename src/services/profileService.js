import * as tokenService from '../services/tokenService'
import axios from 'axios'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

// const getProfileState = async (profileId) => {
//   const res = await fetch(`${BASE_URL}/${profileId}`, {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${tokenService.getToken()}`
//     },
//   })
//   return await res.json()
// }
const getProfileState = async (profileId) => {
  const res = await axios.get(`${BASE_URL}/${profileId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return res
}

const updateProfile = async (profileId, localState) => {
  const res = await fetch(`${BASE_URL}/${profileId}/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`,
     
    },
    body: JSON.stringify(localState) 
  })
  
  return await res.json()
}

export { getAllProfiles, addPhoto, getProfileState, updateProfile }
