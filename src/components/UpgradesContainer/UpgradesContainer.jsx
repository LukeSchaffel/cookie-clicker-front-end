import Upgrade from "../Upgrade/Upgrade";
import { useState, useEffect } from "react";

const UpgradesContainer = ({ upgrades, handlePurchaseUpgrade, localState }) => {
  const [availableUpgrades, setAvailableUpgrades] = useState([])
  const [ownedUpgrades, setOwnedUpgrades] = useState([])
  const [hiddenUpgrades, setHiddenUpgrades] = useState(true)


  useEffect(() => {
    const unOwned = []
    const alreadyOwned = []
    upgrades.forEach((upgrade) => {
      if (upgrade.owned === false) {
        unOwned.push(upgrade)
      } else {
        alreadyOwned.push(upgrade)
      }
    })
    setAvailableUpgrades(unOwned)
    setOwnedUpgrades(alreadyOwned)
  }, [localState, upgrades])

  return (
    <>
      <article className="upgrades-container">
        <header>
          <h3>Upgrades:</h3>
        </header>
        {availableUpgrades.length > 0 ?
          <div className="available-upgrades">
            <h3>Available Upgrades: </h3>
            <ul>
              {availableUpgrades.map((upgrade, idx) => (
                <li key={idx}>
                  <Upgrade
                    upgrade={upgrade}
                    handlePurchaseUpgrade={handlePurchaseUpgrade}
                  />
                </li>
              ))}
            </ul>
          </div>
          : null
        }

        {
          ownedUpgrades.length > 1 ?
        <div className="owned-upgrades">
          <button onClick={() => setHiddenUpgrades(!hiddenUpgrades)}>My Upgrades:</button>
          {!hiddenUpgrades ?
            <ul>
              {ownedUpgrades.map((upgrade, idx) => (
                <li key={idx}>
                  {upgrade.name}
                </li>
              ))}
            </ul> : null
          }
        </div>
:null}
      </article>
    </>
  );
}

export default UpgradesContainer;