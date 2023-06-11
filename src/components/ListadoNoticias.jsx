import { Grid, Typography, Stack, Pagination } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

const ListadoNoticias = () => {

    const { noticias } = useNoticias()

    return (
        <>
            <Typography
                textAlign={"center"}
                marginY={5}
                variant="h3"
                component={"h2"}
            >
                Última Noticias
            </Typography>

            <Grid
                container
                spacing={2}
            >
                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid>

            <Stack
                sx={{
                    marginY: 5
                }}
                spacing={2}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Pagination count={10} color="primary" />
            </Stack>

        </>
    )
}

export default ListadoNoticias