import React, { useContext } from 'react'

function About() {
  return (
    <div class="accordion" id="accordionExample">
      <ul class="list-group container mt-5" style={{ width: "600px" }}>
        <li class="list-group-item active" aria-current="true">About us</li>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What this app does?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This app will save your notes on cloud.</strong> App will allow you to create note, delete notes and update your notes. App will allow you to create a account and save your notes to your acccount only. <code>iNotes</code> makes you sure that it will not show your personal notes to any other person. So, just leave your worries and use this awesome app.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Development tools used in this web-app
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>HTML  </strong> mendatory language for creating a website or webapps. <br />
              <strong>CSS  </strong> mendatory language for creating a website or webapps. <br />
              <strong>JavaScript  </strong> mendatory language for creating a website or webapps. <br />
              <strong>React  </strong> front-end JavaScript library for building user interfaces based on UI components. <br />
              <strong>Bootstrap  </strong> most popular framework for building responsive, mobile-first sites. <br />
              <strong>MongoDB  </strong> cross-platform document-oriented database program. <br />
              <strong>ExpressJS  </strong> provides a robust set of features for web and mobile applications. <br />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              For more information contact me!
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <i class="fa-brands fa-facebook lg"></i> <i class="fa-brands fa-instagram mx-3"></i> <i class="fa-brands fa-google"></i> <i class="fa-brands fa-github mx-3"></i>
            </div>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default About