console.log("linked");

console.log("kezia here")

// ============================================
// modal function start
// ============================================

function modal(){

    $("#launch").click(function(){
        console.log("click");
        $("#exampleModal").empty();



        $("#modalBody").append(
            `
            <div class="">
                <h1 class="modal-studentname">Julia</h1>
                <img src="" alt="">
            </div>
            `
        )
    })
}

// ============================================
// modal function end
// ============================================