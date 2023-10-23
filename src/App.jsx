import Form from "./Form";
import Colorlist from "./Colorlist";
import Values from "values.js";
import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState(new Values('#6c2d2d').all(10));

  return <main>
    <Form />
    <Colorlist colors={colors}/>
  </main>;
};
export default App;
