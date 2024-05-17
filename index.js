document.addEventListener('DOMContentLoaded', function() {
    let kullanicilar = []; // Declare the variable to store users

    fetch('https://v1.nocodeapi.com/pinarnurdemirtas/google_sheets/obUbiifpGCMQtoyC?tabId=sayfa1')
    .then(response => response.json())
    .then(data => {
      kullanicilar = data.data; // Assuming the data is under the 'data' key
      console.log(kullanicilar); 
    })
    .catch(error => {
      console.error('Kullanıcılar API yüklenirken hata:', error);
      alert('Kullanıcılar API yüklenirken bir hata oluştu.');
    });
    
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault(); 

        var email = document.getElementById('exampleInputEmail1').value;
        var password = document.getElementById('exampleInputPassword1').value;

        if (email.trim() === '' || password.trim() === '') {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }

        let validUser = false;
        for(var i = 0; i < kullanicilar.length; i++) {
            var user = kullanicilar[i];
            console.log("Kullanıcı: ", user.email, user.password);
            console.log("Girilen: ", email, password);
            if(email === user.email && password === user.password) {
                document.getElementById('tepki').innerText = user.name + " Twiti";
                validUser = true;
                break;
            } 
        }
        if (!validUser) {
            alert('Geçersiz e-posta veya şifre.');
        }
    });


    document.getElementById('submit2').addEventListener('click', function(event) {
        event.preventDefault(); 

        var name = document.getElementById('exampleInputName1').value;
        var email = document.getElementById('exampleInputEmail2').value;
        var password = document.getElementById('exampleInputPassword2').value;

        if (name.trim() == '' || email.trim() == '' || password.trim() == '') {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }

        kullanicilar.push({name: name, email: email, password: password});
        console.log(kullanicilar);
        alert('Yeni kullanıcı eklendi.');
        
        // You might want to update the Google Sheets here as well
        // This part requires an additional API call to update the Google Sheets
    });
});
