
import React, { useState } from 'react';

function Main() {
  const [score, setScore] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [wicketClicked, setWicketClicked] = useState(false);
  const [submittedMessages, setSubmittedMessages] = useState([]);

  const addScore = (num) => {
    if (wicket < 10) {
      setScore(score + num);
      setInputValue(inputValue + num);
    }
  };

  const handleWicket = () => {
    if (wicket < 10) {
      setWicket(wicket + 1);
      setWicketClicked(true);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target[1].value;
    const output = `${wicketClicked ? 'W' : inputValue}, ${comment}`;
    setSubmittedMessages([output, ...submittedMessages]);
    setInputValue('');
    setWicketClicked(false);
    event.target[0].value = '';
    event.target[1].value = '';
  };

  return (
    <>
      <div className='header'>
        <h1>CricScore</h1>
        <p>
          Score: {score} / {wicket}
        </p>
        <div className='button'>
          <button onClick={() => addScore(0)}>0</button>
          <button onClick={() => addScore(1)}>1</button>
          <button onClick={() => addScore(2)}>2</button>
          <button onClick={() => addScore(3)}>3</button>
          <button onClick={() => addScore(4)}>4</button>
          <button onClick={() => addScore(5)}>5</button>
          <button onClick={() => addScore(6)}>6</button>
          <button onClick={handleWicket}>Wicket</button>
        </div>
      </div>
      <br />
      <br />

      <div>
        <form className='form' onSubmit={handleSubmit}>
          <input value={wicketClicked ? 'W' : inputValue} onChange={handleInputChange} />
          <input placeholder='Add Commentary' />
          <button type='submit'>Submit</button>
        </form>
        <p className='commentary'>Commentary:</p>
        <ul>
          {submittedMessages.map((message, index) => (
            <li key={index}>{message} </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Main;
