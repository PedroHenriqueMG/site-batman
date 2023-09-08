import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import s from './page.module.css'


export default function Fotos() {
    return (
        <>
          <Header/>
          <div className={`background`}>
            <div className={s.header}>
                  <h1>Confira as imagens da gravação do filme</h1>
            </div>
            <div className={s.img_card_container}>
              <div className={s.imgCard}>
                  <div className={`${s.cards} ${s.banner_1}`}></div>
                  <div className={`${s.cards} ${s.banner_2}`}></div>
                  <div className={`${s.cards} ${s.banner_3}`}></div>
                  <div className={`${s.cards} ${s.banner_4}`}></div>
                  <div className={`${s.cards} ${s.banner_5}`}></div>
                  <div className={`${s.cards} ${s.banner_6}`}></div>
              </div>
            </div>
          </div>
          <Footer/>
        </>
    )
}