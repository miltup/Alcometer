import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('')
  const [result, setResult] = useState(0)

  function handleSubmit(e) {
      e.preventDefault();
      let litres = bottles * 0.33;
      let grams = litres * 8 * 4.5;
      let burning = weight / 10;
      let gramsleft = grams - (burning * time)
      let result = 0;

      if (gender === 'male') {
        result = gramsleft / (weight * 0.7);
      } else if (gender === 'female') {
        result = gramsleft / (weight * 0.6);
      }

      if (result < 0) {
        result = 0;
      }

      setResult(result);
  }

  return (
    <>
    <h3>Calculating alcohol blood level</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Bottles</label> 
        <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label>Time</label>
        <select name="time" value={time} onChange={e => setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input name="gender" type="radio" value="male" onChange={e => setGender(e.target.value)}/>
        <label>Male</label>
        <input name="gender" type="radio" value="female" onChange={e => setGender(e.target.value)} />
        <label>Female</label>
      </div>
      <div>
        <output>{result.toFixed(2)}</output>
      </div>
      <button>Calculate</button>
    </form>
    </>
  );
}

export default App;
