import { updateProfile } from "../../services/profileService";
import { buildings } from "../../services/buildings";
import { useState, useEffect } from "react";
import { getProfileState } from "../../services/profileService";
import BuildingsContainer from "../../components/BuildingsContainer/BuildingsContainer";

const GameArea = ({ buildingsData, localState, setLocalState, setBuildingsData, currentTotalCPS }) => {

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

  const handlePurchaseUpgrade = (upgrade) => {
    if (!(localState.upgrades.includes(upgrade))) {
      localState.upgrades.push(upgrade)
    } 
    console.log(localState.upgrades);
  }



  let { cursors, cookies, grandmas, id } = localState


  return (
    <>
      <h1>Cookie Clicker. Click the Cookie.</h1>
      <h3>Cookies: {Math.floor(cookies)}</h3>
      <h3>You are Making {currentTotalCPS} cookies per second.</h3>
      <button className="cookie" onClick={() => handleClick()}><img className="cookie" src="https://pngimg.com/uploads/cookie/cookie_PNG13656.png" alt="cookie" /></button>
      <button className="save-btn" onClick={() => handleSave()}>SAVE</button>
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