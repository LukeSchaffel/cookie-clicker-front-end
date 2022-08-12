const Upgrade = ({upgrade, handlePurchaseUpgrade}) => {

  return ( 
  <>
  {!upgrade.owned ? <button 
    onClick={() => handlePurchaseUpgrade(upgrade)}
    className="upgrade-btn">
      {upgrade.name} for {upgrade.basePrice} cookies
    </button>: null}
    
  </> 
  );
}
 
export default Upgrade;