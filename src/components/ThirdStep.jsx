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
              className="form-control text-uppercase"
              placeholder="ex.abc 12345 or abc 12"
              style={{
                border: props.formik.errors.courseID ? "2px solid red" : "",
              }}
              {...props.formik.getFieldProps("courseID")}
            />
            {props.formik.errors.courseID ? (
              <div className="errormessage">{props.formik.errors.courseID}</div>
            ) : null}
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
              style={{
                border: props.formik.errors.courseTitle ? "2px solid red" : "",
              }}
              {...props.formik.getFieldProps("courseTitle")}
            />
            {props.formik.errors.courseTitle ? (
              <div className="errormessage">
                {props.formik.errors.courseTitle}
              </div>
            ) : null}
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
              style={{
                border: props.formik.errors.section ? "2px solid red" : "",
              }}
              {...props.formik.getFieldProps("section")}
            />
            {props.formik.errors.section ? (
              <div className="errormessage">{props.formik.errors.section}</div>
            ) : null}
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
                formik={props.formik}
              />
              {props.formik.errors.teacher ? (
                <div className="errormessage">
                  {props.formik.errors.teacher}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row  agreerow align-items-center mb-4">
          <div className="col-12 col-lg-1">
            <input
              type="checkbox"
              id="checkbox"
              name="agree"
              onChange={(e) => {
                props.formik.setFieldValue("termsOfService", e.target.checked);
              }}
              name="termsOfService"
              checked={props.formik.values.termsOfService}
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
