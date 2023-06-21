import React, { useRef, useState } from "react";
import "../assets/styles.css";
import img from "../assets/img/formimg.webp";
import { Container, Col, Row } from "react-bootstrap";
import moment from "moment";
import Records from "../data.json";
import { useFormik, ErrorMessage } from "formik";
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
import FourthStep from "./FourthStep";
import routes from "../routes";
{
  console.log(routes.length, "Records length In Routes");
}
const initialValues = [
  {
    uf: "",
    prefersystem: "",
    College: "",
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
        uf: Yup.string().required("Required Field"),
        prefersystem: Yup.string().required("Required Field"),
        College: Yup.string().required("Required "),
        term: Yup.string().required("Required Field"),
      }),
      Yup.object().shape({
        dob: Yup.date().required("Field Required"),
        birthCountry: Yup.string().required("BirthCountry Required"),
        email: Yup.string().email().required("Required Field"),
        mobileNo: Yup.string().required("Field Required"),
        gender: Yup.string().required("Gender is required to fill"),
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
    ][step],

    onSubmit: (values) => {
      // console.log(JSON.stringify(values, null, 2));
      if (step < initialValues.length - 1) {
        setStep(step + 1);
      } else {
        console.log(JSON.stringify(values, null, 2));
      }
    },
  });

  console.log(formik.errors);

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
    console.log("re rendered");
  };

  const handleSubmit = () => {
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
          <div className="col-lg-8 col-md-12 col-sm-12 ">
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
              <div>
                {routes.map((component, index) => {
                  const currentStep = component.formstep === step;
                  if (currentStep) {
                    console.log("rendering step: " + step);
                    return React.createElement(component.component, {
                      formik,
                      handleChange,
                      handleNext,
                      key: index,
                    });
                  }
                })}

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
                        className="text-uppercase d-flex continueBtn"
                      >
                        {step === routes.length - 1 ? "Submit" : "Continue"}
                      </button>
                    </div>
                  </div>
                  <AiOutlineCheck
                    className="progressBarCheck mb-0"
                    style={{
                      marginLeft: ((step + 1) / routes.length) * 100 + "%",
                    }}
                  />
                  <div className="progressbar mt-2">
                    <div
                      style={{
                        width: ((step + 1) / routes.length) * 100 + "%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return <div className="multistep">{renderForm()}</div>;
};

export default Multistep;
