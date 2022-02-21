console.log("linked");

console.log("kezia here")

const modalLaunch = document.querySelector("#launch")
// ============================================
// modal function start
// ============================================

function modal(){

    $("#modalLeft").empty().append(
            `
        <div class="modal-text">
            <h1 class="modal-words modal-studentname">Julia</h1>
            <img class="modal-img" src="./img/unsplash-pg-wchwsdt8@2x.png" alt="">
            <h3 class="modal-words modal-studytxt">Studied: Graphic Design</h3>
        </div>
        `
    )
    $("#modalRight").empty().append(
        `

        <div>
            <h2 class="modal-words">Bio:</h2>
            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus quam justo, id tincidunt elit malesuada eu. Nunc egestas nec ipsum ut aliquam. Proin sed semper lacus. In eget mauris lectus. Nunc eget nisi eget elit viverra facilisis. Nulla sed ligula sit amet urna lobortis eleifend eget ut mi. Donec et commodo mi.
            Proin at nulla ut mi dapibus vestibulum eget in ante. Aenean et magna blandit, tempus purus id, vestibulum purus. Suspendisse potenti. Integer vel nulla dolor. Morbi eget blandit orci. Praesent in sem risus. </p>
        </div>
        <br>

        <h2 class="modal-words">View their projects:</h2>

        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Project #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Project #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Project #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
        `
    )
}

// ============================================
// modal function end
// ============================================

modalLaunch.addEventListener("click", modal);