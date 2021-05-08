# ALOTECH PROJE ÖDEVİ 1  BU REPOSİTORY ÜZERİNDEN İLERLEYECEKTİR. EKSİK BÖLÜMLER BU PROJE ÜZERİNDEN GÜNCELLENECEKTİR.


# LÜTFEN https://github.com/sedabasaran/Node-Proje-server ve https://github.com/sedabasaran/Node-Proje-client  PROJELERİNİ AYRI AYRI İNDİRMEK YERİNE GÜNCELLEDİĞİM BU PROJEYİ İNDİRİN.  https://github.com/sedabasaran/Node_Proje1   PROJE BURADAN DEVAM EDECEKTİR.

#  PROJEYİ ÇALIŞTIRMAK İÇİN

Bu projeyi indirdikten sonra proje dizininde 2 terminal açıp, 1. Terminale "cd server " 2. Terminale " cd client " yazıp dizinizi değiştirin. Bu adımı uyguladıktan sonra 1.terminale "npm start " 2.terminalede " npm start " yazıp çalıştırın. Böylece proje [http://localhost:3000](http://localhost:3000)  üzerinde çalışacaktır.  


Eğer 2 terminalde " npm start " yazınca çalışmayıp hata verdiyse büyük ihtimalle " package-lock.json " dosyası hata veriyordur. Hem client side hem de server side bölümünde bulunan " package-lock.json " dosyasını siliniz. Sildikten sonra her 2 terminale “  npm install " yazınız. Npm paketi yüklendikten sonra her 2 terminale "npm start" yazıp projeyi başlatın. Böylece poje localhost üzerinden çalışacaktır.  Http://localhost:3000/

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

# KULLANILAN TEKNOLOJİLER:
- ReactJS
- NodeJS
- ExpressJS
- MySQL
- Sequelize

Projenin Client Side Bölümünde React App Kullanınılmıştır. Server Side Bölümünde Database bağımsız çalışması için sequelize üzerinde modeli oluşturup, kodlar yazılmıştır.Model katmanında validation ayarları yapılmıştır. Projeyi test etmek için insomnia api testing kullanılmıştır. ( https://insomnia.rest/ )

Arayüz Tasarımında fonksiyonel olarak çalışan özellikler;
1. User Listeleme Yapıldı.
2. User Detay Görüntüleme Yapıldı.
3. User Yaratabilme Yapıldı.
4. User Güncelleme-(yapım aşamasında-sonra güncelenecektir.)
5. User Silme Yapıldı.
