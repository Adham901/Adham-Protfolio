import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../../public/animation/Animation - 1714089318831.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();
  const fileUrl = "/public/Photo/Adham madgy cv.pdf" 


  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
        <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Roboto&weight=900&size=34&letterSpacing=.5+em&pause=1000&color=5400FF&width=435&lines=Frontend+Developer;UI+%2F+UX+Designer" alt="Typing SVG" /></a>
        </motion.h2>

        <p className="sub-title">
          I’m Adham magdy, I'm an experienced Front - End Developer with a strong understanding of modern web technologies . I specialize in creating immersive and intuitive user experiences .
        </p>

        <div className="all-icons flex">
        <a href="https://x.com/AdhamMagdy2001?s=35"><div className="icon icon-twitter"></div></a>
          <a href="https://wa.me/qr/6IYMFPMYB356L1"><div className="icon icon-whatsapp"></div></a>
          <a href="https://github.com/Adham901"> <div className="icon icon-github"></div></a>
          <a href="https://www.linkedin.com/in/adham-magdy-311abb23b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><div className="icon icon-linkedin"></div></a>
        </div>

        
        <a href={fileUrl} download>
        <button className="btn-cv" >Dowmload CV</button>
        </a>
        
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
