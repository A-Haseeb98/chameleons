// import Image from "next/image";
import styles from "./Team.module.scss";

const Member = ({ member, icon }) => {
  return (
    <figure className={styles.card}>
      <div className={styles._image}>
        <img src={member.photoUrl} alt={member.name} />
      </div>

      <figcaption className={styles.card_details}>
        <div>
          <h3>{member.name}</h3>
          <p>{member.position } <br/> <span style={{ cursor : 'pointer', display: 'inline-block',  marginTop: '5px' , fontSize: '20px'}}>{icon}</span> </p>
        </div>
      </figcaption>
    </figure>
  );
};

export default Member;
