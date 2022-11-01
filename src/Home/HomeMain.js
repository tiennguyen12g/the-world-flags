import Search from "../PageElement/Search"
import Filter from '../PageElement/Filter'
import FlagItemShow from '../PageElement/FlagItemShow'
import classNames from 'classnames/bind'
import styles from './HomeMain.module.scss'
import ToggleMode from '../ContextFile/ToggleMode/ToggleMode'

import { memo } from "react"
import { Link, Routes, Route } from "react-router-dom"
import Pagination from "../PageElement/Pagination"
import { useNavigate } from "react-router-dom"
const cx = classNames.bind(styles)
function HomeMain(){
    const navigate = useNavigate()
    const onRefresh = () => {
        navigate('/')
        window.location.reload() 
    }
    return(
        <div className={cx('wrap')}>
            <div className={cx('header')}>
                <div className={cx('box-content')}>
                    <Link to='/' className={cx('title')} onClick={onRefresh}>
                         Where in the World ?
                    </Link>
                    <ToggleMode />
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('wrap-search-filter')}>
                    <Search/>
                    <Filter />
                </div>
                <div className={cx('flag-item-show')}>
                     <Routes>
                        <Route path="/" element={<Pagination />}>
                             {['/',':pageID'].map((path) => (
                                 <Route key={path} path={path} element={<FlagItemShow />} />
                            ))} 
                        </Route>
                     </Routes>
                 </div>     
            </div>
        </div>
    )
}
export default memo(HomeMain)
//github delete .git use command : rm .git -Recurse -Force
