import React from "react";
import style from "./style.module.css";

const Fire = () => {
  return (
    <div className={style.fire}>
      <img className={style.kettle} src="/assets/images/kettle.png" alt="" />

      <div className={style.flames}>
        <div className={style.flame}></div>
        <div className={style.flame}></div>
        <div className={style.flame}></div>
        <div className={style.flame}></div>
      </div>
      <div className={style.logs}></div>
    </div>
  );
};

export default Fire;
