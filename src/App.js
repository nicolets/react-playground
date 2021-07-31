import Initials from './Initials';
import DayOfWeek from './DayOfWeek';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';
import Counter from './Counter/Counter';
import StudentPicker from './StudentPicker';
import Article from './Article/Article';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare'
import './App.css';

function App() {
  
  function clickHandler() {
    console.log('you clicked')
  }
  
//אפשר היה לעשות תגית פותחת וסוגרת במניואייטם ולהכניס לבפנים את הלינק והלייבל

  return (
    <div>
      <Menu>
        <MenuItem label="Homepage" link="/" />  
        <MenuItem label="Gallery" link="/Gallery" />
        <MenuItem label="Contact" link="/Contact" />
      </Menu>
      ---------------
      <div>
        <button onClick={clickHandler}>Click me</button> 
      </div>
      ---------------
      <Counter />
      ---------------
      <StudentPicker />
      ---------------
      <Initials name={"Nicole Tsingauz"} />
      <Initials name="Evyatar Rosner" />
      ---------------
      <DayOfWeek day={6} />
      <DayOfWeek day={4} />
      ---------------
      <Article 
        title="Why the world needs Superman?" 
        content="long article..."/>
      ---------------
      <RandomColorSquare />
    </div>
  );
}

export default App;
