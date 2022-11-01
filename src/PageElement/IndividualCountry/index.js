import classNames from "classnames/bind"
import  styles from './Individual.module.scss'
import { useCallback, } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles)
function Individual({data}){
    let navigate = useNavigate();
    const onBack = useCallback(() => {
        navigate(-1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return(
        <div className={cx('full-screen')}>
            <div className={cx('wrap')}>
                <button onClick={onBack} className={cx('back')}>&#8592; &nbsp;Back</button>
                <div className={cx('flag')}>
                    <img src={data.flags.png} alt="Cannot load"/>
                </div>
                <div className={cx('more-info')}>
                    <h2 className={cx('title')}>{data.name.common}</h2>
                    <div className={cx('group1')}>
                        <p>Native Name: &nbsp;<span>{data.name.common}</span></p>
                        <p>Population:&nbsp;<span>{data.population}</span></p>
                        <p>Region: &nbsp;<span>{data.region}</span></p>
                        <p>Sub Region: &nbsp;<span>{data.subregion}</span></p>
                        <p>Capital:  &nbsp;<span>{data.capital}</span></p>
                    </div>
                    <div className={cx('group2')}>
                        <p>Top Level Domain: &nbsp;<span>{data.tld}</span></p>
                        <p>Currencies: &nbsp;<span>{data.currencies.symbol}</span></p>
                        <p>Languages: &nbsp;<span>{data.languages.spa}</span></p>
                    </div>
                    <div className={cx('border')}>
                        <p className={cx('title')}>Border Countries: &nbsp;</p>
                        <div className={cx('container')}>
                            {data.borders ? data.borders.map((symbolname, i) => (
                                <button className={cx('border-btn')} key={i}>{symbolname}</button>
                            )) : "No border with any country"}
                        </div> 
                    </div>
                </div>
            </div>
        </div>
                 
    )
}
export default Individual

