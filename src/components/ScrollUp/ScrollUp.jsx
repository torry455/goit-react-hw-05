import React from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import css from "./ScrollUp.module.css"; // Імпорт CSS-модуля

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={150}
          EasingType="easeOutCubic"
          AnimationDuration={500}
          ContainerClassName={css.ScrollUpBtnContainer}
          TransitionClassName="ScrollUpBtnToggled"
          style={{
            stroke: "#dbb61f",
            backgroundColor: "#2b2a2a",
            fill: "#dbb61f",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            transition: "background-color 0.3s",
            cursor: "pointer",
            padding: "12px",
            margin: "auto",
          }}
          ToggledStyle={{}}
          TinyButtonStyle={{}}
        />
      </div>
    );
  }
}
