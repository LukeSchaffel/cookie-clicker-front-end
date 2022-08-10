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
    setBuildingsPrices()
  }, [localState])

  //cursors
  useEffect(() => {
      const building = buildingsData[0];
      const { baseCPS, owned } = building
      const timer = setInterval(() => {
        if (localState.cookies && owned > 0) {
          setLocalState(localState => {
            return {
              ...localState,
              cookies: localState.cookies + baseCPS * owned
            }
          })
        }
      }, 1000)
      return () => clearInterval(timer)
  }, [localState])

  //grandmas
  useEffect(() => {
      const building = buildingsData[1];
      const { baseCPS, owned } = building
      const timer = setInterval(() => {
        if (localState.cookies && owned > 0) {
          setLocalState(localState => {
            return {
              ...localState,
              cookies: localState.cookies + baseCPS * owned
            }
          })
        }
      }, 1000)
      return () => clearInterval(timer)
  }, [localState])

 
  //farms
  useEffect(() => {
      const building = buildingsData[2];
      const { baseCPS, owned } = building
      const timer = setInterval(() => {
        if (localState.cookies) {
          setLocalState(localState => {
            return {
              ...localState,
              cookies: localState.cookies + baseCPS * owned
            }
          })
        }
      }, 1000)
      return () => clearInterval(timer)
  }, [localState])




  const setBuildingsPrices = () => {
    let acc = 0
    const newData = buildingsData.map((building) => {
      acc += building.baseCPS * building.owned
      building.currentPrice = Math.ceil(building.basePrice * Math.pow(1.5, localState[building.name]))
      building.owned = localState[building.name]
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
      <main>
      {user ?
        <GameArea profile={profileState} buildingsData={buildingsData} localState={localState} setBuildingsPrices={setBuildingsPrices} setBuildingsData={setBuildingsData} setLocalState={setLocalState} refresh={refresh} 
        currentTotalCPS={currentTotalCPS}
        />
        : null}
        </main>
    </>
  )
}

export default App
