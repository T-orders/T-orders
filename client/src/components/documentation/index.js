import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Documentation = () => (
  <Container id="torder-docs-container">
    <Container className="torder-docs-section">
      <h1>About</h1>
      <hr />
      <h6>What Can CoGeTo Do For Me?</h6>
      <p>
        CoGeTo characterizes the implicational universals predicted by a
        typology defined through a candidate and a constraint set. In other
        words, it answers questions such as the following:
      </p>
      <ul>
        <li>
          If a language in the typology displays a certain phonological
          structure, what other structures are guaranteed to also be present in
          that language?
        </li>
        <li>
          If a certain structure has a certain probability of appearing in a
          language, what other structures must also appear with at least that
          probability?
        </li>
      </ul>
      <p>
        These implicational universals are useful for exploring the limits of
        linguistic typologies, including probabilistic typologies.
      </p>
    </Container>
    <Container className="torder-docs-section">
      <h6>Which Frameworks is CoGeTo Suited For?</h6>
      <p>
        It can be used to investigate implicational universals in categorical
        typologies defined through Optimality Theory (OT) and Harmonic Grammar
        (HG) as well as in probabilistic typologies defined through MaxEnt,
        Stochastic OT, and Stochastic HG.
      </p>
    </Container>
    <Container className="torder-docs-section">
      <h6>What Do I Need to Run CoGeTo?</h6>
      <p>
        You will need a grammar spreadsheet with inputs, candidates, and
        constraint violations, in the usual format assumed by other scripts for
        computational constraint-based phonology. Upload your grammar
        spreadsheet on the <Link to="/compute">Compute</Link> page and inspect
        the results.
      </p>
    </Container>
    <Container id="citing" className="torder-docs-section">
      <h6>Citing</h6>
      <p>
        Arto Anttila and Giorgio Magri. ''CoGeTo: Convex Geometry Tools for
        typological analysis in categorical and probabilistic constraint-based
        phonology (Version 1.0)''; 2019.
      </p>
    </Container>
  </Container>
);

export default Documentation;
