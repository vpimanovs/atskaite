================Postgresql database local build=========================
1. Install pgAdmin 4.3 (3.2)<br />
https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v3.2/windows/pgadmin4-3.2-x86.exe
(Username: postgres, Password: BREAKEdance1), if you want to use your own user/pass, you will need to change this data in all others configs.)
<<<<<<< HEAD
2. In pgAdmin4 inport your postgres database. (economist.sql file)=>
2.1. Create database (postgres)
2.2. Create script-> insert all sql data in that script and run it, after that all tables should show.
================Postgresql via docker==================================
1.docker run --name docker -e BREAKEdance1=BREAKEdance1 -d postgres
2. winpty docker exec -it  4e51d610044f psql -U postgres
3. postgres=# CREATE DATABASE postgres;
4.  Insert .sql file (ctrl+c-> ctrl+v)
5. Check out tables -> \d
(Using Git Bash)
=======
2. In pgAdmin4 inport your postgres database. (economist.sql file)=><br />
2.1. Create database (postgres)<br />
2.2. Create script-> insert all sql data in that script and run it, after that all tables should show.
>>>>>>> ac729c9b0293d55c1a102837c7660f47ef1fd282
