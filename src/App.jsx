import Form from "./Form";
import Colorlist from "./Colorlist";
import Values from "values.js";
import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState('');

  return <main>
    <Form />
    <Colorlist />
  </main>;
};
export default App;
