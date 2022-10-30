-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "flag" boolean,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("flag","feeling", "understanding", "support", "comments")
VALUES (true,4, 4, 5, 'Doing Great!');
INSERT INTO "feedback" ("flag","feeling", "understanding", "support", "comments")
VALUES (true,3, 2, 1, 'I could use some help...');
INSERT INTO "feedback" ("flag","feeling", "understanding", "support", "comments")
VALUES (true,0, 0, 0, 'I do not understand a single thing. :(');
INSERT INTO "feedback" ("flag","feeling", "understanding", "support", "comments")
VALUES (true,5, 5, 5, 'I will show you the way.');
INSERT INTO "feedback" ("flag","feeling", "understanding", "support", "comments")
VALUES (true,0, 5, 0, 'I undestand yet I do not feel');
INSERT INTO "feedback" ("flag","feeling", "understanding", "support", "comments")
VALUES (true,2, 3, 4, 'Am I getting paid for this?');
