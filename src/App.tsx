import { useCallback, useState } from "react";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/types";

import "react-phone-number-input/style.css";
import "./App.css";

function App() {
  const [number, setNumber] = useState<E164Number | undefined>();

  const redirect = useCallback(() => {
    if (isValidPhoneNumber(number?.toString() ?? "")) {
      setNumber(undefined);
      window.open(`https://api.whatsapp.com/send?phone=${number}`, "_blank");
    }
  }, [number]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Whatsapp Without Contact</p>
        <section>
          <PhoneInput
            placeholder="Whatsapp number"
            value={number}
            onChange={setNumber}
          />
          <button className="App-button" onClick={redirect}>
            Go!
          </button>
        </section>
      </header>
    </div>
  );
}

export default App;
