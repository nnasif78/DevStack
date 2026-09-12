import logoText from './assets/logo-text.png'
import hamburger from './assets/hamburger.png'

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between border-b border-[#cad5e4] px-4 sm:px-6 lg:px-8">
        <button className="w-8 md:hidden"><img src={hamburger} alt="Menu"  className="h-5 w-5" /></button>
        <a href="#" className="flex flex-1 justify-center md:flex-none"><img src={logoText} alt="Dev Stack" className="h-6" /></a>
        <div className="hidden flex-1 justify-center gap-8 md:flex">
          <a href="#" className="text-sm font-semibold text-[#DB2777]">Home</a>
          <a href="#technologies" className="text-sm font-medium text-[#475569]">Technologies</a>
          <a href="#projects" className="text-sm font-medium text-[#475569]">Projects</a>
          <a href="#about" className="text-sm font-medium text-[#475569]">About</a>
          <a href="#contact" className="text-sm font-medium text-[#475569]">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs cursor-pointer font-medium text-[#334155] sm:text-sm">Sign In</button>
          <button className="rounded-full cursor-pointer bg-[#D91B7E] px-3 py-2 text-xs font-semibold text-white sm:px-4 sm:text-sm">Sign Up</button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar