import { FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material"
import useNoticias from "../hooks/useNoticias"

const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
]

const Formulario = () => {

    const { categoria, handleChangeCategoria } = useNoticias()

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
                        >

                        </Select>
                    </FormControl>
                </form>
            </Grid>
        </>
    )
}

export default Formulario