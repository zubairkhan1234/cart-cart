import React,{useContext, createContext} from "react";


const globalCartContext = createContext()
const globalCartUpdateContext = createContext()

const useGlobalContext = () => useContext(globalCartContext)
const useGlobalUpdateContext = () => useContext(globalCartUpdateContext)






export default function ContextProvider({ Children }) {

    const [data, setData] = React.useState({
        cart: null
    })


    return (
        <globalCartContext.Provider value={data}>
            <globalCartUpdateContext.Provider value={setData}>
                {Children}
            </globalCartUpdateContext.Provider>
        </globalCartContext.Provider>
    )
}
