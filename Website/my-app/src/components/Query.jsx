import React from "react";
import Card from "react-bootstrap/Card";

// Component for a single Query
function Query(props) {
  return (
    <Card id={props.id} style={{ width: "50rem" }} className="CenterCard">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Query Statement
        </Card.Subtitle>
        <strong>{props.statement}</strong>
        <div class="Image Center">
          <img class="QueryImage" src={props.image} alt="Query" />
          <figcaption class="Caption">{props.caption}</figcaption>
        </div>
        <Card.Text>{props.explanation}</Card.Text>
        <Card.Link href="#">Query Link</Card.Link>
        <Card.Link href="#">Dataset Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Query;

// Old Query code:
// function Query(props) {
//   return (
//     <div class="Query">
//       <h2 class="QueryTitle">{props.title}</h2>
//       <div class="QueryDescription">
//         <h4 class="QueryStatement">Query Statement :</h4>
//         <strong>{props.statement}</strong>
//         <div class="Image Center">
//           <img class="QueryImage" src={props.image} alt="Query" />
//           <figcaption class="Caption">{props.caption}</figcaption>
//         </div>
//       </div>
//       <p class="Explanation">{props.explanation}</p>
//       <hr class="Line" />
//     </div>
//   );
// }
