import { useState } from "react";
import { Select, SelectOption } from "./Select";

const singleOptions: SelectOption[] = [
  { label: "Kyiv", value: 1 },
  { label: "Kharkiv", value: 2 },
  { label: "Odesa", value: 3 },
  { label: "Lviv", value: 4 },
  { label: "Dnipro", value: 5 },
  { label: "Kherson", value: 6 },
];

const multipleOptions: SelectOption[] = [
  { label: "Train", value: 1 },
  { label: "Airplane", value: 2 },
  { label: "Bus", value: 3 },
  { label: "Car rent", value: 4 },
  { label: "Taxi", value: 5 },
  { label: "BlaBlaCar", value: 6 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption | undefined>(singleOptions[0]);
  const [value2, setValue2] = useState<SelectOption[]>([multipleOptions[0]]);

  return (
    <>
      <h1>Choose your destination and the best possible way to get there</h1>
      <Select options={singleOptions} value={value1} onChange={(opt) => setValue1(opt)} />
      <Select
        options={multipleOptions}
        value={value2}
        onChange={(opt) => setValue2(opt)}
        multiple={true}
      />
    </>
  );
}

export default App;
