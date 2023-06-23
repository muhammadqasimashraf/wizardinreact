import React from "react";
import Records from "../data";
import { AiFillCaretDown, AiOutlineArrowRight } from "react-icons/ai";
import { teacher } from "../selection.js";
import SelectWrapper from "./SelectWrapper";

const ThirdStep = (props) => {
  return (
    <div>
      <div className="formcontent tab">
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-12 col-lg-4 mr-5">
            <label htmlFor="courseID">Course ID</label>
          </div>
          <div className="col-12 col-lg-7">
            <input
              type="text"
              name="courseID"
              id="courseID"
              className={
                props.errors.courseID
                  ? "border-danger col-lg-7 form-control"
                  : "col-lg-7 form-control"
              }
              placeholder="ex.abc 12345 or abc 12"
              {...props.register("courseID", {
                required: true,
                maxLength: 20,
              })}
            />
            {props.errors.courseID && (
              <span className=" text-danger">This field is required</span>
            )}
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
              className={
                props.errors.coursetitle
                  ? "border-danger col-lg-7 form-control"
                  : "col-lg-7 form-control"
              }
              placeholder="ex.intro to physic"
              {...props.register("coursetitle", {
                required: true,
                maxLength: 20,
              })}
            />
            {props.errors.coursetitle && (
              <span className="text-danger">This field is required</span>
            )}
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
              className={
                props.errors.section
                  ? "border-danger col-lg-7 form-control"
                  : "col-lg-7 form-control"
              }
              {...props.register("section", {
                required: true,
                maxLength: 20,
                message: "Please type the section",
              })}
            />
            {props.errors.section && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-5">
          <div className="col-12 col-lg-4 mr-5">
            <label htmlFor="teacher">Select Teacher</label>
          </div>
          <div className="col-lg-7">
            <div class="formholder">
              <AiFillCaretDown className="iconreact" />
              <SelectWrapper
                id={teacher.id}
                name={teacher.name}
                options={teacher.options}
                register={props.register}
                errors={props.errors}
              />
            </div>
          </div>
        </div>
        <div className="row  agreerow align-items-center justify-content-center mb-4">
          <div className=" col-lg-2 col-12 col-lg-1">
            <input
              type="checkbox"
              id="checkbox"
              name="agree"
              className="rounded-checkbox"
              name="termsOfService"
              {...props.register("agree")}
            />
          </div>
          <div className=" col-lg-9 col-12 ">
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
