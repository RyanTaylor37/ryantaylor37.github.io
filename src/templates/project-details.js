import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, mixins, media, Main,Section,Heading } from '@styles';
const { colors, fontSizes, fonts, navDelay, loaderDelay } = theme;
import Img from 'gatsby-image';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container,Row,Col } from 'react-bootstrap';
//import AV from "/src/pages/project_page/AutoVehicleSim/av_vid.mp4"
//import VidHub from "/src/pages/project_page/index.js"

import AV from "/src/pages/project_page/AutoVehicleSim/av_vid.mp4"
import FT from "/src/pages/project_page/Flamethrower/flamethrower.mp4"
import ELB from "/src/pages/project_page/ElectricLongboard/e-board.mp4"
import LT from "/src/pages/project_page/LaserTracker/laser-tracker_demo2.mp4"
import SMC from "/src/pages/project_page/Solar-Mechanical Charger/smchgr.mp4"
import VR from "/src/pages/project_page/VanderbiltRobotics/telerun.mp4"

const VidHub = new Map();
VidHub.set('auto-vehicle-sim', AV); 
VidHub.set('flame-thrower', FT); 
VidHub.set('e-longboard', ELB);
VidHub.set('laser-tracker', LT); 
VidHub.set('solar-mechanical-charger', SMC);
VidHub.set('vandy-robotics', VR); 

const StyledMainContainer = styled(Main)``;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const StyledOverline = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;

const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledSubtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const StyledPic = styled.div`
  position: relative;
  width: minmax(200,auto);
  margin-right: 30px;
  margin-top: 30px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;
const StyledContent = styled.div`
  width: minmax(350px,auto);
  margin-top: 30px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  display: grid;
  grid-template-columns: repeat(2,minmax(200px, 1fr));
  justify-content: space-evenly;
  ${media.tablet`display: block;`};
`;

const StyledGrid = styled.div`
  margin-top: 50px;
  margin-left: 10%;
  justify-content: space-evenly;
`;

const StylediFrame = styled.iframe`
  allow='accelerometer; encrypted-media; gyroscope; picture-in-picture';
  frameBorder='0';
  webkitallowfullscreen='true';
  mozallowfullscreen='true';
  allowFullScreen;
  width: 95%;
`;
const ProjectDetails = ({ location, data }) => {
  const { html } = data.markdownRemark
  const { title,cover,date,company,slug} = data.markdownRemark.frontmatter
  switch(slug) {
    default:
      return (
        <Layout location={location}>
          <StyledMainContainer>
            <header>
              <h1 className="big-title">{title}</h1>
            </header>
            <StyledFlexContainer>
              {cover && (          
                <StyledPic>
                  <Img fluid={cover.childImageSharp.fluid} alt="Cover"/>
                </StyledPic>
              )}
              <StyledContent>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </StyledContent>
                {VidHub.get(slug) && (
                  <StylediFrame
                  src={VidHub.get(slug)}
                  title={`Some title`}
                  height="300vh"
                  />
                )}
            </StyledFlexContainer>
          </StyledMainContainer>
        </Layout>
      );
    case 'flame-thrower':
      return (
        <Layout location={location}>
          <StyledMainContainer>
            <header>
              <h1 className="big-title">{title}</h1>
            </header>
            <StyledFlexContainer>
              {VidHub.get(slug) && (
                <StylediFrame
                src={VidHub.get(slug)}
                title={`Some title`}
                height="300vh"
                />
              )}
              <StyledContent>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </StyledContent>
            </StyledFlexContainer>
          </StyledMainContainer>
        </Layout>
      );  
  }
}
 
//<video className="embed-responsive embed-responsive-16by9" controls>
//  <source className="embed-responsive-item" src={AV} type="video/mp4" />
//</video> {% endcomment %}

export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}, showInProjects: {eq: false}}) {
      html
      frontmatter {
        title
        date
        company
        cover {
          childImageSharp {
            fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        slug
      }
    }
  }
`

