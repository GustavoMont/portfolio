import { defaultXPading, layoutStyle } from "src/styles/common/Layout";
import { BREAKPOINTS } from "src/styles/constants/breaking-points-styles.constants";
import { MAX_WIDTH } from "src/styles/constants/size.constants";
import styled from "styled-components";

export const ProjectLayout = styled.main`
  ${layoutStyle}
  padding-left: 0;
  padding-right: 0;
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;
  & > :not(.hero) {
    ${defaultXPading}
  }
  & > div {
    margin-top: 1rem;
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .project-hero {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    @media (min-width: ${BREAKPOINTS.md}) {
      display: none;
    }
  }
  & > section {
    @media (min-width: ${BREAKPOINTS.md}) {
      display: none;
    }
  }
`;
