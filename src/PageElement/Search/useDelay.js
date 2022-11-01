import { useEffect, useState } from "react"

function useDelay(inputValue, delayTime){
    const [keyWord,setKeyWord] = useState(inputValue)
    useEffect(() => {     
        const handleInput = setTimeout(() =>{   
            setKeyWord(inputValue)
        },delayTime)
        return () => clearTimeout(handleInput)

    },[inputValue,delayTime])

    return keyWord       
}
export {useDelay}