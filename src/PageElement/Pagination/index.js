import { DataContext } from '../../ContextFile/DataContext'
import { useContext} from 'react'
import {Outlet} from 'react-router-dom'
function Pagination(){
    const datacontext = useContext(DataContext)
    const pagination = datacontext.pagination
    return(
        <div>
            {pagination}
            <Outlet />
        </div>
    )
}
export default Pagination