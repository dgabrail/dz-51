import React, {useState} from 'react';
import './App.css';
import Lottery from "./Lottery/Lottery";


function App() {
    const [people, setPeople] = useState([
        {number:5},
        {number:11},
        {number:16},
        {number:23},
        {number:32},
    ]);

    const changeNumber = () => {
        const randomOne = Math.floor(Math.random() * 5 + 1);
        const randomTwo = Math.floor(Math.random() * 6 + 6);
        const randomThree = Math.floor(Math.random() * 5 + 12);
        const randomFour = Math.floor(Math.random() * 7 + 17);
        const randomFive = Math.floor(Math.random() * 9 + 24);

        setPeople([
            {number:randomOne},
            {number:randomTwo},
            {number:randomThree},
            {number:randomFour},
            {number:randomFive},
        ]);
    }


  return (
    <div className="App">
        <button onClick={changeNumber}>New numbers</button>
        <Lottery
            numberOne={people[0].number}
            numberTwo={people[1].number}
            numberThree={people[2].number}
            numberFour={people[3].number}
            numberFive={people[4].number}
        />
    </div>
  );
}

export default App;
