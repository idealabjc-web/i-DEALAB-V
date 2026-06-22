import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitWeb3Form } from '../services/web3forms';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const offices = [
  {
    label: 'USA Office',
    city: 'Albany, New York',
    detail: 'Parklane West, Menands Albany,\nNew York 12204, United States of America',
    phone: '+1 (716) 217-1471',
    href: 'tel:+17162171471',
  },
  {
    label: 'India Office',
    city: 'Visakhapatnam, Andhra Pradesh',
    detail: 'iDEALAB Journals and Conferences\n27-08-305, Plot No. 5, Sri Ramnagar\nBeside Ginger, Gajuwaka\nVisakhapatnam 530026',
    phone: '+91 9063709344',
    href: 'tel:+919063709344',
  },
];

const socials = [
  { href: 'https://www.linkedin.com/company/i-dealab/', label: 'in', aria: 'LinkedIn' },
  { href: 'https://www.facebook.com/profile.php?id=61555897764461', label: 'fb', aria: 'Facebook' },
  { href: 'https://twitter.com/', label: 'x', aria: 'X / Twitter' },
  { href: 'https://instagram.com/', label: 'ig', aria: 'Instagram' },
];

const emptyContactForm = {
  name: '',
  email: '',
  phone: '',
  enquiry: 'General enquiry',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(emptyContactForm);
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState('');

  const handleChange = event => {
    setForm(current => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setFormStatus('sending');
    setFormError('');

    try {
      await submitWeb3Form({
        subject: `New website enquiry — ${form.enquiry}`,
        from_name: 'i-DEALAB Website',
        form_type: 'Contact enquiry',
        ...form,
      });
      setForm(emptyContactForm);
      setFormStatus('success');
    } catch (error) {
      setFormError(error.message);
      setFormStatus('error');
    }
  };

  return (
    <>
      <section className="page-hero contact-page-hero">
        <motion.div className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Get in touch
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          Let&apos;s start a <span className="accent">conversation</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          Questions about our journals, conferences, partnerships, or careers? Our team is ready to help.
        </motion.p>
      </section>

      <section className="contact" id="contact">
        <motion.div
          className="contact-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div className="contact-primary" variants={fadeUp}>
            <div className="section-eyebrow">Write to us</div>
            <h2>How can we help?</h2>
            <p className="contact-intro">
              Email is the quickest way to reach us. Share a short note and the right member of our team will respond.
            </p>

            <div className="contact-channels">
              <a className="contact-channel" href="mailto:idealabjc9@gmail.com">
                <span className="contact-channel-icon" aria-hidden="true">@</span>
                <span>
                  <small>Email</small>
                  <strong>idealabjc9@gmail.com</strong>
                </span>
              </a>
              <a className="contact-channel" href="tel:+919063709344">
                <span className="contact-channel-icon" aria-hidden="true">+</span>
                <span>
                  <small>Phone</small>
                  <strong>+91 9063709344</strong>
                </span>
              </a>
            </div>

            <motion.a
              className="contact-action"
              href="mailto:idealabjc9@gmail.com?subject=Enquiry%20for%20i-DEALAB"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Compose an email <span aria-hidden="true">→</span>
            </motion.a>

            <div className="contact-socials">
              <span>Follow us</span>
              <div className="social-row">
                {socials.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.aria}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="contact-offices">
            {offices.map((office, index) => (
              <motion.article
                key={office.label}
                className="contact-block"
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
              >
                <div className="contact-office-topline">
                  <span>{office.label}</span>
                  <span className="contact-office-dot" aria-hidden="true" />
                </div>
                <h3>{office.city}</h3>
                <p>{office.detail}</p>
                <a href={office.href}>{office.phone}</a>
              </motion.article>
            ))}

            <motion.div className="contact-response" variants={fadeUp}>
              <span className="contact-response-dot" aria-hidden="true" />
              <div>
                <strong>We&apos;re listening</strong>
                <p>Send your enquiry any time. Our team will route it to the right department.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.form
          className="contact-enquiry-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-form-heading">
            <div>
              <div className="section-eyebrow">Send an enquiry</div>
              <h2>Message our team</h2>
            </div>
            <p>Complete the form and your message will be delivered directly to our inbox.</p>
          </div>

          {formStatus === 'success' ? (
            <div className="form-success" role="status">
              Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
              <button type="button" className="form-reset" onClick={() => setFormStatus('idle')}>Send another message</button>
            </div>
          ) : (
            <>
              <div className="contact-form-grid">
                <div className="field">
                  <label htmlFor="contact-name">Full name *</label>
                  <input id="contact-name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="contact-email">Email *</label>
                  <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
                </div>
                <div className="field">
                  <label htmlFor="contact-phone">Phone</label>
                  <input id="contact-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Your phone number" />
                </div>
                <div className="field">
                  <label htmlFor="contact-enquiry">Enquiry type *</label>
                  <select id="contact-enquiry" name="enquiry" value={form.enquiry} onChange={handleChange} required>
                    <option>General enquiry</option>
                    <option>Journals and publishing</option>
                    <option>Conferences</option>
                    <option>Partnerships</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div className="field contact-message-field">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea id="contact-message" name="message" rows="5" value={form.message} onChange={handleChange} required placeholder="How can we help?" />
                </div>
              </div>

              {formStatus === 'error' && <p className="form-error" role="alert">{formError}</p>}
              <button className="submit-btn" type="submit" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Sending…' : 'Send message →'}
              </button>
            </>
          )}
        </motion.form>

        <motion.div
          className="contact-map-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-map-copy">
            <div className="section-eyebrow">Find us</div>
            <h2>Visakhapatnam Office</h2>
            <p>
              27-08-305, Plot No. 5, Sri Ramnagar,<br />
              Beside Ginger, Gajuwaka,<br />
              Visakhapatnam 530026
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=27-08-305%20Plot%20No%205%20Sri%20Ramnagar%20Beside%20Ginger%20Gajuwaka%20Visakhapatnam%20530026"
              target="_blank"
              rel="noreferrer"
              className="contact-map-link"
            >
              Open in Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-map-frame">
            <iframe
              title="iDEALAB Visakhapatnam office location"
              src="https://www.google.com/maps?q=27-08-305%20Plot%20No%205%20Sri%20Ramnagar%20Beside%20Ginger%20Gajuwaka%20Visakhapatnam%20530026&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </section>

      <div className="contact-spacer" />
    </>
  );
}
