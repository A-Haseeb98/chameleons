import Button from '../../global/Button/Button';
import styles from './TheNewEraEmpireIsComing.module.scss';

const TheNewEraEmpireIsComing = () => {
  return (
    <div className={styles.faq_Conclusion}>
      <h2 className={styles.faq_Conclusion_Title}>
        The first ever virtual bank in metaverse is coming!
      </h2>

      <p className={styles.faq_Conclusion_details}>
        Join us now on Discord.
      </p>

      <Button>Let&apos;s build it together</Button>
    </div>
  );
};

export default TheNewEraEmpireIsComing;
