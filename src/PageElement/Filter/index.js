import { useContext, useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './Filter.module.scss'
import { DataContext } from '../../ContextFile/DataContext'
import { useFilter } from '../../ContextFile/useFilter'
import { useNavigate } from 'react-router-dom'
const cx = classNames.bind(styles)
const Regions = [
    {
        id: 1,
        nameregion:'Africa',
    },
     {
        id: 2,
        nameregion:'Americas',
    },
     {
        id: 3,
        nameregion:'Asia',
    },
    {
        id: 4,
        nameregion:'Europe',
    },
    {
        id: 5,
        nameregion:'Oceania',
    },
]
function Filter(){
    const [checkList, setCheckList] = useState([])    
    const datacontext = useContext(DataContext)
    const dataApi = datacontext.countrys
    let navigate = useNavigate()
    useEffect(() => {
        if(checkList.length === 0 ){
            datacontext.setDataFilter(dataApi)
        }
        if(checkList.length > 0){
            datacontext.setDataFilter(result)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[checkList])
    const handleAllChecked = () =>{
        setCheckList([])
    }
    const handleRegionChecked = (id) => {
        navigate('/the-world-flag')
        if(!checkList.includes(id)){
            setCheckList( prev => {
                return [...prev,id]
            })
        }
        if(checkList.includes(id)){
            let newList = checkList.filter( idActived => 
                idActived !== id
            )
            setCheckList(newList)
        }     
    }
    let result = useFilter(Regions, dataApi,checkList)
    return(
        <div className={cx('filter')}>
            <Tippy
                interactive
                delay={[0,200]}                      
                render = {renderDataTooltip => (
                    <div className={cx('box-tippy')} tabIndex="-1" {...renderDataTooltip}>
                        <ul className={cx('checkbox')}>
                            <input 
                                className={cx('input-filter')} 
                                type='checkbox' 
                                onChange={handleAllChecked}
                                checked={checkList.length > 0 ? false : true }
                            />
                            All
                        </ul>
                        {Regions.map((region, i) => (
                            <ul key={i} className={cx('checkbox') }>
                                <input 
                                    className={cx('input-filter')} 
                                    type='checkbox'
                                    onChange={() => handleRegionChecked(region.id)}
                                    checked={checkList.includes(region.id)} 
                                />
                                {region.nameregion}
                            </ul>
                        ))}
                    </div>
                )}
            >
                <div>
                    <h4 className={cx('title')}>Filter by regions</h4>
                    <div className={cx('arrow-down')} ></div>
                </div>
            </Tippy>
        </div>
    )
}
export default Filter