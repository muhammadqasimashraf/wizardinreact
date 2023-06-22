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
              register={props.register}
              errors={props.errors}
            />
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
              register={props.register}
              errors={props.errors}
            />
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
              register={props.register}
              errors={props.errors}
            />
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
              register={props.register}
              errors={props.errors}
            />
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
            type="text"
            id="instructor"
            name="instructor"
            {...props.register("instructor", { required: true })}
            className={
              props.errors.instructor
                ? "border-danger Col-lg-7 form-control"
                : "Col-lg-7 form-control"
            }
            //   {...props.register("instructor", { required: true, maxLength: 20 })}
          />
          {props.errors.instructor && (
            <span className="border-danger text-danger">
              This field is required
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepOne;
