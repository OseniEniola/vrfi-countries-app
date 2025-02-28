import { FC } from "react";
import  style from './CountryDetailsCard.module.scss';

interface CountryDetailsCardProps{
    label: string;
    info?: string;
    flag?: string;
}

const CountryDetailsCard: FC<CountryDetailsCardProps> = ({label,info,flag}) => {
    return(
        <div className={style.card_wrap}>
            <div className={style.label}>{label}</div>
            {flag && <img className={style.flag} src={flag} alt="flag"/>}
            {info && <span className={style.info}>{info}</span>}
        </div>
    )
}

export default CountryDetailsCard;