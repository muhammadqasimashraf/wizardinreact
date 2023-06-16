import React, { useRef, useState } from "react";
import "./styles.css";
import img from "../forms/formimg.webp";
import { Container, Col, Row } from "react-bootstrap";
import moment from "moment";
import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineCheck,
} from "react-icons/ai";

import StepOne from "../StepOne";

import Second from "../Second";
import ThirdStep from "../ThirdStep";
// import * as Yup from 'yup';
// const initialValues = [];

const Multistep = () => {
  const [step, setStep] = useState(1);
  const [total, setTotal] = useState(0);
  // const [dateValue, onDateChange] = useState(new Date());
  const [isChecked, setIsChecked] = useState(false);
  const stepsRef = useRef();
  // console.log(stepsRef.current.childNodes, "line 24");
  // const validation = Yup.array().of(
  //   Yup.object().shape({
  //     uf: Yup.string().required(),
  //   }),

  // )
  const [formData, setFormData] = useState({
    uf: "no",
    prefersystem: "svg",
    College: "university of florida",
    term: "",
    dob: "",
    birthcountry: "",
    email: "",
    mobileNo: "",
    courseid: "",
    coursetitle: "",
    section: "",
    teacher: "",
    agree: "off",
    gender: "male",
    instructor: "",
  });
  const checkHandler = (event) => {
    setIsChecked(!isChecked);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  let showStep = () => {
    console.log("Step is ", step);
  };

  const handleNext = () => {
    setStep((pre) => pre + 1);
    showStep();
    setTotal(total + 1);
  };

  const handlePrevious = () => {
    setStep((pre) => pre - 1);
    showStep();
    setTotal(total - 1);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
    alert("The data is submitted");
    showStep();
  };

  const renderForm = () => {
    return (
      <div className="container-fluid mycontainer p-0">
        <div className="row wrapper">
          <div className="col-lg-4 col-md-12 col-sm-12 imgcontainer col-md-12 col-sm-12">
            <img src={img} alt="" />
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 formdata">
            <div className="formheader">
              <div className="text-center">
                <a href="#" className="link">
                  #Academic Programs
                </a>
              </div>
              <h3 className="text-center text-uppercase mb-4">
                Register for the course online
              </h3>
            </div>

            <form id="regForm" method="post">
              <div ref={stepsRef}>
                {step === 1 && (
                  <StepOne
                    handleChange={handleChange}
                    formData={formData}
                    handleNext={handleNext}
                  />
                )}
                {step === 2 && (
                  <Second
                    handleChange={handleChange}
                    formData={formData}
                    setFormData={setFormData}
                  />
                )}
                {step === 3 && (
                  <ThirdStep
                    handleChange={handleChange}
                    formData={formData}
                    checkHandler={checkHandler}
                    isChecked={isChecked}
                  />
                )}
              </div>

              <div>
                <div className="btns d-flex justify-content-between align-items-center">
                  {step !== 1 && (
                    <div className="btnholder">
                      <AiOutlineArrowLeft className="leftarrow text-dark" />
                      <button
                        type="button"
                        id="prevBtn"
                        onClick={() => handlePrevious()}
                        className="text-uppercase"
                      >
                        Back
                      </button>
                    </div>
                  )}
                  {step !== 3 ? (
                    <div className="btnholder">
                      <AiOutlineArrowRight className="rightarrow" />
                      <button
                        type="button"
                        id="nextBtn"
                        onClick={() => handleNext()}
                        className="text-uppercase d-flex"
                      >
                        Continue
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      id="nextBtn"
                      onClick={() => handleSubmit()}
                      className="text-uppercase d-flex"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
              {/* Circles which indicate the steps of the form: */}
              <div className="progressbar mt-5">
                <div
                  style={{
                    width: step === 1 ? "33.3%" : step == 2 ? "66.6%" : "100%",
                  }}
                ></div>
                <AiOutlineCheck
                  className="progressBarCheck"
                  style={{
                    marginLeft:
                      step === 1 ? "33.33%" : step === 2 ? "66.66%" : "100%",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        {console.log("total is", total)}
      </div>
    );
  };

  return <div className="multistep">{renderForm()}</div>;
};

export default Multistep;
