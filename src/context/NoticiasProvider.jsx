import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState("general")
    const [pais, setPais] = useState("ar")
    const [noticias, setNoticias] = useState([])

    // Este handle va a tomar el valor del select y lo va a aplicar a setCategoria, podria hacerlo en formuario
    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }
    const handleChangePais = e => {
        setPais(e.target.value)
    }
    const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&lenguage=es&apiKey=${import.meta.env.VITE_API_KEY}`
        const { data } = await axios(url)
        setNoticias(data.articles)
    }

    useEffect(() => {
        consultarAPI()
    }, [categoria, pais])

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                pais,
                handleChangePais,
                noticias
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