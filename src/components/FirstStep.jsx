import React, { useState, useEffect } from "react";
import validator from "validator";
import { Container, Col, Row } from "react-bootstrap";
import Records from "../data.json";
import { prefersystem, College, term, uf } from "../selection.js";

import { AiFillCaretDown, AiOutlineArrowRight } from "react-icons/ai";
import SelectWrapper from "./SelectWrapper";

const StepOne = (props) => {
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
            <SelectWrapper
              id={uf.id}
              name={uf.name}
              options={uf.options}
              formik={props.formik}
            />
            {props.formik.touched.uf && props.formik.errors.uf ? (
              <div className="errormessage">{props.formik.errors.uf}</div>
            ) : null}
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
            <SelectWrapper
              id={prefersystem.id}
              name={prefersystem.name}
              options={prefersystem.options}
              formik={props.formik}
            />
            {props.formik.touched.prefersystem &&
            props.formik.errors.prefersystem ? (
              <div className="errormessage">
                {props.formik.errors.prefersystem}
              </div>
            ) : null}
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

            <SelectWrapper
              id={College.id}
              name={College.name}
              options={College.options}
              formik={props.formik}
            />
            {props.formik.touched.College && props.formik.errors.College ? (
              <div className="errormessage">{props.formik.errors.College}</div>
            ) : null}
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

            <SelectWrapper
              id={term.id}
              name={term.name}
              options={term.options}
              formik={props.formik}
            />
            {props.formik.touched.term && props.formik.errors.term ? (
              <div className="errormessage">{props.formik.errors.term}</div>
            ) : null}
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
            {...props.formik.getFieldProps("instructor")}
          />
          {props.formik.touched.instructor && props.formik.errors.instructor ? (
            <div className="errormessage">{props.formik.errors.instructor}</div>
          ) : null}
        </div>
      </div>
      {console.log("error from main", props.error)}
    </div>
  );
};

export default StepOne;
