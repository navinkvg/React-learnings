import Header from './Header';
import Body from "./Body";
import Footer from "./Footer";
import Card from "./Card"
import Button from "./Button";
import Student from './Student';
import List from './List';

function App() {
    return(
      <>
      <div style ={{background : 'powderblue'}}>
      <center>
      <Card />
      <br></br>
      <Button />
      <br></br>
      <Student name="Navin" age={20} isStudent={true}/>
      <br></br>
      <Student name="Pranav" age={21} isStudent={false}/>
      <br></br>
      <Student name="Lohith" age={19} isStudent={true}/>
      <br></br>
      <Student/>
      <br></br>
      </center>
      </div>

      <List />
      </>

    );
}

export default App
