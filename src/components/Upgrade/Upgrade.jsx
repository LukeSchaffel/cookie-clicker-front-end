const Upgrade = ({upgrade, handlePurchaseUpgrade}) => {

  return ( 
  <>
    <button 
    onClick={() => handlePurchaseUpgrade(upgrade)}
    className="upgrade-btn">
      {upgrade.name}
    </button>
  </> 
  );
}
 
export default Upgrade;