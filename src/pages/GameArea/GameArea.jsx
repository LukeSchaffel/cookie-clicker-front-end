import { updateProfile } from "../../services/profileService";
import { buildings } from "../../services/buildings";
import { useState, useEffect } from "react";
import { getProfileState } from "../../services/profileService";

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
    let current 
    for (let i = 0; i < buildingsData.length; i++) {
      const element = buildingsData[i];
      if (element.name === building) {
        current = element
        break
      }
    }
    console.log(current);
    const price = current.currentPrice

    if (localState.cookies >= price) {
      localState[building]++
      setLocalState((localState) => {
        return {
          ...localState,
          cookies: cookies - price,
        }
      })
    }
    console.log(localState);
  }
  const setBuildingsPrices =  () => {
    for (let i = 0; i < buildingsData.length; i++) {
      const building = buildingsData[i];
      building.currentPrice = building.basePrice * Math.pow(1.5, localState[building.name])
      
    }
    setBuildingsData((buildingsData) => {
      return {
        ...buildingsData
      }
    })
   console.log(buildingsData);
  }

 
  
  let { cursors, cookies, grandmas, id } = localState
  return (
    <>
      <h1>Game Area</h1>
      <h3>Cookies: {cookies}</h3>
      <button className="cookie" onClick={() => handleClick()}>This Is A Cookie</button>
      <button className="save-btn" onClick={() => handleSave()}>SAVE</button>
      <button className="purchase-cursor" onClick={() => { handlePurchase('cursors') }}>Purchase Cursor</button>
      <button onClick={()=> setBuildingsPrices() }>fuck</button>
    </>
  );
}

export default GameArea;