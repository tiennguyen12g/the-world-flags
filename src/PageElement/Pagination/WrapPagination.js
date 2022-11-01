import { useContext } from 'react'
import Pagination from '.'
import {DataContext} from '../../ContextFile/DataContext'
function WrapPagination(){
    const datacontext = useContext(DataContext)
    return(
        <Pagination datacontext={datacontext} />
    )
}
export default WrapPagination