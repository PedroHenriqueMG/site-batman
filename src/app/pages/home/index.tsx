'use client';

import Header from '@/app/components/header/header'
import { CldVideoPlayer } from 'next-cloudinary'
import 'next-cloudinary/dist/cld-video-player.css';
import s from './home.module.css'

export default function Index() {
    return(
        <>
          <Header/>
          <div id={`${s.banner}`}></div>
            <div id={`${s.trailerContainer}`}>
                <div className={s.content}>
                    <CldVideoPlayer width='400' height='270' src='../../assets/video.mp4' />
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
        </>
    )
}