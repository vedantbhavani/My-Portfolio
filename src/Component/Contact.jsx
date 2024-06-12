import '../StyleSheet/Home.css'

function Contact() {
  return (
    <div id='contact'>
      <h2 className='text-4xl pt-20 text-center pb-10 text-white' data-aos="zoom-in" data-aos-duration="4000">Contact Me</h2>
      <div className="box1 exp-contain p-4 items-center w-2/3 rounded-3xl mx-auto">
        <div className="contactdetails">
          <p className="cpara text-white text-2xl" data-aos="zoom-out" data-aos-duration="2000">You can Contact me for best Advice for your web-work. I will give you my best.My expertise in React Js but i am capable to advice in every Fronted language. You can contact me 24x7. i will help you.i dont need a charges for this work.I will help you without any type of charges.</p>
        </div>
        <div className="contactus mt-8 flex justify-evenly">
          <div className="conus">
            <img  data-aos="fade-left" data-aos-duration="4000" src="/src/Icons/call.png" className='callimg' alt="" />
            <a href="tel:+919408288336">
              <button data-aos="zoom-in" data-aos-duration="4000" className='mx-auto flex bg-violet-600 text-white rounded-lg p-1 mt-2'>Contact Me</button>
            </a>
          </div>
          <div className="mailus">
            <img  data-aos="fade-right" data-aos-duration="4000" src="/src/Icons/gmail.png"  className='callimg' alt="" />
            <a href="mailto:vedantpateldev@gmail.com">
              <button data-aos="zoom-in" data-aos-duration="4000" className='mx-auto flex bg-violet-600 p-1 mt-2 rounded-lg  text-white' >Mail Me</button>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
