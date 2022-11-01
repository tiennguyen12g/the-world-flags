import { useEffect, useState } from "react"

function useAsync(linkApi){
    const [dataApi, setDataApi] = useState([])
    useEffect(() => {
        async function callApi() {
            let res = await fetch(linkApi)
            let data = await res.json()
            return data
        }
        callApi()
            .then(data => {
                setDataApi(data)
            })
            .catch(error => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[linkApi])

    return dataApi
}
export {useAsync}