import bannerStack from './assets/banner-stack.png'

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-16 text-center md:flex-row md:text-left lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-[40px] font-extrabold leading-tight tracking-[-1.5px] text-[#0F172A] md:text-[60px]">
          Build Your Ideal
          <span className="block bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
        </h1>

        <p className="mt-6 text-lg leading-7 text-[#475569]">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex justify-center gap-4 md:justify-start">
          <button className="h-[42px] w-[170px] cursor-pointer rounded-md bg-gradient-to-r from-[#F97316] to-[#EC4899] text-sm font-semibold text-white">Explore Technologies</button>
          <button className="h-[42px] w-[170px] cursor-pointer rounded-md border border-[#374151] bg-white text-sm font-medium text-[#374151]">Learn More</button>
        </div>
      </div>

      
        <img src={bannerStack} alt="Development Stack" className="w-full max-w-[500px]" />
      
    </section>
  )
}

export default Hero