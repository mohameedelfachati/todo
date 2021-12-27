import React from "react";
import styled from "styled-components";

export const HistoriqueWrapper = styled.div`
  position: absolute;
  width: 818px;
  over-flow: auto;
  background: #ffffff;
  box-shadow: 0px 6px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  left: ${(props) => props.theme.left};
  top: ${(props) => props.theme.top};
`;
