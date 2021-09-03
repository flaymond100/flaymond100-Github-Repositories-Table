import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import styles from "./Loading.module.scss";

const LoadingPage: React.FC = () => {
  const [translation] = useTranslation();

  return (
    <div className={styles.circularWrapper}>
      <CircularProgress />
      <h3>
        <p>{translation("loading")}</p>
      </h3>
    </div>
  );
};

export default LoadingPage;
