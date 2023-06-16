import React from "react";
import Records from "../data.json";
import { AiFillCaretDown, AiOutlineArrowRight } from "react-icons/ai";

const ThirdStep = (props) => {
  return (
    <div>
      <div className="formcontent tab">
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-12 col-lg-4 mr-5">
            <label htmlFor="course-id">Course ID</label>
          </div>
          <div className="col-12 col-lg-7">
            <input
              type="text"
              name="courseid"
              id="courseid"
              className="form-control text-uppercase"
              placeholder="ex.abc 12345 or abc 12"
              onChange={props.handleChange}
              value={props.formData.courseid}
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-12 col-lg-4 mr-5">
            <label htmlFor="coursetitle">Course Title</label>
          </div>
          <div className="col-12 col-lg-7">
            <input
              type="text"
              name="coursetitle"
              id="coursetitle"
              className=" form-control text-uppercase"
              placeholder="ex.intro to physic"
              onChange={props.handleChange}
              value={props.formData.coursetitle}
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-12 col-lg-4 mr-5">
            <label htmlFor="section">Section(s)</label>
          </div>
          <div className="col-12 col-lg-7">
            <input
              type="text"
              name="section"
              id="section"
              placeholder="ex.3679 or 33fa 4295"
              className="form-control text-uppercase"
              onChange={props.handleChange}
              value={props.formData.section}
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-5">
          <div className="col-12 col-lg-4 mr-5">
            <label htmlFor="teacher">Select Teacher</label>
          </div>

          <div className="col-lg-7">
            <div class="formholder">
              <AiFillCaretDown className="iconreact" />
              <select
                name="teacher"
                id="teacher"
                className="form-control text-white text-uppercase"
                onChange={props.handleChange}
                value={props.formData.teacher}
              >
                {Records.teacher.map((item) => (
                  <option value={item.teacher}>
                    <div className="text-white"> {item}</div>
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="row  agreerow align-items-center mb-4">
          <div className="col-12 col-lg-1">
            <input
              type="checkbox"
              id="checkbox"
              checked={props.isChecked}
              onChange={props.checkHandler}
              name="agree"
            />
          </div>
          <div className="col-12 col-lg-9">
            <label htmlFor="checkbox">
              I agree all statement in Terms & Conditions{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
