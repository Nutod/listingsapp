import styled from "styled-components";
import { flow } from "./styles/utils/flow";

const Wrapper = styled.div`
  ${flow}
`;

export default function App() {
  return (
    <Wrapper>
      <h1>Sandbox</h1>
      <h2>Start Editing</h2>
    </Wrapper>
  );
}
