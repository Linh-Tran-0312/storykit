import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import styled from "styled-components";
import React from "react";
import color from "tokens/color";
import { Inspector } from "../utils/Inspector";
import { Previewer } from "accessibility/utils/Previewer";
//👇 This default export determines where your story goes in the story list
const meta: Meta = {
  title: "Aria Practice/Input",
};

export default meta;

export const Example: StoryFn = () => {
  const [code, setCode] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    if(!inputValue) {
      setMsg("Please enter a value");
    } else {
        setMsg("");
    }
  }
  return (
    <Previewer code={code}>
      <div className="d-flex flex-column">
        <Inspector getCode={setCode}>
          <label htmlFor="input1" data-component-id="label1">
            Name
          </label>
        </Inspector>
        <Inspector getCode={setCode} className="mt-2">
          <input
            value={inputValue}
            aria-required="true"
            aria-label="Name field"
            data-component-id="input1"
            aria-errormessage="error-message"
            onChange={handleInputChange}
          />
        </Inspector>
        <Inspector getCode={setCode} className="mt-2">
          <span id="error-message" style={{color: "red"}} data-component-id="validation-msg">{msg}</span>
        </Inspector>
        <Inspector getCode={setCode} className="mt-2">
          <button onClick={handleClick} data-component-id="submit-btn">Submit</button>
        </Inspector>
      </div>
    </Previewer>
  );
};
