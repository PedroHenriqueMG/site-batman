import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import s from './home.module.css'

export default function Index() {
    return(
        <>
          <Header/>
          <div id={`${s.banner}`}></div>
            <div id={`${s.trailerContainer}`}>
                <div className={s.content}>
                    <video width="50%" height="240" controls>
                        <source src="/video.mp4" type="video/mp4" />
                        Seu navegador não suporta a tag de vídeo.
                    </video>

                    <div id={s.sinopse}>
                        <p className={s.description}>
                            The Batman é um thriller cheio de ação que retrata o Batman em seus primeiros anos, lutando para equilibrar a raiva com a retidão 
                            enquanto investiga um mistério perturbador que aterrorizou Gotham. 
                            Robert Pattinson oferece um retrato cru e intenso do Batman como um vigilante desiludido e desesperado despertado pela compreensão 
                            de que a raiva que o consome não o torna melhor do que o cruel assassino em série que ele está caçando”, 
                            diz o texto que foi divulgado no site oficial da Warner.
                        </p>
                        <button className={s.button}>Comprar ingresso</button>
                    </div>
                </div>
            </div>
            <div className={s.actor_cards_container}>
                <div className={s.cardsContent}>
                    <div className={`${s.cards}  ${s.banner_1}`}>Robert Pattison - Batman</div>
                    <div className={`${s.cards}  ${s.banner_2}`}>Zoe Kravitz - Mulher Gato</div>
                    <div className={`${s.cards}  ${s.banner_3}`}>Jeffrey Wright - Gordon</div>
                </div>
            </div>
            <Footer/>
        </>
    )
}