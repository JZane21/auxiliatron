import { useEffect, useState } from "react";
import "./App.css";
import { pokeAPI, internarAPI } from "./services/apis";
import { PokeCard } from "./components/PokeCard";
import { Box, Card, CardActions, IconButton } from "@mui/material";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonCaptured, setPokemonCaptured] = useState([]);
  // const [buttonClick, setButtonClick] = useState<boolean>(false);
  const [click, setClick] = useState<boolean>(false);
  useEffect(() => {
    pokeAPI
      .get("pokemon/")
      .then((response) => {
        setPokemones(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    internarAPI
      .get("/pokemons")
      .then((response) => {
        setPokemonCaptured(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const [showCaptures, setShowCaptures] = useState(false);

  const generateRandom = () => {
    return Math.round(Math.random() * 19);
  };

  useEffect(() => {
    const randomList = [0, 0, 0];
    const equals: boolean = false;
    do {
      randomList[0] = generateRandom();
      do {
        randomList[1] = generateRandom();
      } while (randomList[1] === randomList[0]);
      do {
        randomList[2] = generateRandom();
      } while (
        randomList[2] === randomList[0] ||
        randomList[2] === randomList[1]
      );
    } while (equals);
    setRandomNumbers(randomList);
  }, [click]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pokemones.map((pokemon, index) => {
          if (randomNumbers.includes(index)) {
            return (
              <PokeCard
                key={`${pokemon.name}-${index}`}
                urlImage={pokemon.url}
                namePokemon={pokemon.name}
                click={click}
                setClick={setClick}
                libre={true}
                listCapturados={pokemonCaptured}
                setListCapturados={setPokemonCaptured}
              />
            );
          }
        })}
      </Box>
      <Card sx={{ width: "max-content", margin: "10px" }}>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => setShowCaptures(!showCaptures)}
            aria-label="add to favorites"
            sx={{
              paddign: "4px",
              borderRadius: "10px",
              textAlign: "center",
              color: "black",
              backgroundColor: "yellow",
            }}
          >
            Ver pokemones capturados
          </IconButton>
        </CardActions>
      </Card>
      {/* <Card sx={{ width: "max-content", margin: "10px" }}>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => setButtonClick(!buttonClick)}
            aria-label="add to favorites"
            sx={{
              paddign: "4px",
              borderRadius: "10px",
              textAlign: "center",
              color: "black",
              backgroundColor: "yellow",
            }}
          >
            CLICK
          </IconButton>
        </CardActions>
      </Card> */}
      {showCaptures && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pokemonCaptured.map((item, index) => (
              <PokeCard
                key={`${item.name}-${index}`}
                imageU={item.type}
                namePokemon={item.name}
                libre={false}
              />
            ))}
          </Box>
        </>
      )}
    </>
  );
}

export default App;
