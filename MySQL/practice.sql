
-- Attribution

-- One set of data are impressions, which represent ads show to users.

-- The second set of data are conversions, which represent later actions taken by users, after they may or may not have been show an ad.

-- The schemas look like this:

-- Impression
-- ----------
-- user_id  VARCHAR  NULL
-- auction_id  VARCHAR NOT NULL
-- bid_time  DATE NOT NULL
-- PRIMARY KEY(auction_id)

-- Conversion
-- ----------
-- conversion_id VARCHAR NOT NULL
-- user_id  VARCHAR NULL
-- auction_id VARCHAR NULL
-- bid_time DATE NOT NULL
-- PRIMARY KEY (conversion_id)

-- The goal is to join as many conversions as possible to a single impression. The rules for joining are:

-- 1) If we can join on auction_id, that impression is chosen
-- 2) If we cannot join on acution_id, we attempt to join on user_id
-- 3) If more than one impression can be joined to, the most recent one is chosen

-- 
-- 
-- look up
-- inner, left, right, cross
-- 
-- 

-- 1
insert into temp table res1
select auction_id, conversion_id from Conversion inner join Impression on (Impression.auction_id = Conversion.auction_id);

-- 2
select auction_id, conversion_id from Conversion inner join Impression on (Impression.user_id = Conversion.user_id) 
    where auction_id not in (select auction_id from res1);

-- 3