import Image from 'next/image'
import Logo from '../../assets/logo2.png'
import s from  './header.module.css'

export default function Header() {
    return(
        <header className={`${s.header}`}>

            <Image src={Logo} alt='' id={s.logo} />

            <nav className={s.nav}>

                <ul className={s.ul}>
    
                        <li className={s.li}>Home</li> 
                    
                        <li className={s.li}>Contato</li>
                   
                        <li className={s.li}>Fotos</li>
                   
                        <li className={s.li}>Comentários</li>
                     
                </ul>

            </nav>
        </header>
    )
}