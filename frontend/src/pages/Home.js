import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";

const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get that data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
       
        {/* <h2>Upcoming Games</h2> */}
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        {/* <h2>Popular Games</h2> */}
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        {/* <h2>New Games</h2> */}
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
/* display: grid; */
display: flex;
/* margin: 50px; */

  /* padding: 0rem 5rem; */
  h2 {
    padding: 5rem 0rem;
  }
  
`;

const Games = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(365px, 0fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  margin: 25px;
`;

export default Home;
