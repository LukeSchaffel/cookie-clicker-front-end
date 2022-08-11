import Building from "../Building/Building";

const BuildingsContainer = ({
  buildingsData, localState, setLocalState, setBuildingsPrices, setBuildingsData, handlePurchase
}) => {
  return (
    <>
      <div className="buildings-container">
        {buildingsData.map((building, i) => (
          <Building
            key={i}
            building={building}
            handlePurchase={handlePurchase}
          />
        ))}
      </div>
    </>

  );
}

export default BuildingsContainer;