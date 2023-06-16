import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Records from "../data.json";
import { AiFillCaretDown, AiOutlineArrowRight } from "react-icons/ai";
const Second = (props) => {
  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState("Male");

  function onChangeValue(event) {
    setGender(event.target.value);
    console.log(event.target.value);
    props.setFormData({
      ...props.formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleDateChange = (date) => {
    setDate(date);
  };
  return (
    <div>
      {" "}
      <div className="formcontent tab">
        <div className="row justify-content-center align-items-center mb-4 ">
          <div className="col-lg-4 mr-5">
            <label>Date Of Birth</label>
          </div>
          <div className="col-lg-7">
            <DatePicker
              selected={date}
              name="dob"
              onChange={handleDateChange}
              className=" text-uppercase form-control"
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
              <select
                name="birthcountry"
                id="birthcountry"
                className=" text-uppercase form-control"
                onChange={props.handleChange}
                value={props.formData.birthcountry}
              >
                {Records.countryofbirth.map((item) => (
                  <option value={item.countryOfBirth}>
                    <div className="text-white"> {item}</div>
                  </option>
                ))}
              </select>
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
              className="form-control"
              onChange={props.handleChange}
              value={props.formData.email}
            />
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
              className=" form-control"
              onChange={props.handleChange}
              value={props.formData.mobileNo}
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-4">
          <label htmlFor="instructor" className="col-lg-3 mr-5">
            Gender
          </label>

          <div
            onChange={onChangeValue}
            className="col-lg-4 d-flex genderselect"
          >
            <label class="container ">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                className="mr-5"
              />
              <div>
                Male
                <span className="checkmark"></span>
              </div>
            </label>
            <label class="container  d-flex justify-content-center align-items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
              />
              Female
              <span className="checkmark"></span>
            </label>
            <label class="container d-flex justify-content-center align-items-center">
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={gender === "Other"}
                />{" "}
                Other
                <span className="checkmark"></span>
              </div>
            </label>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default Second;
