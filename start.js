document.addEventListener('DOMContentLoaded', function() {
    let kullanicilar = []; 

    fetch('https://v1.nocodeapi.com/pinarnurdemirtas/google_sheets/obUbiifpGCMQtoyC?tabId=sayfa1')
    .then(response => response.json())
    .then(data => {
      kullanicilar = data.data; 
      console.log(kullanicilar); 
    })
    .catch(error => {
      console.error('Kullanıcılar API yüklenirken hata:', error);
      alert('Kullanıcılar API yüklenirken bir hata oluştu.');
    });
    
    document.getElementById('add').addEventListener('click', function(event) {
        event.preventDefault(); 
        var entername = document.getElementById('a_exampleInputName1').value;
        if (entername.trim() === '') {
            alert('please enter name.');
            return;
        }

        let validUser = false;
        console.log("Name: ", entername);
        kullanicilar.push({name: entername});
        addUserToList(entername);
        validUser = true;
            
        
        if (!validUser) {
            alert('False Name.');
        }

        function addUserToList(name) {
            for(var i = 0; i < kullanicilar.length; i++) {
                var user = kullanicilar[i];
                if(user.name === entername) {
                    // Yeni bir kart oluştur
                    let newCard = document.createElement('div');
                    newCard.className = 'card';
                    newCard.style.marginBottom='8px'
    
                    // Kartın içeriğini oluştur
                    let cardTitle = document.createElement('h5');
                    cardTitle.textContent = entername;
    
                    // Başlığı karta ekle
                    newCard.appendChild(cardTitle);
    
                    // Kullanıcı listesine kartı ekle
                    let kisiKartlar = document.getElementById('kisi');
                    kisiKartlar.appendChild(newCard);
    
                    validUser = true;
                    break;
                }
            }
        };

    });

    document.getElementById('view').addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = "view.html";
    });

});