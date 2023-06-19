import React, { useState, useEffect } from "react";
import validator from "validator";
import { Container, Col, Row } from "react-bootstrap";
import Records from "../data.json";

import { AiFillCaretDown, AiOutlineArrowRight } from "react-icons/ai";

const StepOne = (props) => {
  // useEffect(() => {
  //   setBoards(response);
  // }, [error]);
  // const [error, setError] = useState(false);
  // props.handleNext = () => {
  //   if (validator.isEmpty(props.formData.instructor)) {
  //     setError(true);
  //   } else {
  //     // setStep((pre) => pre + 1);
  //   }

  //   // showStep();
  // };
  // useEffect(() => {
  //   validateFunction();
  // }, []);
  // const validateFunction = () => {
  //   if (validator.isEmpty(props.formData.instructor)) {
  //     setError(true);
  //   } else {
  //     props.handleNext();
  //   }
  // };

  return (
    <div className="formcontent tab">
      <div className="row justify-content-center align-items-center mb-4">
        <div className="col-lg-4 mr-5">
          <label for="uf" className="text-white">
            Is this course for UF online
          </label>
        </div>

        <div className="col-lg-7">
          <div className="formholder">
            <AiFillCaretDown className="iconreact" />

            <select
              name="uf"
              id="uf"
              className="form-control text-uppercase"
              {...props.formik.getFieldProps("uf")}
              onChange={props.formik.handleChange("uf")}
            >
              <option value="selectItem">SELECT AN ITEM</option>
              <option value="Yes" classNmae="text-white">
                YES
              </option>
              <option value="no" className="text-uppercase">
                no
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center  mb-4">
        <div className="col-lg-4 mr-5">
          <label htmlFor="prefersystem">Preferred System</label>
        </div>
        <div className="col-lg-7">
          <div className="formholder">
            <AiFillCaretDown className="iconreact" />
            <select
              name="prefersystem"
              id="prefersystem"
              className="form-control"
              // onChange={props.handleChange}
              // value={props.formData.prefersystem}
              {...props.formik.getFieldProps("prefersystem")}
              onChange={props.formik.handleChange("prefersystem")}
            >
              <option value="selectItem">SELECT AN ITEM</option>
              <option value="canvas">CANVAS</option>
              <option value="svg">SVG</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center  mb-4">
        <div className="col-lg-4 mr-5">
          <label htmlFor="College">College/Department</label>
        </div>
        <div className="col-lg-7">
          <div class="formholder">
            <AiFillCaretDown className="iconreact" />
            <select
              name="College"
              id="College"
              className=" form-control text-white text-uppercase"
              // onChange={props.handleChange}
              // value={props.formData.College}
              // {...props.formik.getFieldProps("uf")}
              // onChange={props.formik.handleChange("uf")}
              {...props.formik.getFieldProps("college")}
              onChange={props.formik.handleChange("college")}
            >
              {Records.uni.map((item) => (
                <option value={item.uni}>
                  <div className="text-white"> {item}</div>
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="row justify-content-center align-items-center  mb-4">
        <div className="col-lg-4 mr-5">
          <label htmlFor="term">TERM</label>
        </div>
        <div className="col-lg-7">
          <div className="formholder">
            <AiFillCaretDown className="iconreact" />
            <select
              name="term"
              id="term"
              className=" form-control text-uppercase text-white"
              // onChange={props.handleChange}
              // value={props.formData.term}
              {...props.formik.getFieldProps("term")}
              onChange={props.formik.handleChange("term")}
            >
              {Records.term.map((item) => (
                <option value={item.term}>
                  <div className="text-white"> {item}</div>
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center  mb-4">
        <div className="col-lg-4 mr-5">
          <label htmlFor="instructor" className="Col-lg-5 mr-5">
            Instructor Username
          </label>
        </div>
        <div className="col-lg-7">
          <input
            style={{
              border: props.formik.errors.instructor ? "2px solid red" : "",
            }}
            type="text"
            id="instructor"
            className="Col-lg-7 form-control"
            name="instructor"
            // onChange={props.handleChange}
            // value={props.formData.instructor}
            // required
            {...props.formik.getFieldProps("instructor")}
          />
        </div>
      </div>
      {console.log("error from main", props.error)}
    </div>
  );
};

export default StepOne;
