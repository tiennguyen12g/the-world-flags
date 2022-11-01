import { faDharmachakra, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import styles from './Test.module.scss'
// import './dark.css'
// import './light.css'
const cx = classNames.bind(styles)
function Test({changeTheme}){
    const [theme,setTheme] = useState('orange')
    const [mode,setMode] = useState('green')
    const testRef = useRef()
    
    useEffect(() => {
        let defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--test-orange')
        setTheme(defaultColor)
    },[])
    let a = localStorage.getItem('themeKey')
    const handleToggle = () => {        
        if(theme === 'orange'){
            localStorage.setItem('themeKey','pink')
            setTheme('pink')
            setColor(a)   
        }
        if(theme === 'pink'){
            localStorage.setItem('themeKey','orange')
            setTheme('orange')
            setColor(a)
        }
    }
    
     
    function setColor(color) {
        console.log("setcolor:",1);
        document.documentElement.style.setProperty('--test-orange',color) 
    }
    setColor(a)
    const handleChangeSize =(e) => {
        document.documentElement.style.setProperty('--test-resize', `${e.target.value}px`)
    }
    useEffect(() => {
        const element = document.getElementById('test');
        const cssObj = getComputedStyle(element,null)
        let bg = cssObj.getPropertyValue('width')
    },[])

    function setChange(){
        let g = localStorage.getItem('mode')
        let t = g || 'light'
        document.getElementsByTagName('HTML')[0].setAttribute('data-mode',t)
        console.log("g", g);
    }
    setChange()

    const handleMode = () => {
        if(mode === 'green') {
            console.log(1);
            localStorage.setItem('mode','dark')
            let d = localStorage.getItem('mode')
            setMode('brown')
            document.getElementsByTagName('HTML')[0].setAttribute('data-mode',d)
        }
        if(mode === 'brown'){
            localStorage.setItem('mode','light')
            let l = localStorage.getItem('mode')
            setMode('green')
            document.getElementsByTagName('HTML')[0].setAttribute('data-mode',l)
            console.log("c2",l);
        }
    }







    return(
        <div id='test' className={cx('dark', 'container')} ref={testRef} data-value='foo'>
            <div className={cx('hello')}>Hello</div>
            <div className={cx('hello2')} data-mode >Hello2</div>
            <input className={cx('style')} type='checkbox' name='changeTheme' />
            <div>
                <input 
                    type='range' min='0' max='200' defaultValue='50' 
                    onChange={(e) => handleChangeSize(e)}

                />
                <button onClick={handleToggle}>Toggle</button>
                <button onClick={handleMode}>Mode</button>
                
            </div>
         </div>
    )
}
export default Test