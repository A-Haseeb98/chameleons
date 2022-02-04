// import Image from 'next/image';
import styles from './Features.module.scss';

const Feature = ({ feature }) => {
  return (
    <article className={styles._feature}>
      <img src = {feature.photoUrl} height={80} width={80} alt={feature.title} />
      {/* <Image
        src={feature.photoUrl}
        alt={feature.title}
        height={80}
        width={80}
      /> */}
      {/* <h3 className={styles._title}>{feature.title}</h3> */}
      {/* <p className={styles._details}>{feature.details}</p> */}
    </article>
  );
};

export default Feature;
