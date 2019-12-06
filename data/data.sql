INSERT INTO countries (id, name) VALUES (1, "France"), (2, "United Kingdom");
INSERT INTO cities (id, name, country_id, latitude, longitude) VALUES
	(1, "London", 2, 12.2, 13.3),
	(2, "Paris", 1, 14.2, 15.3),
	(3, "Paddington", 2, 12.1, 11.3);