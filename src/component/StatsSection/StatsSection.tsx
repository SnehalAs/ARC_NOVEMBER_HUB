import React from "react";

import NumberTicker from "../../components/ui/number-ticker";
import {
  Section,
  Content,
  Title,
  Subtitle,
  StatsContainer,
  StatBox,
  StatLabel,
  MediaContainer,
  MediaItem,
  GlobeImage,
  StatNumber,
} from "./StatsSection.styles";
import Globe from "./globe.png"; 


import DailyhuntLogo from "../../assets/publish1.svg";
import TOILogo from "../../assets/publish2.svg";
import HindustanLogo from "../../assets/publish3.svg";

const StatsSection: React.FC = () => {
  return (
    <Section>
      <Content>
        <Title>Unleash the full power of data</Title>
        <Subtitle>
          We guide global businesses through the challenges of developing purposeful technology that addresses their needs and advances their growth. We have established offices in India, the UAE, and the USA.
        </Subtitle>
        <StatsContainer>
          <StatBox>
            <StatNumber> <NumberTicker value={60} className="number"/>+</StatNumber>
         
            <StatLabel>Integrations</StatLabel>
          </StatBox>
          <StatBox>
            <StatNumber><NumberTicker value={600}  className="number" />%</StatNumber>
           
            <StatLabel>Return on Investment</StatLabel>
          </StatBox>
          <StatBox>
          <span className='number'>4K+</span>
          <span>Global Customers</span>
          </StatBox>
        </StatsContainer>
        <MediaContainer>
          <span>Featured in</span>
          <MediaItem src={DailyhuntLogo} alt="Dailyhunt" />
          <MediaItem src={TOILogo} alt="TOI" />
          <MediaItem src={HindustanLogo} alt="Hindustan Times" />
        </MediaContainer>
      </Content>
      <GlobeImage src={Globe} alt="Global presence" />
    </Section>
  );
};

export default StatsSection;

