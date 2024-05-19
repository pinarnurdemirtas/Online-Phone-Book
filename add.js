document.addEventListener('DOMContentLoaded', function() {
    let mypersons = [];

    fetch('persons.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    }) 
    .then(data => {
        persons = data;
        console.log(persons); 
    })
    .catch(error => {
        console.error('Error', error);
    });


    document.getElementById('add').addEventListener('click', function(event) {
        event.preventDefault(); 
        var entername = document.getElementById('a_exampleInputName1').value;
        var enternumber = document.getElementById('a_exampleInputNumber1').value;
        if (entername.trim() === '' || enternumber.trim() === '') {
            alert('Please enter name.');
            return;
        }

        let validUser = false;
        console.log("Name: ", entername);
        console.log("Number: ", enternumber);
        mypersons.push({name: entername, number: enternumber});
        console.log(mypersons);
        addUserToList(entername, enternumber);
        validUser = true;


        if (!validUser) {
            alert('False Name.');
        }

        function addUserToList(name) {
            for(var i = 0; i < mypersons.length; i++) {
                var user = mypersons[i];
                if(user.name === entername & user.number === enternumber) {
                   
                    let newCard = document.createElement('div');
                    newCard.className = 'card';
                    newCard.style.marginBottom='8px'
                    let cardTitle = document.createElement('h5');
                    cardTitle.innerHTML = entername + '<br>' + enternumber;
                    newCard.appendChild(cardTitle);
                    let kisiKartlar = document.getElementById('person');
                    kisiKartlar.appendChild(newCard);
                    validUser = true;
                    break;
                }
            }
        };


    });

});