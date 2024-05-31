import logo from './logo.svg';
import './App.css';
import './index.css'
import amazonBox from "./amazonBox.jpg"

function App() {
  return (
    <div>
      
      <div className="App">
          
        <h1 className='text-8xl p-96 font-bold pt-80'>Preston Yong</h1>

        <p className='text-4xl p-96'>My name is Preston Yong. I recently graduated from Oceana High School and I will be attending Cal Poly Pomona for computer science in the fall of 2024. I have been taking coding lessons for several years, and thus have become an avid programmer. Here's some of the coding projects that I have made: </p>
      </div>



        <div>


          <div  className='gallery'>
            <h3 className='text-4xl'>Starfield Animation</h3>
            <h3 className='text-4xl'>Volleyball Rotations</h3>
            
            
          </div>

          <div className='gallery'>
            
            <a href="" target="_blank"><img className='max-w-lg' src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/></a>
            <a href="https://prest0ny.github.io/VolleyballRotations/" target="_blank"><img className='max-w-lg' src="https://images.pexels.com/photos/2444852/pexels-photo-2444852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/></a>
            
          </div>

          <div className='gallery'>
            <h3 className='text-4xl pt-36'>Amazon Replica (not completely working currently)</h3>
          </div>

          <div className='gallery'>
            
            <a href="https://prest0ny.github.io/AmazonReplica/" target="_blank">
              <img className='max-w-lg pb-16' src={amazonBox}/>
            </a>
            
          </div>


        

       


        
        
      </div>




      





    </div>
  );
}

export default App;
