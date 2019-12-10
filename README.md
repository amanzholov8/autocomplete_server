## README (Kombo Project)

To run the project, you will need Docker and Docker Compose installed on your machine.

You can install them from the following links:

- Docker: https://docs.docker.com/install/
- Docker Compose: https://docs.docker.com/compose/install/

After you have installed Docker (and Docker Compose), go to the ```autocomplete_server``` folder from terminal.

Once inside the folder, run the following command:

```
docker-compose up
```

- Note: You will need to wait a bit until the database and the server are set up
(If you see ```Server listening``` and ```Connected to DB``` in the log in the terminal, you can proceed to the next steps)


### Setting up the database
Open a separate terminal window and run the following command: 
(Note: you need to be inside the ```autocomplete_server``` folder)

```
docker-compose exec mysql bash setup_db.sh
```

### Making requests to the autocomplete server

Now, to test that the autocomplete API works, you can make HTTP POST requests in a separate terminal window. To do so, run the following command:

```
curl -d "q=Pa" http://localhost:3000
```
- Note: you can change ```Pa``` query to some other string
