import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// import { Button, Welcome } from "@storybook/react/demo";
import { Checkbox, FormButton, ImageLoader, EmptyState } from "../components/";

storiesOf("FormButton", module)
  .add("with text", () => (
    <FormButton onClick={action("clicked")}>Hello FormButton</FormButton>
  ))
  .add("with some emoji", () => (
    <FormButton onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </FormButton>
  ));

storiesOf("Checkbox", module).add("with text", () => (
  <Checkbox onClick={action("clicked")}>Hello Checkbox</Checkbox>
));

const imageSource =
  "https://en.wikipedia.org/wiki/Grumpy_Cat#/media/File:Grumpy_Cat_by_Gage_Skidmore.jpg";
storiesOf("ImageLoader", module).add("Image Loading", () => (
  <ImageLoader src={imageSource} />
));

storiesOf("EmptyState", module).add("with text", () => (
  <EmptyState leadingText="No items" buttonText="Click to go back" />
));
