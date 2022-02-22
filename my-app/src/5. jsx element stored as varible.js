import logo from './logo.svg';
import './App.css';
import './Custom.css'

const styles={
  innerDiv: {
    padding: '70px 0',
    backgroundColor: 'red'
  },
  outerDiv: {
    textAlign: "center",
    margin: "auto",
    width: "60",
    border: "3px solid black",
    backgroundColor: "#73ad21",
    padding: "70px 0"
  }
}

const sometext = 'sometext';
const somediv = <div style={{backgroundColor: 'white'}}>somediv</div>

function App() {
  return (
    <div style={styles.outerDiv}>
      <div style={styles.innerDiv}>{somediv}</div>
    </div>
  );
}

export default App;
