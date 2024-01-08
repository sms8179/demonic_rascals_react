import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='left'>
        <Navbar />
        <div id="left_bottom"></div>
      </div>
      <div className='right'>
        <div id="top_left"></div>
        <div id="top_right">
          <a href="">
            <button id="button_connect" className='pill_button'>
              Connect
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.156 10.392">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle_5" data-name="Rectangle 5" width="10.392" height="10.156" />
                  </clipPath>
                </defs>
                <g id="Group_7116" data-name="Group 7116" transform="translate(10.156) rotate(90)">
                  <g id="Group_9" data-name="Group 9" transform="translate(0 0)">
                    <g id="Group_3" data-name="Group 3" transform="translate(0 0)" clip-path="url(#clip-path)">
                      <path id="Path_2" data-name="Path 2" d="M10.392,1.855,8.616,0H0V8.348l1.965,1.808V6.021q0-1.509-.032-2.736l6.9,6.682L10.2,8.506,3.3,1.824q1.227.032,2.752.031Z" transform="translate(0 0)" />
                    </g>
                  </g>
                </g>
              </svg>
              </button>
            </a>
        </div>
        <div id="corner_radius_top_left"></div>
        <div id="bottom_left">
          <div id="bottom_left_content">
            <p>5K Supply</p>
            <h3>darK AEsthetiCs</h3>
            <p>Mischievous charm</p>
            <div id="corner_radius_bottom_right"></div>
          </div>
          <div id="bottom_right"></div>
        </div>
      </div>
    </>
  )
}

export default App
