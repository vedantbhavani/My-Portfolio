import "../StyleSheet/Home.css"
import { useRef } from "react"

const Home = () => {
  const divisable = useRef(null)

  return (
    <div id='about'>
      <div className="w-full about-container pb-10">
        <h2 className="text-4xl pt-20 text-center underline text-white" data-aos="fade-down">ᗩᗷᗝᑌ丅 ᗰᗴ</h2>
        <div className="aboutpara mt-10 relative flex justify-around">
          <p className="abouttext text-white w-2/3 p-24 text-2xl pt-8 pl-16 mx-auto leading-10" data-aos="fade-right" ref={divisable}>
            I am a web developer at front-end side. I happy to learn a all languages but javascript is the best language for me, because javascript is a two side language fronted and backend. Fronted side it have a ReactJs and AngularJs some best librarys and backend side it hase a NodeJs. I want to my best to the company. And other i have lots of hobbies to play a cricket and carrom any many more games.
          </p>
          <img data-aos="fade-left" className="w-1/3 mr-11 mb-20 aboutpng" src="/src/Icons/vecteezy_3d-character-illustration-casual-man-showing-hand-to-copy_10870997.png" alt="" />
        </div>
        <div className="fullstand" >
          <div className=" onestand imgstand1"><div></div></div>
          <div className="imgstand2 onestand"><div></div></div>
          <div className="imgstand3 onestand"><div></div></div>
        </div>
        <div className="underabout flex">
          <div data-aos="flip-up" data-aos-duration="1500" className="listlang1 w-96 p-9 -mt-28 bg-slate-400 mx-auto ">
            <h2 className="text-3xl mb-10 font-semibold text-center"> Mastary</h2>
            <ul data-aos="fade-down" data-aos-duration="1200" className="listlanguage1">
              <li> HTML</li>
              <li> CSS</li>
              <li> JavaScript</li>
              <li> React Js</li>
              <li> BootStrap</li>
              <li> Tailwind</li>
            </ul>
          </div>
          <div data-aos="flip-down" data-aos-duration="1500" className="listlang2 w-96  p-9 -mt-28 bg-slate-400 mx-auto ">
            <h2 className="text-3xl mb-10 font-semibold text-center">Hobbies & Expertise</h2>
            <ul className="listlanguage2" data-aos="fade-down" data-aos-duration="1200">
              <li> Work With Project</li>
              <li> Reading Books</li>
              <li> Fast Learner</li>
              <li> Long time spend with </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
