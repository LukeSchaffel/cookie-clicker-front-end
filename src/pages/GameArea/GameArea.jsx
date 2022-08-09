import { updateProfile } from "../../services/profileService";
import { buildings } from "../../services/buildings";
import { useState, useEffect } from "react";

const GameArea = ({ profile, refresh, localState, setLocalState }) => {
  const [buildingsData, setBuildingsData] = useState(buildings)

  const handleClick = () => {
    setLocalState(localState => {
      return {
        ...localState,
        cookies: cookies + 1
      }
    })
  }

  const handleSave = () => {
    updateProfile(localState._id, localState)
  }

  const handlePurchase = (building) => {
    const price = buildings[building].basePrice * Math.pow(1.5, localState[building])

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

  const setBuildingsPrices = () => {
    console.log(buildingsData);
  }

  useEffect(() => {
    setBuildingsPrices()
  }, [])

  let { cursors, cookies, grandmas, id } = localState
  return (
    <>
      <h1>Game Area</h1>
      <h3>Cookies: {cookies}</h3>
      <button className="cookie" onClick={() => handleClick()}>This Is A Cookie</button>
      <button className="save-btn" onClick={() => handleSave()}>SAVE</button>
      <button className="purchase-cursor" onClick={() => { handlePurchase('cursors') }}>Purchase Cursor</button>
    </>
  );
}

export default GameArea;