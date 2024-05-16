document.addEventListener('DOMContentLoaded', function() {

    fetch('kullanicilar.json')
    .then(response => response.json())
    .then(data => {
      kullanicilar = data;
      console.log(kullanicilar); 
    })
    .catch(error => {
      console.error('kullanicilar.json yüklenirken hata:', error);
    });
   
    
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault(); 

        var email = document.getElementById('exampleInputEmail1').value;
        var password = document.getElementById('exampleInputPassword1').value;

        if (email.trim() == '' || password.trim() == '') {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }

        for(var i = 0; i < kullanicilar.length; i++) {
            user = kullanicilar[i]
            console.log("Kullanıcı: ", user.email, user.password);
            console.log("Girilen: ", email, password);
            if(email == user.email && password == user.password) {
                document.getElementById('tepki').innerText = user.name + " Twiti";
                return;
            } 
        } alert('Geçersiz e-posta veya şifre.');
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
        
    });
});

