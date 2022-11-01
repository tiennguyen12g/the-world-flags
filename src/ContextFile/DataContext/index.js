import { createContext, useState, useEffect } from "react";
import { useAsync } from "../useAsync";
import { usePagination } from "../usePagination/usePagination";

const DataContext = createContext()
function DataProvider({children}){
    let countrys = useAsync('https://restcountries.com/v3.1/all')
    const [dataFilter,setDataFilter] = useState([])
    const [arrayPageValue,setArrayPageValue] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [dataDependOnCheckBox,setDataDependOnCheckBox] = useState([])
    useEffect(() => {
        if(dataFilter.length === 0){
            setDataDependOnCheckBox(countrys)
        }else{
            setDataDependOnCheckBox(dataFilter)
        }
    },[countrys, dataFilter])
    const getResult = usePagination(dataDependOnCheckBox,8,5)
    const pagination = getResult.render
    useEffect(() => {
        setArrayPageValue(getResult.arrayPageValue)
        setCurrentPage(getResult.currentPage)
    },[getResult.arrayPageValue, getResult.currentPage])
    let ListValue ={
        countrys,
        dataFilter,
        setDataFilter,
        currentPage,
        arrayPageValue,
        dataDependOnCheckBox,
        pagination,
    }
    return(
        <DataContext.Provider value={ListValue}>
            {children}
        </DataContext.Provider>
    )
}
export { DataProvider, DataContext }