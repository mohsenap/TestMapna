# TestMapna

this is the requested query for first question. I used SQL server, I could use mysql, oracle, mariadb, sqlite3 and pg.


select Td.*, Temp1.* from (
select Instrument.Name,  max(Trade.Id)as LastId, sum(Trade.[Open]) as SumOpen, sum(Trade.[High]) as SumHigh, sum(Trade.[Close]) as SumClose   from Trade inner join Instrument on Instrument.Id = Trade.InstrumentId group by Trade.InstrumentId, Instrument.Name
) as Temp1 inner join Trade as Td on Temp1.LastId = Td.Id


this project is written in Nodejs. 
I could implement with .netcore and nodejs so I decided to implement in nodejs.

please run this
git clone https://github.com/mohsenap/TestMapna.git

then run npm i  to install the packages

then in command prompt in that directory run  "node .\index.js"

then inside the browser run http://localhost:3333

for the result query in json run http://localhost:3333/test

for generate 1000 records for each tables and add to tables run  http://localhost:3333/random


I did not use extra CLI project for random generator.



After running the node .\index.js" the database will be generated automatically. you just need to run this query for initialized data. I ignored the first column because of the identity.


INSERT INTO Instrument values('AAPL'), ('GOOGL');
INSERT INTO Trade VALUES
( 1, '2020-01-01', 1001, 2001, 301, 401),
( 1, '2020-01-02', 1002, 2002, 302, 402),
( 1, '2020-01-03', 1003, 2003, 303, 403),
( 2, '2020-01-01', 1004, 2004, 304, 404),
( 2, '2020-01-03', 1005, 2005, 305, 405),
( 5, '2020-01-01', 1006, 2006, 306, 406),
( 1, '2021-01-01', 1007, 2007, 307, 407);






