import "./NavBar.css"

function NavBar({ name }) {

  return (
    <div className="navBarContainer">
      <div className="nav">
        <div className="left">
          <a href="#Home" className="devName">
            Manjari Rathore
          </a>
        </div>
        <div className="center">
          <div className="options">
            <a href="#Home" className="navEntry px-8 py-2 rounded-full hover:shadow-xl transition duration-200">Home</a>
            <a href="#About" className="navEntry px-8 py-2 rounded-full hover:shadow-xl transition duration-200">About</a>
            <a href="#Projects" className="navEntry px-8 py-2 rounded-full hover:shadow-xl transition duration-200">Projects</a>
            <a href="#Contact" className="navEntry px-8 py-2 rounded-full hover:shadow-xl transition duration-200">Contact</a>
          </div>
        </div>
        <div className="right">
          <div className="downloadResume text-sm">
            <button className="shadow-[inset_0_0_0_2px_#616467] text-stone-50 px-4 py-2 rounded-full tracking-widest uppercase font-medium bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default NavBar;