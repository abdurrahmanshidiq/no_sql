# no_sql

Untuk database NO SQL menggunakan Docker MongoDB jadi tidak perlu install MongoDB di Lokal
caranya 
1. install docker : https://docs.docker.com/get-docker/
2. Jalankan docker daemon dengan klik aplikasi docker yg sudah terinstall
3. Pada terminal ketik bash/run.sh untuk menjalankan docker command. Setelah itu ketik command `docker ps` kemudian akan muncul informasi berikut
![docker_ps](https://github.com/abdurrahmanshidiq/no_sql/blob/master/img/docker_ps.png "docker_ps")<br>
4. Buka Studio 3T (https://studio3t.com/) dan masukkan Host, Port, User, Password seperti gambar berikut
![port](https://github.com/abdurrahmanshidiq/no_sql/blob/master/img/port.png "port")<br>
![user_password](https://github.com/abdurrahmanshidiq/no_sql/blob/master/img/user_password.png "user_password")<br>
5. create collection `buku`
![create_collection](https://github.com/abdurrahmanshidiq/no_sql/blob/master/img/create_collection.png "create_collection")<br>
![collection_buku](https://github.com/abdurrahmanshidiq/no_sql/blob/master/img/collection_buku.png "collection_buku")<br>
6. Jalankan query mongo (query.js) pada console Studio 3T

