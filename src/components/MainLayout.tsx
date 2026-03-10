import { Container, Row } from "react-bootstrap";
import Sidebar from "./ui/Sidebar";
import Topbar from "./ui/Topbar";

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Row>
        <Topbar />
      </Row>
      <Row>
        <Sidebar />
        <div>{children}</div>
      </Row>
    </Container>
  );
};

export default MainLayout;
