1. To launch this application, firstly, you should do -> npm install

2. Run GRAPHQL server (at the moment via PostGraphile)<br />
2.1. Install PostGraphile<br />
 npm install -g postgraphile<br />
2.2.Connect to Postgresql database<br />
postgraphile --connection postgres: // postgres: BREAKEdance1 @ localhost: 5432 / postgres<br />
postgraphile --connection postgres: // (username): (password) @ localhost: (port) / (database)<br />
2.3. Where to connect?<br />
GRAPHQL API SERVER-<br />
http: // localhost: 5000 / graphql<br />
GRAPHQL PLAYGROUND-<br />
http: // localhost: 5000 / graphiql<br />

3. Launch application<br />
npm start<br />

COMMENTS
=========================================
1. Data transferring between postgraphile server and application could be blocked by CORS, so to avoid this is recommended to use Firefox, with CORSe extensions.<br />
2. From the beginning, no data will be displayed, so if you want to see some data, you should send some mutations from graphql playground. (localhost:5000/graphiql)<br />
2.1. Mutations and Queryes examples you can find in (GRAPQL_documents) folder/examples.<br />
----------------------------------------
ADDITIONAL INFO (in dev mode)
=========================================
Ho to connect Prisma to your PostgreSQL?
=========================================
Install Prisma<br />
1. npm install -g prisma<br />
Create needed files<br />
2. prisma init<br />
Noradam: <br />
2.1. existing database<br />
2.2. PostreSQL database<br />
2.3. Yes (data exists)<br />
2.4. localhost<br />
2.5. 5432 (port)<br />
2.6. postgres (database user)<br />
2.7. BREAKEdance1 (password)<br />
2.8. database name postgres<br />
2.9. Use SSL? NO<br />
2.10. public (schema)<br />
Run docker-compose<br />
3. docker-compose up<br />
Run Prisma<br />
4. prisma deploy<br />
How to connect to Prisma Playground?<br />
5. http://localhost:4466<br />
-----------------------------------------
Remains only build GRAPQL server and connect with prisma endpoint.
