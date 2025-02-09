const StyledModal = styled.div<{ center?: boolean }>`
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  position: fixed;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  transform: translateY(20px);
  
  ${({ center }) =>
    center
      ? `top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         height: auto;`
      : `top: auto;
         right: 0;`}
  
  &.open {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 764px) {
    ${({ center }) => (center ? "top: 80%;" : "width: 100%;")}
    border-radius: 2rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  
  &.open {
    opacity: 1;
  }
`;
