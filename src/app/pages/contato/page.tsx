import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";
import s from './page.module.css'


export default function Fotos() {
    return (
        <>
          <Header/>
          <div className={s.title}>

            <h2>Acesse nossas redes sociais.</h2>

          </div>
          <div className={s.container}>

            <div className={s.card}>
              <BsInstagram className={s.icons}/><p className={s.text}>Instagram</p>
            </div>

            <div className={s.card}>
              <BsFacebook className={s.icons}/><p className={s.text}>Facebook</p>
            </div>

            <div className={s.card}>
              <BsWhatsapp className={s.icons}/><p className={s.text}>Whatsapp</p>
            </div>

          </div>
          <Footer/>
        </>
    )
}