import { useState } from "react";
import People from "./data";

function App() {
  const [people, setPeople] = useState(People);
  const clearList = () => {
    setPeople([]);
  };
  return (
    <main className="main">
      <h1>Happy Birthday to this people</h1>
      {people.map((people) => {
        return (
          <section key={people.id} className="person">
            <img src={people.image} alt="image" />
            <article className="person-detail">
              <h2>{people.name}</h2>
              <h3>{people.age} years old</h3>
            </article>
          </section>
        );
      })}
      <button type="button" onClick={clearList} className="btn">
        Clear
      </button>
    </main>
  );
}

export default App;
