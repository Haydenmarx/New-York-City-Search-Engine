# New York Search Engine
*A custom search experience for NYC*

### Why a custom search engine?

* New York Search Engine (NYSE) offers a unique single source of truth approach to finding out information about NYC. 

* Rather than needing to go different websites for court, public meeting or business information, NYSE offers all that information at single point with an easy to use interface.

##### [Pitch Deck](https://docs.google.com/presentation/d/18EPsn_i-r3hD_CG6ulRMWqUoY-SPBzLbMAmpcvx9nEM/edit?usp=sharing)

##### [Trello](https://trello.com/b/U2CkMGhE/new-york)

### [Live](http://hayden-web-management-app.s3-website-us-west-1.amazonaws.com/login)

### How to start locally:

- `docker-compose up` in root will start the back end
- `docker-compose up -f docker-compose-full.yml` in root will start the both the front-end and back end
-  `npm start` or `npm run start` in the `user-interface` folder will start the angular application.
-  `npm run test` in the same folder will run the Jasmine tests.
-  Feature tests can be run for the microservices using Selenide.