import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import React from "react";
import { default as customHook } from "./useWorker";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof customHook> = {
  component: customHook,
  title: "Custom Hooks/useWorker",
};

export default meta;

export const useWorker: StoryFn<any> = () => {
  return (
    <div>
     
    </div>
  );
};
