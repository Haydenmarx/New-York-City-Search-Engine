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



create table API-JOBS (
  ID serial primary key,
  USER_ID integer references USERS,
  AGENCY varchar,
  POSTING_TYPE varchar,
  NUMBER_OF_POSITIONS varchar,
  BUSINESS_TITLE varchar,
  CIVIL_SERVICE_TITLE varchar,
);
