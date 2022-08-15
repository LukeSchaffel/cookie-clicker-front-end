import Building from "../Building/Building";

const BuildingsContainer = (
  {
  buildingsData, localState, setLocalState, setBuildingsPrices, setBuildingsData, handlePurchase, handlePurchaseUpgrade
}) => {
 
  return (
    <>
      <div className="buildings-container">
        {buildingsData.map((building, i) => (
          <Building
            key={i}
            building={building}
            handlePurchase={handlePurchase}
            handlePurchaseUpgrade={handlePurchaseUpgrade}
            localState={localState}
          />
        ))}
      </div>
    </>

  );
}

export default BuildingsContainer;