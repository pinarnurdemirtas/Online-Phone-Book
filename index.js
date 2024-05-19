document.addEventListener('DOMContentLoaded', function() {
    let persons = [];

    fetch('persons.json')
    .then(response => response.json())
    .then(data => {
        persons = data;
        console.log(persons); 
    })
    .catch(error => {
      console.error('Error', error);
    });


    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault(); 
        var email = document.getElementById('exampleInputEmail1').value;
        var password = document.getElementById('exampleInputPassword1').value;

        if (email.trim() == '' || password.trim() == '') {
            alert('Please fill in all fields.');
            return;
        }

        for(var i = 0; i < persons.length; i++) {
            user = persons[i]
            console.log("Person: ", user.email, user.password);
            console.log("Entered: ", email, password);
            if(email == user.email && password == user.password) {
                window.location.href = "add.html";
                return;
            } 
        } alert('Invalid email or password.');

    });
   
    document.getElementById('submit2').addEventListener('click', function(event) {
        event.preventDefault(); 

        var name = document.getElementById('exampleInputName1').value;
        var email = document.getElementById('exampleInputEmail2').value;
        var password = document.getElementById('exampleInputPassword2').value;

        if (name.trim() == '' || email.trim() == '' || password.trim() == '') {
            alert('Please fill in all fields.');
            return;
        }

        persons.push({name: name, email: email, password: password});
        console.log(persons);
        alert('New user added.');

    });
});
