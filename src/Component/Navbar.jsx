import '../StyleSheet/Navbar.css'
import '../StyleSheet/Common.css'

const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font main_header ">
                <div className=" mx-auto flex w-screen bg-violet-700 flex-wrap flex-col md:flex-row items-center">
                    <a className='flex py-2 ml-16'>
                        <img className='rounded-full h-10 w-10' src="/src/Icons/myimg.jpg" alt="" />
                        <span className="ml-3 text-white my-auto text-xl">Vedant Patel</span>
                    </a>
                    <nav className="md:ml-auto mr-7 text-gray-300 flex flex-wrap items-center text-base justify-center">
                        <a href="#home" className="mr-5 hover:text-white cursor-pointer">Home</a>
                        <a href='#about' className="mr-5 hover:text-white cursor-pointer">About</a>
                        <a href='#skill' className="mr-5 hover:text-white cursor-pointer">Skills</a>
                        <a href='#education' className="mr-5 hover:text-white cursor-pointer">Education</a>
                        <a href='#work' className="mr-5 hover:text-white cursor-pointer">Work</a>
                        <a href='#experience' className="mr-5 hover:text-white cursor-pointer">Experience</a>
                        <a href='#contact' className="mr-5 hover:text-white cursor-pointer">Contact</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar