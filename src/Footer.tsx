import logoText from './assets/logo-text.png'

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-[#94A3B8]">

            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

                <div className="grid gap-10 md:grid-cols-5">

                    {/* Left */}
                    <div className="text-center md:col-span-2 md:text-left">
                        <img
                            src={logoText}
                            alt="Dev Stack"
                            className="mx-auto h-7 md:mx-0"
                        />

                        <p className="mx-auto mt-4 max-w-[384px] text-xs leading-5 text-[#64748B] md:mx-0">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>

                        <div className="mt-4 flex justify-center gap-3 text-xs font-semibold text-[#475569] md:justify-start">
                            <a href="#">GitHub</a>
                            <span className="md:hidden">·</span>
                            <a href="#">Twitter</a>
                            <span className="md:hidden">·</span>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold text-[#0F172A]">
                            Product
                        </h3>

                        <div className="mt-4 space-y-3 text-xs text-[#64748B]">
                            <a href="#" className="block cursor-pointer">Home</a>
                            <a href="#" className="block cursor-pointer">Technologies</a>
                            <a href="#" className="block cursor-pointer">Projects</a>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold text-[#0F172A]">
                            Company
                        </h3>

                        <div className="mt-4 space-y-3 text-xs text-[#64748B]">
                            <a href="#" className="block cursor-pointer">About</a>
                            <a href="#" className="block cursor-pointer">Contact</a>
                            <a href="#" className="block cursor-pointer">Careers</a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold text-[#0F172A]">
                            Legal
                        </h3>

                        <div className="mt-4 space-y-3 text-xs text-[#64748B]">
                            <a href="#" className="block cursor-pointer">Privacy Policy</a>
                            <a href="#" className="block cursor-pointer">Terms of Service</a>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-[#94A3B8] pt-5">
                    <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                        <p>© 2026 Dev Stack. All rights reserved.</p>

                        <div className="flex gap-5">
                            <a href="#" className="cursor-pointer">Privacy</a>
                            <a href="#" className="cursor-pointer">Terms</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer