import style from './Header.module.css'

import toDoImg from '../../assets/toDoImg.svg'

export function Header(){
    return(
        <header className={style.header}>
            <img className={style.logo}  src={toDoImg}/>
                <div className={style.todo}>
                    <p className={style.to}>to</p>
                    <p className={style.do}>do</p>
                </div>
        </header>
    )
}