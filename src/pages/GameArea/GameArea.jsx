import { updateProfile } from "../../services/profileService";
import { buildings } from "../../services/buildings";
import { useState, useEffect } from "react";
import { getProfileState } from "../../services/profileService";
import BuildingsContainer from "../../components/BuildingsContainer/BuildingsContainer";

const GameArea = ({ buildingsData, localState, setLocalState, setBuildingsPrices, setBuildingsData, currentTotalCPS }) => {

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



  let { cursors, cookies, grandmas, id } = localState


  return (
    <>
      <h1>Game Area</h1>
      <h3>Cookies: {Math.floor(cookies)}</h3>
      <h3>You are Making {currentTotalCPS} cookies per second.</h3>
      <button className="cookie" onClick={() => handleClick()}>This Is A Cookie</button>
      <button className="save-btn" onClick={() => handleSave()}>SAVE</button>
      <BuildingsContainer
        localState={localState}
        setLocalState={setLocalState}
        buildingsData={buildingsData}
        setBuildingsData={setBuildingsData}
        handlePurchase={handlePurchase}
      />
     
      <button onClick={() => setBuildingsPrices()}>fuck</button>
    </>
  );
}

export default GameArea;