import {useEffect, useState} from 'react'
import { Link} from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './usePagination.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAnglesRight, faAngleLeft,faAnglesLeft,} from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)
// receive: 1: array data, 2: ppp === post/item per page, 3: number of page limit showing
function usePagination(data,ppp, limitshowing ){
    const arraydata = data
    const postPerPage = ppp
    const limitShowing = limitshowing
    const [currentPage,setCurrentPage] = useState(1)
    const [minPageShow,setMinPageShow] = useState(0)
    const [maxPageShow,setMaxPageShow] = useState(limitShowing)
    const [arrayPageValue,setArrayPageValue] = useState([{id: '', value: []}])
    const totalPage = Math.ceil(arraydata.length/postPerPage)
    const splitID = (window.location.pathname).match(/\d+/g)
    // const splitHref = (window.location.href).match(/page\d+/g)
    useEffect(() => {    
        if(data.length > 0){
            let getArray = []
            for( let i = 1; i <= totalPage ; i++){
                let a = arraydata.slice((i-1) * postPerPage, i * postPerPage)
                getArray.push({id: i, value: a})
            }
            setArrayPageValue(getArray)
        }
        let integer = Math.ceil(currentPage / 5)
        setCurrentPage(splitID ? +splitID[0] : 1) 
        setMaxPageShow((integer) * 5)
        setMinPageShow((integer - 1) * 5)      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data,ppp,limitShowing,currentPage])
    const handlePageClick = (pageID) => {
        setCurrentPage(pageID)
    }
    const handlePrevious = () => {
        setCurrentPage(currentPage - 1)
        if(currentPage === minPageShow + 1) {
            setMaxPageShow(maxPageShow - limitShowing)
            setMinPageShow(minPageShow - limitShowing)
        }
    }
    const handleNext = () => {
        setCurrentPage( currentPage + 1)
        if(currentPage === maxPageShow) {
            setMaxPageShow(maxPageShow + limitShowing)
            setMinPageShow(minPageShow + limitShowing)
        }
    }
    const toLastPage = () => {       
        let surplus = Math.floor(totalPage / limitShowing)
        setMinPageShow(surplus * limitShowing)
        setMaxPageShow((surplus + 1) * limitShowing )
        setCurrentPage(totalPage)
    }
    const toFirstPage = () => {
        setMinPageShow(0)
        setMaxPageShow(limitShowing)
        setCurrentPage(1)
    }
    console.log("pathname",window.location.pathname,"hash:", window.location.hash);
    return{
        arrayPageValue,
        currentPage,
        render: (
            <div className={cx("pagination")}>
                <Link to={'page1'} disabled={currentPage === 1 ? true : false} onClick={toFirstPage} className={cx('link-router')}>
                    <FontAwesomeIcon icon={faAnglesLeft} />
                </Link>
                <Link to={`page${currentPage - 1}`} disabled={currentPage === 1 ? true : false} onClick={handlePrevious} className={cx('link-router')}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Link>
                {arrayPageValue.map((page, index) =>{
                    if(page.id <= maxPageShow && page.id > minPageShow){
                        return(
                            <Link
                                to={`page${page.id}`}
                                key={index}
                                className={cx('link-router', currentPage === page.id ? 'actived' : '')}
                                onClick={() =>handlePageClick(page.id)}
                            >
                                {page.id}
                            </Link>
                        )
                    }else{
                        return null
                    }
                })}     
                <Link to={`page${currentPage + 1}`} disabled={currentPage === totalPage ? true :false} onClick={handleNext} className={cx('link-router')}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to={`page${totalPage}`} disabled={currentPage === totalPage ? true :false}  onClick={toLastPage} className={cx('link-router')}>
                    <FontAwesomeIcon icon={faAnglesRight} />
                </Link>   
            </div>)
    }
}
export {usePagination}