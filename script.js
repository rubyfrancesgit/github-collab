console.log("linked");

console.log("kezia here")

$.ajax({
    type: "GET",
    url: "./students.json",

    success: function(response){
        console.log(response.students[0].name);
        console.log(response.students.length);

        for(let i = 0; i < response.students.length; i++){
            console.log(response.students[i].name);
            let currentStudent = response.students[i];
            console.log(currentStudent);

            $.ajax({
                type: 'GET',
                url: currentStudent,
                success: function(data){
                    console.log(data);

                    $("#studentCardContainer").append(
                        `
                            <div class="student-card">
                                <img class="student-card-profile-img" id="studentCardProfileImg" src=${data.img} alt="student profile picture">
                        
                                <div class="student-card-info">
                                    <h2 class="student-card-heading">${data.name}</h2>
                                    <p class="student-card-p">${data.degree}</p>
                                    <button type="button" id="launch" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Launch demo modal
                                    </button>
                                </div>
                            </div>
                        `
                    )
                }
            })
        }
    }
})

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