import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import GameArea from './pages/GameArea/GameArea'
import { getProfileState } from './services/profileService'
import { buildings } from './services/buildings'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profileState, setProfileState] = useState([])
  const navigate = useNavigate()
  const [localState, setLocalState] = useState({})
  const [buildingsData, setBuildingsData] = useState(buildings)

  
  const getAndSet = async () => {
    const data = await getProfileState(user.profile)
    const info = data.data
    setLocalState(info)
  }
  useEffect(() => {
    getAndSet(user.profile)
  }, [])
  useEffect(() => {
    setBuildingsPrices()
  }, [localState])

  const setBuildingsPrices = () => {
    const newData = buildingsData.map((building) => {
      const numOfBuildings = localState[building]
      building.currentPrice = building.basePrice * Math.pow(1.5, localState[building.name])
      return building
    })
    setBuildingsData(newData)
  }
  


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  // useEffect(() => {
  //   getProfileState(user.profile)
  //   .then(state => {
  //     setProfileState(state)
  //     setLocalState(state)
  //     console.log(localState);
  //   })
  // }, [])
 

  

  const refresh = () => {
    getProfileState(user.profile)
    .then(state => {
      setProfileState(state)
    })
  }

 

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <GameArea profile={profileState} buildingsData={buildingsData} localState={localState} setBuildingsPrices={setBuildingsPrices} setBuildingsData={setBuildingsData} setLocalState={setLocalState} refresh={refresh}/>
    </>
  )
}

export default App
