import { useEffect, useState } from "react"

function InnerWidthHeight(){
    const [dimension, setDimension] = useState({width: 0, height: 0})
    useEffect(() => {
        const updateDimension = () => {
            setDimension({
                width : window.innerWidth,
                height: window.innerHeight,
            })}
        window.addEventListener("resize", updateDimension)
        return () => window.removeEventListener("resize", updateDimension)
       
    },[])
    return dimension
}
export {InnerWidthHeight}