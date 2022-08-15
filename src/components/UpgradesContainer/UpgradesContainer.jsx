import Upgrade from "../Upgrade/Upgrade";
import { useState, useEffect } from "react";

const UpgradesContainer = ({ upgrades, handlePurchaseUpgrade }) => {
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
  }, [])


  return (
    <>
      <article className="upgrades-container">
        <header>
          <h3>Upgrades:</h3>
        </header>
        <div className="available-upgrades">
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
      </article>
    </>
  );
}

export default UpgradesContainer;