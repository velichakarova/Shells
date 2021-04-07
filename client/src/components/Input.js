import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const Input = ({ error ,id, label, type, value, placeholder, onChange, onBlur }) => {
  return (
    <ReactBootStrap.Form.Group controlId={id}>
      <ReactBootStrap.Form.Label>{label}</ReactBootStrap.Form.Label>
      <ReactBootStrap.Form.Control
        
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
      />
      {error ? <div>Your userneme should have at least 4 charecters!!</div> : null}
    </ReactBootStrap.Form.Group>
  );
};

export default Input;
