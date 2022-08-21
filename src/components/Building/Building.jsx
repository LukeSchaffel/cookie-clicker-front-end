import UpgradesContainer from "../UpgradesContainer/UpgradesContainer";
import { Button } from "react-bootstrap";

const Building = ({ building, handlePurchase, handlePurchaseUpgrade, localState }) => {

  return (
    <>
      <article className="building">
        <header>
          <h3>{building.name} </h3>
          <h4> Owned : {building.owned}</h4>
        </header>
        <div className="info-div">
          <h4>Current Price : {building.currentPrice} Cookies</h4>
        <Button variant='success' onClick={() => { handlePurchase(building.name) }}> Purchase </Button>

        </div>
        <div>
          <UpgradesContainer
            upgrades={building.upgrades}
            handlePurchaseUpgrade={handlePurchaseUpgrade}
            localState={localState}
          />
        </div>
      </article>
    </>
  );
}

export default Building;