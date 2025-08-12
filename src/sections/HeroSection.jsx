import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

// Register SplitText plugin
gsap.registerPlugin(SplitText);

const HeroSection = () => {
  useGSAP(() => {
    // Check if elements exist before animating
    const heroContent = document.querySelector(".hero-content");
    const heroTextScroll = document.querySelector(".hero-text-scroll");
    const heroTitle = document.querySelector(".hero-title");

    if (!heroContent || !heroTextScroll || !heroTitle) {
      console.warn("Hero section elements not found");
      return;
    }

    // Create SplitText instance
    const titleSplit = new SplitText(".hero-title", { type: "chars" });

    // Create timeline with proper scoping
    const tl = gsap.timeline({ delay: 1 });

    // Animate hero content
    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power1.inOut",
    })
      // Fix typo: polgon -> polygon
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      ) // Start slightly before previous animation ends
      .from(
        titleSplit.chars,
        {
          duration: 0.8,
          yPercent: 200,
          opacity: 0,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5" // Start slightly before previous animation ends
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });

    // Cleanup function
    return () => {
      titleSplit.revert();
    };
  }, []); // Empty dependency array ensures this runs once after mount

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="/images/static-img.png"
          alt="static-img"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"
        />
        <div className="hero-content opacity-0 translate-y-8">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffine</h1>
            </div>
          </div>
          <h2>
            Live life to the fullest  with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>

          <div className="hero-button">
            <p>Chug a SPLYT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
