/* eslint-disable react/no-unescaped-entities */
import Typed from 'typed.js';
import { useRef , useEffect } from 'react';
import "../StyleSheet/Home.css"

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ["Web Developer" , "Youtuber" , "Web Designer"],
        typeSpeed: 70,
        backDelay: 1500,
        startDelay: 0,
        backSpeed: 10,
        loop: true
    });
    return () => {
        typed.destroy();
    };
}, []);

  return (
    <div id='home'>
      <div className="homepage flex bg-violet-700 w-screen h-screen">
        <div className="leftside pl-36 pt-24 text-5xl text-white w-2/3 ">
          <h2 data-aos="fade-left" className='pt-28 hititle'> Hi There,</h2>
          <h2 data-aos="fade-right" className='nametitle'>I'm <span className=' font-bold'>Vedant Patel</span>,</h2>
          <h2 data-aos="fade-down" className=''>I am a <span className='generate font-bold' ref={el}></span></h2>
        </div>
        <div className="rightside">
          <div className="circleimg rounded-full">
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home