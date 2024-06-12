import '../StyleSheet/Home.css'

const Work = () => {
  return (
    <div id='work' className='pt-4'>
      <div>
        <h2 data-aos="flip-right" className='text-4xl pt-10 text-center pb-10 text-white '>𝓜𝔂 𝓦𝓸𝓻𝓴 </h2>
        <div className="mywork w-full pl-24 pr-24 flex justify-between text-white text-2xl">
          <p data-aos="fade-right" data-aos-duration="2000" className='w-1/2 leading-10 mr-5 my-auto'>Now i am Training at Soft Solution Services in Ahmedabad. i study in React Js in Soft Solution Service company. I have make a many projects in this company. React is a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files. </p>
          <img data-aos="fade-left" data-aos-duration="2000" className='w-1/2 rounded-3xl' src="/src/Icons/study.jpg" alt="" />
        </div>
        <p className='text-2xl pt-10 text-center pb-10 text-white font-bold'>Language which i have a learn in my work days in Soft Solution Services</p>
        <div className="flex justify-around w-2/3 mx-auto">
          <ul data-aos="fade-up" data-aos-duration="3000" className='worklist flex-col  flex justify-evenly -mt-4 max-w-fit px-12 rounded-3xl text-xl mx-auto'>
            <li>➡ C Language</li>
            <li>➡ C++ Language</li>
            <li>➡ HTML</li>
            <li>➡ BootStrap</li>
          </ul>
          <ul data-aos="fade-up" data-aos-duration="3000" className='worklist flex-col flex justify-evenly -mt-4 max-w-fit px-12 rounded-3xl text-xl mx-auto'>
            <li>➡ CSS</li>
            <li>➡ JavaScript</li>
            <li>➡ React Js</li>
            <li>➡ TailWind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Work