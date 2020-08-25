CREATE TABLE `todoData` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `completed` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO study.todoData (id, title, completed) VALUES (1, 'Coding', 0);
INSERT INTO study.todoData (id, title, completed) VALUES (4, 'Cooking Dinner', 1);
INSERT INTO study.todoData (id, title, completed) VALUES (5, 'Reading Books', 0);
INSERT INTO study.todoData (id, title, completed) VALUES (9, 'Workout', 0);