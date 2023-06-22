import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Records from "../data";
import { birthCountry } from "../selection.js";
import SelectWrapper from "./SelectWrapper";
import { Controller } from "react-hook-form";

import { AiFillCaretDown, AiOutlineArrowRight } from "react-icons/ai";
const SecondStep = (props) => {
  return (
    <div>
      {" "}
      <div className="formcontent tab">
        <div className="row justify-content-center align-items-center mb-4 ">
          <div className="col-lg-4 mr-5">
            <label>Date Of Birth</label>
          </div>
          <div className="col-lg-7">
            <Controller
              control={props.control}
              name="date-input"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select date"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  className="form-control"
                  className="text-uppercase form-control"
                />
              )}
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-lg-4 mr-5">
            <label htmlFor="birthcountry">Country Of Birth</label>
          </div>
          <div className="col-lg-7">
            <div class="formholder">
              <AiFillCaretDown className="iconreact" />

              <SelectWrapper
                id={birthCountry.id}
                name={birthCountry.name}
                options={birthCountry.options}
                register={props.register}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-lg-4 mr-5">
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="col-lg-7">
            <input
              type="email"
              name="email"
              id="email"
              className={
                props.errors.email
                  ? "border-danger col-lg-7 form-control"
                  : "col-lg-7 form-control"
              }
              {...props.register("email", {
                required: "Email is required",
                pattern: {
                  value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {props.errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-lg-4 mr-5">
            <label htmlFor="mobileNo">Mobile No</label>
          </div>

          <div className="col-lg-7">
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              className={
                props.errors.mobileNo
                  ? "border-danger col-lg-7 form-control"
                  : "col-lg-7 form-control"
              }
              {...props.register("mobileNo", {
                required: "Mobile Number  is required",
              })}
            />
            {props.errors.mobileNo && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
        </div>
        <div className="row justify-content-around align-items-center mb-4">
          <div className="col-lg-3 genderMargin">
            <labels htmlFor="instructor">Gender</labels>
          </div>

          <div className="col-lg-7 d-flex genderselect">
            <label class="container  d-flex justify-content-center align-items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="mr-5 genderInput"
                {...props.register("gender")}
              />
              Male
              <span className="checkmark genderInput"></span>
            </label>
            <label class="container  d-flex justify-content-center align-items-center ">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="mr-5 "
                {...props.register("gender")}
              />
              Female
              <span className="checkmark genderInput"></span>
            </label>
            <label class="container d-flex justify-content-center align-items-center">
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  className="mr-5 "
                  {...props.register("gender")}
                />{" "}
                Other
                <span className="checkmark genderInput"></span>
              </div>
            </label>
          </div>
          {console.log("SECOND ENDS")}
          <br />
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
