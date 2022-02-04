import Grid from "@mui/material/Grid";
import { roadMapData } from "../../Data/readMap";
import ProgressBar from "../../global/ProgressBar/ProgressBar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Roadmap.module.scss";
const RoadMap = () => {
  return (
    <div className={styles.roadmap_wrapper}>
      <h2 className={styles.roadmap_title}>
        Launch <span>Roadmap</span>
      </h2>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        {roadMapData?.map((el, index) => (
          <Grid
            key={el.id}
            container
            item
            md={10}
            sm={12}
            lg={10}
            xs={12}
            className={styles.roadmap_container}
          >
            <Grid item md={2} sm={3} xs={12} className={styles.roadmap_number}>
              <div className={styles.roadmap_number_wrapper}>
                <CircularProgressbar
                  value={el.percentage}
                  text={`${el.percentage}%`}
                  strokeWidth={5}
                />
              </div>
            </Grid>
            <Grid
              item
              md={10}
              sm={9}
              xs={12}
              className={styles.roadmap_content}
            >
              <h2>{el.title}</h2>
              <p>{el.description}</p>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <p>
          Please do read our full Roadmap on our&ensp;
          <a href="https://onur-aydogan2.gitbook.io/cauligenous-chameleons-and-cricket-bank/" target="_blank" rel="noopener noreferrer">
            Whitepaper
          </a>
        </p>
      </Grid>

    </div>
  );
};

export default RoadMap;
