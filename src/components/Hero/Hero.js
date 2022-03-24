import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Tshepang
        <br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, I'm a software developer with experience on mobile development,
        full-stack mern development, and web security
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        More About Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
