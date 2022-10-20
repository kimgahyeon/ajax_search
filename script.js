function search(target){
    var schoolType = $('input[name="schoolType"]:checked').val();

    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: `asset/${schoolType}_school.json`,
        error: function(err){
            console.log(err);
        },
        success: function(data){
            var checkWord = $("#schoolInput").val();
            var schoolList = $("#schoolList");
            console.log(checkWord);

            schoolList.empty();
            data.forEach((school)=>{
                if(school['name'].includes(checkWord)){
                    schoolList.append(`<span style="cursor: pointer;" onclick="select(this);"> ${school['name']} </span> <br/>`);                
                }
            })
        }
    })
}    

function select(target){
    const selected = document.getElementById("selected");
    selected.innerText = target.innerText;
}
