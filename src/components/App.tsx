import * as React from "react";
import { hot } from "react-hot-loader";

import Characters from "../containers/Characters";
import Section from "./Section";
import Layout from "./Layout";

const App = () => {
  return (
    <Section>
      <Layout>
        <Characters />
      </Layout>
    </Section>
  );
};

export default hot(module)(App);
