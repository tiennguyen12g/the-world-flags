import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import {DataContext} from '../../ContextFile/DataContext'
import { memo,useContext, useMemo, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import  {useDelay}  from './useDelay'
import Tippy from '@tippyjs/react/headless'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
function Search(){
    const [inputValue,setInputValue] = useState('')
    const [showResult,setShowResult] = useState(true)
    const ref= useRef()
    const datacontext = useContext(DataContext)
    const arrayPageValue = datacontext.arrayPageValue
    //get keyword for search
    const handleChange = (value) =>{
        setInputValue(value)
    }
    let wordSearch = useDelay(inputValue,500)
    function renderResult() {
        let newResult = []  
        if(wordSearch.length > 0){
            for(let page of arrayPageValue){
                let a = page.value.filter((country) =>{
                    let nameCountry =  country.name.common.toLowerCase()
                    return nameCountry.includes(wordSearch.toLowerCase())
                })
                if(a.length > 0){
                    newResult.push({id: page.id, value: a})
                }
            }
        }
        return(
            <div className={cx('box-result')}>
                {newResult.length > 0 && wordSearch.length > 0 ? newResult.map((page) =>(
                    page.value.map((country,i) =>{
                        let NewName = country.name.common.replace(/\s/g,'')
                        return(
                            <Link to={`the-world-flag/page${page.id}/${NewName.toLowerCase()}`} className={cx('display-result')} key={i}>
                                <img src={country.flags.png} alt='Cannot load data'/>
                                <span>{country.name.common}</span>
                            </Link>)
                        })
                    )) : (<p >No result for " {wordSearch} "</p>)}
            </div>
        )
    }
    const handleDelete = () => {
        setInputValue('')
        ref.current.focus()
    }
    return useMemo(() => {
        return(
            <div className={cx('search')}>
                <Tippy
                    interactive
                    visible = {showResult && wordSearch.length > 0}
                    onClickOutside={() => setShowResult(false)}
                    render={attrs => (
                        <div className={cx('box-tippy')} tabIndex="-1" {...attrs}>
                            <h4 className={cx('title')}>Search result</h4>
                            <div className={cx('horizontal-line')}></div>
                            {renderResult()}
                        </div>
                    )}
                >
                    <div className={cx('inside-tippy')}>
                        <input
                            ref={ref}
                            value={inputValue} 
                            type='text' 
                            placeholder='Search for a country...'
                            onChange={(e) => handleChange(e.target.value)}
                            onFocus={() => setShowResult(true)}
                            className={cx('input-search')}
                        />
                        {wordSearch.length > 0 ? 
                            <span className={cx('faXmark')} onClick={handleDelete}><FontAwesomeIcon icon={faXmark} /></span>
                            : ""
                        }
                        {/* <span className={cx('vertical-line')}></span> */}
                        <span className={cx('faSearch')}><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    </div>
                </Tippy>
            </div>
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inputValue, showResult, wordSearch.length])    
}
export default memo(Search)
