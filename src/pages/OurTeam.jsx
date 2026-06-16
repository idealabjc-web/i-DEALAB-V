import { motion } from 'framer-motion';

const teamLeads = [
  { name:'Chinni Malladi', role:'Team Lead', img:'https://static.wixstatic.com/media/f264b0_b34552cbdb1d4b7787014945b1c70841~mv2.jpeg', link:'https://www.idealab-jc.com/idias-team' },
  { name:'Vijay Vedala', role:'Team Lead', img:'https://static.wixstatic.com/media/f264b0_5dcbc46bbffe49b79890d1592054e590~mv2.jpeg', link:'https://www.idealab-jc.com/icon-team' },
  { name:'Bhaskar Sirisetti', role:'Team Lead', img:'https://static.wixstatic.com/media/f264b0_fd5646cec88a4b3798c84d5f049adcdf~mv2.jpeg', link:'https://www.idealab-jc.com/prosummits-team' },
  { name:'Lavanya. A', role:'Team Lead', img:'https://static.wixstatic.com/media/f264b0_b5033a5ff6f748cea01e9e9c425cc8aa~mv2.jpeg', link:'https://www.idealab-jc.com/wyn-team' },
  { name:'Sashi Chandana', role:'Team Lead', img:'https://static.wixstatic.com/media/f264b0_55a7057f61c1414c8f62a96a3370f3dc~mv2.jpg', link:'https://www.idealab-jc.com/wynx-team' },
  { name:'Roshitha Alluri', role:'Team Lead', img:'https://static.wixstatic.com/media/f264b0_43b1f88af9014713a283f23e8bc45747~mv2.jpeg', link:'https://www.idealab-jc.com/peercite-team' },
];

const collaborators = [
  { name:"Catherine O' Mahony", img:'https://static.wixstatic.com/media/f264b0_e5c41ad5c7f640a5893b76c176f16809~mv2.jpeg' },
  { name:'S. Duygu Selcuklu', img:'https://static.wixstatic.com/media/f264b0_783c8ec3933546659dd210ac031c8e01~mv2.jpg' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.65,0,0.35,1] } }
};

export default function OurTeam(){
  return (
    <>
      <section className="page-hero">
        <motion.div className="eyebrow" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>Who we are</motion.div>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}>
          Meet The <span className="accent">Team</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}}>
          The leads behind every platform in the i-DEALAB network.
        </motion.p>
      </section>

      <section>
        <motion.div className="section-head" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.7}}>
          <div>
            <div className="section-eyebrow">Team Leads</div>
            <h2>Across our platforms</h2>
          </div>
          <p className="desc">Each platform is led by its own team — visit theirs to see what they're building.</p>
        </motion.div>
        <motion.div className="team-grid" initial="hidden" whileInView="visible" viewport={{once:true,amount:0.15}} variants={container}>
          {teamLeads.map(person=>(
            <motion.div className="team-card" key={person.name} variants={item} whileHover={{ y: -8 }}>
              <div className="avatar"><img src={person.img} alt={person.name} /></div>
              <div className="role">{person.role}</div>
              <h3>{person.name}</h3>
              <a className="visit" href={person.link} target="_blank" rel="noreferrer">Visit Team <span>→</span></a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section>
        <motion.div className="section-head" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.7}}>
          <div>
            <div className="section-eyebrow">Beyond borders</div>
            <h2>International Collaborators</h2>
          </div>
          <p className="desc">Partners around the world who help shape i-DEALAB's global reach.</p>
        </motion.div>
        <motion.div className="collab-grid" initial="hidden" whileInView="visible" viewport={{once:true,amount:0.2}} variants={container}>
          {collaborators.map(person=>(
            <motion.div className="collab-card" key={person.name} variants={item} whileHover={{ scale: 1.05 }}>
              <div className="photo"><img src={person.img} alt={person.name} /></div>
              <h3>{person.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
