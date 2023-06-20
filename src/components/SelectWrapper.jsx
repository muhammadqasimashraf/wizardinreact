import React from "react";

const SelectWrapper = (props) => {
  return (
    <div>
      <select
        name={props.name}
        id={props.id}
        className="form-control text-white text-uppercase"
        {...props.formik.getFieldProps(`${props.name}`)}
        onChange={props.formik.handleChange(`${props.name}`)}
      >
        {props.options.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectWrapper;
