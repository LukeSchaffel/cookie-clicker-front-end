import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Upgrade = ({ upgrade, handlePurchaseUpgrade }) => {
  const { owned, condition } = upgrade
  const [available, setAvailable]= useState(condition())


  return (
    <>
      {!owned ?
        <div>
          {available ? 
          <Button
            variant='outline-success'
            onClick={() => handlePurchaseUpgrade(upgrade)}
            className="upgrade-btn">
            {upgrade.name} for {upgrade.basePrice} cookies
          </Button> 
          :
          <Button
            variant='outline-danger'
            onClick={() => handlePurchaseUpgrade(upgrade)}
            className="upgrade-btn">
            {upgrade.name} for {upgrade.basePrice} cookies
          </Button> 


          }
        </div>
        :

        <div>
          <h6>
            {upgrade.name}
          </h6>
        </div>
      }

    </>
  );
}

export default Upgrade;