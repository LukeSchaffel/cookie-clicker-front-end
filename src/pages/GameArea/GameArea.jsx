import { updateProfile } from "../../services/profileService";


const GameArea = ({ profile, refresh, localState, setLocalState }) => {
  

  const handleClick = () => {
    setLocalState(localState => {
      return {
        ...localState,
        cookies: cookies + 1
      }
    })
  }
  console.log(localState._id);

  const handleSave = () => {
    updateProfile(localState._id, localState)
  }

  let { cursors, cookies, grandmas, id } = localState
  return (
    <>
      <h1>Game Area</h1>
      <h3>Cookies: {cookies}</h3>
      <button className="cookie" onClick={()=> handleClick()}>This Is A Cookie</button>
      <button className="save-btn" onClick={() => handleSave()}>SAVE</button>
    </>
  );
}

export default GameArea;