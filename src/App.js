import logo from './logo.svg';
import './App.css';
import Func_JSX_LeVanHoang from './components/Func_JSX_LeVanHoang'
import Class_LeVanHoang from './components/Class_LeVanHoang';
function App(){
  return(
    <section ClassName="App" style={{ textAlign: "center" }}>
      <h1>Demo JSX</h1>
      {/*function componenet demo*/}
      <Func_JSX_LeVanHoang/>
      <Func_JSX_LeVanHoang fullname="Le Van Hoang" age="20"/>

      <Class_LeVanHoang/>
      <hr/>
      <Class_LeVanHoang info="Học ReactJS" time="11"/>

    </section>
  )
}
export default App;
