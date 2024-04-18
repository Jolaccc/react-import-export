import "./App.css";
import Imena from "./utilities/Imena";
import * as sve from "./utilities/Funkcija";
import { first as Prezime1 } from "./utilities/Funkcija";
import { second as Prezime2 } from "./utilities/Funkcija";
import { third as Prezime3 } from "./utilities/Funkcija";

function App() {
  return (
    <div className="App">
      <h1>Najjača imena:</h1>
      <h2>Ime broj 1: {Imena.name1}</h2>
      <h2>Ime broj 2: {Imena.name2}</h2>
      <h2>Ime broj 3: {Imena.name3}</h2>
      <p>Prezime broj 1: {Prezime1}</p>
      <p>Prezime broj 2: {Prezime2}</p>
      <p>Prezime broj 3: {Prezime3}</p>
      <h2>
        {Imena.name1} {Prezime1}
      </h2>
      <p>Neobicni lik: {sve.getNames(Imena, "name1")}</p>
    </div>
  );
}

export default App;
