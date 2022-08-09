const GameArea = ({ profile }) => {
  const { cursors, cookies, grandmas } = profile
  return (
  <>
  <h1>Game Area</h1>
  <h3>Cookies: {cookies}</h3>
  </>
  );
}

export default GameArea;