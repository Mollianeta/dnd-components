import { Container } from "react-bootstrap";
import backgroundJson from "../../../data/backgrounds/a5e-ag_criminal.json";
import "../../../themes/V3/5ePHB/style.css";
import "../../../themes/V3/Blank/style.css";
import "../../../themes/V3/phb.standalone.css";

const background = backgroundJson;

export default function Background() {
  return (
    <Container className="phb page">
      <main className="">
        <h1>Background</h1>
        <div className="columnWrapper"></div>
        <h2>{background.name}</h2>
        {background.desc.length > 1 ? <p>{background.desc}</p> : null}
        <table className="wide classTable frame decoration">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {background.benefits.map((benefit, index) => (
              <tr>
                <td>{benefit.name}</td>
                <td>{benefit.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Container>
  );
}
