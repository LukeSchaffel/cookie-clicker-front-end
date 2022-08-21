import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Upgrade = ({ upgrade, handlePurchaseUpgrade, localState }) => {
  const { owned, condition } = upgrade
  const [available, setAvailable]= useState(false)

  useEffect(() => {
    if (condition() && upgrade.basePrice <= localState.cookies) {
      setAvailable(true)
    } else {
      setAvailable(false)
    }
  })

  return (
    <>
        <div>
          {available ? 
          <Button
            variant='success'
            onClick={() => handlePurchaseUpgrade(upgrade)}
            className="upgrade-btn">
            {upgrade.name} for {upgrade.basePrice} cookies
          </Button> 
          :
          <Button
            variant='danger'
            
            className="upgrade-btn">
            {upgrade.name} for {upgrade.basePrice} cookies
          </Button>
          }
        </div>
      

    </>
  );
}

export default Upgrade;