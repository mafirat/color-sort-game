# COLOR SORT GAME

Youtube üzerinde yayınladığım Renk Sıralama Oyunu projesi.
Her projenin her video başlangıcındaki halini sıralı olarak ilgili branch üzerinden ulaşabilirsiniz.

> ## Video 1 - Proje Oluşturma

Proje oluşturuldu.

> ## Video 2 - Temel Dinamikler

Uygulamada kullanacağımız `drag` ve `drop` olaylarının nasıl kullanıldığı öğrenildi.

> ## Video 3 - Temel Bilesenler p1

Uygulamada kullanılacak temel bilesenler olusturuldu.

- Block
- Tube

> ## Video 4 - Temel Bilesenler p2

Uygulamada kullanılan temel bilesenler gelistirilmeye devam edildi.

- Tube içerisine verilen itemset ile blocklar olusturuldu.
- Block verisine göre blockların renkleri degistirili.

> ## Video 5 - ItemSet ile tube olusturma

Itemset verisi ile block ve tube olusturma yapildi.

> ## Video 6 - Ondrop metodu eklendi

ondrop metodu ile hangi block hangi tube içerisine bırakıldı o yakalandı.

> ## Video 7 - Blok siralamasi duzenlendi

Drop anında block'u ilgili tube içerisine taşıma yapıldı. Aynı zamanda ortaya çıkan sıralama sorunu `order` verisine göre **sort** ederek çözüldü.
tube içerisinde en üstte bulunan **block** _draggable_ `true` edilip diğerleri `false` olacak şekilde ayarlandı.

> ## Video 8 - Bırakma anındaki hatalar giderildi

Drop anında gerekli kontroller yapıldı.

- dizi büyüklüğü
- önceki renk kontrolü
- order güncelleme

> ## Video 9 - Sifirlama islemi eklendi

Burada kullanici oyunun herhangi bir yerinde block dağılımını ilk duruma çevirebileceği bir buton eklendi.

Bakılması gereken teknik konular.

- <https://javascript.info/object-copy> - kopyalama ile ilgili ingilizce kaynak
- <https://medium.com/@mehmetalifirat/javascript-spreading-ve-destructuring-1ef3cfb9b47d> - spreading ve destruct ile ilgili kendi yazmış olduğum makale.

> ## Video 10 - Geri Al özelliği eklendi

Kullanıcıya yaptığı hamleleri geri alma özelliği kazandırıldı.
`useRef` kullanımı gerçekleştirildi.

> ## Video 11 - Seviye sistemi ekleme p1

Kullanıcıya farklı seviyeler seçebileceği bir sistem eklenmeye başlandı.
