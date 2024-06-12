
// Next color : #8c5cf6
// Next color : #b73dcc


import '../StyleSheet/Home.css'

const Education = () => {
  return (
    <div id='education'>
      <div className="backimg relative pt-14 ">
        <img data-aos="zoom-in" className='w-full h-3/6 opacity-25' src="/src/Icons/seminar.png" alt="" />
        <img data-aos="fade-right" className='absolute -left-10 top-14 ' src="/src/Icons/education.png" alt="" />
        {/* <p className='educationpara absolute right-4  top-32 text-white '>Hemchandracharya North Gujarat University</p> */}
        <p data-aos="fade-left" data-aos-duration="1000" className='educationpara absolute right-4  top-80 text-white '>હેમચદ્રાચાર્ય ઉતર ગુજરાત યુનિવર્સિટી</p>
        <p data-aos="fade-left" data-aos-duration="1000" className='educationpara absolute right-4 top-96 text-white '>પાટણ</p>
        {/* <p className='educationpara absolute right-8 top-52 text-white '>Patan</p> */}
        <p className='educationpara absolute right-4 bottom-56  text-white text-6xl'>Bachelor of Computer Applications</p>
      </div>
    </div>
  )
}

export default Education
