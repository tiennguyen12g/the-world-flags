import classNames from 'classnames/bind'
import styles from '../ToggleMode/ToggleMode.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun,faMoon} from '@fortawesome/free-solid-svg-icons'
import { useState,memo, useEffect } from 'react'
import {modeColor} from '../../FolderData/ModeColor/ModeColor'
const cx = classNames.bind(styles)
function ToogleMode(){
    const [light, setLight] = useState(true)
    const [dark, setDark] = useState(false)
    const [sun, setSun] = useState(true)
    const [moon, setMoon] = useState(false)
    const [theme,setTheme] = useState('LIGHT_THEME')
    
    //code transition icon toggle
    const circleclass = cx('circle',{
        toggleLight: light,
        toggleDark: dark,      
    })
    const sunclass = cx('faSun',{
        sunLight: sun,
        sunDark: moon,     
    })
    const moonclass = cx('faMoon',{
        moonLight: sun,
        moonDark: moon,     
    })

    //code toggle theme
    const {LIGHT_THEME, DARK_THEME} = modeColor
    const currentTheme = window.localStorage.getItem('mode')

    useEffect(() => {
        if(currentTheme === null){
            window.localStorage.setItem("mode","LIGHT_THEME")
        }else{
            setTheme(currentTheme)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(() => {
        if(theme === 'LIGHT_THEME'){
            for(let property of LIGHT_THEME){
                (document.documentElement).style.setProperty(property.nameProperty,property.value)       
            }
            setLight(true)
            setDark(false)
            setSun(true)
            setMoon(false) 
        } 
        if(theme === 'DARK_THEME'){
            for(let property of DARK_THEME){
                (document.documentElement).style.setProperty(property.nameProperty,property.value)
            }
            setLight(false)
            setDark(true)
            setSun(false)
            setMoon(true)              
        }   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentTheme,theme])
    const handleToggle = () =>{
        if(theme === 'LIGHT_THEME'){
            window.localStorage.setItem('mode','DARK_THEME')
            for(let property of DARK_THEME){
                (document.documentElement).style.setProperty(property.nameProperty,property.value)       
            }
            setTheme('DARK_THEME')
            setLight(false)
            setDark(true)
            setSun(false)
            setMoon(true)
        }   
        if(theme === 'DARK_THEME'){
            window.localStorage.setItem('mode','LIGHT_THEME')
            for(let property of LIGHT_THEME){
                (document.documentElement).style.setProperty(property.nameProperty,property.value)
            }
            setTheme('LIGHT_THEME')
            setLight(true)
            setDark(false)
            setSun(true)
            setMoon(false)        
        }    
    }
    console.count("toggle");
    return(      
        <div className={cx('toggle-mode')} onClick={handleToggle}>
            <span className={cx('icon-effect')}>
                <span className={cx(sunclass)}><FontAwesomeIcon icon={faSun} /></span>
                <span className={cx(moonclass)}><FontAwesomeIcon icon={faMoon} /></span>
            </span>
            <span className={circleclass}></span>
        </div>
    )
}
export default memo(ToogleMode)