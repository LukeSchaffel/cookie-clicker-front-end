const Building = ({ building, handlePurchase }) => {

  return (
    <>
      <article>
        <header>
          <h3> You have {building.owned} {building.name} </h3>
        </header>
        <button className="purchase-cursor" onClick={() => { handlePurchase(building.name) }}> Purchase {building.name} for {Math.floor(building.currentPrice)} Cookies</button>
        
      </article>
    </>
  );
}

export default Building;