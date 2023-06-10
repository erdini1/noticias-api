import { Container, Grid, Typography } from "@mui/material"
// Desde typeography se utiliza todo lo que es texto. Container es para un contenedor. Grid es para tener una cuadricula en el diseño
import Formulario from "./components/Formulario"
import ListadoNoticias from "./components/ListadoNoticias"
import { NoticiasProvider } from "./context/NoticiasProvider"

function App() {

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography
            align="center"
            marginY={5}
            component={"h1"}
            variant="h3"
          >
            Buscador de Noticias
          </Typography>
        </header>

        {/* Debe haber un segundo grid porque el de arriab solo le dice que va a ser un grid, el hijo ya va a ser un elemento del grid de arriba por lo que lleva un elemento   */}
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <Formulario />
        </Grid>

        <ListadoNoticias />

      </Container>
    </NoticiasProvider>
  )
}

export default App
