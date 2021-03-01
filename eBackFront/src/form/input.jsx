import React from "react";

const Input = ({ name, value, onChange, label, type, placeholder, error, className }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        className={className}
        id={name}
        autoComplete="off"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
