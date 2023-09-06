import Image from 'next/image'
import Logo from '../../assets/logo2.png'
import s from './footer.module.css'

export default function Footer() {
    return(
        <footer className={s.footer}>
            <Image alt='' src={Logo} className={s.img} id={s.logo} />
            <span className={s.span}>Todos os direitos reservados ©</span>
            <span className={s.span}>Desenvolvido por: Pedro Henrique</span>
        </footer>
    )
}