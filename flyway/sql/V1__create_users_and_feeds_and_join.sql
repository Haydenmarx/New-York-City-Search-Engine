create table USERS (
  ID serial primary key,
  USERNAME varchar NOT NULL,
  DISPLAYNAME varchar
);

create table FEEDS (
  ID serial primary key,
  URL varchar NOT NULL,
  PARAMS varchar ARRAY
);

create table CHAPTERS (
  ID serial primary key,
  USER_ID integer references USERS,
  FEED_ID integer references FEEDS,
  PARAMS varchar ARRAY  
);
