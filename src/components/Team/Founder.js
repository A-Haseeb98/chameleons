import { founder } from '../../Data/founder';
import styles from './Team.module.scss';
import Member from './Member';
import JP from '../../assets/jp.png'
import {BsLinkedin} from 'react-icons/bs'
const Founder = () => {
  return (
    <div className={styles.team}>
      <h3 className={styles.title}>Founder</h3>

      <div className={styles.team_Members}>
        {founder?.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>

      <p className={styles.description}>
        <b>Onur Aydogan</b> is a Senior Venture Manager and FinTech Stream Lead at the University of Oxford Saïd Business School for an early-stage startup mentorship programme. At Oxford University, Onur built the FinTech stream for the programme; recruited exit entrepreneurs, investors, and industry leaders as mentors, and selected a cohort of FinTech startups from across Europe and UK to benefit from the programme. Before moving to the UK, Onur was a research assistant and had the chance to participate at CERN on AMS-02 Dark Matter experiment; a particle physics research run in collaboration with the International Space Station. During his time at CERN, he met with the Entrepreneur First (EF) programme and moved to the UK to join the programme where he co-founded Sanctum Technologies as Chief Technology Officer. After receiving investment from EF and University of Oxford Seed Fund, Onur delivered a contract to the Ministry of Defence through DSTL in the UK for an active noise cancellation technology for military and commercial aircraft and moved on to continue his academic studies. He holds an MSc in Atomic & Molecular Physics and a BSc in Physics. Onur’s work in molecular physics on developing and designing a molecular spectrometer from scratch was recognised and <a href="https://e-publishing.cern.ch/index.php/CIJ/article/view/799/577" target="_blank" rel="noopener noreferrer">published by CERN</a>. Furthermore, he also worked on molecular structures of organic solar cell materials during his masters. Shortly before joining CDL, Onur once again participated at CERN; this time, as an Entrepreneur-in-Residence and a jury member for CERN Entrepreneurship Student Programme where he advised entrepreneurs on how to bring CERN technologies into market. He is still an active member of the entrepreneurship community at CERN where he serves as a business mentor for the CERN Student Entrepreneurship Programme (CESP). In 2017, Onur received an endorsement (given to 200 people per annum at the time) from Tech City UK for a Tier 1 Exceptional Promise visa to live and work in the UK. Last year, Onur received a Merit Award from the University of Oxford which is given to staff who have exceeded expectations by adding significant value to their team or department. Onur spent is childhood being influenced by Bruce Wayne (Batman) and Tony Stark (Iron Man). Unable to decide on his favourite, he merged the names of his idols in his company’s name. He considers himself as a generalist technologist with an urge to always keep an eye on emerging technologies in various fields. He is keen to work with ventures working on challenging technologies with the potential of real impact in the world.
      </p>

      <div className={styles.team_Members}>
        <Member icon = {<BsLinkedin onClick={()=> window.open('https://www.linkedin.com/in/jpschoeffel/', '_blank')} />} key={2} member={{
          name: 'Jean-Philippe Schoeffel, Minting Your Future',
          position: ' Advisor, Technology Partner',
          photoUrl: JP,
        }} />
      </div >


    </div >
  );
};

export default Founder;
