import { FaGithub, FaFacebook, FaFlickr } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

function About() {
  return (
    <>
      <section className="section" id="section1">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-4">
            <div className="">
              {/*  */}
              <motion.h1
                variants={fadeIn("up", 0.25)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Hi! Call me <span className="text-gradient">SUZANOO.</span>
              </motion.h1>

              {/*  */}
              <motion.div
                variants={fadeIn("up", 0.35)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mt-2 text-[36px] leading-[1]"
              >
                <span>I am </span>
                <TypeAnimation
                  sequence={[
                    2000,
                    "a Structural Engineer.",
                    2000,
                    "a Web Developer.",
                    2000,
                    "a Photographer.",
                    2000,
                    "a Homosapien.",
                    2000,
                  ]}
                  speed={50}
                  className="text-gradient"
                  repeat={0}
                />
              </motion.div>

              {/*  */}
              <motion.div
                variants={fadeIn("up", 0.55)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mt-6"
              >
                <p className="text-gray-300 opacity-75">
                  <TypeAnimation
                    sequence={[
                      15000,
                      `I am a structural engineer, and I am deeply fascinated by art.
                      I am a web developer, and I have a dream.
                      I like photography, see me over land and sea.
                      I like music, and I still play Für Elise.`,
                    ]}
                    wrapper="span"
                    style={{ whiteSpace: "pre-line" }}
                    repeat={0}
                    speed={25}
                  />
                  {/* <Typewriter
                    className="text-gray-300 opacity-75"
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(15000)
                        .callFunction(playSound)
                        .typeString(
                          `<p>I am structural engineer, and deeply facinate in art.</p>
                            <p>I like photography, and I have a dream.</p>
                            <p>I like music, and I play Fur Elise.</p>`
                        )
                        .start()
                        .callFunction(stopSound);
                    }}
                  /> */}
                </p>
              </motion.div>

              {/*  */}
              <motion.div
                variants={fadeIn("up", 0.65)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex cursor-pointer w-[90px] items-center justify-between mt-4"
              >
                <a href="https://github.com/Suzanoo">
                  <FaGithub className="transform transition-transform hover:scale-150 hover:text-[#F2B705]" />
                </a>
                <a href="https://web.facebook.com/">
                  <FaFacebook className="transform transition-transform hover:scale-150 hover:text-[#F2B705]" />
                </a>
                <a href="https://www.flickr.com/photos/pacific_friends/">
                  <FaFlickr className="transform transition-transform hover:scale-150 hover:text-[#F2B705]" />
                </a>
              </motion.div>
            </div>

            <div className="">
              {/* <img src={`${require("../public/img/DSC_9647.jpg")}`} alt="" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
