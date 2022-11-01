import { useEffect, useState } from "react"

function InnerWidthHeight(){
    const [dimension, setDimension] = useState({width: 0, height: 0})
    useEffect(() => {
        const updateDimension = () => {
            setDimension({
                width : window.innerWidth,
                height: window.innerWidth,
            })}
        window.addEventListener("resize", updateDimension)
        return () => window.removeEventListener("resize", updateDimension)
       
    },[window.innerWidth,window.innerWidth])
    console.log(dimension);
    console.log(1);

    return(
        <div></div>
    )
}
export default InnerWidthHeight