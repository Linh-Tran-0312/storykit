import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import useDebounceState from "./useDebounceState";
//👇 This default export determines where your story goes in the story list
const meta: Meta<any> = {
  title: "Custom Hooks/useDebounceState",
};

export default meta;

export const useLocalStorageStory: StoryFn<any> = () => {
  const {
    state,
    debouncedState,
    setState
  } = useDebounceState('');

  return (
    <div>
      <div className="my-2">
        <label htmlFor="key">Input</label>
        <input
          type="text"
          id={"value"}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="mx-2"
        />
      </div>
      <span>Debounced value: {debouncedState}</span>
    </div>
  );
};
