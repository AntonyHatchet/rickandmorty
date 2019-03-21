import * as React from "react";
import { ReactNode } from "react";

import "./style.scss";

interface SectionProps {
  children: ReactNode;
}

const Section = (props: SectionProps) => <section>{props.children}</section>;

export default Section;
