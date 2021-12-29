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

export const NavText = styled.div`
  width: 50%;
  text-align: center;
  border-bottom: 3px solid ${(props) => (props.boolVal ? "red" : "grey")};
  color: ${(props) => (props.boolVal ? "red" : "grey")};
`;

export const DeleText = styled.div`
  width: 50%;
  text-align: center;
  border-bottom: 3px solid ${(props) => (!props.boolVal ? "red" : "grey")};
  color: ${(props) => (!props.boolVal ? "red" : "grey")};
`;
