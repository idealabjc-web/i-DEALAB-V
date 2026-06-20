import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden:  { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const fields = [
  { id: 'firstName', name: 'firstName', label: 'First name *',   type: 'text',  placeholder: 'Jane',                    required: true,  half: true },
  { id: 'lastName',  name: 'lastName',  label: 'Last name *',    type: 'text',  placeholder: 'Doe',                     required: true,  half: true },
  { id: 'email',     name: 'email',     label: 'Email *',        type: 'email', placeholder: 'jane@example.com',        required: true,  half: false },
  { id: 'phone',     name: 'phone',     label: 'Phone',          type: 'tel',   placeholder: '+1 234 567 8900',         required: false, half: false },
  { id: 'position',  name: 'position',  label: 'Position',       type: 'text',  placeholder: 'e.g. Web Developer',     required: false, half: false },
  { id: 'cv',        name: 'cv',        label: 'CV / LinkedIn',  type: 'url',   placeholder: 'https://linkedin.com/in/yourname', required: false, half: false },
];

const perks = [
  { icon: '🌍', label: 'Global team', detail: 'Work with colleagues across multiple continents' },
  { icon: '🚀', label: 'High impact',  detail: 'Drive real academic and professional change' },
  { icon: '🎓', label: 'Learn fast',   detail: 'Steep learning curve in a knowledge-driven org' },
  { icon: '✦',  label: 'Purpose-led', detail: 'Every role connects minds and inspires ideas' },
];

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName:'', lastName:'', email:'', phone:'', position:'', cv:'',
  });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="page-hero">
        <motion.div className="eyebrow" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          Careers
        </motion.div>
        <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}>
          Come work <span className="accent">with us</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}}>
          Join the team building platforms that connect minds and inspire action around the world.
        </motion.p>
      </section>

      {/* ─── Perks ─── */}
      <section style={{ paddingTop: 0, paddingBottom: 'var(--section-pad)' }}>
        <motion.div
          style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))', gap:20 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount:0.3 }}
          variants={{ hidden:{}, visible:{ transition:{ staggerChildren:0.1 } } }}
        >
          {perks.map(p => (
            <motion.div
              key={p.label}
              className="glass-card"
              variants={fadeUp}
              whileHover={{ y:-6 }}
              style={{ padding:'32px 28px' }}
            >
              <div style={{ fontSize:'2rem', marginBottom:16 }}>{p.icon}</div>
              <div style={{
                fontFamily:"'Space Mono',monospace", fontSize:'0.68rem',
                letterSpacing:'0.18em', textTransform:'uppercase',
                color:'var(--amber)', marginBottom:10,
              }}>{p.label}</div>
              <p style={{ color:'var(--text-muted)', fontSize:'0.92rem', lineHeight:1.7 }}>{p.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── Application form ─── */}
      <section style={{ paddingTop:0 }}>
        <motion.form
          className="careers-form"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount:0.15 }}
          variants={fadeUp}
        >
          <div style={{ marginBottom:12 }}>
            <div className="section-eyebrow">Apply Now</div>
            <h2 style={{
              fontFamily:"'Fraunces',serif", fontWeight:600,
              fontSize:'clamp(1.8rem,4vw,2.8rem)', color:'var(--text)',
              letterSpacing:'-0.02em',
            }}>
              Start your application
            </h2>
          </div>

          {submitted ? (
            <motion.div
              className="form-success"
              initial={{ opacity:0, scale:0.95, y:12 }}
              animate={{ opacity:1, scale:1, y:0 }}
              transition={{ duration:0.5 }}
            >
              🎉 Thanks, {form.firstName || 'there'}! Your application has been received.
              <br />
              <span style={{ opacity:0.7, fontSize:'0.8rem' }}>
                We'll reach out at {form.email || 'the email you provided'}.
              </span>
            </motion.div>
          ) : (
            <>
              {/* Row fields */}
              <div className="form-row">
                {fields.filter(f => f.half).map(f => (
                  <div key={f.id} className="field">
                    <label htmlFor={f.id}>{f.label}</label>
                    <input
                      id={f.id} name={f.name} type={f.type}
                      required={f.required} value={form[f.name]}
                      onChange={handleChange} placeholder={f.placeholder}
                    />
                  </div>
                ))}
              </div>

              {/* Full-width fields */}
              {fields.filter(f => !f.half).map(f => (
                <div key={f.id} className="field">
                  <label htmlFor={f.id}>{f.label}</label>
                  <input
                    id={f.id} name={f.name} type={f.type}
                    required={f.required} value={form[f.name]}
                    onChange={handleChange} placeholder={f.placeholder}
                  />
                </div>
              ))}

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale:1.04, y:-3 }}
                whileTap={{ scale:0.97 }}
              >
                Submit Application →
              </motion.button>
            </>
          )}
        </motion.form>
      </section>
    </>
  );
}
