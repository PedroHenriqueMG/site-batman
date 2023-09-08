import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import img1 from '@/app/assets/img1.jpg'
import img2 from '@/app/assets/img2.jpg'
import img3 from '@/app/assets/img3.jpg'
import Image from "next/image";
import s from './page.module.css'


export default function Fotos() {
    return (
        <>
          <Header/>
          <div className={`background`}>

            <div className={s.title}>
                <h1>O que estão falando do filme?</h1> 
            </div>

            <div className={s.cards}>

              <div className={s.card}>

                <Image src={img1} alt="" className={s.user}/>
                <h3 className={s.userText}>Isabela</h3>

                <p className={s.textImg}>
                    Um dos melhores filmes de super-herói que eu já assisti, na minha opinião tudo estava incrível nele. 
                    A fotografia e trilha sonora foram impecáveis, conseguiram trazer uma música antiga do "Nirvana" e encaixou perfeitamente, 
                    perdi o número de vezes que do nada comecei a cantar "something in the way hmmmmm". 
                </p>

              </div>
              
              <div className={s.card}>
                <Image src={img2} alt="" className={s.user}/>
                <h3 className={s.userText}>João</h3>

                <p className={s.textImg}>
                    Longe de ser perfeito, mas continua sendo uma ótima adaptação.
                    O monólogo inicial é excelente, mostrando o que o Batman significa para os criminosos de Gotham, 
                    seguido de uma cena emblemática, aliás, as cenas de ação são fodas, 
                    bem melhores que as cenas de lutas do Nolan, fato.  
                </p>
              </div>

              <div className={s.card}>
                <Image src={img3} alt="" className={s.user}/>
                <h3 className={s.userText}>Maria</h3>

                <p className={s.textImg}>
                    É incrível ver o herói se construir a partir da dor mal curada, Bruce nunca foi tão fiel em um live action como agora. 
                    As referências são claras ao Ano Um, Ego, Um Longo Dia das Bruxas e Terra Um, onde vemos desde o lado inexplorado, até agora, do Bruce como detetive, 
                    até o início do herói combatendo o crime e entendendo que nem nossos mais conhecidos são incorruptíveis.   
                </p>
              </div>

            </div> 

          </div>
          <Footer/>
        </>
    )
}