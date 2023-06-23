import React, { useEffect } from "react";

const SelectWrapper = (props) => {
  const { register } = props;

  useEffect(() => {
    console.log(props.name);
    console.log(props.errors);
  }, [props.name]);

  return (
    <div>
      <select
        name={props.name}
        id={props.id}
        className="form-control text-white text-uppercase"
        {...props.register(props.name, { required: true })}
      >
        <option value="" selected disabled>
          Select an item
        </option>

        {props.options.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      {props.errors?.hasOwnProperty(props.name) ? (
        <span className="border-danger text-danger">
          This field is required
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectWrapper;
