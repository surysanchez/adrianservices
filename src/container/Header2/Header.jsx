import './Header.scss'
import {motion} from "framer-motion"
import images from '../../constants/images';
import { LuArrowDownNarrowWide } from "react-icons/lu";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
      duration: 1.5,
      staggerChildren: 0.1,
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition:{
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    }
  },
}

function HomePage() {
  return (
    <>
    {/* <div className='home'>
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} 
        initial="initial" animate="animate">
        <motion.h4 variants={textVariants}>Hola, welcome to my website</motion.h4>
            <motion.h2 variants={textVariants}>I'm a skilled and experienced Carpenter</motion.h2>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants} >Check my latest work</motion.button>
            </motion.div>
            <motion.span variants={textVariants} animate="scrollButton" >
            <LuArrowDownNarrowWide size={20} />
            </motion.span>
        </motion.div>
    </div>  
    <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
      Carpentry professional | Woodsmith | Woodcrafstman | Carpentry specialist | Wood Artisan

    </motion.div>
       <div className="imageContainer">
       <img src={images.carpenter} alt="" />
       </div>
    </div> */}
    </>
  )
}

export default HomePage