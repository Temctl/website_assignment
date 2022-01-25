let listAnswers = ["From what date and how long?", "Where is the rally starting?", "How many drivers are competing?"]
let list = ["From what date and how long?", "Where is the rally starting?", "How many drivers are competing?"]

function existingQuestion(){
    addQuestion("", true, "");
}

function addQuestion(line, start, answer){

    let questionDiv = document.getElementById('qAnda');

    let field;
    let legend;
    let p;
    if(start){
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
    }else{
        field = document.createElement('fieldset');
        legend = document.createElement('legend');
        p = document.createElement('p');

        legend.innerHTML = line;
        alert(answer);
        if(answer.length > 0){
            p.innerHTML = answer;
        }else{
            p.innerHTML = "no answer yet";
        }
        list.push(line);
        listAnswers.push(p.innerHTML);

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
    addQuestion(document.getElementById('qAndquestion').value, false, "");
}


function checkRegistered(){
    let filled = true;
    let form = document.getElementById("formcontainer");
    let first_name = document.getElementById("first_name");
    let last_name = document.getElementById("last_name");
    let email = document.getElementById("email");
    if(first_name.value == "" || last_name.value == "" || email.value == ""){
        filled = false
        
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

function search(){
    let string = document.getElementById('query').value;

    let questionDiv = document.getElementById('qAnda');
    questionDiv.innerHTML = "";

    if(string.length > 0){
        let temp = list.length
        for(let i = 0; i < temp; i++){
            alert(i);
            if(list[i].includes(string)){
                addQuestion(list[i], false, listAnswers[i]);
            }
        }
    }else{
        existingQuestion();
    }

    
}


