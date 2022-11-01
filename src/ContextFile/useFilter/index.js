
function useFilter(arrayKey,dataFilter,checkList){
    let result = []
    let a;
    arrayKey.map((region) => {
        if(checkList.includes(region.id)){
            a = dataFilter.filter((country) =>
                country.region === region.nameregion
            )
            result.push(...a)
        }
        return false     
    })

    return result
}
export {useFilter}