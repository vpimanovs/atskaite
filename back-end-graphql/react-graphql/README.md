1. To launch this application, firstly, you should do -> npm install

2. Run GRAPHQL server (at the moment via PostGraphile)
2.1. Install PostGraphile
 npm install -g postgraphile
2.2.Connect to Postgresql database
postgraphile --connection postgres: // postgres: BREAKEdance1 @ localhost: 5432 / postgres
postgraphile --connection postgres: // (username): (password) @ localhost: (port) / (database)
2.3. Where to connect?
GRAPHQL API SERVER-
http: // localhost: 5000 / graphql
GRAPHQL PLAYGROUND-
http: // localhost: 5000 / graphiql

3. Launch application
npm start

COMMENTS
=========================================
1. Data transferring between postgraphile server and application could be blocked by CORS, so to avoid this is recommended to use Firefox, with CORSe extensions.
2. From the beginning, no data will be displayed, so if you want to see some data, you should send some mutations from graphql playground. (localhost:5000/graphiql)
2.1. Mutations and Queryes examples you can find in (GRAPQL_documents) folder/examples.
----------------------------------------
ADDITIONAL INFO (in dev mode)
=========================================
Ho to connect Prisma to your PostgreSQL?
=========================================
Install Prisma
1. npm install -g prisma
Create needed files
2. prisma init
Noradam: 
2.1. existing database
2.2. PostreSQL database
2.3. Yes (data exists)
2.4. localhost
2.5. 5432 (port)
2.6. postgres (database user)
2.7. BREAKEdance1 (password)
2.8. database name postgres
2.9. Use SSL? NO
2.10. public (schema)
Run docker-compose
3. docker-compose up
Run Prisma
4. prisma deploy
How to connect to Prisma Playground?
5. http://localhost:4466
========================================
Remains only build GRAPQL server and connect with prisma endpoint.
