import React from "react";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: absolute;
  width: 818px;
  over-flow: auto;
  background: #ffffff;
  box-shadow: 0px 6px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  left: ${(props) => props.theme.left};
  top: ${(props) => props.theme.top};
`;

export const HistoriqueWrapper = styled.div`
  position: absolute;
  width: 818px;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 6px 64px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  left: 340px;
  top: 110px;
`;

export const NavText = styled.p`
  position: absolute;
  width: 65px;
  height: 19px;
  left: 159px;
  top: 10px;

  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  border-bottom-width: 3px;
  text-decoration: underline;
  border-bottom-color: black;
  padding-bottom: 19px;
  color: #eb514e;
`;
