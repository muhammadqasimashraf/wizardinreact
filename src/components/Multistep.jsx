import React, { useState } from "react";
import "../assets/styles.css";
import img from "../assets/img/formimg.webp";
import { Container, Col, Row } from "react-bootstrap";

import Records from "../data.json";
import {
  useForm,
  SubmitHandler,
  useFormContext,
  FormProvider,
  Controller,
} from "react-hook-form";

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

const Multistep = () => {
  const [step, setStep] = useState(0);
  const { handleSubmit, watch, formState, register, control } = useForm({
    mode: "all",
  });
  const { errors, isValid } = formState;

  let showStep = () => {
    console.log("Step is ", step);
  };

  const handleNext = () => {
    setStep(step + 1);

    showStep();
  };

  const handlePrevious = () => {
    setStep((pre) => pre - 1);
    showStep();
  };

  const handleChange = (event) => {
    console.log("re rendered");
  };

  const onSubmit = (data) => {
    console.log(data, "data is");
    console.log("form is submitted");
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
            <FormProvider>
              <form
                id="regForm"
                method="post"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  {routes.map((component, index) => {
                    const currentStep = component.formstep === step;
                    if (currentStep) {
                      console.log("rendering step: " + step);
                      return React.createElement(component.component, {
                        handleChange,
                        handleNext,
                        register,
                        control,
                        errors,
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

                      {step === routes.length - 1 ? (
                        <div className="btnholder cont">
                          <AiOutlineArrowRight className="rightarrow" />
                          <button
                            disabled={!isValid}
                            type="submit"
                            id="nextBtn"
                            className="text-uppercase d-flex continueBtn"
                            // onClick={() => handleNext()}
                          >
                            Submit
                          </button>
                        </div>
                      ) : (
                        <div className="btnholder cont">
                          <AiOutlineArrowRight className="rightarrow" />
                          <button
                            disabled={!isValid}
                            type="button"
                            id="nextBtn"
                            className="text-uppercase d-flex continueBtn"
                            onClick={() => handleNext()}
                          >
                            Continue
                          </button>
                        </div>
                      )}
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
            </FormProvider>
          </div>
        </div>
      </div>
    );
  };

  return <div className="multistep">{renderForm()}</div>;
};

export default Multistep;
