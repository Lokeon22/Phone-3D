import { Container, Form } from "./style";
import { Button } from "../Button";
import { SiSamsung } from "react-icons/si";

export function Header() {
  return (
    <Container>
      <Form>
        <SiSamsung size={90} />
        <span>Galaxy S21 Ultra</span>
      </Form>
      <Form>
        <Button title="Other Models" />
        <Button title="Preorder now" />
      </Form>
    </Container>
  );
}
