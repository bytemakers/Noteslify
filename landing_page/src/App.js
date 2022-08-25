import Info from './components/Info'
import About from './components/About'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="font-['Poppins'] font-[300] overflow-y-auto overflow-x-hidden">
         <Navbar/>
        <About/>
        <Info/>
    </div>
  );
}

export default App;
