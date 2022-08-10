const BuildingsContainer = ({ 
  buildingsData, localState, setLocalState, setBuildingsPrices, setBuildingsData, handlePurchase
}) => {
  return (
    <>
      <div className="buildings-container">
        {buildingsData.map((building, i) => (

          <div key={i}>
            <h3> You have {building.owned} {building.name} </h3>
            <button className="purchase-cursor" onClick={() => { handlePurchase(building.name) }}> Purchase {building.name} for {Math.floor(building.currentPrice)} Cookies</button>
          </div>
        ))}
      </div>
    </>

  );
}

export default BuildingsContainer;