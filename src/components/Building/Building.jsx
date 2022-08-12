import UpgradesContainer from "../UpgradesContainer/UpgradesContainer";

const Building = ({ building, handlePurchase, handlePurchaseUpgrade }) => {

  return (
    <>
      <article>
        <header>
          <h3> You have {building.owned} {building.name} </h3>
        </header>
        <button className="purchase-cursor" onClick={() => { handlePurchase(building.name) }}> Purchase {building.name} for {Math.floor(building.currentPrice)} Cookies</button>
        <div>
          <UpgradesContainer
            upgrades={building.upgrades}
            handlePurchaseUpgrade={handlePurchaseUpgrade}
          />
        </div>
      </article>
    </>
  );
}

export default Building;