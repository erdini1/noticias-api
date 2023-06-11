import { FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import { CATEGORIAS, PAISES } from "../constants"

const Formulario = () => {

    const { categoria, handleChangeCategoria, pais, handleChangePais } = useNoticias()

    return (
        <>
            <Grid item xs={6} md={6}>
                <form>
                    <FormControl fullWidth>
                        <InputLabel>Categoria</InputLabel>
                        <Select
                            label="categoria"
                            onChange={handleChangeCategoria}
                            value={categoria}
                        >
                            {CATEGORIAS.map(categoria => (
                                <MenuItem
                                    key={categoria.value}
                                    value={categoria.value}
                                >
                                    {categoria.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </form>
            </Grid>
            <Grid item xs={4} md={4}>
                <form>
                    <FormControl fullWidth>
                        <InputLabel>País</InputLabel>
                        <Select
                            label="pais"
                            onChange={handleChangePais}
                            value={pais}
                        >
                            {PAISES.map(pais => (
                                <MenuItem
                                    key={pais.value}
                                    value={pais.value}
                                >
                                    {pais.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </form>
            </Grid>
        </>
    )
}

export default Formulario