import { addOneCookie } from "../../services/profileService";


const GameArea = ({ profile }) => {
  const { cursors, cookies, grandmas, id } = profile
  
  return (
  <>
  <h1>Game Area</h1>
  <h3>Cookies: {cookies}</h3>
  <button className="cookie" onClick={() => addOneCookie(profile._id)}>This Is A Cookie</button>
  </>
  );
}

export default GameArea;