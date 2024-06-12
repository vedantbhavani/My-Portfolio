import '../StyleSheet/Home.css'

const Skill = () => {
  return (
    <div id='skill'>
      <h2 className='text-4xl pt-20 text-center pb-10 text-white' data-aos="flip-left">𝓜𝔂 𝓢𝓴𝓲𝓵𝓵</h2>
      <div className="skill-containers">
        <div className="skilldiv flex flex-wrap " >
          <div className="skills"  data-aos="fade-right">
            <img className='w-40 mx-auto' src="/src/Icons/c2.png" alt="" />
            <h3 className='mb-2 mt-2 font-bold text-2xl text-yellow-400 text-center'>C Language</h3>
            <p className='text-white'>C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.
              It is a very popular language, despite being old.
            </p>
          </div>
          <div className="skills" data-aos="flip-left">
            <img className='w-40 mx-auto' src="/src/Icons/html-code.png" alt="" />
            <h3 className='mb-2 mt-2  font-bold text-yellow-400  text-2xl text-center'>HTML</h3>
            <p className='text-white'>HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.</p>
          </div>
          <div className="skills" data-aos="fade-left">
            <img className='w-40 mx-auto' src="/src/Icons/css-code.png" alt="" />
            <h3 className='mb-2 mt-2 font-bold text-yellow-400  text-2xl text-center'>CSS</h3>
            <p className='text-white'>Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.</p>
          </div>

          <div className="skills"  data-aos="fade-right">
            <img className='w-40 mx-auto' src="/src/Icons/js.png" alt="" />
            <h3 className='mb-2 mt-2 font-bold text-yellow-400  text-2xl text-center'>JavaScript</h3>
            <p className='text-white'>JavaScript, often abbreviated as JS, empowers web developers to add interactivity and dynamic behavior to web pages.</p>
          </div>
          <div className="skills" data-aos="flip-right" >
            <img className='w-40 mx-auto' src="/src/Icons/react.png" alt="" />
            <h3 className='mb-2 mt-2 font-bold text-yellow-400  text-2xl text-center'>React Js</h3>
            <p className='text-white'>React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</p>
          </div>
          <div className="skills" data-aos="fade-left">
            <img className='w-40 mx-auto' src="/src/Icons/tailwind.png" alt="" />
            <h3 className='mb-2 mt-2 font-bold text-yellow-400 text-2xl text-center'>TailWind CSS</h3>
            <p className='text-white'>Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML</p>
          </div>

          <div className="skills"  data-aos="fade-right">
            <img className='w-40 mx-auto bg-white rounded-full' src="/src/Icons/bootstrap(1).png" alt="" />
            <h3 className='mb-2 mt-2 font-bold text-yellow-400 text-2xl text-center'>BootStrap</h3>
            <p className='text-white'>Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites</p>
          </div>
          <div className="skills"  data-aos="fade-left">
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-36 mx-auto text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg></div>
            <h3 className='mb-2 mt-2 font-bold text-yellow-400 text-2xl text-center'>TailBlocks</h3>
            <p className='text-white'>This project provides multiple blocks built using Tailwind CSS that you can use in your own projects.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
