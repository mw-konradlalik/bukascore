USE BukaScore

DELETE FROM Matches
DELETE FROM TournamentTeam
DELETE FROM Teams
DELETE FROM Tournaments
DELETE FROM Games
DELETE FROM Organisations

SET IDENTITY_INSERT Organisations ON
INSERT INTO Organisations (Id, Name) VALUES (1, 'PZPN')
INSERT INTO Organisations (Id, Name) VALUES (2, 'FIFA')
INSERT INTO Organisations (Id, Name) VALUES (3, 'UEFA')
INSERT INTO Organisations (Id, Name) VALUES (4, 'Making Waves')
SET IDENTITY_INSERT Organisations OFF

SET IDENTITY_INSERT Games ON
INSERT INTO Games (Id, OrganisationId, Name) VALUES (1, 1, 'Ekstraklasa')
INSERT INTO Games (Id, OrganisationId, Name) VALUES (2, 1, 'Puchar Polski')
INSERT INTO Games (Id, OrganisationId, Name) VALUES (3, 2, 'World Cup')
INSERT INTO Games (Id, OrganisationId, Name) VALUES (4, 2, 'Club World Cup')
INSERT INTO Games (Id, OrganisationId, Name) VALUES (5, 3, 'Champions League')
INSERT INTO Games (Id, OrganisationId, Name) VALUES (6, 3, 'Europa League')
INSERT INTO Games (Id, OrganisationId, Name) VALUES (7, 4, 'Xbox FIFA League')
INSERT INTO Games (Id, OrganisationId, Name) VALUES (8, 4, 'Piłkarzyki League')
SET IDENTITY_INSERT Games OFF

SET IDENTITY_INSERT Tournaments ON
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (1, 'Sezon 2016', 1, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (2, 'Sezon 2015', 1, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (3, 'Puchar Polski 2016', 2, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (4, 'Puchar Polski 2017', 2, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (5, 'World Cup 2014', 3, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (6, 'World Cup 2018', 3, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (7, 'Club World Cup 2014', 4, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (8, 'Club World Cup 2013', 4, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (9, 'Champions League 2016', 5, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (10, 'Champions League 2017', 5, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (11, 'Europa League 2013', 6, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (12, 'Europa League 2011', 6, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (13, 'Xbox FIFA League Sezon 17', 7, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (14, 'Xbox FIFA League Sezon 16', 7, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (15, 'Piłkarzyki League maj 2016', 8, '2012-06-18', '2018-06-18')
INSERT INTO Tournaments(Id, Name, GameId, StartDate, EndDate) VALUES (16, 'Piłkarzyki League pażdziernik 2016', 8, '2012-06-18', '2018-06-18')
SET IDENTITY_INSERT Tournaments OFF

SET IDENTITY_INSERT Teams ON
INSERT INTO Teams(Id, Name, GameId) VALUES(1, 'Wisła Kraków', 1)
INSERT INTO Teams(Id, Name, GameId) VALUES(2, 'Sandecja Nowy Sącz', 1)
INSERT INTO Teams(Id, Name, GameId) VALUES(3, 'Lech Poznań', 2)
INSERT INTO Teams(Id, Name, GameId) VALUES(4, 'Legia Warszawa', 2)
INSERT INTO Teams(Id, Name, GameId) VALUES(5, 'Polska', 3)
INSERT INTO Teams(Id, Name, GameId) VALUES(6, 'Niemcy', 3)
INSERT INTO Teams(Id, Name, GameId) VALUES(7, 'FC Barcelona', 4)
INSERT INTO Teams(Id, Name, GameId) VALUES(8, 'Orlando Pirates', 4)
INSERT INTO Teams(Id, Name, GameId) VALUES(9, 'Bayern Monachium', 5)
INSERT INTO Teams(Id, Name, GameId) VALUES(10, 'Juventus Turyn', 5)
INSERT INTO Teams(Id, Name, GameId) VALUES(11, 'Ajax Amsterdam', 6)
INSERT INTO Teams(Id, Name, GameId) VALUES(12, 'Sevilla FC', 6)
INSERT INTO Teams(Id, Name, GameId) VALUES(13, 'Sylwester Jarosiński', 7)
INSERT INTO Teams(Id, Name, GameId) VALUES(14, 'Konrad Lalik', 7)
INSERT INTO Teams(Id, Name, GameId) VALUES(15, 'Wojciech Sowa - Kamila Jarosz', 8)
INSERT INTO Teams(Id, Name, GameId) VALUES(16, 'Dariusz Macina - Mateusz Winiarski', 8)
SET IDENTITY_INSERT Teams OFF

INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(1, 1)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(1, 2)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(2, 1)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(2, 2)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(3, 3)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(3, 4)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(4, 3)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(4, 4)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(5, 5)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(5, 6)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(6, 5)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(6, 6)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(7, 7)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(7, 8)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(8, 7)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(8, 8)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(9, 9)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(9, 10)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(10, 9)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(10, 10)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(11, 11)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(11, 12)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(12, 11)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(12, 12)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(13, 13)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(13, 14)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(14, 13)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(14, 14)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(15, 15)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(15, 16)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(16, 15)
INSERT INTO TournamentTeam(TournamentId, TeamId) VALUES(16, 16)

SET IDENTITY_INSERT Matches ON
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (1, 1, 2, 1, 1, 1)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (2, 1, 2, 2, 2, 2)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (3, 3, 4, 3, 3, 3)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (4, 3, 4, 4, 4, 4)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (5, 5, 6, 5, 5, 5)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (6, 5, 6, 6, 6, 6)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (7, 7, 8, 7, 7, 7)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (8, 7, 8, 8, 8, 8)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (9, 9, 10, 9, 1, 1)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (10, 9, 10, 10, 2, 2)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (11, 11, 12, 11, 3, 3)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (12, 11, 12, 12, 4, 4)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (13, 13, 14, 13, 5, 5)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (14, 13, 14, 14, 6, 6)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (15, 15, 16, 15, 7, 7)
INSERT INTO Matches(Id, AwayId, HomeId, TournamentId, AwayScore, HomeScore) 
    VALUES (16, 15, 16, 16, 8, 8)
SET IDENTITY_INSERT Matches OFF