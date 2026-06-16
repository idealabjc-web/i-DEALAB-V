import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.65,0,0.35,1] } }
};

export default function Careers(){
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName:'', lastName:'', email:'', phone:'', position:'', cv:''
  });

  const handleChange = (e)=>{
    setForm(f=>({...f, [e.target.name]: e.target.value}));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero">
        <motion.div className="eyebrow" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>Careers</motion.div>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}>
          Come work <span className="accent">with us</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}}>
          Join the team building platforms that connect minds and inspire action around the world.
        </motion.p>
      </section>

      <section>
        <motion.form className="careers-form" onSubmit={handleSubmit} initial="hidden" whileInView="visible" viewport={{once:true,amount:0.2}} variants={fadeUp}>
          {submitted ? (
            <motion.div className="form-success" initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{duration:0.4}}>
              Thanks, {form.firstName || 'there'} — your application has been received. Our team will reach out at {form.email || 'the email you provided'}.
            </motion.div>
          ) : (
            <>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="firstName">First name *</label>
                  <input id="firstName" name="firstName" required value={form.firstName} onChange={handleChange} placeholder="Jane" />
                </div>
                <div className="field">
                  <label htmlFor="lastName">Last name *</label>
                  <input id="lastName" name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Doe" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@example.com" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 234 567 8900" />
              </div>
              <div className="field">
                <label htmlFor="position">Position</label>
                <input id="position" name="position" value={form.position} onChange={handleChange} placeholder="e.g. Web Developer" />
              </div>
              <div className="field">
                <label htmlFor="cv">Link to CV / LinkedIn</label>
                <input id="cv" name="cv" value={form.cv} onChange={handleChange} placeholder="https://linkedin.com/in/yourname" />
              </div>
              <motion.button type="submit" className="submit-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                Apply
              </motion.button>
            </>
          )}
        </motion.form>
      </section>
    </>
  );
}
