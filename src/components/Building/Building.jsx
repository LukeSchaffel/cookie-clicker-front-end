const Building = ({building, handlePurchase}) => {

  return (
  <>
      <div>
        <h3> You have {building.owned} {building.name} </h3>
        <button className="purchase-cursor" onClick={() => { handlePurchase(building.name) }}> Purchase {building.name} for {Math.floor(building.currentPrice)} Cookies</button>
        <h3>{building.upgrades[0].name}</h3>
        </div>
      </>
      );
}

      export default Building;