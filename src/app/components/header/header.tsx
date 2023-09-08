import Image from 'next/image'
import Logo from '../../assets/logo2.png'
import s from  './header.module.css'
import Link from 'next/link'

export default function Header() {
    return(
        <header className={`background ${s.header}`}>

            <Image src={Logo} alt='' id={s.logo} />

            <nav className={s.nav}>

                <ul className={s.ul}>
                        
                        <Link href='/pages/home' className={s.link}>
                            <li className={s.li}>Home</li>
                        </Link>

                        <Link href='/pages/contato' className={s.link}>
                            <li className={s.li}>Contato</li>
                        </Link>

                        <Link href='/pages/fotos' className={s.link}>
                            <li className={s.li}>Fotos</li>
                        </Link>

                        <Link href='/pages/comentarios' className={s.link}>
                            <li className={s.li}>Comentários</li>
                        </Link>
                     
                </ul>

            </nav>
        </header>
    )
}