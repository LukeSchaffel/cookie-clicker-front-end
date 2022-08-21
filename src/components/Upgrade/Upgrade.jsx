import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Upgrade = ({ upgrade, handlePurchaseUpgrade }) => {
  const { owned, condition } = upgrade
  const [available, setAvailable]= useState(false)
  useEffect(() => {
    setAvailable(condition())
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