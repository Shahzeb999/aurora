import React from "react";
import { InlineWidget } from "react-calendly";
import { Body, Heading1, Heading2, Heading3 } from "../components/Typography";

const Schedule = () => {
  return (
    <div>
      <InlineWidget url="https://calendly.com/callmeadnaan19" />
    </div>
  );
};

export default Schedule;
