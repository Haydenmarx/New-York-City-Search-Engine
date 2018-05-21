INSERT INTO users (username) VALUES ('Hayden'), ('Test User'), ('Avatar Aang');

INSERT INTO feeds
  (url, params)
VALUES
  (
    'www.google.com',
    '
      {
        "username",
        "ip address"
      }'
  ),
  (
    'www.facebook.com', 
    '{
      "first name",
      "last name",
      "email"
     }'
  );
