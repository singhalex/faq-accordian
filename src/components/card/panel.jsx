import { useState } from "react";
import styles from "./panel.module.css";
import PropTypes from "prop-types";

export default function Panel({ title, text }) {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.panel}>
      <button className={styles.panelButton} onClick={handleClick}>
        {title}
        <img
          src={
            hidden ? "/src/assets/icon-plus.svg" : "/src/assets/icon-minus.svg"
          }
          alt="icon"
        />
      </button>
      {!hidden && <p className={styles.panelText}>{text}</p>}
    </div>
  );
}

Panel.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
