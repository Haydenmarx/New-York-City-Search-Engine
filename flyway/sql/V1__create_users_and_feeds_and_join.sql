create table USERS (
  ID serial primary key,
  USERNAME varchar NOT NULL,
  DISPLAYNAME varchar
);

create table FEEDS (
  ID serial primary key,
  USER_ID integer references USERS,
  API_TABLE_NAME varchar,
  API_ID integer
);



create table API_JOBS (
  ID serial primary key,
  USER_ID integer references USERS,
  AGENCIES varchar,
  POSTINGTYPE varchar,
  NUMBEROFPOSITIONS varchar,
  BUSINESSTITLE varchar,
  CIVILSERVICETITLE varchar,
  QUERY varchar,
  TITLE varchar
);

