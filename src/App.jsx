import { Container, Grid, Typography } from "@mui/material"
// Desde typeography se utiliza todo lo que es texto. Container es para un contenedor. Grid es para tener una cuadricula en el diseño

function App() {

  return (
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
    </Container>
  )
}

export default App
