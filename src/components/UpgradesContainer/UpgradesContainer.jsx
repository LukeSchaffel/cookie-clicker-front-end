import Upgrade from "../Upgrade/Upgrade";
import { useState, useEffect } from "react";

const UpgradesContainer = ({ upgrades, handlePurchaseUpgrade }) => {
  const [availableUpgrades, setAvailableUpgrades] = useState(upgrades)
  const [ownedUpgrades, setOwnedUpgrades] = useState([])

  return (
    <>
      <article>
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

        </div>
      </article>
    </>
  );
}

export default UpgradesContainer;