import React from "react";
import styled from 'styled-components';
import remcalc from 'remcalc';
import Button from "../Button/Button";

export const SectionStartBowling = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${remcalc(15)};
  margin-bottom: ${remcalc(15)};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BowlingActionButton = styled(Button)`
    width:200px
`;
