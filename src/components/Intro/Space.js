import styles from "./Space.module.scss";
import Button from "../../global/Button/Button";

const Space = () => {
  return (
    <div className={styles.intro}>
      <article className={styles._first_intro}>
        <div className={styles._intro_data}>
          <br /> <br /> <br /> <br /> <br />
          <h2 className={styles._title}>
            BUILDING THE FIRST
            <br />
            <span>BANK IN METAVERSE!</span>
          </h2>


        </div>
      </article>

    </div>
  );
};

export default Space;
