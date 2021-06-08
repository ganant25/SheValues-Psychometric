
import './App.css';
import './test.css';
import './test.js';


function App() {
  return (
    <div className="App">
      
      <title>Pyschometric Test</title>
      <div class="start_btn"><button>Start Pyschometric Test</button></div>

  
    <div class="info_box">
        <div class="info-title"><span>Some Rules of this Quiz</span></div>
        <div class="info-list">
            <div class="info">1. You will have only <span>15 seconds</span> per each question.</div>
            <div class="info">2. Once you select your answer, it can't be undone.</div>
            <div class="info">3. You can't select any option once time goes off.</div>
            
        </div>
        <div class="buttons">
            <button class="quit">Exit Quiz</button>
            <button class="restart">Continue</button>
        </div>
    </div>

    
    <div class="quiz_box">
        <header>
            <div class="title">Quiz</div>
            <div class="timer">
                <div class="time_left_txt">Time Left</div>
                <div class="timer_sec">15</div>
            </div>
            <div class="time_line"></div>
        </header>
        <section>
            <div class="que_text">
               
            </div>
            <div class="option_list">
             
            </div>
        </section>

       
        <footer>
            <div class="total_que">
                
            </div>
            <button class="next_btn">Next Que</button>
        </footer>
    </div>

    
    <div class="result_box">
        <div class="icon">
            <i class="fas fa-crown"></i>
        </div>
        <div class="complete_text">You've completed the Quiz!</div>
        <div class="score_text">
           
        </div>
        <div class="buttons">
            <button class="restart">Replay Quiz</button>
            <button class="quit">Quit Quiz</button>
        </div>
    </div>

   
    

    
    <script src="./test.js"></script>
     
    
    </div>
  );
}

export default App;
