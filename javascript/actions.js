let listAnswers = ["From what date and how long?", "Where is the rally starting?", "How many drivers are competing?"]
let list = ["From what date and how long?", "Where is the rally starting?", "How many drivers are competing?"]

function existingQuestion(){
    addQuestion("", true);
}

function addQuestion(line, start){

    let questionDiv = document.getElementById('qAnda');

    let field;
    let legend;
    let p;
    
    for(var i = 0; i < list.length; i++){
        field = document.createElement('fieldset');
        legend = document.createElement('legend');
        p = document.createElement('p');

        legend.innerHTML = list[i];
        p.innerHTML = listAnswers[i];

        field.appendChild(legend);
        field.appendChild(p);

        questionDiv.appendChild(field);
    }
    if(!start){
        field = document.createElement('fieldset');
        legend = document.createElement('legend');
        p = document.createElement('p');

        legend.innerHTML = line;
        p.innerHTML = "no answer yet";

        field.appendChild(legend);
        field.appendChild(p);

        questionDiv.appendChild(field);
        alert("added");
        document.getElementById('flex').style.visibility = "visible";
        document.getElementById('searchForm').style.visibility = "visible";
        document.getElementById('formcontainer').style.display = "none";
    }
    
}

function submittedQuestion(){
    addQuestion(document.getElementById('qAndquestion').value, false);
}


function checkRegistered(){
    let filled = true;
    let form = document.getElementById("formcontainer");
    let first_name = document.getElementById("first_name");
    let last_name = document.getElementById("last_name");
    let email = document.getElementById("email");
    if(first_name.value == "" || last_name.value == "" || email.value == ""){
        filled = false;
    }
    if(filled){
        existingQuestion();
        document.getElementById('flex').style.visibility = "visible";
        document.getElementById('searchForm').style.visibility = "visible";
        document.getElementById('formcontainer').style.display = "none";
    }else{
        alert("fill the inputs");
    }
}


