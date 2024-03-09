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
    transition: 1s ease all;
  }
  .overlay {
    background: rgba(
      0,
      0,
      0,
      ${({ isDescriptionActive }) => (isDescriptionActive ? 0.9 : 0.7)}
    );
  }
  .description {
    position: absolute;
    top: ${({ isDescriptionActive }) => (isDescriptionActive ? "0" : "100%")};
    opacity: ${({ isDescriptionActive }) => (!isDescriptionActive ? 0.5 : 1)};
    transition: 0.5s ease all;
    user-select: none;
    margin-bottom: 0.5rem;
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
      }
      .link {
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          color: ${({ theme: { colors } }) => colors["light-primary"]};
        }
      }
    }
  }
`;

export default ProjectCard;
