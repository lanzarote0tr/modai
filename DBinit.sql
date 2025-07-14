CREATE DATABASE modai
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;
USE modai;
CREATE TABLE RequestLogs (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  timestamp DATETIME NOT NULL,
  ip VARCHAR(45) NOT NULL,
  method VARCHAR(10) NOT NULL,
  url TEXT NOT NULL,
  userAgent TEXT,
  referrer TEXT,
  status INT NOT NULL,
  contentLength INT NOT NULL
);
