import logo from './logo.svg';
import './App.css';
import './index.css'
import amazonBox from "./amazonBox.jpg"
import { Link } from 'react-scroll';

function App() {
  return (
    <div>
      
      <div className="App">
          
        <h1 className='text-8xl font-bold pt-80' style={{paddingTop: '400px'}}>Preston Yong</h1>
        
        <Link
          activeClass="active"
          to="welcome-section"
          spy={true}
          smooth={true}
          offset={-350}
          duration={500}
          className="text-4xl pb-8 cursor-pointer"
        >
          ↓
        </Link>

        <div className='p-96'>
          <p id="welcome-section" className='text-4xl'> Welcome to my portfolio. My name is Preston Yong. I am a current student at Cal Poly Pomona. I am majoring in Finance with a minor in Computer Science. Here's some of the coding projects that I have made: </p>

          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="text-4xl pb-8 cursor-pointer"
          >
            ↓
          </Link>
        </div>


      </div>



        <div id='projects'>


          <div className='gallery'>

            <div style={{textAlign: 'center'}}>
              <h3 className='text-4xl'>CS2 Guide</h3>
              {/* CS2 Guide Image */}
              <a href="https://github.com/Prest0nY/CS2Guide" target="_blank"><img className='max-w-lg' src="https://api.realms.host/wp-content/uploads/2024/11/cs2.webp"/>
              </a>
            </div>

            <div style={{textAlign: 'center'}}>
              <h3 className='text-4xl'>Volleyball Rotations</h3>
              {/* Volleyball Image */}
              <a href="https://prest0ny.github.io/VolleyballRotations/" target="_blank"><img className='max-w-lg' src="https://images.pexels.com/photos/2444852/pexels-photo-2444852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
              </a>
            </div>
            
          </div>

        

          <div className='gallery'>
            

            <div style={{textAlign: 'center'}}>
              <h3 className='text-4xl pt-36'>Amazon Replica</h3>
              <p>Note: This website is static so the JSON elements do not work unless launched locally.</p>
              <a href="https://github.com/Prest0nY/AmazonReplica" target="_blank">
                <img className='max-w-lg pb-16' src={amazonBox}/>
              </a>
              
            </div>

          </div>



        

       


        
        
      </div>




      





    </div>
  );
}

export default App;
