import React, { useRef, useState } from "react";
import "../components/forms/styles.css";
import img from "../components/forms/formimg.webp";
import { Container, Col, Row } from "react-bootstrap";
import moment from "moment";
import Records from "../data.json";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineCheck,
} from "react-icons/ai";

import StepOne from "./FirstStep";

import Second from "./SecondStep";
import ThirdStep from "./ThirdStep";
// import * as Yup from "yup";
// const initialValues = [];
const initialValues = [
  {
    uf: "",
    prefersystem: "",
    college: "",
    term: "",
    instructor: "",
  },
  {
    dob: "",
    birthCountry: "",
    email: "",
    mobileNo: "",
    gender: "",
  },
  {
    courseID: "",
    courseTitle: "",
    section: "",
    teacher: "",
    acceptTerms: false,
  },
];
const Multistep = () => {
  const [step, setStep] = useState(0);
  const formik = useFormik({
    initialValues: initialValues[step],
    validationSchema: [
      Yup.object().shape({
        instructor: Yup.string().required("Required Field"),
        uf: Yup.string(),
        prefersystem: Yup.string(),
        college: Yup.string(),
        term: Yup.string().required("Required Field"),
      }),
      Yup.object().shape({
        dob: Yup.date().required("Field Required"),
        birthCountry: Yup.string().required("BirthCountry Required"),
        email: Yup.string().email().required("Required Field"),
        mobileNo: Yup.string().required("Field Required"),
      }),
      Yup.object().shape({
        courseID: Yup.string().required("Required Field").min(3).max(50),
        courseTitle: Yup.string().required("Required Field").min(3).max(50),
        section: Yup.string().required("Required Field").min(3).max(50),
        teacher: Yup.string(),
        acceptTerms: Yup.bool().oneOf(
          [true],
          "Accept Terms & Conditions is required"
        ),
      }),
      ,
    ][step],
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      if (step < initialValues.length - 1) {
        setStep(step + 1);
      } else {
        console.log(JSON.stringify(values, null, 2));
      }
    },
  });

  // const [dateValue, onDateChange] = useState(new Date());
  const [isChecked, setIsChecked] = useState(false);
  const stepsRef = useRef();

  console.log(formik.errors);
  // const [formData, setFormData] = useState({
  //   uf: "no",
  //   prefersystem: "svg",
  //   College: "university of florida",
  //   term: "",
  //   dob: "",
  //   birthcountry: "",
  //   email: "",
  //   mobileNo: "",
  //   courseid: "",
  //   coursetitle: "",
  //   section: "",
  //   teacher: "",
  //   agree: "off",
  //   gender: "male",
  //   instructor: "",
  // });
  // const checkHandler = (event) => {
  //   setIsChecked(!isChecked);
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };
  let showStep = () => {
    console.log("Step is ", step);
  };

  console.log(formik.errors, "errors formik");

  const handleNext = () => {
    setStep((pre) => pre + 1);
    showStep();
  };

  const handlePrevious = () => {
    setStep((pre) => pre - 1);
    showStep();
  };

  const handleChange = (event) => {
    // setFormData({ ...formData, [event.target.name]: event.target.value });
    // console.log(formData);
    console.log("re rendered");
  };

  const handleSubmit = () => {
    // Handle form submission
    // console.log(formData);
    alert("The data is submitted");
    showStep();
  };

  const renderForm = () => {
    // useFormik({
    //   initialValues: Records.initialValues[0].instructor,
    //   onSubmit: (values) => {},
    // });
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

            <form id="regForm" method="post" onSubmit={formik.handleSubmit}>
              <div ref={stepsRef}>
                {step === initialValues.length - 3 && (
                  <StepOne
                    handleChange={handleChange}
                    // formData={formData}
                    handleNext={handleNext}
                    formik={formik}
                  />
                )}
                {step === initialValues.length - 2 && (
                  <Second
                    handleChange={handleChange}
                    // formData={formData}
                    // setFormData={setFormData}
                    formik={formik}
                  />
                )}
                {step === initialValues.length - 1 && (
                  <ThirdStep
                    handleChange={handleChange}
                    // formData={formData}
                    // checkHandler={checkHandler}
                    isChecked={isChecked}
                    formik={formik}
                  />
                )}
              </div>
              <div>
                <div className="btns d-flex justify-content-between align-items-center">
                  {step > 0 ? (
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
                  ) : null}

                  <div className="btnholder cont">
                    <AiOutlineArrowRight className="rightarrow" />
                    <button
                      type="submit"
                      id="nextBtn"
                      // onClick={() => handleNext()}
                      className="text-uppercase d-flex continueBtn"
                    >
                      {step === initialValues.length - 1
                        ? "Submit"
                        : "Continue"}
                    </button>
                  </div>
                </div>
                <AiOutlineCheck
                  className="progressBarCheck mb-0"
                  style={{
                    marginLeft:
                      ((step + 1) / Records.initialValues.length) * 100 + "%",
                  }}
                />
                <div className="progressbar mt-2">
                  <div
                    style={{
                      width: ((step + 1) / initialValues.length) * 100 + "%",
                    }}
                  ></div>
                </div>
              </div>
              {/* Circles which indicate the steps of the form: */}
            </form>
          </div>
        </div>
        {console.log(Records.initialValues.length, "records length")}
      </div>
    );
  };

  return <div className="multistep">{renderForm()}</div>;
};

export default Multistep;
//end of multi step
