import styled from "styled-components";

interface ProjectCard {
  thumbnail: string;
  isDescriptionActive?: boolean;
}

const ProjectCard = styled.div<ProjectCard>`
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.thumbnail});
  overflow: hidden;
  width: 100%;
  max-width: 28rem;
  height: 250px;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 4px #ff4878;
  position: relative;
  .container {
    border-radius: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
    flex-direction: column;
  }
  .title {
    opacity: ${({ isDescriptionActive }) => (isDescriptionActive ? 0 : 1)};
  }
  .overlay {
    background: rgba(
      0,
      0,
      0,
      ${({ isDescriptionActive }) => (isDescriptionActive ? 0.9 : 0.6)}
    );
  }
  -webkit-box-shadow: 2px 4px 34px -5px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 2px 4px 34px -5px rgba(0, 0, 0, 0.54);
  box-shadow: 2px 4px 34px -5px rgba(0, 0, 0, 0.54);

  .description {
    transition: 0.5s ease all;
    position: absolute;
    top: ${({ isDescriptionActive }) => (isDescriptionActive ? "0" : "100%")};
    opacity: ${({ isDescriptionActive }) => (isDescriptionActive ? 1 : 0.5)};
    user-select: none;
    margin-bottom: 0.5rem;
    p,
    span {
      color: ${({ theme: { colors } }) => colors.white};
    }
    .text {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .links {
      display: flex;
      margin-top: 1rem;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      svg {
        width: 1.5rem;
        transition: none;
      }
    }
  }
`;

export default ProjectCard;
