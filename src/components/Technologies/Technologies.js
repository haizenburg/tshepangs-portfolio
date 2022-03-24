import React from "react";
import { DiAndroid, DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies primarily centered around mobile
      app development, design, and full-stack dev
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={"3rem"} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={"3rem"} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size={"3rem"} />
        <ListContainer>
          <ListTitle>Mobile-Dev</ListTitle>
          <ListParagraph>
            Experience with <br />
            Flutter, Kotlin
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
