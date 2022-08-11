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
import './App.css'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profileState, setProfileState] = useState([])
  const navigate = useNavigate()
  const [localState, setLocalState] = useState([])
  const [buildingsData, setBuildingsData] = useState(buildings)
  const [currentTotalCPS, setCurrentTotalCPS] = useState(0)


  const getAndSet = async () => {
    const data = await getProfileState(user.profile)
    const info = data.data
    if (info) {
      setLocalState(info)

    }
  }
  useEffect(() => {
    if (user) {
      getAndSet(user.profile)
    }
  }, [])
  useEffect(() => {
    updateBuildingInfo()
  }, [localState])

 
  //make cookies from buildings
  useEffect(() => {
    const building = buildingsData[0];
    const { baseCPS, owned } = building
    
    const timer = setInterval(() => {
      if (localState.cookies && owned > 0) {
          setLocalState(localState => {
            return {
              ...localState,
              cookies: localState.cookies + 
              (buildingsData[0].currentCPS * buildingsData[0].owned) +
              (buildingsData[1].currentCPS * buildingsData[1].owned) +
             (buildingsData[2].currentCPS * buildingsData[2].owned) +
             (buildingsData[3].currentCPS * buildingsData[3].owned) +
             (buildingsData[4].currentCPS * buildingsData[4].owned) +
             (buildingsData[5].currentCPS * buildingsData[5].owned) +
             (buildingsData[6].currentCPS * buildingsData[6].owned)
            }
          })
        }
      }, 1000)
      return () => clearInterval(timer)
  }, [localState])



  const updateBuildingInfo = () => {
    let acc = 0
    const newData = buildingsData.map((building) => {
      const owned = localState[building.name] > 0 ? localState[building.name] : 0
      building.currentPrice = owned > 0 ? Math.ceil(building.basePrice * Math.pow(1.5, owned)) : building.basePrice
      building.upgrades.forEach((upgrade, i) => {
        if (upgrade.owned && !upgrade.active) {
          upgrade.effect()
          upgrade.active = true
        }
      })
      building.owned = owned
      acc += building.currentCPS * owned
      return building
    })
    setCurrentTotalCPS(acc > 0 ? acc : 0)
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
      <main>
      {user ?
        <GameArea profile={profileState} buildingsData={buildingsData} localState={localState} updateBuildingInfo={updateBuildingInfo} setBuildingsData={setBuildingsData} setLocalState={setLocalState} refresh={refresh} 
        currentTotalCPS={currentTotalCPS}
        />
        : null}
        </main>
    </>
  )
}

export default App
