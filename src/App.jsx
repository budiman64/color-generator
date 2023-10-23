import Form from "./Form";
import Colorlist from "./Colorlist";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values('#6c2d2d').all(10));
  const changeColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message)
    }
    
  };

  return <main>
    <Form changeColor={changeColor}/>
    <Colorlist colors={colors}/>
    <ToastContainer position="top-center"/>
  </main>;
};
export default App;
