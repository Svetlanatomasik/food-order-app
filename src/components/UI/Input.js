import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />

      {/* {...props.input} - This ensures that all the key value pairs
      in this input object,
      which we receive on props input are added as props to input. */}
    </div>
  );
});

export default Input;
