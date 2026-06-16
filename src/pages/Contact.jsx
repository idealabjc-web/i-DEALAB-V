import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.65,0,0.35,1] } }
};

export default function Contact(){
  return (
    <>
      <section className="page-hero">
        <motion.div className="eyebrow" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>Get in touch</motion.div>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}>
          Contact <span className="accent">us</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}}>
          Reach out to either of our offices, or connect with us on social media.
        </motion.p>
      </section>

      <section className="contact" id="contact">
        <motion.div className="section-head" initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}} variants={fadeUp}>
          <div>
            <div className="section-eyebrow">Contact us</div>
            <h2>Let's talk</h2>
          </div>
        </motion.div>
        <motion.div className="contact-grid" initial="hidden" whileInView="visible" viewport={{once:true,amount:0.2}} variants={fadeUp}>
          <div>
            <a className="big-link" href="mailto:idealabjc@gmail.com">idealabjc@gmail.com</a>
            <a className="big-link" href="tel:+919063709344">+91 9063709344</a>
            <div className="social-row">
              <a href="https://www.linkedin.com/company/i-dealab/" target="_blank" rel="noreferrer">in</a>
              <a href="https://www.facebook.com/profile.php?id=61555897764461" target="_blank" rel="noreferrer">fb</a>
              <a href="https://www.facebook.com/profile.php?id=61555897764461" target="_blank" rel="noreferrer">x</a>
              <a href="https://www.facebook.com/profile.php?id=61555897764461" target="_blank" rel="noreferrer">ig</a>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-block">
              <div className="label">USA Office</div>
              <p>Parklane West, Menands Albany,<br/>New York 12204, United States of America</p>
            </div>
            <div className="contact-block">
              <div className="label">India Office</div>
              <p>GVR's Pride, HIG-85A, KPHB 5th Phase,<br/>Kukatpally, Hyderabad, Telangana 500072</p>
            </div>
            <div className="contact-block">
              <div className="label">Phone (USA)</div>
              <p><a href="tel:+17162171471">+1 (716) 217-1471</a></p>
            </div>
            <div className="contact-block">
              <div className="label">Phone (India)</div>
              <p><a href="tel:+919063709344">+91 9063709344</a></p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
