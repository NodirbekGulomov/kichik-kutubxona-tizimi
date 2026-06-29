**Uyga vazifa: Kitoblar katalogi**

**Vazifa tavsifi:**

Kichik kutubxona tizimi yarating. Foydalanuvchi yangi kitob qo‘sha olishi va barcha kitoblarni ko‘ra olishi kerak.

**Model (`Book`)**

Quyidagi maydonlarga ega model yarating:

* title  
* author  
* year  
* genre

**Sahifalar**

1. `/` — bosh sahifa  
   * Barcha kitoblar ro‘yxatini chiqaring.  
2. `/add-book/` — kitob qo‘shish sahifasi  
   * Django `Form` yordamida forma yarating.  
   * Foydalanuvchi yangi kitob ma'lumotlarini kiritsin.  
3. `/success/` — muvaffaqiyat sahifasi  
   * Kitob muvaffaqiyatli qo‘shilgani haqida xabar chiqaring.  
   * Bosh sahifaga qaytish uchun havola qo‘shing.

**Ishlash tartibi**

* Foydalanuvchi `/add-book/` sahifasiga kiradi.  
* Formani to‘ldirib yuboradi.  
* POST request qabul qilinadi.  
* Ma'lumotlar bazaga saqlanadi.  
* Foydalanuvchi `/success/` sahifasiga yo‘naltiriladi.  
* Bosh sahifada esa barcha kitoblar ko‘rinadi.

**Kitoblar quyidagi ko‘rinishda chiqarilsin:**

Python Asoslari  
Muallif: Alisher  
Janr: Dasturlash  
Yil: 2024  
\--------------------

**Quyidagi topshiriqlarni ham bajaring:**

* Asosiy sahifadagi kitoblarni yil bo‘yicha tartiblangan holatda chiqaring  
* Bosh sahifada jami kitoblar sonini ham chiqaring.  
* Success sahifasida qo‘shilgan kitob nomini ham ko‘rsating

**Qoshimcha topshiriq:**

Asosiy sahifada kitoblarni nomi bilan qidirish uchun search input qoshing, search inputga qandaydur kitob nomida bor soz kiritilganda faqat osha soz qatnashgan kitob nomlari bor kitoblar asosiy sahifada korinishi kerak.

