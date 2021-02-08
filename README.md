# todo-app-pern-stack
workbench for https://youtu.be/ldYcgPKEZC8



## server setup

- `docker-compose run --rm --service-ports node_dev_env`

- `npm init -y`

- `npm install express pg cors --save`

- `npm install --save-dev nodemon`

## db 

### login

- `docker exec -it postgres-docker psql -U postgres`

### db setup related commands

- `\l`: lists all data bases 
- `\c ~dbname~`: move inside a database 
- `\dt`: show table in database
- `CREATE DATABASE perntodo;`: creates DB names `perntodo`
- `CREATE TABLE todo(~schema~);`: create table called todo 

## server connection to the database

- ensure the database and the tables have been setup on the database already for this PERN stack 
    - run the commands stored in the `database.sql` in the `psql` command line after logging in to the docker 

## client setup 

- `npx create-react-app . --use-npm` 
    - the Dockerfile might need to be moved out before running this command, just paste it back after the base app has been bootstrapped 


## references and solutions to errors 

- [connect ECONNREFUSED 127.0.0.1:5432](https://stackoverflow.com/a/59341636/3161273)
- [Creating a React App with Create-React-App and Material-UI](https://medium.com/@martink_rsa/creating-a-react-app-with-create-react-app-and-material-ui-380985fc2b19)

