import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Hari Babu', role: 'Senior Program Manager', image: '/vizag_employees/Hari_Babu_Senior_Program_Manager.jpg' },
  { name: 'Kadari Ramya', role: 'Senior Program Manager', image: '/vizag_employees/Kadari_Ramya_Senior_Program_Manager.jpg' },
  { name: 'Mahesh Raju', role: 'Senior Program Manager', image: '/vizag_employees/Mahesh_Raju_Senior_Program_Manager.jpg' },
  { name: 'Bhaskar', role: 'Team Lead', image: '/vizag_employees/Bhaskar_Team_Lead.jpg' },
  { name: 'Phanindhra Varma', role: 'Program Manager', image: '/vizag_employees/Phanindhra_Varma_Program_Manager.jpg' },
  { name: 'A. Mounika', role: 'Program Co-ordinator', image: '/vizag_employees/A.Mounika.jpg' },
  { name: 'B. Gayathri', role: 'Program Co-ordinator', image: '/vizag_employees/B._Gayathri_Program_Co-ordinator.jpg' },
  { name: 'Ch. Dhana Lakshmi', role: 'Program Co-ordinator', image: '/vizag_employees/Ch._Dhana_Lakshmi_Program_Co-ordinator.jpg' },
  { name: 'Ch. Ragavi', role: 'Program Co-ordinator', image: '/vizag_employees/Ch._Ragavi_Program_Co-ordinator.jpg' },
  { name: 'D. Rama', role: 'Program Co-ordinator', image: '/vizag_employees/D._Rama_Program_Co-ordinator.jpg' },
  { name: 'K. Bhargavi', role: 'Program Co-ordinator', image: '/vizag_employees/K._Bhargavi_Program_Co-ordinator.jpg' },
  { name: 'K. Harika', role: 'Program Co-ordinator', image: '/vizag_employees/K._Harika_Program_Co-ordinator.jpg' },
  { name: 'K. Venkata Pravallika', role: 'Program Co-ordinator', image: '/vizag_employees/K._Venkata_Pravallika_Program_Co-ordinator.jpg' },
  { name: 'N. Hima Bindu', role: 'Program Co-ordinator', image: '/vizag_employees/N._Hima_Bindu_Program_Co-ordinator.jpg' },
  { name: 'P. Divya Sree', role: 'Program Co-ordinator', image: '/vizag_employees/P._Divya_Sree_Program_Co-ordinator.jpg' },
  { name: 'P. Sai Sreeja', role: 'Program Co-ordinator', image: '/vizag_employees/P._Sai_Sreeja_Program_Co-ordinator.jpg' },
  { name: 'P. Sravya', role: 'Program Co-ordinator', image: '/vizag_employees/P._Sravya_Program_Co-ordinator.jpg' },
  { name: 'R. Satya Raju', role: 'Program Co-ordinator', image: '/vizag_employees/R._Satya_Raju_Program_Co-ordinator.jpg' },
  { name: 'R. Sravani', role: 'Program Co-ordinator', image: '/vizag_employees/R._Sravani_Program_Co-ordinator.jpg' },
  { name: 'Usha sri S', role: 'Program Co-ordinator', image: '/vizag_employees/Usha_sri_S_Program_Co-ordinator.jpg' },
  { name: 'V Pavani', role: 'Program Co-ordinator', image: '/vizag_employees/V_Pavani_Program_Co-ordinator.jpg' },
];

const teamLead = teamMembers.find(m => m.role === 'Team Lead');
const otherMembers = teamMembers.filter(m => m.role !== 'Team Lead').sort((a, b) => {
  const roleOrder = { 'Senior Program Manager': 1, 'Program Manager': 2, 'Program Co-ordinator': 3 };
  return (roleOrder[a.role] || 99) - (roleOrder[b.role] || 99);
});

export default function OurTeam() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="page-hero">
        <motion.div
          className="eyebrow"
          initial={{ opacity:0, y:16 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
        >
          Our Team
        </motion.div>
        <motion.h1
          initial={{ opacity:0, y:28 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.7, delay:0.1 }}
        >
          People Behind <span className="accent">i-DEALAB</span>
        </motion.h1>
        <motion.p
          initial={{ opacity:0, y:16 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.7, delay:0.2 }}
        >
          The minds, organizers, and innovators driving global conferences and publications.
        </motion.p>
      </section>

      {/* ─── Team Grid ─── */}
      <section style={{ paddingTop: 0, paddingBottom: 'var(--section-pad)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          
          {/* ─── Team Lead Highlight ─── */}
          {teamLead && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 24px 48px rgba(255, 140, 66, 0.25)' }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'var(--glass)',
                border: '2px solid var(--amber)',
                borderRadius: '24px',
                padding: '48px 32px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                maxWidth: '500px',
                margin: '0 auto 60px auto',
                boxShadow: '0 12px 48px rgba(255, 140, 66, 0.15)',
                cursor: 'pointer'
              }}
            >
              {/* Floating element animation for the image container */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: '50%',
                  marginBottom: 32,
                  overflow: 'hidden',
                  border: '4px solid var(--amber)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ duration: 0.4, type: 'spring' }}
                  src={teamLead.image}
                  alt={teamLead.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </motion.div>

              <h3 style={{
                fontFamily: "'Fraunces',serif",
                fontSize: '1.75rem',
                fontWeight: 500,
                color: 'var(--text)',
                marginBottom: 12,
                letterSpacing: '-0.01em'
              }}>
                {teamLead.name}
              </h3>
              
              <p style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: '0.85rem',
                color: 'var(--amber)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: 'bold'
              }}>
                {teamLead.role}
              </p>
            </motion.div>
          )}

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            {otherMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 40 },
                  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', bounce: 0.5, duration: 0.8 } }
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -12,
                  borderColor: 'var(--amber)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'var(--glass)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease'
                }}
              >
                {/* Image Container */}
                <div style={{
                  width: 140,
                  height: 140,
                  borderRadius: '50%',
                  marginBottom: 24,
                  overflow: 'hidden',
                  border: '4px solid var(--glass)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <motion.img
                    whileHover={{ scale: 1.15, rotate: 4 }}
                    transition={{ duration: 0.4, type: 'spring' }}
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>

                <h3 style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: 8,
                  letterSpacing: '-0.01em'
                }}>
                  {member.name}
                </h3>
                
                <p style={{
                  fontFamily: "'Space Mono',monospace",
                  fontSize: '0.75rem',
                  color: 'var(--amber)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
