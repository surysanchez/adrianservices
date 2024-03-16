import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {motion} from "framer-motion"
import "./AboutUs.css";
import { images } from "../../constants";

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
  },}
const AboutUs = () => (
  <div
    className="app__aboutus flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <motion.h1 className="headtext__cormorant" variants={textVariants}>About Me</motion.h1>
        <img src={images.saw} alt="saw" className="saw__img" />
        <motion.div className="textContainer" variants={textVariants} 
        initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>I'm a skilled and experienced Carpenter</motion.h2>
       </motion.div>
        <p className="p__opensans" style={{ textTransform: "none" }}>
   
        With over 8 years of carpentry experience, I am a passionate and
        dedicated craftsman originally from Cuba. My woodworking journey began
        with a love for transforming timber into unique creations. I bring a
        blend of precision and creativity to every project, from bespoke
        furniture to intricate installations. My Cuban heritage adds a special
        touch to my work, creating pieces that tell a story. Let's collaborate
        to bring your woodworking visions to life with the dedication and
        passion that define my craft.
      <p>
   
        {" "}
        Con más de 8 años de experiencia en carpintería, soy un artesano
        apasionado y dedicado originario de Cuba. Mi trayectoria en la
        carpintería comenzó con un amor por transformar la madera en creaciones
        únicas. Aporto una combinación de precisión y creatividad a cada
        proyecto, desde muebles personalizados hasta instalaciones intrincadas.
        Mi herencia cubana agrega un toque especial a mi trabajo, creando piezas
        que cuentan una historia. Colaboremos para dar vida a sus visiones de
        carpintería con la dedicación y pasión que definen mi oficio.
      </p>
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
