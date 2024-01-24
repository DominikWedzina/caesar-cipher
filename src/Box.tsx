import React, { useState } from "react";

interface BoxProps {
  title: string;
  btnText: string;
  firstLabel: string;
  secondLabel: string;
  encrypt: boolean;
}

const Box: React.FC<BoxProps> = ({
  title,
  btnText,
  firstLabel,
  secondLabel,
  encrypt,
}) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [number, setNumber] = useState(0);
  const numbers = Array.from({ length: 34 }, (_, i) => i + 1);
  const alphabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż".split("");

  const calculateOutputHandler = () => {
    let finalOutput = "";
    if (!input.trim() || number === 0) return alert("You must choose number and put some text.");
    const arrayFromInput = input.split("");
    arrayFromInput.forEach((letter) => {
      const index = alphabet.findIndex(
        (alphabetLetter) => alphabetLetter === letter
      );
      let newLetter;
      if (encrypt) {
        newLetter =
          index + number >= alphabet.length
            ? alphabet[number - (alphabet.length - index)]
            : alphabet[index + number];
      } else {
        newLetter =
          index - number < 0
            ? alphabet[alphabet.length - (number - index)]
            : alphabet[index - number];
      }
      if(letter === ' ') return finalOutput += letter;
      finalOutput += newLetter;
    });
    setOutput(finalOutput);
  };

  return (
    <div className="box">
      <div>
        <h2 className="box__title">{title}</h2>
        <div className="box__inputs">
          <label htmlFor="first">{firstLabel}:</label>
          <input
            onChange={(e) => setInput(e.target.value)}
            id="first"
            value={input}
            className="box__inputs__input"
            type="text"
          />
          <label htmlFor="second">{secondLabel}:</label>
          <input
            value={output}
            id="second"
            disabled
            className="box__inputs__input"
            type="text"
          />
        </div>
        <button className={`box__button`} onClick={calculateOutputHandler}>
          {btnText}
        </button>
      </div>
      <ul className="box__num-list">
        {numbers.map((num) => (
          <li>
            <button
              className={`${
                num === number ? "box__num-list__button--active" : ""
              }`}
              onClick={() => setNumber(num)}
            >
              {num}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Box;
