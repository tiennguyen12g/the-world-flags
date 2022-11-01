import {Link} from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from '../Header/Header.module.scss'


const cx = classNames.bind(styles)
function Header({dark}){      
    return(
        <div className={cx()}>
            <Link to='/' style={dark ? {color: 'white'} : {color:'black'}} className={cx('title-style')}>Where in the World</Link>                    
        </div>
    )
}
export default Header