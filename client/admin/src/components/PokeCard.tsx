import { memo, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import axios from "axios";
import { internarAPI } from "../services/apis";

interface Props {
  namePokemon: string;
  urlImage?: string;
  imageU?: string;
  click?: boolean;
  setClick?: (param: boolean) => void;
  libre: boolean;
  listCapturados?: any;
  setListCapturados?: any;
}

export const PokeCard = memo(
  ({
    namePokemon,
    urlImage,
    click,
    setClick,
    imageU,
    libre,
    listCapturados,
    setListCapturados,
  }: Props) => {
    const [image, setImage] = useState<string>("");

    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };

    const getImagePokemon = async () => {
      if (urlImage !== undefined) {
        await axios
          .create({
            baseURL: urlImage, // Cambia esta URL por tu API
            timeout: 10000, // Tiempo máximo de espera para las solicitudes (en milisegundos)
            headers: {
              "Content-Type": "application/json",
              // Aquí puedes agregar otros encabezados si es necesario
            },
          })
          .get("/")
          .then((response) => {
            const { sprites } = response.data;
            setImage(sprites.front_default);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };

    // if (!libre) {
    //   console.log("Renderizando Pokemon Esclavizado");
    // } else {
    //   console.log("Renderizando Pokemon Liberado");
    // }

    useEffect(() => {
      getImagePokemon();
      if (imageU !== undefined) {
        setImage(imageU);
      }
    }, []);

    const addPokemonCaptured = () => {
      const pokemomNuevo = {
        name: namePokemon,
        type: image,
      };
      internarAPI.post("/pokemons", pokemomNuevo);
      setListCapturados([...listCapturados, pokemomNuevo]);
    };

    return (
      <Card sx={{ width: 345, margin: "10px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <CardMedia
                component="img"
                height="50x"
                image={image}
                alt={urlImage}
              />
            </Avatar>
          }
          title={namePokemon}
        />
        <CardMedia component="img" height="194" image={image} alt={urlImage} />
        {libre && (
          <CardActions disableSpacing>
            <IconButton
              onClick={() => {
                if (libre) {
                  addPokemonCaptured();
                  if (setClick !== undefined && click !== undefined) {
                    setClick(!click);
                  }
                }
              }}
              aria-label="add to favorites"
              sx={{
                paddign: "4px",
                borderRadius: "10px",
                textAlign: "center",
                color: "black",
                backgroundColor: "yellow",
              }}
            >
              capturar
            </IconButton>
          </CardActions>
        )}
      </Card>
    );
  },
  (prevProps, nextProps) => {
    return !prevProps.libre && !nextProps.libre;
  }
);
