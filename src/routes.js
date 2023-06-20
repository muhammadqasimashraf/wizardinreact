import StepOne from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FourthStep from "./components/FourthStep";
const routes = [
  {
    formstep: 0,
    component: StepOne,
  },
  {
    formstep: 1,
    options: [
      {
        birthCountry: ["pakistan", "england", "america"],
      },
    ],
    component: SecondStep,
  },
  {
    formstep: 2,
    options: [
      {
        teacher: ["louis", "mosh", "maxmillian"],
      },
    ],
    component: ThirdStep,
  },
  // {
  //   formstep: 3,
  //   options: [
  //     {
  //       teacher: ["louis", "mosh", "maxmillian"],
  //     },
  //   ],
  //   component: FourthStep,
  // },
];

export default routes;
