import { updateProfile } from "../../services/profileService";
import { buildings } from "../../services/buildings";
import { useState, useEffect } from "react";
import { getProfileState } from "../../services/profileService";

const GameArea = ({ buildingsData, localState, setLocalState, setBuildingsPrices, setBuildingsData }) => {
  // const [buildingsData, setBuildingsData] = useState(buildings)
  

  // useEffect(()=> {
  //  const newShit = setBuildingsPrices()
  //  console.log(newShit);
  // })

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

  
  // const setBuildingsPrices = () => {
  //   return buildingsData.map((building) => {
  //     return building.price = building.basePrice * Math.pow(1.5, localState[building.name])
  //   })
    
  // }

  

  

  let { cursors, cookies, grandmas, id } = localState
  return (
    <>
      <h1>Game Area</h1>
      <h3>Cookies: {cookies}</h3>
      <button className="cookie" onClick={() => handleClick()}>This Is A Cookie</button>
      <button className="save-btn" onClick={() => handleSave()}>SAVE</button>
      <button className="purchase-cursor" onClick={() => { handlePurchase('cursors') }}>Purchase Cursor for {buildingsData[0].currentPrice} Cookies</button>
      <button onClick={() => setBuildingsPrices()}>fuck</button>
    </>
  );
}

export default GameArea;