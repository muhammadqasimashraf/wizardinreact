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
  console.log(props.formik.values);
  const handleDateChange = (date) => {
    setDate(date);
  };
  //  <div className="col-lg-7">
  //
  //  </div>;
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
              className="form-control"
              onChange={(e) => {
                console.log(e, "line afhajfhajh");
                props.formik.setFieldValue("dob", e);
              }}
              className="text-uppercase form-control"
              selected={props.formik.values.dob}
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
                id="birthcountry"
                className=" text-uppercase form-control"
                {...props.formik.getFieldProps("birthCountry")}
                onChange={props.formik.handleChange("birthCountry")}
              >
                {Records.countryofbirth.map((item) => (
                  <option value={item}>
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
              style={{
                border: props.formik.errors.email ? "2px solid red" : "",
              }}
              {...props.formik.getFieldProps("email")}
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-lg-4 mr-5">
            <label htmlFor="mobileNo">Mobile No</label>
          </div>

          <div className="col-lg-7">
            <input
              style={{
                border: props.formik.errors.mobileNo ? "2px solid red" : "",
              }}
              type="tel"
              id="mobileNo"
              name="mobileNo"
              className=" form-control"
              {...props.formik.getFieldProps("mobileNo")}
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-4">
          <label htmlFor="instructor" className="col-lg-3 mr-5">
            Gender
          </label>

          <div className="col-lg-7 d-flex genderselect">
            <label class="container  d-flex justify-content-center align-items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={props.formik.values.gender === "Male"}
                className="mr-5"
                {...props.formik.getFieldProps("gender")}
                onChange={(e) => {
                  if (e.target.checked) {
                    props.formik.setFieldValue("gender", "Male");
                  } else {
                    props.formik.setFieldValue("gender", "");
                  }
                }}
              />
              Male
              <span className="checkmark"></span>
            </label>
            <label class="container  d-flex justify-content-center align-items-center g-0">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={props.formik.values.gender === "Female"}
                onChange={(e) => {
                  if (e.target.checked) {
                    props.formik.setFieldValue("gender", "Female");
                  } else {
                    props.formik.setFieldValue("gender", "");
                  }
                }}
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
                  checked={props.formik.values.gender === "Other"}
                  {...props.formik.getFieldProps("gender")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      props.formik.setFieldValue("gender", "Other");
                    } else {
                      props.formik.setFieldValue("gender", "");
                    }
                  }}
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
