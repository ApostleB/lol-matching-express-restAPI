USE express;

DROP TABLE IF EXISTS Reports;

CREATE TABLE IF NOT EXISTS Reports(
    Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(256) NOT NULL,
    Content VARCHAR(1024),
    Issuer INT,
    UserId INT NOT NULL,
    IsGood BOOLEAN,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    FOREIGN KEY(Issuer) REFERENCES Users(Id) ON DELETE CASCADE
);

INSERT INTO Reports(
    Title, Content, Issuer, UserId, IsGood
)
VALUES (
    "BAD TITLE", 'BAD ISSUE', '1', '2', false
);

INSERT INTO Reports(
    Title, Content, Issuer, UserId, IsGood
)
VALUES (
    "GOOD TITLE", 'GOOD ISSUE', '1', '2', true
);