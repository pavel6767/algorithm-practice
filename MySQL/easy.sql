-- Query all cities with population larger than NUM and with country code USA

select * 
    from CITY 
    where 
        POPULATION>100000 and 
        COUNTRYCODE='USA';

-- Query the names of all American cities in CITY with populations larger than 120000. The CountryCode for America is USA.

select NAME
    from CITY 
    where 
        POPULATION>120000 and 
        COUNTRYCODE='USA';

-- Query all columns (attributes) for every row in the CITY table.

select * from CITY;

-- Query all columns for a city in CITY with the ID 1661.

select * from CITY where ID=1661;

