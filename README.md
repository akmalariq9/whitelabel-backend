<div align=justify>


# **_Whitelabel Backend_**
Repository ini dibuat untuk website whitelabel yang diinisiasi oleh Flexoo sebagai _software house_ dari HMTC ITS.

## **_How To Use_**
Berikut adalah langkah-langkah untuk menggunakan _repository_ ini sebagai backend dalam mendukung keperluan _website whitelabel_. 

- **_Clone Repository_** <br>
_Clone repository_ ini dengan menggunakan `git bash` atau menggunakan terminal dengan _syntax_ `git clone https://github.com/akmalariq9/whitelabel-backend.git`.

- **_Create `uploads` Directory_** <br>
Pada root folder, buat folder `uploads` yang akan digunakan untuk menyimpan gambar dari API. Folder dapat dibuat dengan GUI atau _syntax_ `mkdir uploads`

- **_Create `Database`_** <br>
Database dapat dibuat menggunakan mySQL, postgreSQL, dan _platform_ lain. Sesuaikan dengan preferensi dan kebutuhan masing-masing.

- **_Create `.env` File_** <br>
File .env akan digunakan untuk menghubungkan repository dengan _database_. Berikut adalah template `.env` yang dapat digunakan, pastikan isi sesuai denga kongfigurasi yang ditentukan. <br>

```bash
DEV_DB_USERNAME=<database username>
DEV_DB_PASSWORD=<database password>
DEV_DB_NAME=<database name>
DEV_DB_HOST=<database host>
DEV_DB_DIALECT=<database platform>

TEST_DB_USERNAME=root
TEST_DB_PASSWORD=
TEST_DB_NAME=database_test
TEST_DB_HOST=127.0.0.1
TEST_DB_DIALECT=mysql

PROD_DB_USERNAME=root
PROD_DB_PASSWORD=
PROD_DB_NAME=database_production
PROD_DB_HOST=127.0.0.1
PROD_DB_DIALECT=mysql

JWT_SECRET=<Secret Key>
```

- **_Install Dependencies_** <br>
Lakukan instalasi dari seluruh _dependencies_ yang diperlukan menggunakan _syntax_ `npm install` pada terminal.

- **_Start Migration_** <br>
Lakukan migrasi atau pembuatan tabel kedalam _database_ menggunakan _syntax_ `npx sequelize-cli db:migrate`.

- **_Start Seeder_** <br>
Lakukan seeder untuk input beberapa data _dummy_ pada tabel _user_ dan artikel menggunakan syntax `npx sequelize-cli db:seed:all`.

- **_Start Backend_** <br>
Untuk menjalankan _backend_ dapat menggunakan _syntax_ `npm start`. Secara default, _repository_ ini akan berjalan pada port 3000.

## **_Postman Documentation_**
Dokumentasi API menggunakan Postman dapat diakses [disini](https://documenter.getpostman.com/view/26786734/2sA3rxqtLp) atau melalui link berikut: https://documenter.getpostman.com/view/26786734/2sA3rxqtLp

# **Thank You**
```c
#include <stdio.h>

int main(){
    printf("thank you");
}
```