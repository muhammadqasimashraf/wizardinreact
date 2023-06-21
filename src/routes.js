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
    component: SecondStep,
  },
  {
    formstep: 2,
    component: ThirdStep,
  },
];

export default routes;
