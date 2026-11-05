"use client";

import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import CounterBroken from "./CounterBroken";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ZustandTodoList from "./zustand/ZustandTodoList";

export default function Lab4() {
  const theFunction = (message: string) => {
    alert(message);
  };
  const alertMyName = () => {
    alert("Mingxuan Liu");
  };
  const theOtherFunction = () => {
    alert("Sample from parent");
  };

  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingFunctions
        message="Hello"
        theFunction={theFunction}
        alertMyName={alertMyName}
        theOtherFunction={theOtherFunction}
      />
      <Counter />
      <CounterBroken />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <ZustandTodoList />
    </div>
  );
}
