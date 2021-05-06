import React from "react";
import ReactLoading from "react-loading";
import { Section, Article } from "./generic";

const Loading = (props) => (
  <Section>
    <Article key={"bars"} style={{ height: "565px" }}>
      <ReactLoading type={"bars"} color="#f1684e" />
    </Article>
  </Section>
);

export default Loading;
