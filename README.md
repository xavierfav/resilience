# resilience
A website for reinforcing links beetween people and common good projects


## Running

You'll need to have [`docker`](https://docs.docker.com/install/) and [`docker-compose`](https://docs.docker.com/compose/install/) installed.

- The first time you load the application you will need to perform migrations:

    `docker-compose run --rm web python manage.py migrate`

- Run Resilience using docker-compose:

    `docker-compose up`

- Open your browser on:  http://localhost:4200/
