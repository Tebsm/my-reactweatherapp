import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <div class="container">
       <h1>The draft(1) React Weather App</h1> 
    
    <div class="container text-right">
        <form id="city-form">
            <input type="text"
            placeholder="Enter City Name" 
            autocomplete = "off"
            autofocus="on"   
            id = "search-text-input"/>
         <button type="submit" class="btn btn-primary" value = "search">Submit</button>

        </form>
    </div>         
    <br/>
    <h2 id="city-name">Currently in 
       Pretoria</h2>

       <div class="container">
        <div class="row">
          <div class="col">
            <div class=" row">
            <div id="current-time"> </div></div>
            <div class="row"> <span> <strong id= "temp">
              21 
            </strong>
              <button id="celsius"><sup>°C</sup></button>
            <span id="divider"><sup>|</sup></span>
              <button id="fahrenheit"><sup>°F</sup></button>
            </span>
                            
              <div id ="weatherIcon">🌥️🌥️ </div>               
              <span id="weatherDescription">Clear Sky</span>
              </div>
              
              <div class="col">
                <div class="box">
                <div id = "hum"> Humidity:</div>
                <div id="win"> Wind:</div></div>
              </div>
            </div>
            
          </div>
        <br/>
       <div class="container-text-center">
    <div class="row forecast">
        <div class="col">
            Today
            <br/> ☀️
            <br/>
            23° / 6°
              
                 </div>
        <div class="col">
            Monday
            <br/> ☀️<br/>
            22° / 6°
        </div>
        <div class="col">
            Tuesday
            <br/>☀️<br/>
            23° / 6°
        </div>
        <div class="col">
            Wednesday
            <br/>🌧️<br/>
            20° / 5°
        </div>
        <div class="col">
            Thursday
            <br/> ☀️<br/>
            18° / 4°
        </div>
        <div class="col">
            Friday
            <br/> ☀️<br/>
            17° / 4°
        </div>
    </div>
</div>


  
  </div>
  <br/>
 <div class = "codelink"> 
    <a href="https://github.com/Tebsm/SCP--WProject.gitt!">Open-source Code</a> by TL Motebele👩🏾‍💻
      </div>

</div>

  );  
} 
export default App;