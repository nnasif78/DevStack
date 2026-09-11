import logoText from './assets/logo-text.png'
import hamburger from './assets/hamburger.png'

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <button className="md:hidden"><img src={hamburger} alt="Menu" className="h-6 w-6" /></button>
        <a href="#" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"><img src={logoText} alt="Dev Stack" className="w-[130px]" /></a>
        <div className="hidden flex-1 justify-center gap-8 md:flex">
          <a href="#" className="text-sm font-semibold text-[#DB2777]">Home</a>
          <a href="#technologies" className="text-sm font-medium text-[#475569]">Technologies</a>
          <a href="#projects" className="text-sm font-medium text-[#475569]">Projects</a>
          <a href="#about" className="text-sm font-medium text-[#475569]">About</a>
          <a href="#contact" className="text-sm font-medium text-[#475569]">Contact</a>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-2 text-sm font-medium text-[#334155] cursor-pointer">Sign In</button>
          <button className="rounded-full bg-[#D91B7E] px-5 py-2.5 text-sm font-semibold text-white cursor-pointer">Sign Up</button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar