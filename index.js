document.addEventListener('DOMContentLoaded', function() {
   
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault(); 


        var kullanicilar = [
            {email:"engindemirog@gmail.com", password:1234},
            {email:"pinardmrts@gmail.com", password:12345},
            {email:"derindemir@gmail.com", password:12346},
        ];

        var twitler = [
            {email: kullanicilar[0].email, twit:"enginin twiti"},
            {email: kullanicilar[1].email, twit:"pınarın twiti"},
            {email: kullanicilar[2].email, twit:"derinin twiti"},
        ];

       
        var email = document.getElementById('exampleInputEmail1').value;
        var password = document.getElementById('exampleInputPassword1').value;

        if (email.trim() == '' || password.trim() == '') {
            document.getElementById('tepki').innerText = 'Lütfen tüm alanları doldurun.';
            return;
        }

        for(var i = 0; i < kullanicilar.length; i++) {
            console.log("Kullanıcı: ", kullanicilar[i].email, kullanicilar[i].password);
            console.log("Girilen: ", email, password);
            if(email == kullanicilar[i].email && password == kullanicilar[i].password) {
                document.getElementById('tepki').innerText = twitler[i].twit;
                return;
            } 
            else {
                document.getElementById('tepki').innerText = 'Geçersiz e-posta veya şifre.';
            }}
    });
});
