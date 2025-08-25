import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative pt-[8vh] sm:pt-[10vh] md:pt-[15vh] lg:pt-[20vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-3 sm:py-4 md:py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            alt="Footer drink"
            className="absolute top-0 w-full h-full object-contain"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            loop
            className="absolute top-0 w-full h-full object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-3 sm:gap-4 md:gap-5 relative z-10 mt-5 sm:mt-8 md:mt-12 lg:mt-20">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="YouTube" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="TikTok" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </div>
        </div>

        <div className="mt-20 sm:mt-25 md:mt-30 lg:mt-40 
                        px-4 sm:px-6 md:px-8 lg:px-10 
                        flex gap-6 sm:gap-8 md:gap-10 
                        flex-col md:flex-row 
                        justify-between text-milk font-paragraph 
                        text-sm sm:text-base md:text-lg font-medium">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center 
                          gap-5 sm:gap-8 md:gap-12 lg:gap-16">
            <div className="flex-shrink-0">
              <p className="font-semibold mb-2 sm:mb-0">SPYLT Flavors</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold mb-1">Community</p>
              <p className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Chug Club</p>
              <p className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Student Marketing</p>
              <p className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Dairy Dealers</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold mb-1">Support</p>
              <p className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Company</p>
              <p className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Contacts</p>
              <p className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Tasty Talk</p>
            </div>
          </div>

          <div className="w-full md:max-w-sm lg:max-w-lg xl:max-w-xl">
            <p className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed">
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center 
                            border-b border-[#D9D9D9] 
                            py-3 sm:py-4 md:py-5 
                            group hover:border-[#faeade] transition-colors">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999] 
                           focus:placeholder:opacity-50 transition-all"
                aria-label="Email address for newsletter signup"
              />
              <img 
                src="/images/arrow.svg" 
                alt="Submit" 
                className="ml-3 cursor-pointer hover:scale-110 transition-transform 
                           w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="legal-links">
            <p className="hover:opacity-80 transition-opacity cursor-pointer">Privacy Policy</p>
            <p className="hover:opacity-80 transition-opacity cursor-pointer">Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;