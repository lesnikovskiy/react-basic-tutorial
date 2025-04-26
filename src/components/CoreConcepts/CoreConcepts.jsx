import { CORE_CONCEPTS } from "../../concepts-data.js";
import CoreConcept from "../CoreConcept/CoreConcept.jsx";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS &&
          CORE_CONCEPTS.map((concept) => (
            <CoreConcept key={concept.title} {...concept} />
          ))}
      </ul>
    </section>
  );
}
