import React from "react";

const SelectWrapper = (props) => {
  const { register } = props;
  return (
    <div>
      <select
        name={props.name}
        id={props.id}
        className="form-control text-white text-uppercase"
        {...register(props.name)}
      >
        <option value="" disabled>
          Select an item
        </option>
        {props.options.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectWrapper;
