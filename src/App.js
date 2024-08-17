import logo from './logo.svg';
// import './App.css';
import Great from "./great";

const Header= ()=>{
  return <h1>Header</h1>;
};
const Navbar= ()=>{
  return <h1>NAvbar</h1>;
};
const Sidebar= ()=>{
  return <h1>Sidebar</h1>;
};
const MainContent= ()=>{
  return <h1>MainContent</h1>;
};
const Footer= ()=>{
  return <h1>Footer</h1>;
};
const Form=() =>{

return <><input type="text" placeholder='Enter Your Name' /><br /></>;
};
function App() {
  return (
    <div >
      <Great/>
     <Header />
     <Footer/>
     <Form/>
     <Form/>
     <Form/>
    </div>
  );
}

export default App;
