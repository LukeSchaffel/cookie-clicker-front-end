import { addOneCookie } from "../../services/profileService";


const GameArea = ({ profile, refresh }) => {
  const { cursors, cookies, grandmas, id } = profile

  const handleClick = () => {
    addOneCookie(profile._id)
    refresh()
  }
  return (
    <>
      <h1>Game Area</h1>
      <h3>Cookies: {cookies}</h3>
      <button className="cookie" onClick={() => handleClick()}>This Is A Cookie</button>
    </>
  );
}

export default GameArea;