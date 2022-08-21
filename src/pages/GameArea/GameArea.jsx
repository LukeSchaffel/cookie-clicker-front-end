import { updateProfile } from "../../services/profileService";
import { buildings } from "../../services/buildings";
import { useState, useEffect } from "react";
import { getProfileState } from "../../services/profileService";
import BuildingsContainer from "../../components/BuildingsContainer/BuildingsContainer";
import Button from "react-bootstrap/Button";

const GameArea = ({
  buildingsData, localState, setLocalState, setBuildingsData, currentTotalCPS, clickStrength, user
}) => {

  const [autoSave, setAutoSave] = useState(false)

  const handleClick = () => {
    setLocalState(localState => {
      return {
        ...localState,
        cookies: cookies + (1 * clickStrength)
      }
    })
  }

  const handleSave = () => {
    updateProfile(localState._id, localState)
  }

  const handlePurchase = (building) => {
    const current = buildingsData.filter((item) => {
      return item.name === building
    })

    const price = current[0].currentPrice
    if (localState.cookies >= price) {
      localState[building]++
      setLocalState((localState) => {
        return {
          ...localState,
          cookies: cookies - price,
        }
      })
    }
  }

  const handlePurchaseUpgrade = (upgrade) => {
    if (!(localState.upgrades.includes(upgrade.name)) && localState.cookies >= upgrade.basePrice) {
      localState.upgrades.push(upgrade.name)
      localState.cookies -= upgrade.basePrice
      setLocalState(localState => {
        return {
          ...localState
        }
      })
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (autoSave && localState._id !== undefined) {
        handleSave()
      }
    }, 10000)
    return () => clearInterval(timer)
  }, [autoSave])


  let { cookies } = localState


  return (
    <>
      <h1>Cookie Clicker. Click the Cookie.</h1>
      <h3>Cookies: {Math.floor(localState.cookies)}</h3>
      <h3>You are Making {currentTotalCPS} cookies per second.</h3>
      <h3>Click Strength: {clickStrength}</h3>
      <button className="cookie" onClick={() => handleClick()}><img className="cookie" src="https://pngimg.com/uploads/cookie/cookie_PNG13656.png" alt="cookie" /></button>
      <div className="save-container">
        <Button
          className="save-btn"
          onClick={() => handleSave()}>
          SAVE
        </Button>

        <Button
          className="save-btn"
          onClick={() => { setAutoSave(!autoSave) }}>
          AutoSave is {autoSave ? 'ON' : 'OFF'}
        </Button>
      </div>
      <BuildingsContainer
        localState={localState}
        setLocalState={setLocalState}
        buildingsData={buildingsData}
        setBuildingsData={setBuildingsData}
        handlePurchase={handlePurchase}
        handlePurchaseUpgrade={handlePurchaseUpgrade}
      />
    </>
  );
}

export default GameArea;