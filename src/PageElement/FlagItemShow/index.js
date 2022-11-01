import classNames from 'classnames/bind'
import styles from './FlagItemShow.module.scss'
import { DataContext } from '../../ContextFile/DataContext'
import { useContext,memo } from 'react'
import { Link, Outlet} from 'react-router-dom'
const cx = classNames.bind(styles)
function FlagItemShow(){
    const datacontext = useContext(DataContext)
    const currentPage = datacontext.currentPage
    const arrayPageValue = datacontext.arrayPageValue
    const countrys = datacontext.countrys
    const pathname = window.location.pathname 
    
    const loading = () => {
        return(
            <div className={cx('wrap')}>
                <div className={cx('loader')}>
                    <div className={cx('spinner')}> </div> &nbsp;&nbsp;
                    <div className={cx('loading')}>Loading . . .</div>
                </div>
            </div>
        )
    } 
    return(
        <div className={cx('wrap')}>
            {countrys.length > 0  ? 
                (arrayPageValue.map((page) => (
                    page.id === currentPage ?
                    (page.value.map((country,i) => {
                        let newName = country.name.common.replace(/\s/g,'')
                        return (
                            <Link
                                to={pathname === `/the-world-flags/page${page.id}` ? `${newName.toLowerCase()}` : `page${page.id}/${newName.toLowerCase()}`}
                                className={cx('container')} 
                                key={i}
                            >
                                <div  className={cx('box')}>
                                    <img className={cx('image')} src={country.flags.png} alt='Cannot load'/>
                                    <h4 className={cx('name')}>{country.name.common}</h4>
                                    <p className={cx('details')}>Population:&nbsp; <span className={cx('info')}>{country.population.toLocaleString()}</span></p>
                                    <p className={cx('details')}>Region:&nbsp; <span className={cx('info')}>{country.region}</span></p>
                                    <p className={cx('details')}>Capital: &nbsp; <span className={cx('info')}>{country.capital}</span></p>
                                </div>
                            </Link>
                    )})) 
                    : 
                    ("")
                )))
                : 
                (loading())
            }
            <Outlet />   
        </div>
    )
}
export default memo(FlagItemShow)
