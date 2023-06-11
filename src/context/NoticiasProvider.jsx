import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState("general")
    const [pais, setPais] = useState("ar")
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    // Este handle va a tomar el valor del select y lo va a aplicar a setCategoria, podria hacerlo en formuario
    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }
    const handleChangePais = e => {
        setPais(e.target.value)
    }
    const handleChangePagina = (e, valor) => {
        setPagina(valor)
    }
    const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&page=${pagina}&apiKey=${import.meta.env.VITE_API_KEY}`
        const { data } = await axios(url)
        setNoticias(data.articles)
        setTotalNoticias(data.totalResults)
    }

    useEffect(() => {
        consultarAPI()
        setPagina(1)
    }, [categoria, pais])

    useEffect(() => {
        consultarAPI()
        window.scrollTo(0, 0)
    }, [pagina])

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                pais,
                handleChangePais,
                noticias,
                totalNoticias,
                pagina,
                handleChangePagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}
export default NoticiasContext