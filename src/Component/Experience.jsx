import '../StyleSheet/Home.css'

const Experience = () => {
  return (
    <div id='experience'>
      <h2 data-aos="flip-right" data-aos-duration="2000" className='text-center text-white pt-16 text-4xl pb-10'>React Developer at <span className='text-yellow-400 font-bold'>Soft Solution Services</span></h2>
      <div className="exp-contain p-6 items-center flex w-3/4 rounded-3xl mx-auto">
        <img data-aos="zoom-out" data-aos-duration="3000" className='w-52 mr-6' src="/src/Icons/react.png" alt="" />
        <div data-aos="zoon-in" data-aos-duration="4000" className="exp-container text-white leading-8  text-xl ">
          <p data-aos="zoom-in" data-aos-duration="2500" >I have a 3 months training in Soft Solution Services with React Js. I am front-end designer i make a unique design in projects. First i will start here from HTML and CSS after i will study in Javascript and after i have study in React js. I learn here all hooks, dom and many more. React is a best library in Javascript for front-end. React is a famous for page randering without reloading. JavaScript have a many library like Angular Js and back-end framwork like a Node Js. JavaScript is a full-stack language. Many popular web-sites makes in React i have seen the best of react example Facebook, Instagram, Airbnb, Netflix, WhatsApp-Web, Discord, Dropbox,T witch, Codecademy, Reddit, Github.</p>
        </div>
      </div>
    </div>
  )
}

export default Experience
