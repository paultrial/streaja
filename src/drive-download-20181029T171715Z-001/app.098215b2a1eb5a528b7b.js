webpackJsonp([0], [, , , , , function(t, e, n) { "use strict"; var r = i(n(6));

    function i(t) { return t && t.__esModule ? t : { default: t } } i(n(7)).default.module("straja", ["ui.grid", "ui.grid.cellNav", "ui.grid.edit", "ui.grid.resizeColumns", "ui.grid.pinning", "ui.grid.selection", "ui.grid.moveColumns", "ui.grid.exporter", "ui.grid.importer", "ui.grid.grouping"]).controller("MainCtrl", function() { this.myData = r.default, this.columnDefs = [{ name: "Nume", enableCellEdit: !0 }, { name: "Loc", enableCellEdit: !0 }, { name: "Cip", enableCellEdit: !0 }, { name: "Club, Oras", enableCellEdit: !0 }, { name: "Categoria", enableCellEdit: !0 }, { name: "PS1", enableCellEdit: !0 }, { name: "PS2", enableCellEdit: !0 }, { name: "PS3", enableCellEdit: !0 }, { name: "PS4", enableCellEdit: !0 }, { name: "PS5", enableCellEdit: !0 }, { name: "PS6", enableCellEdit: !0 }, { name: "Pen PS5", enableCellEdit: !0 }, { name: "Pen PS6", enableCellEdit: !0 }, { name: "Timp total", enableCellEdit: !0 }], this.myStyle = ".myGrid { height: 1000px }", this.gridOptions = { columnDefs: this.columnDefs, data: r.default, style: this.myStyle } }) }, function(t, e) { t.exports = [{ Cip: 31, Loc: 1, Nume: "Pascu Sergiu", "Club, Oras": "Bikealpin Racing", Categoria: "Masculin 19-29", PS1: "00:02:05", PS2: "00:04:17", PS3: "00:04:31", PS4: "00:04:09", PS5: "00:02:52", "Pen PS5": "", PS6: "00:03:00", "Pen PS6": "", "Timp total": "00:20:54" }, { Cip: 34, Loc: 2, Nume: "Aniţan Mihai", "Club, Oras": "Bikepoint racing", Categoria: "Masculin 19-29", PS1: "00:02:15", PS2: "00:04:34", PS3: "00:04:33", PS4: "00:04:21", PS5: "00:02:51", "Pen PS5": "", PS6: "00:03:00", "Pen PS6": "", "Timp total": "00:21:34" }, { Cip: 41, Loc: 3, Nume: "Cârciag Andrei", "Club, Oras": "Sibiu", Categoria: "Hobby", PS1: "00:02:00", PS2: "00:04:22", PS3: "00:04:49", PS4: "00:04:31", PS5: "00:02:57", "Pen PS5": "", PS6: "00:03:01", "Pen PS6": "", "Timp total": "00:21:40" }, { Cip: 16, Loc: 4, Nume: "Varbanov Stoyan", "Club, Oras": "Bulgaria", Categoria: "Masculin 19-29", PS1: "00:02:03", PS2: "00:04:34", PS3: "00:04:49", PS4: "00:04:18", PS5: "00:02:57", "Pen PS5": "", PS6: "00:03:03", "Pen PS6": "", "Timp total": "00:21:44" }, { Cip: 100, Loc: 5, Nume: "Barti Attila", "Club, Oras": "Brasov", Categoria: "Hobby", PS1: "00:02:17", PS2: "00:04:48", PS3: "00:04:43", PS4: "00:04:21", PS5: "00:02:59", "Pen PS5": "", PS6: "00:03:07", "Pen PS6": "", "Timp total": "00:22:15" }, { Cip: 63, Loc: 6, Nume: "Kinda Geza", "Club, Oras": "RideMore", Categoria: "Masculin 19-29", PS1: "00:02:08", PS2: "00:04:41", PS3: "00:04:44", PS4: "00:04:29", PS5: "00:03:00", "Pen PS5": "", PS6: "00:03:19", "Pen PS6": "", "Timp total": "00:22:21" }, { Cip: 61, Loc: 7, Nume: "Marcu Dan", "Club, Oras": "Surmont/Trek/ION/TLD", Categoria: "Masculin 19-29", PS1: "00:02:10", PS2: "00:04:41", PS3: "00:04:50", PS4: "00:04:32", PS5: "00:03:03", "Pen PS5": "", PS6: "00:03:13", "Pen PS6": "", "Timp total": "00:22:29" }, { Cip: 64, Loc: 8, Nume: "Nimăt Vlad", "Club, Oras": "OutdoorFun.ro", Categoria: "Masculin 19-29", PS1: "00:02:10", PS2: "00:04:55", PS3: "00:04:38", PS4: "00:04:13", PS5: "00:03:34", "Pen PS5": "", PS6: "00:03:06", "Pen PS6": "", "Timp total": "00:22:36" }, { Cip: 91, Loc: 9, Nume: "Oprea Tudor", "Club, Oras": "Scott Geiger Team", Categoria: "Masculin 40+", PS1: "00:02:13", PS2: "00:04:42", PS3: "00:04:59", PS4: "00:04:30", PS5: "00:03:03", "Pen PS5": "", PS6: "00:03:11", "Pen PS6": "", "Timp total": "00:22:38" }, { Cip: 69, Loc: 10, Nume: "Pufan Alexandru", "Club, Oras": "CS Tibiscus", Categoria: "Masculin 19-29", PS1: "00:02:13", PS2: "00:04:49", PS3: "00:04:53", PS4: "00:04:30", PS5: "00:03:06", "Pen PS5": "", PS6: "00:03:15", "Pen PS6": "", "Timp total": "00:22:46" }, { Cip: 50, Loc: 11, Nume: "Bota Liviu", "Club, Oras": "Sacel", Categoria: "Masculin 30-39", PS1: "00:02:12", PS2: "00:04:43", PS3: "00:05:01", PS4: "00:04:32", PS5: "00:03:09", "Pen PS5": "", PS6: "00:03:15", "Pen PS6": "", "Timp total": "00:22:52" }, { Cip: 56, Loc: 12, Nume: "Sacuiu Răzvan", "Club, Oras": "NH Bike Racing Team", Categoria: "Masculin 19-29", PS1: "00:02:21", PS2: "00:04:57", PS3: "00:04:53", PS4: "00:04:25", PS5: "00:03:04", "Pen PS5": "", PS6: "00:03:14", "Pen PS6": "", "Timp total": "00:22:54" }, { Cip: 36, Loc: 13, Nume: "Somesan Paul", "Club, Oras": "Bistritz Bike Shop Racing Team", Categoria: "Masculin 15-18", PS1: "00:02:15", PS2: "00:04:49", PS3: "00:04:45", PS4: "00:04:38", PS5: "00:03:05", "Pen PS5": "", PS6: "00:03:25", "Pen PS6": "", "Timp total": "00:22:57" }, { Cip: 51, Loc: 14, Nume: "Marin Bogdan", "Club, Oras": "BikeLab", Categoria: "Masculin 19-29", PS1: "00:02:13", PS2: "00:04:49", PS3: "00:05:00", PS4: "00:04:41", PS5: "00:03:05", "Pen PS5": "", PS6: "00:03:11", "Pen PS6": "", "Timp total": "00:22:59" }, { Cip: 103, Loc: 15, Nume: "Fiess Andreas", "Club, Oras": "Rasnov", Categoria: "Hobby", PS1: "00:02:18", PS2: "00:04:39", PS3: "00:04:51", PS4: "00:04:40", PS5: "00:03:14", "Pen PS5": "", PS6: "00:03:18", "Pen PS6": "", "Timp total": "00:23:00" }, { Cip: 11, Loc: 16, Nume: "Constandis Cătălin", "Club, Oras": "Kronstadt Cycling", Categoria: "Masculin 30-39", PS1: "00:02:19", PS2: "00:04:40", PS3: "00:04:57", PS4: "00:04:36", PS5: "00:03:04", "Pen PS5": "", PS6: "00:03:25", "Pen PS6": "", "Timp total": "00:23:01" }, { Cip: 65, Loc: 17, Nume: "Munteanu Maximilian", "Club, Oras": "DirtBike", Categoria: "Masculin 30-39", PS1: "00:02:14", PS2: "00:04:47", PS3: "00:05:05", PS4: "00:04:30", PS5: "00:03:09", "Pen PS5": "", PS6: "00:03:17", "Pen PS6": "", "Timp total": "00:23:02" }, { Cip: 33, Loc: 18, Nume: "Codreanu Viorel", "Club, Oras": "Cluj-Napoca", Categoria: "Hobby", PS1: "00:02:19", PS2: "00:04:49", PS3: "00:05:00", PS4: "00:04:35", PS5: "00:03:10", "Pen PS5": "", PS6: "00:03:22", "Pen PS6": "", "Timp total": "00:23:15" }, { Cip: 62, Loc: 19, Nume: "Pal Gabor", "Club, Oras": "Harghita", Categoria: "Hobby", PS1: "00:02:14", PS2: "00:04:53", PS3: "00:04:56", PS4: "00:04:36", PS5: "00:03:09", "Pen PS5": "", PS6: "00:03:29", "Pen PS6": "", "Timp total": "00:23:17" }, { Cip: 96, Loc: 20, Nume: "Becze Robert", "Club, Oras": "Brasov", Categoria: "Hobby", PS1: "00:02:20", PS2: "00:05:02", PS3: "00:04:56", PS4: "00:04:35", PS5: "00:03:06", "Pen PS5": "", PS6: "00:03:22", "Pen PS6": "", "Timp total": "00:23:21" }, { Cip: 10, Loc: 21, Nume: "Tohănean Raoul Constantin", "Club, Oras": "Brasov", Categoria: "Hobby", PS1: "00:02:27", PS2: "00:05:06", PS3: "00:04:54", PS4: "00:04:39", PS5: "00:03:04", "Pen PS5": "", PS6: "00:03:20", "Pen PS6": "", "Timp total": "00:23:30" }, { Cip: 76, Loc: 22, Nume: "Sima Robert", "Club, Oras": "Vertical Riding Romania", Categoria: "Hobby", PS1: "00:02:19", PS2: "00:04:55", PS3: "00:05:11", PS4: "00:04:42", PS5: "00:03:11", "Pen PS5": "", PS6: "00:03:21", "Pen PS6": "", "Timp total": "00:23:39" }, { Cip: 39, Loc: 23, Nume: "Popescu Ion Aurelian", "Club, Oras": "Craiova", Categoria: "Hobby", PS1: "00:02:33", PS2: "00:05:03", PS3: "00:04:48", PS4: "00:04:52", PS5: "00:03:06", "Pen PS5": "", PS6: "00:03:24", "Pen PS6": "", "Timp total": "00:23:46" }, { Cip: 94, Loc: 24, Nume: "Sasu Robert", "Club, Oras": "Scott Geiger Team", Categoria: "Masculin 19-29", PS1: "00:02:22", PS2: "00:05:05", PS3: "00:05:12", PS4: "00:04:43", PS5: "00:03:14", "Pen PS5": "", PS6: "00:03:22", "Pen PS6": "", "Timp total": "00:23:58" }, { Cip: 28, Loc: 25, Nume: "Pelin Cătălin Andrei", "Club, Oras": "PlayBike", Categoria: "Hobby", PS1: "00:02:28", PS2: "00:05:00", PS3: "00:05:05", PS4: "00:04:49", PS5: "00:03:10", "Pen PS5": "", PS6: "00:03:28", "Pen PS6": "", "Timp total": "00:24:00" }, { Cip: 81, Loc: 26, Nume: "Nicolodi Martin", "Club, Oras": "Bicheru Cycling", Categoria: "Masculin 40+", PS1: "00:02:25", PS2: "00:04:59", PS3: "00:05:05", PS4: "00:04:53", PS5: "00:03:13", "Pen PS5": "", PS6: "00:03:27", "Pen PS6": "", "Timp total": "00:24:02" }, { Cip: 59, Loc: 27, Nume: "Dobrin Daniel", "Club, Oras": "Degeneratii", Categoria: "Hobby", PS1: "00:02:17", PS2: "00:05:12", PS3: "00:05:15", PS4: "00:04:49", PS5: "00:03:10", "Pen PS5": "", PS6: "00:03:24", "Pen PS6": "", "Timp total": "00:24:07" }, { Cip: 35, Loc: 28, Nume: "Olar Mihai", "Club, Oras": "Bike Point Racing", Categoria: "Masculin 30-39", PS1: "00:02:20", PS2: "00:05:03", PS3: "00:05:07", PS4: "00:04:53", PS5: "00:03:15", "Pen PS5": "", PS6: "00:03:34", "Pen PS6": "", "Timp total": "00:24:12" }, { Cip: 66, Loc: 29, Nume: "Iordan Constantin", "Club, Oras": "Brasov", Categoria: "Hobby", PS1: "00:02:15", PS2: "00:04:51", PS3: "00:05:07", PS4: "00:05:09", PS5: "00:03:17", "Pen PS5": "", PS6: "00:03:34", "Pen PS6": "", "Timp total": "00:24:13" }, { Cip: 106, Loc: 30, Nume: "Grecu Ionuţ", "Club, Oras": "woodfellas", Categoria: "Masculin 30-39", PS1: "00:02:26", PS2: "00:05:08", PS3: "00:04:57", PS4: "00:04:52", PS5: "00:03:24", "Pen PS5": "", PS6: "00:03:28", "Pen PS6": "", "Timp total": "00:24:15" }, { Cip: 78, Loc: 31, Nume: "Enache Dan", "Club, Oras": "Bucuresti", Categoria: "Masculin 30-39", PS1: "00:02:34", PS2: "00:05:13", PS3: "00:05:05", PS4: "00:04:46", PS5: "00:03:17", "Pen PS5": "", PS6: "00:03:26", "Pen PS6": "", "Timp total": "00:24:21" }, { Cip: 108, Loc: 32, Nume: "Stănilă Bogdan", "Club, Oras": "Iris", Categoria: "Masculin 30-39", PS1: "00:02:28", PS2: "00:04:55", PS3: "00:05:11", PS4: "00:04:53", PS5: "00:03:20", "Pen PS5": "", PS6: "00:03:38", "Pen PS6": "", "Timp total": "00:24:25" }, { Cip: 67, Loc: 33, Nume: "Dumitrescu Daniel", "Club, Oras": "BikeHouse Crew", Categoria: "Masculin 40+", PS1: "00:02:27", PS2: "00:05:20", PS3: "00:05:04", PS4: "00:04:46", PS5: "00:03:17", "Pen PS5": "", PS6: "00:03:36", "Pen PS6": "", "Timp total": "00:24:30" }, { Cip: 60, Loc: 34, Nume: "Toma Constantin", "Club, Oras": "Degeneratii", Categoria: "Hobby", PS1: "00:02:28", PS2: "00:05:04", PS3: "00:05:19", PS4: "00:04:55", PS5: "00:03:20", "Pen PS5": "", PS6: "00:03:29", "Pen PS6": "", "Timp total": "00:24:35" }, { Cip: 77, Loc: 35, Nume: "Cârstinoiu Adrian", "Club, Oras": "Bucuresti", Categoria: "Masculin 40+", PS1: "00:02:32", PS2: "00:05:19", PS3: "00:05:13", PS4: "00:04:47", PS5: "00:03:20", "Pen PS5": "", PS6: "00:03:30", "Pen PS6": "", "Timp total": "00:24:41" }, { Cip: 52, Loc: 36, Nume: "Strătilă Marius", "Club, Oras": "Shredmind", Categoria: "Hobby", PS1: "00:02:25", PS2: "00:05:06", PS3: "00:05:21", PS4: "00:04:57", PS5: "00:03:24", "Pen PS5": "", PS6: "00:03:34", "Pen PS6": "", "Timp total": "00:24:47" }, { Cip: 89, Loc: 37, Nume: "Laszlo Robert", "Club, Oras": "Bike Attack Resita", Categoria: "Hobby", PS1: "00:02:30", PS2: "00:05:08", PS3: "00:05:30", PS4: "00:05:01", PS5: "00:03:21", "Pen PS5": "", PS6: "00:03:30", "Pen PS6": "", "Timp total": "00:25:00" }, { Cip: 93, Loc: 38, Nume: "Logigan Lucian", "Club, Oras": "Scott Geiger Team", Categoria: "Masculin 30-39", PS1: "00:03:06", PS2: "00:05:02", PS3: "00:05:14", PS4: "00:04:48", PS5: "00:03:19", "Pen PS5": "", PS6: "00:03:32", "Pen PS6": "", "Timp total": "00:25:01" }, { Cip: 58, Loc: 39, Nume: "Turbatu Cătălin Alexandru", "Club, Oras": "NHBike Racing Team", Categoria: "Masculin 19-29", PS1: "00:02:28", PS2: "00:05:20", PS3: "00:05:12", PS4: "00:04:59", PS5: "00:03:23", "Pen PS5": "", PS6: "00:03:40", "Pen PS6": "", "Timp total": "00:25:02" }, { Cip: 74, Loc: 40, Nume: "Anghel Cristian", "Club, Oras": "Yanara", Categoria: "Hobby", PS1: "00:02:30", PS2: "00:05:26", PS3: "00:05:21", PS4: "00:04:53", PS5: "00:03:20", "Pen PS5": "", PS6: "00:03:33", "Pen PS6": "", "Timp total": "00:25:03" }, { Cip: 107, Loc: 41, Nume: "Rişcuţă Răzvan", "Club, Oras": "Timisoara", Categoria: "Hobby", PS1: "00:02:37", PS2: "00:05:27", PS3: "00:04:57", PS4: "00:05:04", PS5: "00:03:26", "Pen PS5": "", PS6: "00:03:45", "Pen PS6": "", "Timp total": "00:25:16" }, { Cip: 24, Loc: 42, Nume: "Oltean Bogdan", "Club, Oras": "Slana & Blana", Categoria: "Hobby", PS1: "00:02:29", PS2: "00:05:35", PS3: "00:05:20", PS4: "00:04:54", PS5: "00:03:29", "Pen PS5": "", PS6: "00:03:32", "Pen PS6": "", "Timp total": "00:25:19" }, { Cip: 21, Loc: 43, Nume: "Bodea Daniel-Andrei", "Club, Oras": "Slana & Blana", Categoria: "Hobby", PS1: "00:02:48", PS2: "00:05:32", PS3: "00:05:11", PS4: "00:05:02", PS5: "00:03:19", "Pen PS5": "", PS6: "00:03:28", "Pen PS6": "", "Timp total": "00:25:20" }, { Cip: 98, Loc: 44, Nume: "Roman Mihnea", "Club, Oras": "Brasov", Categoria: "Hobby", PS1: "00:02:27", PS2: "00:05:08", PS3: "00:05:31", PS4: "00:05:02", PS5: "00:03:23", "Pen PS5": "", PS6: "00:03:56", "Pen PS6": "", "Timp total": "00:25:27" }, { Cip: 26, Loc: 45, Nume: "Stoian Claudiu", "Club, Oras": "NH Bike Racing Team", Categoria: "Hobby", PS1: "00:02:28", PS2: "00:05:32", PS3: "00:05:22", PS4: "00:04:56", PS5: "00:03:32", "Pen PS5": "", PS6: "00:03:42", "Pen PS6": "", "Timp total": "00:25:32" }, { Cip: 43, Loc: 46, Nume: "Matesoane Şerban", "Club, Oras": "Bike Attack Resita", Categoria: "Hobby", PS1: "00:02:27", PS2: "00:05:01", PS3: "00:05:29", PS4: "00:05:25", PS5: "00:03:34", "Pen PS5": "", PS6: "00:03:40", "Pen PS6": "", "Timp total": "00:25:36" }, { Cip: 27, Loc: 47, Nume: "Kemendi Robi", "Club, Oras": "Floresti", Categoria: "Masculin 30-39", PS1: "00:02:41", PS2: "00:05:29", PS3: "00:05:26", PS4: "00:05:12", PS5: "00:03:20", "Pen PS5": "", PS6: "00:03:30", "Pen PS6": "", "Timp total": "00:25:38" }, { Cip: 25, Loc: 48, Nume: "Ţaga Andrei-Ionuţ", "Club, Oras": "Predeal", Categoria: "Hobby", PS1: "00:02:50", PS2: "00:05:54", PS3: "00:05:09", PS4: "00:04:51", PS5: "00:03:23", "Pen PS5": "", PS6: "00:03:37", "Pen PS6": "", "Timp total": "00:25:44" }, { Cip: 30, Loc: 49, Nume: "Pelin Mădălin", "Club, Oras": "NH Bike Racing Team", Categoria: "Hobby", PS1: "00:02:42", PS2: "00:05:45", PS3: "00:05:10", PS4: "00:05:00", PS5: "00:03:24", "Pen PS5": "", PS6: "00:03:44", "Pen PS6": "", "Timp total": "00:25:45" }, { Cip: 29, Loc: 50, Nume: "Stoian Mihai", "Club, Oras": "NH Bike Racing Team", Categoria: "Hobby", PS1: "00:02:43", PS2: "00:05:35", PS3: "00:05:24", PS4: "00:05:05", PS5: "00:03:19", "Pen PS5": "", PS6: "00:03:40", "Pen PS6": "", "Timp total": "00:25:46" }, { Cip: 104, Loc: 51, Nume: "Ionaş Remus", "Club, Oras": "Timisoara", Categoria: "Hobby", PS1: "00:02:45", PS2: "00:05:04", PS3: "00:05:31", PS4: "00:05:24", PS5: "00:03:21", "Pen PS5": "", PS6: "00:03:44", "Pen PS6": "", "Timp total": "00:25:49" }, { Cip: 110, Loc: 52, Nume: "Gavrilă Cătălin", "Club, Oras": "Bike Attack", Categoria: "Masculin 40+", PS1: "00:02:32", PS2: "00:05:15", PS3: "00:05:43", PS4: "00:05:09", PS5: "00:03:30", "Pen PS5": "", PS6: "00:03:41", "Pen PS6": "", "Timp total": "00:25:50" }, { Cip: 54, Loc: 53, Nume: "Carcel Adrian", "Club, Oras": "Bike Lab", Categoria: "Hobby", PS1: "00:02:30", PS2: "00:05:35", PS3: "00:05:31", PS4: "00:05:11", PS5: "00:03:32", "Pen PS5": "", PS6: "00:03:46", "Pen PS6": "", "Timp total": "00:26:05" }, { Cip: 46, Loc: 54, Nume: "Guriev Adrian", "Club, Oras": "Its Bike", Categoria: "Hobby", PS1: "00:02:34", PS2: "00:05:26", PS3: "00:05:32", PS4: "00:05:08", PS5: "00:03:42", "Pen PS5": "", PS6: "00:03:46", "Pen PS6": "", "Timp total": "00:26:08" }, { Cip: 57, Loc: 55, Nume: "Ion Ciprian Ovidiu", "Club, Oras": "NHBike Racing Team", Categoria: "Masculin 30-39", PS1: "00:02:30", PS2: "00:05:44", PS3: "00:05:23", PS4: "00:05:16", PS5: "00:03:35", "Pen PS5": "", PS6: "00:03:48", "Pen PS6": "", "Timp total": "00:26:16" }, { Cip: 70, Loc: 56, Nume: "Ionaşcut Mircea", "Club, Oras": "Simian", Categoria: "Hobby", PS1: "00:02:50", PS2: "00:05:34", PS3: "00:05:25", PS4: "00:05:17", PS5: "00:03:25", "Pen PS5": "", PS6: "00:03:50", "Pen PS6": "", "Timp total": "00:26:21" }, { Cip: 32, Loc: 57, Nume: "Cojuhovschi Claudiu", "Club, Oras": "Cluj-Napoca", Categoria: "Hobby", PS1: "00:02:31", PS2: "00:05:12", PS3: "00:05:43", PS4: "00:05:19", PS5: "00:03:39", "Pen PS5": "", PS6: "00:03:57", "Pen PS6": "", "Timp total": "00:26:21" }, { Cip: 20, Loc: 58, Nume: "Biculescu Constantin", "Club, Oras": "Bucuresti", Categoria: "Hobby", PS1: "00:02:45", PS2: "00:05:23", PS3: "00:05:40", PS4: "00:05:32", PS5: "00:03:27", "Pen PS5": "", PS6: "00:03:38", "Pen PS6": "", "Timp total": "00:26:25" }, { Cip: 83, Loc: 59, Nume: "Ichim Horia Mihai", "Club, Oras": "iBike", Categoria: "Masculin 15-18", PS1: "00:02:52", PS2: "00:05:38", PS3: "00:05:20", PS4: "00:05:21", PS5: "00:03:21", "Pen PS5": "", PS6: "00:03:55", "Pen PS6": "", "Timp total": "00:26:27" }, { Cip: 45, Loc: 60, Nume: "Avram Alexandru", "Club, Oras": "Voda-Risc", Categoria: "Masculin 19-29", PS1: "00:02:42", PS2: "00:05:38", PS3: "00:05:30", PS4: "00:05:23", PS5: "00:03:30", "Pen PS5": "", PS6: "00:03:45", "Pen PS6": "", "Timp total": "00:26:28" }, { Cip: 99, Loc: 61, Nume: "Vasilescu Sorin", "Club, Oras": "NH Bike", Categoria: "Masculin 40+", PS1: "00:02:33", PS2: "00:05:45", PS3: "00:05:36", PS4: "00:05:22", PS5: "00:03:30", "Pen PS5": "", PS6: "00:03:45", "Pen PS6": "", "Timp total": "00:26:31" }, { Cip: 80, Loc: 62, Nume: "Belgun Cosmin", "Club, Oras": "Vertical Riding Romania", Categoria: "Hobby", PS1: "00:02:37", PS2: "00:05:43", PS3: "00:05:40", PS4: "00:05:14", PS5: "00:03:33", "Pen PS5": "", PS6: "00:03:46", "Pen PS6": "", "Timp total": "00:26:33" }, { Cip: 42, Loc: 63, Nume: "Curuţă Anda", "Club, Oras": "Sibiu", Categoria: "Hobby", PS1: "00:02:44", PS2: "00:05:31", PS3: "00:05:34", PS4: "00:05:24", PS5: "00:03:37", "Pen PS5": "", PS6: "00:03:48", "Pen PS6": "", "Timp total": "00:26:38" }, { Cip: 53, Loc: 64, Nume: "Dumitrache Vlad", "Club, Oras": "Bike Lab", Categoria: "Hobby", PS1: "00:02:34", PS2: "00:05:47", PS3: "00:05:31", PS4: "00:05:09", PS5: "00:03:41", "Pen PS5": "", PS6: "00:03:58", "Pen PS6": "", "Timp total": "00:26:40" }, { Cip: 23, Loc: 65, Nume: "Makkai Balazs", "Club, Oras": "Slana & Blana", Categoria: "Hobby", PS1: "00:02:37", PS2: "00:05:32", PS3: "00:05:41", PS4: "00:05:24", PS5: "00:03:35", "Pen PS5": "", PS6: "00:03:54", "Pen PS6": "", "Timp total": "00:26:43" }, { Cip: 9, Loc: 66, Nume: "Simileac Iulian", "Club, Oras": "Azuga", Categoria: "Hobby", PS1: "00:02:31", PS2: "00:05:32", PS3: "00:05:42", PS4: "00:05:14", PS5: "00:03:37", "Pen PS5": "", PS6: "00:04:08", "Pen PS6": "", "Timp total": "00:26:44" }, { Cip: 90, Loc: 67, Nume: "Soran Gavril", "Club, Oras": "Resita", Categoria: "Hobby", PS1: "00:02:40", PS2: "00:05:32", PS3: "00:05:51", PS4: "00:05:20", PS5: "00:03:44", "Pen PS5": "", PS6: "00:03:46", "Pen PS6": "", "Timp total": "00:26:53" }, { Cip: 85, Loc: 68, Nume: "Bontea Sebastian", "Club, Oras": "iBike", Categoria: "Hobby", PS1: "00:02:39", PS2: "00:05:28", PS3: "00:05:39", PS4: "00:05:53", PS5: "00:03:36", "Pen PS5": "", PS6: "00:03:47", "Pen PS6": "", "Timp total": "00:27:02" }, { Cip: 1, Loc: 69, Nume: "Ivan Razvan", "Club, Oras": "Timisoara", Categoria: "Hobby", PS1: "00:03:07", PS2: "00:06:12", PS3: "00:05:20", PS4: "00:05:21", PS5: "00:03:31", "Pen PS5": "", PS6: "00:03:45", "Pen PS6": "", "Timp total": "00:27:16" }, { Cip: 8, Loc: 70, Nume: "Richea Octavian", "Club, Oras": "Azuga", Categoria: "Hobby", PS1: "00:02:39", PS2: "00:05:30", PS3: "00:05:23", PS4: "00:05:10", PS5: "00:03:26", "Pen PS5": "", PS6: "00:05:09", "Pen PS6": "", "Timp total": "00:27:17" }, { Cip: 79, Loc: 71, Nume: "Cârstinoiu  Petre Octavian ", "Club, Oras": "Bucuresti", Categoria: "Hobby", PS1: "00:02:46", PS2: "00:06:18", PS3: "00:05:32", PS4: "00:05:19", PS5: "00:03:35", "Pen PS5": "", PS6: "00:03:55", "Pen PS6": "", "Timp total": "00:27:25" }, { Cip: 47, Loc: 72, Nume: "Anghelina Dan", "Club, Oras": "NH Bike", Categoria: "Masculin 30-39", PS1: "00:02:57", PS2: "00:06:10", PS3: "00:05:34", PS4: "00:05:32", PS5: "00:03:41", "Pen PS5": "", PS6: "00:04:09", "Pen PS6": "", "Timp total": "00:28:03" }, { Cip: 22, Loc: 73, Nume: "Varga Istvan", "Club, Oras": "Slana & Blana", Categoria: "Hobby", PS1: "00:02:48", PS2: "00:06:00", PS3: "00:05:42", PS4: "00:05:34", PS5: "00:03:43", "Pen PS5": "", PS6: "00:04:21", "Pen PS6": "", "Timp total": "00:28:08" }, { Cip: 84, Loc: 74, Nume: "Teudean Marius-Mihai", "Club, Oras": "Baia Mare", Categoria: "Hobby", PS1: "00:03:12", PS2: "00:06:10", PS3: "00:05:52", PS4: "00:05:24", PS5: "00:03:42", "Pen PS5": "", PS6: "00:04:01", "Pen PS6": "", "Timp total": "00:28:21" }, { Cip: 97, Loc: 75, Nume: "Barbu Flaviu", "Club, Oras": "Maneciu", Categoria: "Hobby", PS1: "00:02:45", PS2: "00:05:49", PS3: "00:06:04", PS4: "00:05:42", PS5: "00:03:54", "Pen PS5": "", PS6: "00:04:09", "Pen PS6": "", "Timp total": "00:28:23" }, { Cip: 2, Loc: 76, Nume: "Anghelescu Cristian", "Club, Oras": "Deva", Categoria: "Hobby", PS1: "00:02:56", PS2: "00:05:43", PS3: "00:05:49", PS4: "00:05:55", PS5: "00:03:45", "Pen PS5": "", PS6: "00:04:15", "Pen PS6": "", "Timp total": "00:28:23" }, { Cip: 86, Loc: 77, Nume: "Danis Marius", "Club, Oras": "The Marmots", Categoria: "Hobby", PS1: "00:03:10", PS2: "00:06:19", PS3: "00:05:45", PS4: "00:05:36", PS5: "00:03:38", "Pen PS5": "", PS6: "00:04:04", "Pen PS6": "", "Timp total": "00:28:32" }, { Cip: 3, Loc: 78, Nume: "Vicol Vlad", "Club, Oras": "Deva", Categoria: "Hobby", PS1: "00:03:06", PS2: "00:05:55", PS3: "00:06:06", PS4: "00:06:00", PS5: "00:03:40", "Pen PS5": "", PS6: "00:04:13", "Pen PS6": "", "Timp total": "00:29:00" }, { Cip: 48, Loc: 79, Nume: "Anghelina Denisa", "Club, Oras": "NH Bike", Categoria: "Feminin 19+", PS1: "00:02:54", PS2: "00:06:16", PS3: "00:05:54", PS4: "00:05:45", PS5: "00:03:49", "Pen PS5": "", PS6: "00:04:22", "Pen PS6": "", "Timp total": "00:29:00" }, { Cip: 49, Loc: 80, Nume: "Silvian Gabriel", "Club, Oras": "Petrosani", Categoria: "Hobby", PS1: "00:03:03", PS2: "00:05:58", PS3: "00:06:07", PS4: "00:05:50", PS5: "00:03:59", "Pen PS5": "", PS6: "00:04:22", "Pen PS6": "", "Timp total": "00:29:19" }, { Cip: 82, Loc: 81, Nume: "Birău Vlad ", "Club, Oras": "Albac", Categoria: "Hobby", PS1: "00:02:46", PS2: "00:05:35", PS3: "00:05:38", PS4: "00:06:23", PS5: "00:03:46", "Pen PS5": "", PS6: "00:05:16", "Pen PS6": "", "Timp total": "00:29:24" }, { Cip: 71, Loc: 82, Nume: "Sârbu Alexandru", "Club, Oras": "Brasov", Categoria: "Hobby", PS1: "00:02:57", PS2: "00:06:06", PS3: "00:06:12", PS4: "00:06:04", PS5: "00:04:00", "Pen PS5": "", PS6: "00:04:19", "Pen PS6": "", "Timp total": "00:29:38" }, { Cip: 101, Loc: 83, Nume: "Olteanu Paul", "Club, Oras": "Zarnesti", Categoria: "Hobby", PS1: "00:03:04", PS2: "00:06:02", PS3: "00:06:00", PS4: "00:06:07", PS5: "00:04:02", "Pen PS5": "", PS6: "00:04:31", "Pen PS6": "", "Timp total": "00:29:46" }, { Cip: 55, Loc: 84, Nume: "Spiru Teodora", "Club, Oras": "Brasov", Categoria: "Hobby", PS1: "00:02:48", PS2: "00:06:16", PS3: "00:06:19", PS4: "00:06:20", PS5: "00:04:04", "Pen PS5": "", PS6: "00:04:21", "Pen PS6": "", "Timp total": "00:30:08" }, { Cip: 88, Loc: 85, Nume: "Dragos Jivan", "Club, Oras": "Timisoara", Categoria: "Hobby", PS1: "00:02:49", PS2: "00:06:24", PS3: "00:06:12", PS4: "00:06:02", PS5: "00:04:22", "Pen PS5": "", PS6: "00:04:32", "Pen PS6": "", "Timp total": "00:30:21" }, { Cip: 19, Loc: 86, Nume: "Calfa Ovidiu", "Club, Oras": "Riders on the storm", Categoria: "Hobby", PS1: "00:03:12", PS2: "00:07:10", PS3: "00:06:03", PS4: "00:05:50", PS5: "00:03:49", "Pen PS5": "", PS6: "00:04:28", "Pen PS6": "", "Timp total": "00:30:32" }, { Cip: 4, Loc: 87, Nume: "Panţa Vlad", "Club, Oras": "Cluj-Napoca", Categoria: "Hobby", PS1: "00:03:11", PS2: "00:06:15", PS3: "00:06:18", PS4: "00:06:18", PS5: "00:04:35", "Pen PS5": "", PS6: "00:04:31", "Pen PS6": "", "Timp total": "00:31:08" }, { Cip: 40, Loc: 88, Nume: "Prună Daniel", "Club, Oras": "Craiova", Categoria: "Hobby", PS1: "00:03:31", PS2: "00:06:40", PS3: "00:06:16", PS4: "00:06:35", PS5: "00:04:09", "Pen PS5": "", PS6: "00:04:42", "Pen PS6": "", "Timp total": "00:31:53" }, { Cip: 37, Loc: 89, Nume: "Gall Eduard", "Club, Oras": "Proficycling bikes", Categoria: "Masculin 15-18", PS1: "00:02:42", PS2: "00:06:02", PS3: "00:06:08", PS4: "00:05:59", PS5: "00:04:14", "Pen PS5": "", PS6: "00:07:08", "Pen PS6": "", "Timp total": "00:32:13" }, { Cip: 6, Loc: 90, Nume: "Gyorgy Robert", "Club, Oras": "Cugir", Categoria: "Hobby", PS1: "00:03:05", PS2: "00:05:58", PS3: "00:06:06", PS4: "00:07:41", PS5: "00:04:05", "Pen PS5": "00:01:00", PS6: "00:04:28", "Pen PS6": "", "Timp total": "00:32:23" }, { Cip: 72, Loc: 91, Nume: "Ivaşcu Vlad", "Club, Oras": "Brasov", Categoria: "Hobby", PS1: "00:03:16", PS2: "00:06:52", PS3: "00:06:46", PS4: "00:06:30", PS5: "00:04:44", "Pen PS5": "", PS6: "00:04:59", "Pen PS6": "", "Timp total": "00:33:07" }, { Cip: 109, Loc: 92, Nume: "Hensley Clint", "Club, Oras": "Seattle SUA", Categoria: "Masculin 40+", PS1: "00:02:26", PS2: "00:05:08", PS3: "00:05:37", PS4: "00:13:30", PS5: "00:03:39", "Pen PS5": "", PS6: "00:03:50", "Pen PS6": "", "Timp total": "00:34:10" }, { Cip: 17, Loc: 93, Nume: "Mîrza Matei", "Club, Oras": "Acs proracing Arad", Categoria: "Masculin 15-18", PS1: "00:03:40", PS2: "00:07:13", PS3: "00:06:11", PS4: "00:07:06", PS5: "00:04:29", "Pen PS5": "", PS6: "00:05:31", "Pen PS6": "", "Timp total": "00:34:10" }, { Cip: 95, Loc: 94, Nume: "Barabas Domokos", "Club, Oras": "Brasov", Categoria: "Hobby", PS1: "00:02:29", PS2: "00:05:13", PS3: "00:05:15", PS4: "00:14:53", PS5: "00:03:24", "Pen PS5": "", PS6: "00:03:39", "Pen PS6": "", "Timp total": "00:34:53" }, { Cip: 7, Loc: 95, Nume: "Herlea Alex", "Club, Oras": "Cugir", Categoria: "Hobby", PS1: "00:04:14", PS2: "00:07:37", PS3: "00:07:33", PS4: "00:07:40", PS5: "00:05:08", "Pen PS5": "", PS6: "00:05:11", "Pen PS6": "", "Timp total": "00:37:23" }, { Cip: 102, Loc: 96, Nume: "Lescae Oana", "Club, Oras": "Bucuresti", Categoria: "Hobby", PS1: "00:04:20", PS2: "00:08:49", PS3: "00:07:52", PS4: "00:07:48", PS5: "00:05:15", "Pen PS5": "", PS6: "00:06:15", "Pen PS6": "", "Timp total": "00:40:19" }, { Cip: 75, Loc: 97, Nume: "Minoiu Bogdan", "Club, Oras": "Vertical Riding Romania", Categoria: "Hobby", PS1: "00:03:42", PS2: "00:06:49", PS3: "00:06:39", PS4: "00:08:29", PS5: "00:04:46", "Pen PS5": "00:05:00", PS6: "00:05:32", "Pen PS6": "00:05:00", "Timp total": "00:45:57" }, { Cip: 87, Loc: 98, Nume: "Moldoveanu Daniela", "Club, Oras": "Brasov", Categoria: "Hobby", PS1: "00:04:56", PS2: "00:10:36", PS3: "00:09:29", PS4: "00:10:00", PS5: "00:06:32", "Pen PS5": "", PS6: "00:07:27", "Pen PS6": "", "Timp total": "00:49:00" }, { Cip: 38, Loc: 99, Nume: "Someşan Codrin", "Club, Oras": "Bistritz Bike Shop Racing Team", Categoria: "Masculin 40+", PS1: "00:04:35", PS2: "00:09:51", PS3: "00:10:01", PS4: "00:10:18", PS5: "00:07:31", "Pen PS5": "", PS6: "00:08:23", "Pen PS6": "", "Timp total": "00:50:39" }, { Cip: 105, Loc: 100, Nume: "Heger Karla", "Club, Oras": "Timisoara", Categoria: "Hobby", PS1: "00:05:27", PS2: "00:10:16", PS3: "00:11:08", PS4: "00:11:32", PS5: "00:07:18", "Pen PS5": "", PS6: "00:09:56", "Pen PS6": "", "Timp total": "00:55:37" }, { Cip: 5, Loc: 101, Nume: "Lungu Paula-Vasilica", "Club, Oras": "Cugir", Categoria: "Hobby", PS1: "00:06:53", PS2: "00:12:05", PS3: "00:13:21", PS4: "00:13:49", PS5: "00:08:51", "Pen PS5": "00:01:00", PS6: "00:10:46", "Pen PS6": "", "Timp total": "01:06:45" }, { Cip: 92, Loc: 102, Nume: "Sofronie Robert", "Club, Oras": "Scott Geiger Team", Categoria: "Masculin 19-29", PS1: "00:02:34", PS2: "00:05:30", PS3: "00:05:45", PS4: "00:33:41", PS5: "DNF", "Pen PS5": "00:01:00", PS6: "DNS", "Pen PS6": "", "Timp total": "00:48:30" }, { Cip: 68, Loc: 103, Nume: "Vrînceanu MEMO Sebastian", "Club, Oras": "Bike FM", Categoria: "Masculin 30-39", PS1: "00:04:13", PS2: "00:07:47", PS3: "00:07:59", PS4: "DNS", PS5: "DNS", "Pen PS5": "", PS6: "DNS", "Pen PS6": "", "Timp total": "00:19:59" }] }, function(t, e, n) { n(8), t.exports = angular }, function(t, e) {! function(t) { "use strict"; var e = { objectMaxDepth: 5, urlErrorParamsEnabled: !0 };

        function n(t) { if (!_(t)) return e;
            H(t.objectMaxDepth) && (e.objectMaxDepth = r(t.objectMaxDepth) ? t.objectMaxDepth : NaN), H(t.urlErrorParamsEnabled) && Y(t.urlErrorParamsEnabled) && (e.urlErrorParamsEnabled = t.urlErrorParamsEnabled) }

        function r(t) { return F(t) && t > 0 }

        function i(t, n) { n = n || Error; var r = "https://errors.angularjs.org/1.7.5/",
                i = r.replace(".", "\\.") + "[\\s\\S]*",
                o = new RegExp(i, "g"); return function() { var i, a, s = arguments[0],
                    u = arguments[1],
                    c = "[" + (t ? t + ":" : "") + s + "] ",
                    l = pt(arguments, 2).map(function(t) { return Gt(t, e.objectMaxDepth) }); if (c += u.replace(/\{\d+\}/g, function(t) { var e = +t.slice(1, -1); return e < l.length ? l[e].replace(o, "") : t }), c += "\n" + r + (t ? t + "/" : "") + s, e.urlErrorParamsEnabled)
                    for (a = 0, i = "?"; a < l.length; a++, i = "&") c += i + "p" + a + "=" + encodeURIComponent(l[a]); return new n(c) } } var o, a, s, u, c = /^\/(.+)\/([a-z]*)$/,
            l = "validity",
            f = Object.prototype.hasOwnProperty,
            p = function(t) { return B(t) ? t.toLowerCase() : t },
            h = function(t) { return B(t) ? t.toUpperCase() : t },
            d = [].slice,
            $ = [].splice,
            m = [].push,
            v = Object.prototype.toString,
            g = Object.getPrototypeOf,
            S = i("ng"),
            P = t.angular || (t.angular = {}),
            y = 0;

        function b(t) { if (null == t || J(t)) return !1; if (z(t) || B(t) || a && t instanceof a) return !0; var e = "length" in Object(t) && t.length; return F(e) && (e >= 0 && e - 1 in t || "function" == typeof t.item) }

        function C(t, e, n) { var r, i; if (t)
                if (G(t))
                    for (r in t) "prototype" !== r && "length" !== r && "name" !== r && t.hasOwnProperty(r) && e.call(n, t[r], r, t);
                else if (z(t) || b(t)) { var o = "object" != typeof t; for (r = 0, i = t.length; r < i; r++)(o || r in t) && e.call(n, t[r], r, t) } else if (t.forEach && t.forEach !== C) t.forEach(e, n, t);
            else if (U(t))
                for (r in t) e.call(n, t[r], r, t);
            else if ("function" == typeof t.hasOwnProperty)
                for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t);
            else
                for (r in t) f.call(t, r) && e.call(n, t[r], r, t); return t }

        function w(t, e, n) { for (var r = Object.keys(t).sort(), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]); return r }

        function x(t) { return function(e, n) { t(n, e) } }

        function E() { return ++y }

        function O(t, e) { e ? t.$$hashKey = e : delete t.$$hashKey }

        function k(t, e, n) { for (var r = t.$$hashKey, i = 0, o = e.length; i < o; ++i) { var a = e[i]; if (_(a) || G(a))
                    for (var s = Object.keys(a), u = 0, c = s.length; u < c; u++) { var l = s[u],
                            f = a[l];
                        n && _(f) ? q(f) ? t[l] = new Date(f.valueOf()) : K(f) ? t[l] = new RegExp(f) : f.nodeName ? t[l] = f.cloneNode(!0) : nt(f) ? t[l] = f.clone() : (_(t[l]) || (t[l] = z(f) ? [] : {}), k(t[l], [f], !0)) : t[l] = f } } return O(t, r), t }

        function T(t) { return k(t, d.call(arguments, 1), !1) }

        function A(t) { return k(t, d.call(arguments, 1), !0) }

        function M(t) { return parseInt(t, 10) } o = t.document.documentMode; var N = Number.isNaN || function(t) { return t != t };

        function V(t, e) { return T(Object.create(t), e) }

        function L() {}

        function R(t) { return t }

        function I(t) { return function() { return t } }

        function D(t) { return G(t.toString) && t.toString !== v }

        function j(t) { return void 0 === t }

        function H(t) { return void 0 !== t }

        function _(t) { return null !== t && "object" == typeof t }

        function U(t) { return null !== t && "object" == typeof t && !g(t) }

        function B(t) { return "string" == typeof t }

        function F(t) { return "number" == typeof t }

        function q(t) { return "[object Date]" === v.call(t) }

        function z(t) { return Array.isArray(t) || t instanceof Array }

        function W(t) { switch (v.call(t)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return t instanceof Error } }

        function G(t) { return "function" == typeof t }

        function K(t) { return "[object RegExp]" === v.call(t) }

        function J(t) { return t && t.window === t }

        function Z(t) { return t && t.$evalAsync && t.$watch }

        function Y(t) { return "boolean" == typeof t }

        function Q(t) { return t && G(t.then) } L.$inject = [], R.$inject = []; var X = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/; var tt = function(t) { return B(t) ? t.trim() : t },
            et = function(t) { return t.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") };

        function nt(t) { return !(!t || !(t.nodeName || t.prop && t.attr && t.find)) }

        function rt(t) { return p(t.nodeName || t[0] && t[0].nodeName) }

        function it(t, e) { return -1 !== Array.prototype.indexOf.call(t, e) }

        function ot(t, e) { var n = t.indexOf(e); return n >= 0 && t.splice(n, 1), n }

        function at(t, e, n) { var i, o, a = [],
                s = []; if (n = r(n) ? n : NaN, e) { if ((o = e) && F(o.length) && X.test(v.call(o)) || (i = e, "[object ArrayBuffer]" === v.call(i))) throw S("cpta", "Can't copy! TypedArray destination cannot be mutated."); if (t === e) throw S("cpi", "Can't copy! Source and destination are identical."); return z(e) ? e.length = 0 : C(e, function(t, n) { "$$hashKey" !== n && delete e[n] }), a.push(t), s.push(e), u(t, e, n) } return c(t, n);

            function u(t, e, n) { if (--n < 0) return "..."; var r, i = e.$$hashKey; if (z(t))
                    for (var o = 0, a = t.length; o < a; o++) e.push(c(t[o], n));
                else if (U(t))
                    for (r in t) e[r] = c(t[r], n);
                else if (t && "function" == typeof t.hasOwnProperty)
                    for (r in t) t.hasOwnProperty(r) && (e[r] = c(t[r], n));
                else
                    for (r in t) f.call(t, r) && (e[r] = c(t[r], n)); return O(e, i), e }

            function c(t, e) { if (!_(t)) return t; var n = a.indexOf(t); if (-1 !== n) return s[n]; if (J(t) || Z(t)) throw S("cpws", "Can't copy! Making copies of Window or Scope instances is not supported."); var r = !1,
                    i = function(t) { switch (v.call(t)) {
                            case "[object Int8Array]":
                            case "[object Int16Array]":
                            case "[object Int32Array]":
                            case "[object Float32Array]":
                            case "[object Float64Array]":
                            case "[object Uint8Array]":
                            case "[object Uint8ClampedArray]":
                            case "[object Uint16Array]":
                            case "[object Uint32Array]":
                                return new t.constructor(c(t.buffer), t.byteOffset, t.length);
                            case "[object ArrayBuffer]":
                                if (!t.slice) { var e = new ArrayBuffer(t.byteLength); return new Uint8Array(e).set(new Uint8Array(t)), e } return t.slice(0);
                            case "[object Boolean]":
                            case "[object Number]":
                            case "[object String]":
                            case "[object Date]":
                                return new t.constructor(t.valueOf());
                            case "[object RegExp]":
                                var n = new RegExp(t.source, t.toString().match(/[^/]*$/)[0]); return n.lastIndex = t.lastIndex, n;
                            case "[object Blob]":
                                return new t.constructor([t], { type: t.type }) } if (G(t.cloneNode)) return t.cloneNode(!0) }(t); return void 0 === i && (i = z(t) ? [] : Object.create(g(t)), r = !0), a.push(t), s.push(i), r ? u(t, i, e) : i } }

        function st(t, e) { return t === e || t != t && e != e }

        function ut(t, e) { if (t === e) return !0; if (null === t || null === e) return !1; if (t != t && e != e) return !0; var n, r, i, o = typeof t; if (o === typeof e && "object" === o) { if (!z(t)) { if (q(t)) return !!q(e) && st(t.getTime(), e.getTime()); if (K(t)) return !!K(e) && t.toString() === e.toString(); if (Z(t) || Z(e) || J(t) || J(e) || z(e) || q(e) || K(e)) return !1; for (r in i = Ht(), t)
                        if ("$" !== r.charAt(0) && !G(t[r])) { if (!ut(t[r], e[r])) return !1;
                            i[r] = !0 } for (r in e)
                        if (!(r in i) && "$" !== r.charAt(0) && H(e[r]) && !G(e[r])) return !1; return !0 } if (!z(e)) return !1; if ((n = t.length) === e.length) { for (r = 0; r < n; r++)
                        if (!ut(t[r], e[r])) return !1; return !0 } } return !1 } var ct = function() { if (!H(ct.rules)) { var e = t.document.querySelector("[ng-csp]") || t.document.querySelector("[data-ng-csp]"); if (e) { var n = e.getAttribute("ng-csp") || e.getAttribute("data-ng-csp");
                        ct.rules = { noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"), noInlineStyle: !n || -1 !== n.indexOf("no-inline-style") } } else ct.rules = { noUnsafeEval: function() { try { return new Function(""), !1 } catch (t) { return !0 } }(), noInlineStyle: !1 } } return ct.rules },
            lt = function() { if (H(lt.name_)) return lt.name_; var e, n, r, i, o = Et.length; for (n = 0; n < o; ++n)
                    if (r = Et[n], e = t.document.querySelector("[" + r.replace(":", "\\:") + "jq]")) { i = e.getAttribute(r + "jq"); break } return lt.name_ = i };

        function ft(t, e, n) { return t.concat(d.call(e, n)) }

        function pt(t, e) { return d.call(t, e || 0) }

        function ht(t, e) { var n = arguments.length > 2 ? pt(arguments, 2) : []; return !G(e) || e instanceof RegExp ? e : n.length ? function() { return arguments.length ? e.apply(t, ft(n, arguments, 0)) : e.apply(t, n) } : function() { return arguments.length ? e.apply(t, arguments) : e.call(t) } }

        function dt(e, n) { var r = n; return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? r = void 0 : J(n) ? r = "$WINDOW" : n && t.document === n ? r = "$DOCUMENT" : Z(n) && (r = "$SCOPE"), r }

        function $t(t, e) { if (!j(t)) return F(e) || (e = e ? 2 : null), JSON.stringify(t, dt, e) }

        function mt(t) { return B(t) ? JSON.parse(t) : t } var vt = /:/g;

        function gt(t, e) { t = t.replace(vt, ""); var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4; return N(n) ? e : n }

        function St(t, e) { return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t }

        function Pt(t, e, n) { n = n ? -1 : 1; var r = t.getTimezoneOffset(); return St(t, n * (gt(e, r) - r)) }

        function yt(t) { t = a(t).clone().empty(); var e = a("<div></div>").append(t).html(); try { return t[0].nodeType === Bt ? p(e) : e.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(t, e) { return "<" + p(e) }) } catch (t) { return p(e) } }

        function bt(t) { try { return decodeURIComponent(t) } catch (t) {} }

        function Ct(t) { var e = {}; return C((t || "").split("&"), function(t) { var n, r, i;
                t && (r = t = t.replace(/\+/g, "%20"), -1 !== (n = t.indexOf("=")) && (r = t.substring(0, n), i = t.substring(n + 1)), H(r = bt(r)) && (i = !H(i) || bt(i), f.call(e, r) ? z(e[r]) ? e[r].push(i) : e[r] = [e[r], i] : e[r] = i)) }), e }

        function wt(t) { return xt(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+") }

        function xt(t, e) { return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+") } var Et = ["ng-", "data-ng-", "ng:", "x-ng-"]; var Ot = function(e) { var n = e.currentScript; if (!n) return !0; if (!(n instanceof t.HTMLScriptElement || n instanceof t.SVGScriptElement)) return !1; var r = n.attributes; return [r.getNamedItem("src"), r.getNamedItem("href"), r.getNamedItem("xlink:href")].every(function(t) { if (!t) return !0; if (!t.value) return !1; var n = e.createElement("a"); if (n.href = t.value, e.location.origin === n.origin) return !0; switch (n.protocol) {
                    case "http:":
                    case "https:":
                    case "ftp:":
                    case "blob:":
                    case "file:":
                    case "data:":
                        return !0;
                    default:
                        return !1 } }) }(t.document);

        function kt(e, n) { var r, i, o = {}; if (C(Et, function(t) { var n = t + "app";!r && e.hasAttribute && e.hasAttribute(n) && (r = e, i = e.getAttribute(n)) }), C(Et, function(t) { var n, o = t + "app";!r && (n = e.querySelector("[" + o.replace(":", "\\:") + "]")) && (r = n, i = n.getAttribute(o)) }), r) { if (!Ot) { try { t.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.") } catch (t) {} return } o.strictDi = null !== function(t, e) { var n, r, i = Et.length; for (r = 0; r < i; ++r)
                        if (n = Et[r] + e, B(n = t.getAttribute(n))) return n; return null }(r, "strict-di"), n(r, i ? [i] : [], o) } }

        function Tt(e, n, r) { _(r) || (r = {});
            r = T({ strictDi: !1 }, r); var i = function() { if ((e = a(e)).injector()) { var i = e[0] === t.document ? "document" : yt(e); throw S("btstrpd", "App already bootstrapped with this element '{0}'", i.replace(/</, "&lt;").replace(/>/, "&gt;")) }(n = n || []).unshift(["$provide", function(t) { t.value("$rootElement", e) }]), r.debugInfoEnabled && n.push(["$compileProvider", function(t) { t.debugInfoEnabled(!0) }]), n.unshift("ng"); var o = Ye(n, r.strictDi); return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(t, e, n, r) { t.$apply(function() { e.data("$injector", r), n(e)(t) }) }]), o },
                o = /^NG_ENABLE_DEBUG_INFO!/,
                s = /^NG_DEFER_BOOTSTRAP!/; if (t && o.test(t.name) && (r.debugInfoEnabled = !0, t.name = t.name.replace(o, "")), t && !s.test(t.name)) return i();
            t.name = t.name.replace(s, ""), P.resumeBootstrap = function(t) { return C(t, function(t) { n.push(t) }), i() }, G(P.resumeDeferredBootstrap) && P.resumeDeferredBootstrap() }

        function At() { t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload() }

        function Mt(t) { var e = P.element(t).injector(); if (!e) throw S("test", "no injector found for element argument to getTestability"); return e.get("$$testability") } var Nt = /[A-Z]/g;

        function Vt(t, e) { return e = e || "_", t.replace(Nt, function(t, n) { return (n ? e : "") + t.toLowerCase() }) } var Lt = !1;

        function Rt(t, e, n) { if (!t) throw S("areq", "Argument '{0}' is {1}", e || "?", n || "required"); return t }

        function It(t, e, n) { return n && z(t) && (t = t[t.length - 1]), Rt(G(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t }

        function Dt(t, e) { if ("hasOwnProperty" === t) throw S("badname", "hasOwnProperty is not a valid {0} name", e) }

        function jt(t) { for (var e, n = t[0], r = t[t.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(e || t[i] !== n) && (e || (e = a(d.call(t, 0, i))), e.push(n)); return e || t }

        function Ht() { return Object.create(null) }

        function _t(t) { if (null == t) return ""; switch (typeof t) {
                case "string":
                    break;
                case "number":
                    t = "" + t; break;
                default:
                    t = !D(t) || z(t) || q(t) ? $t(t) : t.toString() } return t } var Ut = 1,
            Bt = 3,
            Ft = 8,
            qt = 9,
            zt = 11;

        function Wt(t, e) { if (z(t)) { e = e || []; for (var n = 0, r = t.length; n < r; n++) e[n] = t[n] } else if (_(t))
                for (var i in e = e || {}, t) "$" === i.charAt(0) && "$" === i.charAt(1) || (e[i] = t[i]); return e || t }

        function Gt(t, e) { return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : j(t) ? "undefined" : "string" != typeof t ? function(t, e) { var n = []; return r(e) && (t = P.copy(t, null, e)), JSON.stringify(t, function(t, e) { if (_(e = dt(t, e))) { if (n.indexOf(e) >= 0) return "...";
                        n.push(e) } return e }) }(t, e) : t } var Kt = { full: "1.7.5", major: 1, minor: 7, dot: 5, codeName: "anti-prettification" };
        pe.expando = "ng339"; var Jt = pe.cache = {},
            Zt = 1;
        pe._data = function(t) { return this.cache[t[this.expando]] || {} }; var Yt = /-([a-z])/g,
            Qt = /^-ms-/,
            Xt = { mouseleave: "mouseout", mouseenter: "mouseover" },
            te = i("jqLite");

        function ee(t, e) { return e.toUpperCase() }

        function ne(t) { return t.replace(Yt, ee) } var re = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            ie = /<|&#?\w+;/,
            oe = /<([\w:-]+)/,
            ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            se = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

        function ue(t) { return !ie.test(t) }

        function ce(t) { var e = t.nodeType; return e === Ut || !e || e === qt }

        function le(t, e) { var n, r, i, o, a = e.createDocumentFragment(),
                s = []; if (ue(t)) s.push(e.createTextNode(t));
            else { for (n = a.appendChild(e.createElement("div")), r = (oe.exec(t) || ["", ""])[1].toLowerCase(), i = se[r] || se._default, n.innerHTML = i[1] + t.replace(ae, "<$1></$2>") + i[2], o = i[0]; o--;) n = n.lastChild;
                s = ft(s, n.childNodes), (n = a.firstChild).textContent = "" } return a.textContent = "", a.innerHTML = "", C(s, function(t) { a.appendChild(t) }), a } se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td; var fe = t.Node.prototype.contains || function(t) { return !!(16 & this.compareDocumentPosition(t)) };

        function pe(e) { if (e instanceof pe) return e; var n, r, i, o; if (B(e) && (e = tt(e), n = !0), !(this instanceof pe)) { if (n && "<" !== e.charAt(0)) throw te("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element"); return new pe(e) } n ? we(this, (r = e, i = i || t.document, (o = re.exec(r)) ? [i.createElement(o[1])] : (o = le(r, i)) ? o.childNodes : [])) : G(e) ? Te(e) : we(this, e) }

        function he(t) { return t.cloneNode(!0) }

        function de(t, e) {!e && ce(t) && a.cleanData([t]), t.querySelectorAll && a.cleanData(t.querySelectorAll("*")) }

        function $e(t) { var e; for (e in t) return !1; return !0 }

        function me(t) { var e = t.ng339,
                n = e && Jt[e],
                r = n && n.events,
                i = n && n.data;
            i && !$e(i) || r && !$e(r) || (delete Jt[e], t.ng339 = void 0) }

        function ve(t, e, n, r) { if (H(r)) throw te("offargs", "jqLite#off() does not support the `selector` argument"); var i = Se(t),
                o = i && i.events,
                a = i && i.handle; if (a) { if (e) { var s = function(e) { var r = o[e];
                        H(n) && ot(r || [], n), H(n) && r && r.length > 0 || (t.removeEventListener(e, a), delete o[e]) };
                    C(e.split(" "), function(t) { s(t), Xt[t] && s(Xt[t]) }) } else
                    for (e in o) "$destroy" !== e && t.removeEventListener(e, a), delete o[e];
                me(t) } }

        function ge(t, e) { var n = t.ng339,
                r = n && Jt[n];
            r && (e ? delete r.data[e] : r.data = {}, me(t)) }

        function Se(t, e) { var n = t.ng339,
                r = n && Jt[n]; return e && !r && (t.ng339 = n = ++Zt, r = Jt[n] = { events: {}, data: {}, handle: void 0 }), r }

        function Pe(t, e, n) { if (ce(t)) { var r, i = H(n),
                    o = !i && e && !_(e),
                    a = !e,
                    s = Se(t, !o),
                    u = s && s.data; if (i) u[ne(e)] = n;
                else { if (a) return u; if (o) return u && u[ne(e)]; for (r in e) u[ne(r)] = e[r] } } }

        function ye(t, e) { return !!t.getAttribute && (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1 }

        function be(t, e) { if (e && t.setAttribute) { var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                    r = n;
                C(e.split(" "), function(t) { t = tt(t), r = r.replace(" " + t + " ", " ") }), r !== n && t.setAttribute("class", tt(r)) } }

        function Ce(t, e) { if (e && t.setAttribute) { var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                    r = n;
                C(e.split(" "), function(t) { t = tt(t), -1 === r.indexOf(" " + t + " ") && (r += t + " ") }), r !== n && t.setAttribute("class", tt(r)) } }

        function we(t, e) { if (e)
                if (e.nodeType) t[t.length++] = e;
                else { var n = e.length; if ("number" == typeof n && e.window !== e) { if (n)
                            for (var r = 0; r < n; r++) t[t.length++] = e[r] } else t[t.length++] = e } }

        function xe(t, e) { return Ee(t, "$" + (e || "ngController") + "Controller") }

        function Ee(t, e, n) { t.nodeType === qt && (t = t.documentElement); for (var r = z(e) ? e : [e]; t;) { for (var i = 0, o = r.length; i < o; i++)
                    if (H(n = a.data(t, r[i]))) return n;
                t = t.parentNode || t.nodeType === zt && t.host } }

        function Oe(t) { for (de(t, !0); t.firstChild;) t.removeChild(t.firstChild) }

        function ke(t, e) { e || de(t); var n = t.parentNode;
            n && n.removeChild(t) }

        function Te(e) {
            function n() { t.document.removeEventListener("DOMContentLoaded", n), t.removeEventListener("load", n), e() } "complete" === t.document.readyState ? t.setTimeout(e) : (t.document.addEventListener("DOMContentLoaded", n), t.addEventListener("load", n)) } var Ae = pe.prototype = { ready: Te, toString: function() { var t = []; return C(this, function(e) { t.push("" + e) }), "[" + t.join(", ") + "]" }, eq: function(t) { return a(t >= 0 ? this[t] : this[this.length + t]) }, length: 0, push: m, sort: [].sort, splice: [].splice },
            Me = {};
        C("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(t) { Me[p(t)] = t }); var Ne = {};
        C("input,select,option,textarea,button,form,details".split(","), function(t) { Ne[t] = !0 }); var Ve = { ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern", ngStep: "step" };

        function Le(t, e) { var n = Me[e.toLowerCase()]; return n && Ne[rt(t)] && n }

        function Re(t, e, n) { n.call(t, e) }

        function Ie(t, e, n) { var r = e.relatedTarget;
            r && (r === t || fe.call(t, r)) || n.call(t, e) }

        function De() { this.$get = function() { return T(pe, { hasClass: function(t, e) { return t.attr && (t = t[0]), ye(t, e) }, addClass: function(t, e) { return t.attr && (t = t[0]), Ce(t, e) }, removeClass: function(t, e) { return t.attr && (t = t[0]), be(t, e) } }) } }

        function je(t, e) { var n = t && t.$$hashKey; if (n) return "function" == typeof n && (n = t.$$hashKey()), n; var r = typeof t; return n = "function" === r || "object" === r && null !== t ? t.$$hashKey = r + ":" + (e || E)() : r + ":" + t } C({ data: Pe, removeData: ge, hasData: function(t) { for (var e in Jt[t.ng339]) return !0; return !1 }, cleanData: function(t) { for (var e = 0, n = t.length; e < n; e++) ge(t[e]), ve(t[e]) } }, function(t, e) { pe[e] = t }), C({ data: Pe, inheritedData: Ee, scope: function(t) { return a.data(t, "$scope") || Ee(t.parentNode || t, ["$isolateScope", "$scope"]) }, isolateScope: function(t) { return a.data(t, "$isolateScope") || a.data(t, "$isolateScopeNoTemplate") }, controller: xe, injector: function(t) { return Ee(t, "$injector") }, removeAttr: function(t, e) { t.removeAttribute(e) }, hasClass: ye, css: function(t, e, n) { if (e = function(t) { return ne(t.replace(Qt, "ms-")) }(e), !H(n)) return t.style[e];
                t.style[e] = n }, attr: function(t, e, n) { var r, i = t.nodeType; if (i !== Bt && 2 !== i && i !== Ft && t.getAttribute) { var o = p(e),
                        a = Me[o]; if (!H(n)) return r = t.getAttribute(e), a && null !== r && (r = o), null === r ? void 0 : r;
                    null === n || !1 === n && a ? t.removeAttribute(e) : t.setAttribute(e, a ? o : n) } }, prop: function(t, e, n) { if (!H(n)) return t[e];
                t[e] = n }, text: function() { return t.$dv = "", t;

                function t(t, e) { if (j(e)) { var n = t.nodeType; return n === Ut || n === Bt ? t.textContent : "" } t.textContent = e } }(), val: function(t, e) { if (j(e)) { if (t.multiple && "select" === rt(t)) { var n = []; return C(t.options, function(t) { t.selected && n.push(t.value || t.text) }), n } return t.value } t.value = e }, html: function(t, e) { if (j(e)) return t.innerHTML;
                de(t, !0), t.innerHTML = e }, empty: Oe }, function(t, e) { pe.prototype[e] = function(e, n) { var r, i, o = this.length; if (t !== Oe && j(2 === t.length && t !== ye && t !== xe ? e : n)) { if (_(e)) { for (r = 0; r < o; r++)
                            if (t === Pe) t(this[r], e);
                            else
                                for (i in e) t(this[r], i, e[i]); return this } for (var a = t.$dv, s = j(a) ? Math.min(o, 1) : o, u = 0; u < s; u++) { var c = t(this[u], e, n);
                        a = a ? a + c : c } return a } for (r = 0; r < o; r++) t(this[r], e, n); return this } }), C({ removeData: ge, on: function(t, e, n, r) { if (H(r)) throw te("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters"); if (ce(t)) { var i = Se(t, !0),
                        o = i.events,
                        a = i.handle;
                    a || (a = i.handle = function(t, e) { var n = function(n, r) { n.isDefaultPrevented = function() { return n.defaultPrevented }; var i = e[r || n.type],
                                o = i ? i.length : 0; if (o) { if (j(n.immediatePropagationStopped)) { var a = n.stopImmediatePropagation;
                                    n.stopImmediatePropagation = function() { n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n) } } n.isImmediatePropagationStopped = function() { return !0 === n.immediatePropagationStopped }; var s = i.specialHandlerWrapper || Re;
                                o > 1 && (i = Wt(i)); for (var u = 0; u < o; u++) n.isImmediatePropagationStopped() || s(t, n, i[u]) } }; return n.elem = t, n }(t, o)); for (var s = e.indexOf(" ") >= 0 ? e.split(" ") : [e], u = s.length, c = function(e, r, i) { var s = o[e];
                            s || ((s = o[e] = []).specialHandlerWrapper = r, "$destroy" === e || i || t.addEventListener(e, a)), s.push(n) }; u--;) e = s[u], Xt[e] ? (c(Xt[e], Ie), c(e, void 0, !0)) : c(e) } }, off: ve, one: function(t, e, n) {
                (t = a(t)).on(e, function r() { t.off(e, n), t.off(e, r) }), t.on(e, n) }, replaceWith: function(t, e) { var n, r = t.parentNode;
                de(t), C(new pe(e), function(e) { n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e }) }, children: function(t) { var e = []; return C(t.childNodes, function(t) { t.nodeType === Ut && e.push(t) }), e }, contents: function(t) { return t.contentDocument || t.childNodes || [] }, append: function(t, e) { var n = t.nodeType; if (n === Ut || n === zt)
                    for (var r = 0, i = (e = new pe(e)).length; r < i; r++) { var o = e[r];
                        t.appendChild(o) } }, prepend: function(t, e) { if (t.nodeType === Ut) { var n = t.firstChild;
                    C(new pe(e), function(e) { t.insertBefore(e, n) }) } }, wrap: function(t, e) { var n, r, i;
                n = t, r = a(e).eq(0).clone()[0], (i = n.parentNode) && i.replaceChild(r, n), r.appendChild(n) }, remove: ke, detach: function(t) { ke(t, !0) }, after: function(t, e) { var n = t,
                    r = t.parentNode; if (r)
                    for (var i = 0, o = (e = new pe(e)).length; i < o; i++) { var a = e[i];
                        r.insertBefore(a, n.nextSibling), n = a } }, addClass: Ce, removeClass: be, toggleClass: function(t, e, n) { e && C(e.split(" "), function(e) { var r = n;
                    j(r) && (r = !ye(t, e)), (r ? Ce : be)(t, e) }) }, parent: function(t) { var e = t.parentNode; return e && e.nodeType !== zt ? e : null }, next: function(t) { return t.nextElementSibling }, find: function(t, e) { return t.getElementsByTagName ? t.getElementsByTagName(e) : [] }, clone: he, triggerHandler: function(t, e, n) { var r, i, o, a = e.type || e,
                    s = Se(t),
                    u = s && s.events,
                    c = u && u[a];
                c && (r = { preventDefault: function() { this.defaultPrevented = !0 }, isDefaultPrevented: function() { return !0 === this.defaultPrevented }, stopImmediatePropagation: function() { this.immediatePropagationStopped = !0 }, isImmediatePropagationStopped: function() { return !0 === this.immediatePropagationStopped }, stopPropagation: L, type: a, target: t }, e.type && (r = T(r, e)), i = Wt(c), o = n ? [r].concat(n) : [r], C(i, function(e) { r.isImmediatePropagationStopped() || e.apply(t, o) })) } }, function(t, e) { pe.prototype[e] = function(e, n, r) { for (var i, o = 0, s = this.length; o < s; o++) j(i) ? H(i = t(this[o], e, n, r)) && (i = a(i)) : we(i, t(this[o], e, n, r)); return H(i) ? i : this } }), pe.prototype.bind = pe.prototype.on, pe.prototype.unbind = pe.prototype.off; var He = Object.create(null);

        function _e() { this._keys = [], this._values = [], this._lastKey = NaN, this._lastIndex = -1 } _e.prototype = { _idx: function(t) { return t !== this._lastKey && (this._lastKey = t, this._lastIndex = this._keys.indexOf(t)), this._lastIndex }, _transformKey: function(t) { return N(t) ? He : t }, get: function(t) { t = this._transformKey(t); var e = this._idx(t); if (-1 !== e) return this._values[e] }, has: function(t) { return t = this._transformKey(t), -1 !== this._idx(t) }, set: function(t, e) { t = this._transformKey(t); var n = this._idx(t); - 1 === n && (n = this._lastIndex = this._keys.length), this._keys[n] = t, this._values[n] = e }, delete: function(t) { t = this._transformKey(t); var e = this._idx(t); return -1 !== e && (this._keys.splice(e, 1), this._values.splice(e, 1), this._lastKey = NaN, this._lastIndex = -1, !0) } }; var Ue = _e,
            Be = [function() { this.$get = [function() { return Ue }] }],
            Fe = /^([^(]+?)=>/,
            qe = /^[^(]*\(\s*([^)]*)\)/m,
            ze = /,/,
            We = /^\s*(_?)(\S+?)\1\s*$/,
            Ge = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            Ke = i("$injector");

        function Je(t) { return Function.prototype.toString.call(t) }

        function Ze(t) { var e = Je(t).replace(Ge, ""); return e.match(Fe) || e.match(qe) }

        function Ye(t, e) { e = !0 === e; var n = {},
                r = "Provider",
                i = [],
                a = new Ue,
                s = { $provide: { provider: d($), factory: d(m), service: d(function(t, e) { return m(t, ["$injector", function(t) { return t.instantiate(e) }]) }), value: d(function(t, e) { return m(t, I(e), !1) }), constant: d(function(t, e) { Dt(t, "constant"), s[t] = e, l[t] = e }), decorator: function(t, e) { var n = c.get(t + r),
                                i = n.$get;
                            n.$get = function() { var t = p.invoke(i, n); return p.invoke(e, null, { $delegate: t }) } } } },
                c = s.$injector = g(s, function(t, e) { throw P.isString(e) && i.push(e), Ke("unpr", "Unknown provider: {0}", i.join(" <- ")) }),
                l = {},
                f = g(l, function(t, e) { var n = c.get(t + r, e); return p.invoke(n.$get, n, void 0, t) }),
                p = f;
            s["$injector" + r] = { $get: I(f) }, p.modules = c.modules = Ht(); var h = v(t); return (p = f.get("$injector")).strictDi = e, C(h, function(t) { t && p.invoke(t) }), p.loadNewModules = function(t) { C(v(t), function(t) { t && p.invoke(t) }) }, p;

            function d(t) { return function(e, n) { if (!_(e)) return t(e, n);
                    C(e, x(t)) } }

            function $(t, e) { if (Dt(t, "service"), (G(e) || z(e)) && (e = c.instantiate(e)), !e.$get) throw Ke("pget", "Provider '{0}' must define $get factory method.", t); return s[t + r] = e }

            function m(t, e, n) { return $(t, { $get: !1 !== n ? function(t, e) { return function() { var n = p.invoke(e, this); if (j(n)) throw Ke("undef", "Provider '{0}' must return a value from $get factory method.", t); return n } }(t, e) : e }) }

            function v(t) { Rt(j(t) || z(t), "modulesToLoad", "not an array"); var e, n = []; return C(t, function(t) { if (!a.get(t)) { a.set(t, !0); try { B(t) ? (e = u(t), p.modules[t] = e, n = n.concat(v(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : G(t) ? n.push(c.invoke(t)) : z(t) ? n.push(c.invoke(t)) : It(t, "module") } catch (e) { throw z(t) && (t = t[t.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ke("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, e.stack || e.message || e) } }

                    function r(t) { var e, n; for (e = 0, n = t.length; e < n; e++) { var r = t[e],
                                i = c.get(r[0]);
                            i[r[1]].apply(i, r[2]) } } }), n }

            function g(t, a) {
                function u(e, r) { if (t.hasOwnProperty(e)) { if (t[e] === n) throw Ke("cdep", "Circular dependency found: {0}", e + " <- " + i.join(" <- ")); return t[e] } try { return i.unshift(e), t[e] = n, t[e] = a(e, r), t[e] } catch (r) { throw t[e] === n && delete t[e], r } finally { i.shift() } }

                function c(t, n, r) { for (var i = [], o = Ye.$$annotate(t, e, r), a = 0, s = o.length; a < s; a++) { var c = o[a]; if ("string" != typeof c) throw Ke("itkn", "Incorrect injection token! Expected service name as string, got {0}", c);
                        i.push(n && n.hasOwnProperty(c) ? n[c] : u(c, r)) } return i } return { invoke: function(t, e, n, r) { "string" == typeof n && (r = n, n = null); var i = c(t, n, r); return z(t) && (t = t[t.length - 1]),
                            function(t) { if (o || "function" != typeof t) return !1; var e = t.$$ngIsClass; return Y(e) || (e = t.$$ngIsClass = /^class\b/.test(Je(t))), e }(t) ? (i.unshift(null), new(Function.prototype.bind.apply(t, i))) : t.apply(e, i) }, instantiate: function(t, e, n) { var r = z(t) ? t[t.length - 1] : t,
                            i = c(t, e, n); return i.unshift(null), new(Function.prototype.bind.apply(r, i)) }, get: u, annotate: Ye.$$annotate, has: function(e) { return s.hasOwnProperty(e + r) || t.hasOwnProperty(e) } } } }

        function Qe() { var e = !0;
            this.disableAutoScrolling = function() { e = !1 }, this.$get = ["$window", "$location", "$rootScope", function(n, r, i) { var o = n.document;

                function s(t) { if (t) { t.scrollIntoView(); var e = function() { var t = u.yOffset; if (G(t)) t = t();
                            else if (nt(t)) { var e = t[0];
                                t = "fixed" !== n.getComputedStyle(e).position ? 0 : e.getBoundingClientRect().bottom } else F(t) || (t = 0); return t }(); if (e) { var r = t.getBoundingClientRect().top;
                            n.scrollBy(0, r - e) } } else n.scrollTo(0, 0) }

                function u(t) { var e, n, i;
                    (t = B(t) ? t : F(t) ? t.toString() : r.hash()) ? (e = o.getElementById(t)) ? s(e): (n = o.getElementsByName(t), i = null, Array.prototype.some.call(n, function(t) { if ("a" === rt(t)) return i = t, !0 }), (e = i) ? s(e) : "top" === t && s(null)): s(null) } return e && i.$watch(function() { return r.hash() }, function(e, n) { var r, o;
                    e === n && "" === e || (r = function() { i.$evalAsync(u) }, "complete" === (o = o || t).document.readyState ? o.setTimeout(r) : a(o).on("load", r)) }), u }] } Ye.$$annotate = function(t, e, n) { var r, i; if ("function" == typeof t) { if (!(r = t.$inject)) { if (r = [], t.length) { if (e) throw B(n) && n || (n = t.name || function(t) { var e = Ze(t); return e ? "function(" + (e[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn" }(t)), Ke("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                        C(Ze(t)[1].split(ze), function(t) { t.replace(We, function(t, e, n) { r.push(n) }) }) } t.$inject = r } } else z(t) ? (It(t[i = t.length - 1], "fn"), r = t.slice(0, i)) : It(t, "fn", !0); return r }; var Xe = i("$animate"),
            tn = 1;

        function en(t, e) { return t || e ? t ? e ? (z(t) && (t = t.join(" ")), z(e) && (e = e.join(" ")), t + " " + e) : t : e : "" }

        function nn(t) { return _(t) ? t : {} } var rn = function() { this.$get = L },
            on = function() { var t = new Ue,
                    e = [];
                this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) { return { enabled: L, on: L, off: L, pin: L, push: function(a, s, u, c) { c && c(), (u = u || {}).from && a.css(u.from), u.to && a.css(u.to), (u.addClass || u.removeClass) && function(n, a, s) { var u = t.get(n) || {},
                                    c = i(u, a, !0),
                                    l = i(u, s, !1);
                                (c || l) && (t.set(n, u), e.push(n), 1 === e.length && r.$$postDigest(o)) }(a, u.addClass, u.removeClass); var l = new n; return l.complete(), l } };

                    function i(t, e, n) { var r = !1; return e && C(e = B(e) ? e.split(" ") : z(e) ? e : [], function(e) { e && (r = !0, t[e] = n) }), r }

                    function o() { C(e, function(e) { var n = t.get(e); if (n) { var r = function(t) { B(t) && (t = t.split(" ")); var e = Ht(); return C(t, function(t) { t.length && (e[t] = !0) }), e }(e.attr("class")),
                                    i = "",
                                    o = "";
                                C(n, function(t, e) { t !== !!r[e] && (t ? i += (i.length ? " " : "") + e : o += (o.length ? " " : "") + e) }), C(e, function(t) { i && Ce(t, i), o && be(t, o) }), t.delete(e) } }), e.length = 0 } }] },
            an = ["$provide", function(t) { var e = this,
                    n = null,
                    r = null;
                this.$$registeredAnimations = Object.create(null), this.register = function(n, r) { if (n && "." !== n.charAt(0)) throw Xe("notcsel", "Expecting class selector starting with '.' got '{0}'.", n); var i = n + "-animation";
                    e.$$registeredAnimations[n.substr(1)] = i, t.factory(i, r) }, this.customFilter = function(t) { return 1 === arguments.length && (r = G(t) ? t : null), r }, this.classNameFilter = function(t) { if (1 === arguments.length && ((n = t instanceof RegExp ? t : null) && new RegExp("[(\\s|\\/)]ng-animate[(\\s|\\/)]").test(n.toString()))) throw n = null, Xe("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', "ng-animate"); return n }, this.$get = ["$$animateQueue", function(t) {
                    function e(t, e, n) { if (n) { var r = function(t) { for (var e = 0; e < t.length; e++) { var n = t[e]; if (n.nodeType === tn) return n } }(n);!r || r.parentNode || r.previousElementSibling || (n = null) } n ? n.after(t) : e.prepend(t) } return { on: t.on, off: t.off, pin: t.pin, enabled: t.enabled, cancel: function(t) { t.cancel && t.cancel() }, enter: function(n, r, i, o) { return r = r && a(r), i = i && a(i), e(n, r = r || i.parent(), i), t.push(n, "enter", nn(o)) }, move: function(n, r, i, o) { return r = r && a(r), i = i && a(i), e(n, r = r || i.parent(), i), t.push(n, "move", nn(o)) }, leave: function(e, n) { return t.push(e, "leave", nn(n), function() { e.remove() }) }, addClass: function(e, n, r) { return (r = nn(r)).addClass = en(r.addclass, n), t.push(e, "addClass", r) }, removeClass: function(e, n, r) { return (r = nn(r)).removeClass = en(r.removeClass, n), t.push(e, "removeClass", r) }, setClass: function(e, n, r, i) { return (i = nn(i)).addClass = en(i.addClass, n), i.removeClass = en(i.removeClass, r), t.push(e, "setClass", i) }, animate: function(e, n, r, i, o) { return (o = nn(o)).from = o.from ? T(o.from, n) : n, o.to = o.to ? T(o.to, r) : r, i = i || "ng-inline-animate", o.tempClasses = en(o.tempClasses, i), t.push(e, "animate", o) } } }] }],
            sn = function() { this.$get = ["$$rAF", function(t) { var e = [];

                    function n(n) { e.push(n), e.length > 1 || t(function() { for (var t = 0; t < e.length; t++) e[t]();
                            e = [] }) } return function() { var t = !1; return n(function() { t = !0 }),
                            function(e) { t ? e() : n(e) } } }] },
            un = function() { this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function(t, e, n, r, i) {
                    function o(t) { this.setHost(t); var e = n();
                        this._doneCallbacks = [], this._tick = function(t) { r() ? function(t) { i(t, 0, !1) }(t) : e(t) }, this._state = 0 } return o.chain = function(t, e) { var n = 0;! function r() { if (n === t.length) return void e(!0);
                            t[n](function(t) {!1 !== t ? (n++, r()) : e(!1) }) }() }, o.all = function(t, e) { var n = 0,
                            r = !0;

                        function i(i) { r = r && i, ++n === t.length && e(r) } C(t, function(t) { t.done(i) }) }, o.prototype = { setHost: function(t) { this.host = t || {} }, done: function(t) { 2 === this._state ? t() : this._doneCallbacks.push(t) }, progress: L, getPromise: function() { if (!this.promise) { var e = this;
                                this.promise = t(function(t, n) { e.done(function(e) {!1 === e ? n() : t() }) }) } return this.promise }, then: function(t, e) { return this.getPromise().then(t, e) }, catch: function(t) { return this.getPromise().catch(t) }, finally: function(t) { return this.getPromise().finally(t) }, pause: function() { this.host.pause && this.host.pause() }, resume: function() { this.host.resume && this.host.resume() }, end: function() { this.host.end && this.host.end(), this._resolve(!0) }, cancel: function() { this.host.cancel && this.host.cancel(), this._resolve(!1) }, complete: function(t) { var e = this;
                            0 === e._state && (e._state = 1, e._tick(function() { e._resolve(t) })) }, _resolve: function(t) { 2 !== this._state && (C(this._doneCallbacks, function(e) { e(t) }), this._doneCallbacks.length = 0, this._state = 2) } }, o }] },
            cn = function() { this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(t, e, n) { return function(e, r) { var i = r || {};
                        i.$$prepared || (i = at(i)), i.cleanupStyles && (i.from = i.to = null), i.from && (e.css(i.from), i.from = null); var o, a = new n; return { start: s, end: s };

                        function s() { return t(function() {! function() { i.addClass && (e.addClass(i.addClass), i.addClass = null);
                                    i.removeClass && (e.removeClass(i.removeClass), i.removeClass = null);
                                    i.to && (e.css(i.to), i.to = null) }(), o || a.complete(), o = !0 }), a } } }] };

        function ln() { this.$get = ["$window", "$log", "$sniffer", "$document", "$$taskTrackerFactory", function(t, e, n, r, i) { return new function(t, e, n, r, i) { var o = this,
                        s = t.location,
                        u = t.history,
                        c = t.setTimeout,
                        l = t.clearTimeout,
                        f = {},
                        p = i(n);
                    o.isMock = !1, o.$$completeOutstandingRequest = p.completeTask, o.$$incOutstandingRequestCount = p.incTaskCount, o.notifyWhenNoOutstandingRequests = p.notifyWhenNoPendingTasks; var h, d, $ = s.href,
                        m = e.find("base"),
                        v = null,
                        g = r.history ? function() { try { return u.state } catch (t) {} } : L;
                    w(), o.url = function(e, n, i) { if (j(i) && (i = null), s !== t.location && (s = t.location), u !== t.history && (u = t.history), e) { var a = d === i; if ($ === e && (!r.history || a)) return o; var c = $ && sr($) === sr(e); return $ = e, d = i, !r.history || c && a ? (c || (v = e), n ? s.replace(e) : c ? s.hash = function(t) { var e = t.indexOf("#"); return -1 === e ? "" : t.substr(e) }(e) : s.href = e, s.href !== e && (v = e)) : (u[n ? "replaceState" : "pushState"](i, "", e), w()), v && (v = e), o } return function(t) { return t.replace(/#$/, "") }(v || s.href) }, o.state = function() { return h }; var S = [],
                        P = !1;

                    function y() { v = null, x() } var b = null;

                    function w() { ut(h = j(h = g()) ? null : h, b) && (h = b), b = h, d = h }

                    function x() { var t = d;
                        w(), $ === o.url() && t === h || ($ = o.url(), d = h, C(S, function(t) { t(o.url(), h) })) } o.onUrlChange = function(e) { return P || (r.history && a(t).on("popstate", y), a(t).on("hashchange", y), P = !0), S.push(e), e }, o.$$applicationDestroyed = function() { a(t).off("hashchange popstate", y) }, o.$$checkUrlChange = x, o.baseHref = function() { var t = m.attr("href"); return t ? t.replace(/^(https?:)?\/\/[^/]*/, "") : "" }, o.defer = function(t, e, n) { var r; return e = e || 0, n = n || p.DEFAULT_TASK_TYPE, p.incTaskCount(n), r = c(function() { delete f[r], p.completeTask(t, n) }, e), f[r] = n, r }, o.defer.cancel = function(t) { if (f.hasOwnProperty(t)) { var e = f[t]; return delete f[t], l(t), p.completeTask(L, e), !0 } return !1 } }(t, r, e, n, i) }] }

        function fn() { this.$get = function() { var t = {};

                function e(e, n) { if (e in t) throw i("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e); var r = 0,
                        o = T({}, n, { id: e }),
                        a = Ht(),
                        s = n && n.capacity || Number.MAX_VALUE,
                        u = Ht(),
                        c = null,
                        l = null; return t[e] = { put: function(t, e) { if (!j(e)) { if (s < Number.MAX_VALUE) f(u[t] || (u[t] = { key: t })); return t in a || r++, a[t] = e, r > s && this.remove(l.key), e } }, get: function(t) { if (s < Number.MAX_VALUE) { var e = u[t]; if (!e) return;
                                f(e) } return a[t] }, remove: function(t) { if (s < Number.MAX_VALUE) { var e = u[t]; if (!e) return;
                                e === c && (c = e.p), e === l && (l = e.n), p(e.n, e.p), delete u[t] } t in a && (delete a[t], r--) }, removeAll: function() { a = Ht(), r = 0, u = Ht(), c = l = null }, destroy: function() { a = null, o = null, u = null, delete t[e] }, info: function() { return T({}, o, { size: r }) } };

                    function f(t) { t !== c && (l ? l === t && (l = t.n) : l = t, p(t.n, t.p), p(t, c), (c = t).n = null) }

                    function p(t, e) { t !== e && (t && (t.p = e), e && (e.n = t)) } } return e.info = function() { var e = {}; return C(t, function(t, n) { e[n] = t.info() }), e }, e.get = function(e) { return t[e] }, e } }

        function pn() { this.$get = ["$cacheFactory", function(t) { return t("templates") }] } var hn = i("$compile"); var dn = new function() {};

        function $n(e, n) { var r = {},
                i = "Directive",
                s = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
                u = /(([\w-]+)(?::([^;]+))?;?)/,
                c = function(t) { var e, n = {},
                        r = t.split(","); for (e = 0; e < r.length; e++) n[r[e]] = !0; return n }("ngSrc,ngSrcset,src,srcset"),
                l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
                h = /^(on[a-z]+|formaction)$/,
                d = Ht();

            function $(t, e, n) { var r = /^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,
                    i = Ht(); return C(t, function(t, o) { if ((t = t.trim()) in d) i[o] = d[t];
                    else { var a = t.match(r); if (!a) throw hn("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, o, t, n ? "controller bindings definition" : "isolate scope definition");
                        i[o] = { mode: a[1][0], collection: "*" === a[2], optional: "?" === a[3], attrName: a[4] || o }, a[4] && (d[t] = i[o]) } }), i }

            function m(t, e) { var n = { isolateScope: null, bindToController: null }; if (_(t.scope) && (!0 === t.bindToController ? (n.bindToController = $(t.scope, e, !0), n.isolateScope = {}) : n.isolateScope = $(t.scope, e, !1)), _(t.bindToController) && (n.bindToController = $(t.bindToController, e, !0)), n.bindToController && !t.controller) throw hn("noctrl", "Cannot bind to controller without directive '{0}'s controller.", e); return n } this.directive = function t(n, o) { return Rt(n, "name"), Dt(n, "directive"), B(n) ? (! function(t) { var e = t.charAt(0); if (!e || e !== p(e)) throw hn("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", t); if (t !== t.trim()) throw hn("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", t) }(n), Rt(o, "directiveFactory"), r.hasOwnProperty(n) || (r[n] = [], e.factory(n + i, ["$injector", "$exceptionHandler", function(t, e) { var i = []; return C(r[n], function(r, o) { try { var a = t.invoke(r);
                            G(a) ? a = { compile: I(a) } : !a.compile && a.link && (a.compile = I(a.link)), a.priority = a.priority || 0, a.index = o, a.name = a.name || n, a.require = function(t) { var e = t.require || t.controller && t.name; return !z(e) && _(e) && C(e, function(t, n) { var r = t.match(l);
                                    t.substring(r[0].length) || (e[n] = r[0] + n) }), e }(a), a.restrict = function(t, e) { if (t && (!B(t) || !/[EACM]/.test(t))) throw hn("badrestrict", "Restrict property '{0}' of directive '{1}' is invalid", t, e); return t || "EA" }(a.restrict, n), a.$$moduleName = r.$$moduleName, i.push(a) } catch (t) { e(t) } }), i }])), r[n].push(o)) : C(n, x(t)), this }, this.component = function t(e, n) { if (!B(e)) return C(e, x(ht(this, t))), this; var r = n.controller || function() {};

                function i(t) {
                    function e(e) { return G(e) || z(e) ? function(n, r) { return t.invoke(e, this, { $element: n, $attrs: r }) } : e } var i = n.template || n.templateUrl ? n.template : "",
                        o = { controller: r, controllerAs: function(t, e) { if (e && B(e)) return e; if (B(t)) { var n = Cn.exec(t); if (n) return n[3] } }(n.controller) || n.controllerAs || "$ctrl", template: e(i), templateUrl: e(n.templateUrl), transclude: n.transclude, scope: {}, bindToController: n.bindings || {}, restrict: "E", require: n.require }; return C(n, function(t, e) { "$" === e.charAt(0) && (o[e] = t) }), o } return C(n, function(t, e) { "$" === e.charAt(0) && (i[e] = t, G(r) && (r[e] = t)) }), i.$inject = ["$injector"], this.directive(e, i) }, this.aHrefSanitizationWhitelist = function(t) { return H(t) ? (n.aHrefSanitizationWhitelist(t), this) : n.aHrefSanitizationWhitelist() }, this.imgSrcSanitizationWhitelist = function(t) { return H(t) ? (n.imgSrcSanitizationWhitelist(t), this) : n.imgSrcSanitizationWhitelist() }; var g = !0;
            this.debugInfoEnabled = function(t) { return H(t) ? (g = t, this) : g }; var S = !1;
            this.strictComponentBindingsEnabled = function(t) { return H(t) ? (S = t, this) : S }; var P = 10;
            this.onChangesTtl = function(t) { return arguments.length ? (P = t, this) : P }; var y = !0;
            this.commentDirectivesEnabled = function(t) { return arguments.length ? (y = t, this) : y }; var b = !0;
            this.cssClassDirectivesEnabled = function(t) { return arguments.length ? (b = t, this) : b }; var w = Ht();
            this.addPropertySecurityContext = function(t, e, n) { var r = t.toLowerCase() + "|" + e.toLowerCase(); if (r in w && w[r] !== n) throw hn("ctxoverride", "Property context '{0}.{1}' already set to '{2}', cannot override to '{3}'.", t, e, w[r], n); return w[r] = n, this },
                function() {
                    function t(t, e) { C(e, function(e) { w[e.toLowerCase()] = t }) } t(Wr.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), t(Wr.CSS, ["*|style"]), t(Wr.URL, ["area|href", "area|ping", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "input|src", "ins|cite", "q|cite"]), t(Wr.MEDIA_URL, ["audio|src", "img|src", "img|srcset", "source|src", "source|srcset", "track|src", "video|src", "video|poster"]), t(Wr.RESOURCE_URL, ["*|formAction", "applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "form|action", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"]) }(), this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", function(e, n, d, $, x, E, O, k, A) { var M, N = /^\w/,
                        I = t.document.createElement("div"),
                        D = y,
                        H = b,
                        U = P;

                    function F() { try { if (!--U) throw M = void 0, hn("infchng", "{0} $onChanges() iterations reached. Aborting!\n", P);
                            O.$apply(function() { for (var t = 0, e = M.length; t < e; ++t) try { M[t]() } catch (t) { d(t) } M = void 0 }) } finally { U++ } }

                    function q(t, e) { if (!t) return t; if (!B(t)) throw hn("srcset", 'Can\'t pass trusted values to `{0}`: "{1}"', e, t.toString()); for (var n = "", r = tt(t), i = /\s/.test(r) ? /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/ : /(,)/, o = r.split(i), a = Math.floor(o.length / 2), s = 0; s < a; s++) { var u = 2 * s;
                            n += k.getTrustedMediaUrl(tt(o[u])), n += " " + tt(o[u + 1]) } var c = tt(o[2 * s]).split(/\s/); return n += k.getTrustedMediaUrl(tt(c[0])), 2 === c.length && (n += " " + tt(c[1])), n }

                    function K(t, e) { if (e) { var n, r, i, o = Object.keys(e); for (n = 0, r = o.length; n < r; n++) this[i = o[n]] = e[i] } else this.$attr = {};
                        this.$$element = t }

                    function J(t, e) { try { t.addClass(e) } catch (t) {} } K.prototype = { $normalize: Sn, $addClass: function(t) { t && t.length > 0 && A.addClass(this.$$element, t) }, $removeClass: function(t) { t && t.length > 0 && A.removeClass(this.$$element, t) }, $updateClass: function(t, e) { var n = Pn(t, e);
                            n && n.length && A.addClass(this.$$element, n); var r = Pn(e, t);
                            r && r.length && A.removeClass(this.$$element, r) }, $set: function(t, e, n, r) { var i = Le(this.$$element[0], t),
                                o = Ve[t],
                                a = t;
                            i ? (this.$$element.prop(t, e), r = i) : o && (this[o] = e, a = o), this[t] = e, r ? this.$attr[t] = r : (r = this.$attr[t]) || (this.$attr[t] = r = Vt(t, "-")), "img" === rt(this.$$element) && "srcset" === t && (this[t] = e = q(e, "$set('srcset', value)")), !1 !== n && (null === e || j(e) ? this.$$element.removeAttr(r) : N.test(r) ? this.$$element.attr(r, e) : function(t, e, n) { I.innerHTML = "<span " + e + ">"; var r = I.firstChild.attributes,
                                    i = r[0];
                                r.removeNamedItem(i.name), i.value = n, t.attributes.setNamedItem(i) }(this.$$element[0], r, e)); var s = this.$$observers;
                            s && C(s[a], function(t) { try { t(e) } catch (t) { d(t) } }) }, $observe: function(t, e) { var n = this,
                                r = n.$$observers || (n.$$observers = Ht()),
                                i = r[t] || (r[t] = []); return i.push(e), O.$evalAsync(function() { i.$$inter || !n.hasOwnProperty(t) || j(n[t]) || e(n[t]) }),
                                function() { ot(i, e) } } }; var Q = n.startSymbol(),
                        X = n.endSymbol(),
                        et = "{{" === Q && "}}" === X ? R : function(t) { return t.replace(/\{\{/g, Q).replace(/}}/g, X) },
                        nt = /^ng(Attr|Prop|On)([A-Z].*)$/,
                        it = /^(.+)Start$/; return at.$$addBindingInfo = g ? function(t, e) { var n = t.data("$binding") || [];
                        z(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n) } : L, at.$$addBindingClass = g ? function(t) { J(t, "ng-binding") } : L, at.$$addScopeInfo = g ? function(t, e, n, r) { var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                        t.data(i, e) } : L, at.$$addScopeClass = g ? function(t, e) { J(t, e ? "ng-isolate-scope" : "ng-scope") } : L, at.$$createComment = function(e, n) { var r = ""; return g && (r = " " + (e || "") + ": ", n && (r += n + " ")), t.document.createComment(r) }, at;

                    function at(t, e, n, r, i) { t instanceof a || (t = a(t)); var o = ct(t, e, t, n, r, i);
                        at.$$addScopeClass(t); var s = null; return function(e, n, r) { if (!t) throw hn("multilink", "This element has already been linked.");
                            Rt(e, "scope"), i && i.needsNewScope && (e = e.$parent.$new()); var u, c, l, f = (r = r || {}).parentBoundTranscludeFn,
                                p = r.transcludeControllers,
                                h = r.futureParentElement; if (f && f.$$boundTransclude && (f = f.$$boundTransclude), s || (c = (u = h) && u[0], s = c && "foreignobject" !== rt(c) && v.call(c).match(/SVG/) ? "svg" : "html"), l = "html" !== s ? a(kt(s, a("<div></div>").append(t).html())) : n ? Ae.clone.call(t) : t, p)
                                for (var d in p) l.data("$" + d + "Controller", p[d].instance); return at.$$addScopeInfo(l, e), n && n(l, e), o && o(e, l, l, f), n || (t = o = null), l } }

                    function ct(t, e, n, r, i, s) { for (var u, c, l, f, p, h, d, $ = [], m = z(t) || t instanceof a, v = 0; v < t.length; v++) u = new K, 11 === o && lt(t, v, m), (l = (c = dt(t[v], [], u, 0 === v ? r : void 0, i)).length ? gt(c, t[v], u, e, n, null, [], [], s) : null) && l.scope && at.$$addScopeClass(u.$$element), p = l && l.terminal || !(f = t[v].childNodes) || !f.length ? null : ct(f, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : e), (l || p) && ($.push(v, l, p), h = !0, d = d || l), s = null; return h ? function(t, n, r, i) { var o, s, u, c, l, f, p, h, m; if (d) { var v = n.length; for (m = new Array(v), l = 0; l < $.length; l += 3) p = $[l], m[p] = n[p] } else m = n; for (l = 0, f = $.length; l < f;) u = m[$[l++]], o = $[l++], s = $[l++], o ? (o.scope ? (c = t.$new(), at.$$addScopeInfo(a(u), c)) : c = t, h = o.transcludeOnThisElement ? ft(t, o.transclude, i) : !o.templateOnThisElement && i ? i : !i && e ? ft(t, e) : null, o(s, c, u, r, h)) : s && s(t, u.childNodes, void 0, i) } : null }

                    function lt(t, e, n) { var r, i = t[e],
                            o = i.parentNode; if (i.nodeType === Bt)
                            for (;
                                (r = o ? i.nextSibling : t[e + 1]) && r.nodeType === Bt;) i.nodeValue = i.nodeValue + r.nodeValue, r.parentNode && r.parentNode.removeChild(r), n && r === t[e + 1] && t.splice(e + 1, 1) }

                    function ft(t, e, n) {
                        function r(r, i, o, a, s) { return r || ((r = t.$new(!1, s)).$$transcluded = !0), e(r, i, { parentBoundTranscludeFn: n, transcludeControllers: o, futureParentElement: a }) } var i = r.$$slots = Ht(); for (var o in e.$$slots) e.$$slots[o] ? i[o] = ft(t, e.$$slots[o], n) : i[o] = null; return r }

                    function dt(t, e, r, i, o) { var a, c, l, f = t.nodeType,
                            p = r.$attr; switch (f) {
                            case Ut:
                                bt(e, Sn(c = rt(t)), "E", i, o); for (var h, d, $, m, v, g = t.attributes, S = 0, P = g && g.length; S < P; S++) { var y, b = !1,
                                        C = !1,
                                        w = !1,
                                        x = !1,
                                        E = !1;
                                    d = (h = g[S]).name, m = h.value, (v = ($ = Sn(d.toLowerCase())).match(nt)) ? (w = "Attr" === v[1], x = "Prop" === v[1], E = "On" === v[1], d = d.replace(vn, "").toLowerCase().substr(4 + v[1].length).replace(/_(.)/g, function(t, e) { return e.toUpperCase() })) : (y = $.match(it)) && Ct(y[1]) && (b = d, C = d.substr(0, d.length - 5) + "end", d = d.substr(0, d.length - 6)), x || E ? (r[$] = m, p[$] = h.name, x ? At(t, e, $, d) : Mt(e, $, d)) : (p[$ = Sn(d.toLowerCase())] = d, !w && r.hasOwnProperty($) || (r[$] = m, Le(t, $) && (r[$] = !0)), Nt(t, e, m, $, w), bt(e, $, "A", i, o, b, C)) } if ("input" === c && "hidden" === t.getAttribute("type") && t.setAttribute("autocomplete", "off"), !H) break; if (_(l = t.className) && (l = l.animVal), B(l) && "" !== l)
                                    for (; a = u.exec(l);) bt(e, $ = Sn(a[2]), "C", i, o) && (r[$] = tt(a[3])), l = l.substr(a.index + a[0].length); break;
                            case Bt:
                                ! function(t, e) { var r = n(e, !0);
                                    r && t.push({ priority: 0, compile: function(t) { var e = t.parent(),
                                                n = !!e.length; return n && at.$$addBindingClass(e),
                                                function(t, e) { var i = e.parent();
                                                    n || at.$$addBindingClass(i), at.$$addBindingInfo(i, r.expressions), t.$watch(r, function(t) { e[0].nodeValue = t }) } } }) }(e, t.nodeValue); break;
                            case Ft:
                                if (!D) break;! function(t, e, n, r, i) { try { var o = s.exec(t.nodeValue); if (o) { var a = Sn(o[1]);
                                            bt(e, a, "M", r, i) && (n[a] = tt(o[2])) } } catch (t) {} }(t, e, r, i, o) } return e.sort(Et), e }

                    function $t(t, e, n) { var r = [],
                            i = 0; if (e && t.hasAttribute && t.hasAttribute(e))
                            do { if (!t) throw hn("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
                                t.nodeType === Ut && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling } while (i > 0);
                        else r.push(t); return a(r) }

                    function mt(t, e, n) { return function(r, i, o, a, s) { return i = $t(i[0], e, n), t(r, i, o, a, s) } }

                    function vt(t, e, n, r, i, o) { var a; return t ? at(e, n, r, i, o) : function() { return a || (a = at(e, n, r, i, o), e = n = o = null), a.apply(this, arguments) } }

                    function gt(e, n, r, i, o, s, u, c, l) { l = l || {}; for (var f, p, h, $, m, v = -Number.MAX_VALUE, g = l.newScopeDirective, S = l.controllerDirectives, P = l.newIsolateScopeDirective, y = l.templateDirective, b = l.nonTlbTranscludeDirective, w = !1, x = !1, O = l.hasElementTranscludeDirective, k = r.$$element = a(n), A = s, M = i, N = !1, V = !1, L = 0, R = e.length; L < R; L++) { var I = (f = e[L]).$$start,
                                D = f.$$end; if (I && (k = $t(n, I, D)), h = void 0, v > f.priority) break; if ((m = f.scope) && (f.templateUrl || (_(m) ? (Ot("new/isolated scope", P || g, f, k), P = f) : Ot("new/isolated scope", P, f, k)), g = g || f), p = f.name, !N && (f.replace && (f.templateUrl || f.template) || f.transclude && !f.$$tlb)) { for (var H, U = L + 1; H = e[U++];)
                                    if (H.transclude && !H.$$tlb || H.replace && (H.templateUrl || H.template)) { V = !0; break } N = !0 } if (!f.templateUrl && f.controller && (S = S || Ht(), Ot("'" + p + "' controller", S[p], f, k), S[p] = f), m = f.transclude)
                                if (w = !0, f.$$tlb || (Ot("transclusion", b, f, k), b = f), "element" === m) O = !0, v = f.priority, h = k, k = r.$$element = a(at.$$createComment(p, r[p])), n = k[0], Lt(o, pt(h), n), M = vt(V, h, i, v, A && A.name, { nonTlbTranscludeDirective: b });
                                else { var B = Ht(); if (_(m)) { h = t.document.createDocumentFragment(); var F = Ht(),
                                            q = Ht(); for (var W in C(m, function(t, e) { var n = "?" === t.charAt(0);
                                                t = n ? t.substring(1) : t, F[t] = e, B[e] = null, q[e] = n }), C(k.contents(), function(e) { var n = F[Sn(rt(e))];
                                                n ? (q[n] = !0, B[n] = B[n] || t.document.createDocumentFragment(), B[n].appendChild(e)) : h.appendChild(e) }), C(q, function(t, e) { if (!t) throw hn("reqslot", "Required transclusion slot `{0}` was not filled.", e) }), B)
                                            if (B[W]) { var J = a(B[W].childNodes);
                                                B[W] = vt(V, J, i) } h = a(h.childNodes) } else h = a(he(n)).contents();
                                    k.empty(), (M = vt(V, h, i, void 0, void 0, { needsNewScope: f.$$isolateScope || f.$$newScope })).$$slots = B } if (f.template)
                                if (x = !0, Ot("template", y, f, k), y = f, m = G(f.template) ? f.template(k, r) : f.template, m = et(m), f.replace) { if (A = f, h = ue(m) ? [] : yn(kt(f.templateNamespace, tt(m))), n = h[0], 1 !== h.length || n.nodeType !== Ut) throw hn("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p, "");
                                    Lt(o, k, n); var Y = { $attr: {} },
                                        Q = dt(n, [], Y),
                                        X = e.splice(L + 1, e.length - (L + 1));
                                    (P || g) && Pt(Q, P, g), e = e.concat(Q).concat(X), wt(r, Y), R = e.length } else k.html(m); if (f.templateUrl) x = !0, Ot("template", y, f, k), y = f, f.replace && (A = f), ot = xt(e.splice(L, e.length - L), k, r, o, w && M, u, c, { controllerDirectives: S, newScopeDirective: g !== f && g, newIsolateScopeDirective: P, templateDirective: y, nonTlbTranscludeDirective: b }), R = e.length;
                            else if (f.compile) try { $ = f.compile(k, r, M); var nt = f.$$originalDirective || f;
                                G($) ? it(null, ht(nt, $), I, D) : $ && it(ht(nt, $.pre), ht(nt, $.post), I, D) } catch (t) { d(t, yt(k)) } f.terminal && (ot.terminal = !0, v = Math.max(v, f.priority)) } return ot.scope = g && !0 === g.scope, ot.transcludeOnThisElement = w, ot.templateOnThisElement = x, ot.transclude = M, l.hasElementTranscludeDirective = O, ot;

                        function it(t, e, n, r) { t && (n && (t = mt(t, n, r)), t.require = f.require, t.directiveName = p, (P === f || f.$$isolateScope) && (t = It(t, { isolateScope: !0 })), u.push(t)), e && (n && (e = mt(e, n, r)), e.require = f.require, e.directiveName = p, (P === f || f.$$isolateScope) && (e = It(e, { isolateScope: !0 })), c.push(e)) }

                        function ot(t, e, i, o, s) { var l, f, p, h, $, m, v, b, w, x; for (var k in n === i ? (w = r, b = r.$$element) : w = new K(b = a(i), r), $ = e, P ? h = e.$new(!0) : g && ($ = e.$parent), s && ((v = function(t, e, n, r) { var i;
                                    Z(t) || (r = n, n = e, e = t, t = void 0);
                                    O && (i = m);
                                    n || (n = O ? b.parent() : b); if (!r) return s(t, e, i, n, V); var o = s.$$slots[r]; if (o) return o(t, e, i, n, V); if (j(o)) throw hn("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', r, yt(b)) }).$$boundTransclude = s, v.isSlotFilled = function(t) { return !!s.$$slots[t] }), S && (m = function(t, e, n, r, i, o, a) { var s = Ht(); for (var u in r) { var c = r[u],
                                            l = { $scope: c === a || c.$$isolateScope ? i : o, $element: t, $attrs: e, $transclude: n },
                                            f = c.controller; "@" === f && (f = e[c.name]); var p = E(f, l, !0, c.controllerAs);
                                        s[c.name] = p, t.data("$" + c.name + "Controller", p.instance) } return s }(b, w, v, S, h, e, P)), P && (at.$$addScopeInfo(b, h, !0, !(y && (y === P || y === P.$$originalDirective))), at.$$addScopeClass(b, !0), h.$$isolateBindings = P.$$isolateBindings, (x = _t(e, w, h, h.$$isolateBindings, P)).removeWatches && h.$on("$destroy", x.removeWatches)), m) { var A = S[k],
                                    M = m[k],
                                    N = A.$$bindings.bindToController;
                                M.instance = M(), b.data("$" + A.name + "Controller", M.instance), M.bindingInfo = _t($, w, M.instance, N, A) } for (C(S, function(t, e) { var n = t.require;
                                    t.bindToController && !z(n) && _(n) && T(m[e].instance, St(e, n, b, m)) }), C(m, function(t) { var e = t.instance; if (G(e.$onChanges)) try { e.$onChanges(t.bindingInfo.initialChanges) } catch (t) { d(t) }
                                    if (G(e.$onInit)) try { e.$onInit() } catch (t) { d(t) } G(e.$doCheck) && ($.$watch(function() { e.$doCheck() }), e.$doCheck()), G(e.$onDestroy) && $.$on("$destroy", function() { e.$onDestroy() }) }), l = 0, f = u.length; l < f; l++) Dt(p = u[l], p.isolateScope ? h : e, b, w, p.require && St(p.directiveName, p.require, b, m), v); var V = e; for (P && (P.template || null === P.templateUrl) && (V = h), t && t(V, i.childNodes, void 0, s), l = c.length - 1; l >= 0; l--) Dt(p = c[l], p.isolateScope ? h : e, b, w, p.require && St(p.directiveName, p.require, b, m), v);
                            C(m, function(t) { var e = t.instance;
                                G(e.$postLink) && e.$postLink() }) } }

                    function St(t, e, n, r) { var i; if (B(e)) { var o = e.match(l),
                                a = e.substring(o[0].length),
                                s = o[1] || o[3],
                                u = "?" === o[2]; if ("^^" === s ? n = n.parent() : i = (i = r && r[a]) && i.instance, !i) { var c = "$" + a + "Controller";
                                i = "^^" === s && n[0] && n[0].nodeType === qt ? null : s ? n.inheritedData(c) : n.data(c) } if (!i && !u) throw hn("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, t) } else if (z(e)) { i = []; for (var f = 0, p = e.length; f < p; f++) i[f] = St(t, e[f], n, r) } else _(e) && (i = {}, C(e, function(e, o) { i[o] = St(t, e, n, r) })); return i || null }

                    function Pt(t, e, n) { for (var r = 0, i = t.length; r < i; r++) t[r] = V(t[r], { $$isolateScope: e, $$newScope: n }) }

                    function bt(t, n, o, a, s, u, c) { if (n === s) return null; var l = null; if (r.hasOwnProperty(n))
                            for (var f, p = e.get(n + i), h = 0, d = p.length; h < d; h++)
                                if (f = p[h], (j(a) || a > f.priority) && -1 !== f.restrict.indexOf(o)) { if (u && (f = V(f, { $$start: u, $$end: c })), !f.$$bindings) { var $ = f.$$bindings = m(f, f.name);
                                        _($.isolateScope) && (f.$$isolateBindings = $.isolateScope) } t.push(f), l = f } return l }

                    function Ct(t) { if (r.hasOwnProperty(t))
                            for (var n = e.get(t + i), o = 0, a = n.length; o < a; o++)
                                if (n[o].multiElement) return !0; return !1 }

                    function wt(t, e) { var n = e.$attr,
                            r = t.$attr;
                        C(t, function(r, i) { "$" !== i.charAt(0) && (e[i] && e[i] !== r && (r.length ? r += ("style" === i ? ";" : " ") + e[i] : r = e[i]), t.$set(i, r, !0, n[i])) }), C(e, function(e, i) { t.hasOwnProperty(i) || "$" === i.charAt(0) || (t[i] = e, "class" !== i && "style" !== i && (r[i] = n[i])) }) }

                    function xt(t, e, n, r, i, o, s, u) { var c, l, f = [],
                            p = e[0],
                            h = t.shift(),
                            m = V(h, { templateUrl: null, transclude: null, replace: null, $$originalDirective: h }),
                            v = G(h.templateUrl) ? h.templateUrl(e, n) : h.templateUrl,
                            g = h.templateNamespace; return e.empty(), $(v).then(function(d) { var $, S, P, y; if (d = et(d), h.replace) { if (P = ue(d) ? [] : yn(kt(g, tt(d))), $ = P[0], 1 !== P.length || $.nodeType !== Ut) throw hn("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", h.name, v);
                                    S = { $attr: {} }, Lt(r, e, $); var b = dt($, [], S);
                                    _(h.scope) && Pt(b, !0), t = b.concat(t), wt(n, S) } else $ = p, e.html(d); for (t.unshift(m), c = gt(t, $, n, i, e, h, o, s, u), C(r, function(t, n) { t === $ && (r[n] = e[0]) }), l = ct(e[0].childNodes, i); f.length;) { var w = f.shift(),
                                        x = f.shift(),
                                        E = f.shift(),
                                        O = f.shift(),
                                        k = e[0]; if (!w.$$destroyed) { if (x !== p) { var T = x.className;
                                            u.hasElementTranscludeDirective && h.replace || (k = he($)), Lt(E, a(x), k), J(a(k), T) } y = c.transcludeOnThisElement ? ft(w, c.transclude, O) : O, c(l, w, k, r, y) } } f = null }).catch(function(t) { W(t) && d(t) }),
                            function(t, e, n, r, i) { var o = i;
                                e.$$destroyed || (f ? f.push(e, n, r, o) : (c.transcludeOnThisElement && (o = ft(e, c.transclude, i)), c(l, e, n, r, o))) } }

                    function Et(t, e) { var n = e.priority - t.priority; return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index }

                    function Ot(t, e, n, r) {
                        function i(t) { return t ? " (module: " + t + ")" : "" } if (e) throw hn("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", e.name, i(e.$$moduleName), n.name, i(n.$$moduleName), t, yt(r)) }

                    function kt(e, n) { switch (e = p(e || "html")) {
                            case "svg":
                            case "math":
                                var r = t.document.createElement("div"); return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                            default:
                                return n } }

                    function Tt(t) { return q(k.valueOf(t), "ng-prop-srcset") }

                    function At(t, e, n, r) { if (h.test(r)) throw hn("nodomevents", "Property bindings for HTML DOM event properties are disallowed"); var i = rt(t),
                            o = function(t, e) { var n = e.toLowerCase(); return w[t + "|" + n] || w["*|" + n] }(i, r),
                            a = R; "srcset" !== r || "img" !== i && "source" !== i ? o && (a = k.getTrusted.bind(k, o)) : a = Tt, e.push({ priority: 100, compile: function(t, e) { var i = x(e[n]),
                                    o = x(e[n], function(t) { return k.valueOf(t) }); return { pre: function(t, e) {
                                        function n() { var n = i(t);
                                            e.prop(r, a(n)) } n(), t.$watch(o, n) } } } }) }

                    function Mt(t, e, n) { t.push(Io(x, O, d, e, n, !1)) }

                    function Nt(t, e, r, i, o) { var a = rt(t),
                            s = function(t, e) { return "srcdoc" === e ? k.HTML : "src" === e || "ngSrc" === e ? -1 === ["img", "video", "audio", "source", "track"].indexOf(t) ? k.RESOURCE_URL : k.MEDIA_URL : "xlinkHref" === e ? "image" === t ? k.MEDIA_URL : "a" === t ? k.URL : k.RESOURCE_URL : "form" === t && "action" === e || "base" === t && "href" === e || "link" === t && "href" === e ? k.RESOURCE_URL : "a" !== t || "href" !== e && "ngHref" !== e ? void 0 : k.URL }(a, i),
                            u = !o,
                            l = c[i] || o,
                            f = n(r, u, s, l); if (f) { if ("multiple" === i && "select" === a) throw hn("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", yt(t)); if (h.test(i)) throw hn("nodomevents", "Interpolations for HTML DOM event attributes are disallowed");
                            e.push({ priority: 100, compile: function() { return { pre: function(t, e, o) { var a = o.$$observers || (o.$$observers = Ht()),
                                                u = o[i];
                                            u !== r && (f = u && n(u, !0, s, l), r = u), f && (o[i] = f(t), (a[i] || (a[i] = [])).$$inter = !0, (o.$$observers && o.$$observers[i].$$scope || t).$watch(f, function(t, e) { "class" === i && t !== e ? o.$updateClass(t, e) : o.$set(i, t) })) } } } }) } }

                    function Lt(e, n, r) { var i, o, s = n[0],
                            u = n.length,
                            c = s.parentNode; if (e)
                            for (i = 0, o = e.length; i < o; i++)
                                if (e[i] === s) { e[i++] = r; for (var l = i, f = l + u - 1, p = e.length; l < p; l++, f++) f < p ? e[l] = e[f] : delete e[l];
                                    e.length -= u - 1, e.context === s && (e.context = r); break } c && c.replaceChild(r, s); var h = t.document.createDocumentFragment(); for (i = 0; i < u; i++) h.appendChild(n[i]); for (a.hasData(s) && (a.data(r, a.data(s)), a(s).off("$destroy")), a.cleanData(h.querySelectorAll("*")), i = 1; i < u; i++) delete n[i];
                        n[0] = r, n.length = 1 }

                    function It(t, e) { return T(function() { return t.apply(null, arguments) }, t, e) }

                    function Dt(t, e, n, r, i, o) { try { t(e, n, r, i, o) } catch (t) { d(t, yt(n)) } }

                    function jt(t, e) { if (S) throw hn("missingattr", "Attribute '{0}' of '{1}' is non-optional and must be set!", t, e) }

                    function _t(t, e, r, i, o) { var a, s = [],
                            u = {};

                        function c(e, n, i) { G(r.$onChanges) && !st(n, i) && (M || (t.$$postDigest(F), M = []), a || (a = {}, M.push(l)), a[e] && (i = a[e].previousValue), a[e] = new mn(i, n)) }

                        function l() { r.$onChanges(a), a = void 0 } return C(i, function(i, a) { var l, p, h, d, $, m = i.attrName,
                                v = i.optional; switch (i.mode) {
                                case "@":
                                    v || f.call(e, m) || (jt(m, o.name), r[a] = e[m] = void 0), $ = e.$observe(m, function(t) { if (B(t) || Y(t)) { var e = r[a];
                                            c(a, t, e), r[a] = t } }), e.$$observers[m].$$scope = t, B(l = e[m]) ? r[a] = n(l)(t) : Y(l) && (r[a] = l), u[a] = new mn(dn, r[a]), s.push($); break;
                                case "=":
                                    if (!f.call(e, m)) { if (v) break;
                                        jt(m, o.name), e[m] = void 0 } if (v && !e[m]) break;
                                    p = x(e[m]), d = p.literal ? ut : st, h = p.assign || function() { throw l = r[a] = p(t), hn("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", e[m], m, o.name) }, l = r[a] = p(t); var g = function(e) { return d(e, r[a]) || (d(e, l) ? h(t, e = r[a]) : r[a] = e), l = e };
                                    g.$stateful = !0, $ = i.collection ? t.$watchCollection(e[m], g) : t.$watch(x(e[m], g), null, p.literal), s.push($); break;
                                case "<":
                                    if (!f.call(e, m)) { if (v) break;
                                        jt(m, o.name), e[m] = void 0 } if (v && !e[m]) break; var S = (p = x(e[m])).literal,
                                        P = r[a] = p(t);
                                    u[a] = new mn(dn, r[a]), $ = t[i.collection ? "$watchCollection" : "$watch"](p, function(t, e) { if (e === t) { if (e === P || S && ut(e, P)) return;
                                            e = P } c(a, t, e), r[a] = t }), s.push($); break;
                                case "&":
                                    if (v || f.call(e, m) || jt(m, o.name), (p = e.hasOwnProperty(m) ? x(e[m]) : L) === L && v) break;
                                    r[a] = function(e) { return p(t, e) } } }), { initialChanges: u, removeWatches: s.length && function() { for (var t = 0, e = s.length; t < e; ++t) s[t]() } } } }] }

        function mn(t, e) { this.previousValue = t, this.currentValue = e } $n.$inject = ["$provide", "$$sanitizeUriProvider"], mn.prototype.isFirstChange = function() { return this.previousValue === dn }; var vn = /^((?:x|data)[:\-_])/i,
            gn = /[:\-_]+(.)/g;

        function Sn(t) { return t.replace(vn, "").replace(gn, function(t, e, n) { return n ? e.toUpperCase() : e }) }

        function Pn(t, e) { var n = "",
                r = t.split(/\s+/),
                i = e.split(/\s+/);
            t: for (var o = 0; o < r.length; o++) { for (var a = r[o], s = 0; s < i.length; s++)
                    if (a === i[s]) continue t;
                n += (n.length > 0 ? " " : "") + a }
            return n }

        function yn(t) { var e = (t = a(t)).length; if (e <= 1) return t; for (; e--;) { var n = t[e];
                (n.nodeType === Ft || n.nodeType === Bt && "" === n.nodeValue.trim()) && $.call(t, e, 1) } return t } var bn = i("$controller"),
            Cn = /^(\S+)(\s+as\s+([\w$]+))?$/;

        function wn() { var t = {};
            this.has = function(e) { return t.hasOwnProperty(e) }, this.register = function(e, n) { Dt(e, "controller"), _(e) ? T(t, e) : t[e] = n }, this.$get = ["$injector", function(e) { return function(r, i, o, a) { var s, u, c, l; if (o = !0 === o, a && B(a) && (l = a), B(r)) { if (!(u = r.match(Cn))) throw bn("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r); if (c = u[1], l = l || u[3], !(r = t.hasOwnProperty(c) ? t[c] : function(t, e, n) { if (!e) return t; for (var r, i = e.split("."), o = t, a = i.length, s = 0; s < a; s++) r = i[s], t && (t = (o = t)[r]); return !n && G(t) ? ht(o, t) : t }(i.$scope, c, !0))) throw bn("ctrlreg", "The controller with the name '{0}' is not registered.", c);
                        It(r, c, !0) } if (o) { var f = (z(r) ? r[r.length - 1] : r).prototype; return s = Object.create(f || null), l && n(i, l, s, c || r.name), T(function() { var t = e.invoke(r, s, i, c); return t !== s && (_(t) || G(t)) && (s = t, l && n(i, l, s, c || r.name)), s }, { instance: s, identifier: l }) } return s = e.instantiate(r, i, c), l && n(i, l, s, c || r.name), s };

                function n(t, e, n, r) { if (!t || !_(t.$scope)) throw i("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", r, e);
                    t.$scope[e] = n } }] }

        function xn() { this.$get = ["$window", function(t) { return a(t.document) }] }

        function En() { this.$get = ["$document", "$rootScope", function(t, e) { var n = t[0],
                    r = n && n.hidden;

                function i() { r = n.hidden } return t.on("visibilitychange", i), e.$on("$destroy", function() { t.off("visibilitychange", i) }),
                    function() { return r } }] }

        function On() { this.$get = ["$log", function(t) { return function(e, n) { t.error.apply(t, arguments) } }] } var kn = function() { this.$get = ["$document", function(t) { return function(e) { return e ? !e.nodeType && e instanceof a && (e = e[0]) : e = t[0].body, e.offsetWidth + 1 } }] },
            Tn = "application/json",
            An = { "Content-Type": Tn + ";charset=utf-8" },
            Mn = /^\[|^\{(?!\{)/,
            Nn = { "[": /]$/, "{": /}$/ },
            Vn = /^\)]\}',?\n/,
            Ln = i("$http");

        function Rn(t) { return _(t) ? q(t) ? t.toISOString() : $t(t) : t }

        function In() { this.$get = function() { return function(t) { if (!t) return ""; var e = []; return w(t, function(t, n) { null === t || j(t) || G(t) || (z(t) ? C(t, function(t) { e.push(xt(n) + "=" + xt(Rn(t))) }) : e.push(xt(n) + "=" + xt(Rn(t)))) }), e.join("&") } } }

        function Dn() { this.$get = function() { return function(t) { if (!t) return ""; var e = []; return function t(n, r, i) { z(n) ? C(n, function(e, n) { t(e, r + "[" + (_(e) ? n : "") + "]") }) : _(n) && !q(n) ? w(n, function(e, n) { t(e, r + (i ? "" : "[") + n + (i ? "" : "]")) }) : (G(n) && (n = n()), e.push(xt(r) + "=" + (null == n ? "" : xt(Rn(n))))) }(t, "", !0), e.join("&") } } }

        function jn(t, e) { if (B(t)) { var n = t.replace(Vn, "").trim(); if (n) { var r = e("Content-Type"),
                        i = r && 0 === r.indexOf(Tn); if (i || (a = (o = n).match(Mn)) && Nn[a[0]].test(o)) try { t = mt(n) } catch (e) { if (!i) return t; throw Ln("baddata", 'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"', t, e) } } } var o, a; return t }

        function Hn(t) { var e, n = Ht();

            function r(t, e) { t && (n[t] = n[t] ? n[t] + ", " + e : e) } return B(t) ? C(t.split("\n"), function(t) { e = t.indexOf(":"), r(p(tt(t.substr(0, e))), tt(t.substr(e + 1))) }) : _(t) && C(t, function(t, e) { r(p(e), tt(t)) }), n }

        function _n(t) { var e; return function(n) { if (e || (e = Hn(t)), n) { var r = e[p(n)]; return void 0 === r && (r = null), r } return e } }

        function Un(t, e, n, r) { return G(r) ? r(t, e, n) : (C(r, function(r) { t = r(t, e, n) }), t) }

        function Bn(t) { return 200 <= t && t < 300 }

        function Fn() { var t = this.defaults = { transformResponse: [jn], transformRequest: [function(t) { return !_(t) || (e = t, "[object File]" === v.call(e)) || function(t) { return "[object Blob]" === v.call(t) }(t) || function(t) { return "[object FormData]" === v.call(t) }(t) ? t : $t(t); var e }], headers: { common: { Accept: "application/json, text/plain, */*" }, post: Wt(An), put: Wt(An), patch: Wt(An) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer", jsonpCallbackParam: "callback" },
                e = !1;
            this.useApplyAsync = function(t) { return H(t) ? (e = !!t, this) : e }; var n = this.interceptors = [],
                r = this.xsrfWhitelistedOrigins = [];
            this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function(o, a, s, u, c, l, f, d) { var $ = u("$http");
                t.paramSerializer = B(t.paramSerializer) ? f.get(t.paramSerializer) : t.paramSerializer; var m = [];
                C(n, function(t) { m.unshift(B(t) ? f.get(t) : f.invoke(t)) }); var v, g = (v = [si].concat(r.map(ui)), function(t) { var e = ui(t); return v.some(ci.bind(null, e)) });

                function S(n) { if (!_(n)) throw i("$http")("badreq", "Http request configuration must be an object.  Received: {0}", n); if (!B(d.valueOf(n.url))) throw i("$http")("badreq", "Http request configuration url must be a string or a $sce trusted object.  Received: {0}", n.url); var r = T({ method: "get", transformRequest: t.transformRequest, transformResponse: t.transformResponse, paramSerializer: t.paramSerializer, jsonpCallbackParam: t.jsonpCallbackParam }, n);
                    r.headers = function(e) { var n, r, i, o = t.headers,
                            a = T({}, e.headers);
                        o = T({}, o.common, o[p(e.method)]);
                        t: for (n in o) { for (i in r = p(n), a)
                                if (p(i) === r) continue t;
                            a[n] = o[n] }
                        return function(t, e) { var n, r = {}; return C(t, function(t, i) { G(t) ? null != (n = t(e)) && (r[i] = n) : r[i] = t }), r }(a, Wt(e)) }(n), r.method = h(r.method), r.paramSerializer = B(r.paramSerializer) ? f.get(r.paramSerializer) : r.paramSerializer, o.$$incOutstandingRequestCount("$http"); var u = [],
                        v = [],
                        P = l.resolve(r); return C(m, function(t) {
                        (t.request || t.requestError) && u.unshift(t.request, t.requestError), (t.response || t.responseError) && v.push(t.response, t.responseError) }), P = (P = y(P = (P = y(P, u)).then(function(n) { var r = n.headers,
                            i = Un(n.data, _n(r), void 0, n.transformRequest);
                        j(i) && C(r, function(t, e) { "content-type" === p(e) && delete r[e] });
                        j(n.withCredentials) && !j(t.withCredentials) && (n.withCredentials = t.withCredentials); return function(n, r) { var i, o, u = l.defer(),
                                f = u.promise,
                                h = n.headers,
                                m = "jsonp" === p(n.method),
                                v = n.url;
                            m ? v = d.getTrustedResourceUrl(v) : B(v) || (v = d.valueOf(v));
                            v = function(t, e) { return e.length > 0 && (t += (-1 === t.indexOf("?") ? "?" : "&") + e), t }(v, n.paramSerializer(n.params)), m && (v = function(t, e) { var n = t.split("?"); if (n.length > 2) throw Ln("badjsonp", 'Illegal use more than one "?", in url, "{1}"', t); return C(Ct(n[1]), function(n, r) { if ("JSON_CALLBACK" === n) throw Ln("badjsonp", 'Illegal use of JSON_CALLBACK in url, "{0}"', t); if (r === e) throw Ln("badjsonp", 'Illegal use of callback param, "{0}", in url, "{1}"', e, t) }), t += (-1 === t.indexOf("?") ? "?" : "&") + e + "=JSON_CALLBACK" }(v, n.jsonpCallbackParam));
                            S.pendingRequests.push(n), f.then(x, x), !n.cache && !t.cache || !1 === n.cache || "GET" !== n.method && "JSONP" !== n.method || (i = _(n.cache) ? n.cache : _(t.cache) ? t.cache : $);
                            i && (H(o = i.get(v)) ? Q(o) ? o.then(w, w) : z(o) ? b(o[1], o[0], Wt(o[2]), o[3], o[4]) : b(o, 200, {}, "OK", "complete") : i.put(v, f)); if (j(o)) { var P = g(n.url) ? s()[n.xsrfCookieName || t.xsrfCookieName] : void 0;
                                P && (h[n.xsrfHeaderName || t.xsrfHeaderName] = P), a(n.method, v, r, function(t, n, r, o, a) { i && (Bn(t) ? i.put(v, [t, n, Hn(r), o, a]) : i.remove(v));

                                    function s() { b(n, t, r, o, a) } e ? c.$applyAsync(s) : (s(), c.$$phase || c.$apply()) }, h, n.timeout, n.withCredentials, n.responseType, y(n.eventHandlers), y(n.uploadEventHandlers)) } return f;

                            function y(t) { if (t) { var n = {}; return C(t, function(t, r) { n[r] = function(n) {
                                            function r() { t(n) } e ? c.$applyAsync(r) : c.$$phase ? r() : c.$apply(r) } }), n } }

                            function b(t, e, r, i, o) {
                                (Bn(e = e >= -1 ? e : 0) ? u.resolve : u.reject)({ data: t, status: e, headers: _n(r), config: n, statusText: i, xhrStatus: o }) }

                            function w(t) { b(t.data, t.status, Wt(t.headers()), t.statusText, t.xhrStatus) }

                            function x() { var t = S.pendingRequests.indexOf(n); - 1 !== t && S.pendingRequests.splice(t, 1) } }(n, i).then(b, b) }), v)).finally(function() { o.$$completeOutstandingRequest(L, "$http") });

                    function y(t, e) { for (var n = 0, r = e.length; n < r;) { var i = e[n++],
                                o = e[n++];
                            t = t.then(i, o) } return e.length = 0, t }

                    function b(t) { var e = T({}, t); return e.data = Un(t.data, t.headers, t.status, r.transformResponse), Bn(t.status) ? e : l.reject(e) } } return S.pendingRequests = [],
                    function(t) { C(arguments, function(t) { S[t] = function(e, n) { return S(T({}, n || {}, { method: t, url: e })) } }) }("get", "delete", "head", "jsonp"),
                    function(t) { C(arguments, function(t) { S[t] = function(e, n, r) { return S(T({}, r || {}, { method: t, url: e, data: n })) } }) }("post", "put", "patch"), S.defaults = t, S }] }

        function qn() { this.$get = function() { return function() { return new t.XMLHttpRequest } } }

        function zn() { this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(t, e, n, r) { return function(t, e, n, r, i) { return function(o, a, s, u, c, l, f, h, d, $) { if (a = a || t.url(), "jsonp" === p(o)) var m = r.createCallback(a),
                            v = function(t, e, n) { t = t.replace("JSON_CALLBACK", e); var o = i.createElement("script"),
                                    a = null; return o.type = "text/javascript", o.src = t, o.async = !0, a = function(t) { o.removeEventListener("load", a), o.removeEventListener("error", a), i.body.removeChild(o), o = null; var s = -1,
                                        u = "unknown";
                                    t && ("load" !== t.type || r.wasCalled(e) || (t = { type: "error" }), u = t.type, s = "error" === t.type ? 404 : 200), n && n(s, u) }, o.addEventListener("load", a), o.addEventListener("error", a), i.body.appendChild(o), a }(a, m, function(t, e) { var n = 200 === t && r.getResponse(m);
                                b(u, t, n, "", e, "complete"), r.removeCallback(m) });
                        else { var g = e(o, a),
                                S = !1;
                            g.open(o, a, !0), C(c, function(t, e) { H(t) && g.setRequestHeader(e, t) }), g.onload = function() { var t = g.statusText || "",
                                    e = "response" in g ? g.response : g.responseText,
                                    n = 1223 === g.status ? 204 : g.status;
                                0 === n && (n = e ? 200 : "file" === ui(a).protocol ? 404 : 0), b(u, n, e, g.getAllResponseHeaders(), t, "complete") }; if (g.onerror = function() { b(u, -1, null, null, "", "error") }, g.ontimeout = function() { b(u, -1, null, null, "", "timeout") }, g.onabort = function() { b(u, -1, null, null, "", S ? "timeout" : "abort") }, C(d, function(t, e) { g.addEventListener(e, t) }), C($, function(t, e) { g.upload.addEventListener(e, t) }), f && (g.withCredentials = !0), h) try { g.responseType = h } catch (t) { if ("json" !== h) throw t } g.send(j(s) ? null : s) } if (l > 0) var P = n(function() { y("timeout") }, l);
                        else Q(l) && l.then(function() { y(H(l.$$timeoutId) ? "timeout" : "abort") });

                        function y(t) { S = "timeout" === t, v && v(), g && g.abort() }

                        function b(t, e, r, i, o, a) { H(P) && n.cancel(P), v = g = null, t(e, r, i, o, a) } } }(t, r, t.defer, e, n[0]) }] } var Wn = P.$interpolateMinErr = i("$interpolate");

        function Gn() { var t = "{{",
                e = "}}";
            this.startSymbol = function(e) { return e ? (t = e, this) : t }, this.endSymbol = function(t) { return t ? (e = t, this) : e }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) { var o = t.length,
                    a = e.length,
                    s = new RegExp(t.replace(/./g, c), "g"),
                    u = new RegExp(e.replace(/./g, c), "g");

                function c(t) { return "\\\\\\" + t }

                function l(n) { return n.replace(s, t).replace(u, e) }

                function f(t, e, n, r) { var i = t.$watch(function(t) { return i(), r(t) }, e, n); return i }

                function p(s, u, c, p) { var h = c === i.URL || c === i.MEDIA_URL; if (!s.length || -1 === s.indexOf(t)) { if (u && !h) return; var d = l(s);
                        h && (d = i.getTrusted(c, d)); var $ = I(d); return $.exp = s, $.expressions = [], $.$$watchDelegate = f, $ } p = !!p; for (var m, v, g, S, P, y = 0, b = [], C = s.length, w = [], x = []; y < C;) { if (-1 === (m = s.indexOf(t, y)) || -1 === (v = s.indexOf(e, m + o))) { y !== C && w.push(l(s.substring(y))); break } y !== m && w.push(l(s.substring(y, m))), S = s.substring(m + o, v), b.push(S), y = v + a, x.push(w.length), w.push("") } P = 1 === w.length && 1 === x.length; var E = h && P ? void 0 : function(t) { try { return t = c && !h ? i.getTrusted(c, t) : i.valueOf(t), p && !H(t) ? t : _t(t) } catch (t) { r(Wn.interr(s, t)) } }; if (g = b.map(function(t) { return n(t, E) }), !u || b.length) { var O = function(t) { for (var e = 0, n = b.length; e < n; e++) { if (p && j(t[e])) return;
                                w[x[e]] = t[e] } return h ? i.getTrusted(c, P ? w[0] : w.join("")) : (c && w.length > 1 && Wn.throwNoconcat(s), w.join("")) }; return T(function(t) { var e = 0,
                                n = b.length,
                                i = new Array(n); try { for (; e < n; e++) i[e] = g[e](t); return O(i) } catch (t) { r(Wn.interr(s, t)) } }, { exp: s, expressions: b, $$watchDelegate: function(t, e) { var n; return t.$watchGroup(g, function(r, i) { var o = O(r);
                                    e.call(this, o, r !== i ? n : o, t), n = o }) } }) } } return p.startSymbol = function() { return t }, p.endSymbol = function() { return e }, p }] } Wn.throwNoconcat = function(t) { throw Wn("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", t) }, Wn.interr = function(t, e) { return Wn("interr", "Can't interpolate: {0}\n{1}", t, e.toString()) }; var Kn = i("$interval");

        function Jn() { this.$get = ["$$intervalFactory", "$window", function(t, e) { var n = {},
                    r = function(t) { e.clearInterval(t), delete n[t] },
                    i = t(function(t, r, i) { var o = e.setInterval(t, r); return n[o] = i, o }, r); return i.cancel = function(t) { if (!t) return !1; if (!t.hasOwnProperty("$$intervalId")) throw Kn("badprom", "`$interval.cancel()` called with a promise that was not generated by `$interval()`."); if (!n.hasOwnProperty(t.$$intervalId)) return !1; var e = t.$$intervalId,
                        i = n[e]; return Ur(i.promise), i.reject("canceled"), r(e), !0 }, i }] }

        function Zn() { this.$get = ["$browser", "$q", "$$q", "$rootScope", function(t, e, n, r) { return function(i, o) { return function(a, s, u, c) { var l = arguments.length > 4,
                            f = l ? pt(arguments, 4) : [],
                            p = 0,
                            h = H(c) && !c,
                            d = (h ? n : e).defer(),
                            $ = d.promise;

                        function m() { l ? a.apply(null, f) : a(p) } return u = H(u) ? u : 0, $.$$intervalId = i(function() { h ? t.defer(m) : r.$evalAsync(m), d.notify(p++), u > 0 && p >= u && (d.resolve(p), o($.$$intervalId)), h || r.$apply() }, s, d, h), $ } } }] } var Yn = function() { this.$get = function() { var t = P.callbacks,
                        e = {}; return { createCallback: function(n) { var r = "_" + (t.$$counter++).toString(36),
                                i = "angular.callbacks." + r,
                                o = function(t) { var e = function(t) { e.data = t, e.called = !0 }; return e.id = t, e }(r); return e[i] = t[r] = o, i }, wasCalled: function(t) { return e[t].called }, getResponse: function(t) { return e[t].data }, removeCallback: function(n) { var r = e[n];
                            delete t[r.id], delete e[n] } } } },
            Qn = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
            Xn = { http: 80, https: 443, ftp: 21 },
            tr = i("$location");

        function er(t, e, n) { var r, i = (r = [], C(e, function(t, e) { z(t) ? C(t, function(t) { r.push(xt(e, !0) + (!0 === t ? "" : "=" + xt(t, !0))) }) : r.push(xt(e, !0) + (!0 === t ? "" : "=" + xt(t, !0))) }), r.length ? r.join("&") : ""),
                o = n ? "#" + wt(n) : ""; return function(t) { for (var e = t.split("/"), n = e.length; n--;) e[n] = wt(e[n].replace(/%2F/g, "/")); return e.join("/") }(t) + (i ? "?" + i : "") + o }

        function nr(t, e) { var n = ui(t);
            e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = M(n.port) || Xn[n.protocol] || null } var rr = /^\s*[\\/]{2,}/;

        function ir(t, e, n) { if (rr.test(t)) throw tr("badpath", 'Invalid url "{0}".', t); var r = "/" !== t.charAt(0);
            r && (t = "/" + t); var i = ui(t),
                o = r && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname;
            e.$$path = function(t, e) { for (var n = t.split("/"), r = n.length; r--;) n[r] = decodeURIComponent(n[r]), e && (n[r] = n[r].replace(/\//g, "%2F")); return n.join("/") }(o, n), e.$$search = Ct(i.search), e.$$hash = decodeURIComponent(i.hash), e.$$path && "/" !== e.$$path.charAt(0) && (e.$$path = "/" + e.$$path) }

        function or(t, e) { return t.slice(0, e.length) === e }

        function ar(t, e) { if (or(e, t)) return e.substr(t.length) }

        function sr(t) { var e = t.indexOf("#"); return -1 === e ? t : t.substr(0, e) }

        function ur(t, e, n) { this.$$html5 = !0, n = n || "", nr(t, this), this.$$parse = function(t) { var n = ar(e, t); if (!B(n)) throw tr("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, e);
                ir(n, this, !0), this.$$path || (this.$$path = "/"), this.$$compose() }, this.$$normalizeUrl = function(t) { return e + t.substr(1) }, this.$$parseLinkUrl = function(r, i) { return i && "#" === i[0] ? (this.hash(i.slice(1)), !0) : (H(o = ar(t, r)) ? (a = o, s = n && H(o = ar(n, o)) ? e + (ar("/", o) || o) : t + a) : H(o = ar(e, r)) ? s = e + o : e === r + "/" && (s = e), s && this.$$parse(s), !!s); var o, a, s } }

        function cr(t, e, n) { nr(t, this), this.$$parse = function(r) { var i, o = ar(t, r) || ar(e, r);
                j(o) || "#" !== o.charAt(0) ? this.$$html5 ? i = o : (i = "", j(o) && (t = r, this.replace())) : j(i = ar(n, o)) && (i = o), ir(i, this, !1), this.$$path = function(t, e, n) { var r, i = /^\/[A-Z]:(\/.*)/;
                    or(e, n) && (e = e.replace(n, "")); if (i.exec(e)) return t; return (r = i.exec(t)) ? r[1] : t }(this.$$path, i, t), this.$$compose() }, this.$$normalizeUrl = function(e) { return t + (e ? n + e : "") }, this.$$parseLinkUrl = function(e, n) { return sr(t) === sr(e) && (this.$$parse(e), !0) } }

        function lr(t, e, n) { this.$$html5 = !0, cr.apply(this, arguments), this.$$parseLinkUrl = function(r, i) { return i && "#" === i[0] ? (this.hash(i.slice(1)), !0) : (t === sr(r) ? o = r : (a = ar(e, r)) ? o = t + n + a : e === r + "/" && (o = e), o && this.$$parse(o), !!o); var o, a }, this.$$normalizeUrl = function(e) { return t + n + e } } var fr = { $$absUrl: "", $$html5: !1, $$replace: !1, $$compose: function() { this.$$url = er(this.$$path, this.$$search, this.$$hash), this.$$absUrl = this.$$normalizeUrl(this.$$url), this.$$urlUpdatedByLocation = !0 }, absUrl: pr("$$absUrl"), url: function(t) { if (j(t)) return this.$$url; var e = Qn.exec(t); return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this }, protocol: pr("$$protocol"), host: pr("$$host"), port: pr("$$port"), path: hr("$$path", function(t) { return "/" === (t = null !== t ? t.toString() : "").charAt(0) ? t : "/" + t }), search: function(t, e) { switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (B(t) || F(t)) t = t.toString(), this.$$search = Ct(t);
                        else { if (!_(t)) throw tr("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            C(t = at(t, {}), function(e, n) { null == e && delete t[n] }), this.$$search = t } break;
                    default:
                        j(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e } return this.$$compose(), this }, hash: hr("$$hash", function(t) { return null !== t ? t.toString() : "" }), replace: function() { return this.$$replace = !0, this } };

        function pr(t) { return function() { return this[t] } }

        function hr(t, e) { return function(n) { return j(n) ? this[t] : (this[t] = e(n), this.$$compose(), this) } }

        function dr() { var t = "!",
                e = { enabled: !1, requireBase: !0, rewriteLinks: !0 };
            this.hashPrefix = function(e) { return H(e) ? (t = e, this) : t }, this.html5Mode = function(t) { return Y(t) ? (e.enabled = t, this) : _(t) ? (Y(t.enabled) && (e.enabled = t.enabled), Y(t.requireBase) && (e.requireBase = t.requireBase), (Y(t.rewriteLinks) || B(t.rewriteLinks)) && (e.rewriteLinks = t.rewriteLinks), this) : e }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, s) { var u, c, l, f, p = r.baseHref(),
                    h = r.url(); if (e.enabled) { if (!p && e.requireBase) throw tr("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                    l = (f = h).substring(0, f.indexOf("/", f.indexOf("//") + 2)) + (p || "/"), c = i.history ? ur : lr } else l = sr(h), c = cr; var d = function(t) { return t.substr(0, sr(t).lastIndexOf("/") + 1) }(l);
                (u = new c(l, d, "#" + t)).$$parseLinkUrl(h, h), u.$$state = r.state(); var $ = /^\s*(javascript|mailto):/i;

                function m(t, e, n) { var i = u.url(),
                        o = u.$$state; try { r.url(t, e, n), u.$$state = r.state() } catch (t) { throw u.url(i), u.$$state = o, t } } o.on("click", function(t) { var i = e.rewriteLinks; if (i && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 !== t.which && 2 !== t.button) { for (var s = a(t.target);
                            "a" !== rt(s[0]);)
                            if (s[0] === o[0] || !(s = s.parent())[0]) return; if (!B(i) || !j(s.attr(i))) { var c = s.prop("href"),
                                l = s.attr("href") || s.attr("xlink:href");
                            _(c) && "[object SVGAnimatedString]" === c.toString() && (c = ui(c.animVal).href), $.test(c) || !c || s.attr("target") || t.isDefaultPrevented() || u.$$parseLinkUrl(c, l) && (t.preventDefault(), u.absUrl() !== r.url() && n.$apply()) } } }), u.absUrl() !== h && r.url(u.absUrl(), !0); var v = !0; return r.onUrlChange(function(t, e) { or(t, d) ? (n.$evalAsync(function() { var r, i = u.absUrl(),
                            o = u.$$state;
                        u.$$parse(t), u.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, u.absUrl() === t && (r ? (u.$$parse(i), u.$$state = o, m(i, !1, o)) : (v = !1, g(i, o))) }), n.$$phase || n.$digest()) : s.location.href = t }), n.$watch(function() { if (v || u.$$urlUpdatedByLocation) { u.$$urlUpdatedByLocation = !1; var t = r.url(),
                            e = u.absUrl(),
                            o = r.state(),
                            a = u.$$replace,
                            s = !((c = t) === (l = e) || ui(c).href === ui(l).href) || u.$$html5 && i.history && o !== u.$$state;
                        (v || s) && (v = !1, n.$evalAsync(function() { var e = u.absUrl(),
                                r = n.$broadcast("$locationChangeStart", e, t, u.$$state, o).defaultPrevented;
                            u.absUrl() === e && (r ? (u.$$parse(t), u.$$state = o) : (s && m(e, a, o === u.$$state ? null : u.$$state), g(t, o))) })) } var c, l;
                    u.$$replace = !1 }), u;

                function g(t, e) { n.$broadcast("$locationChangeSuccess", u.absUrl(), t, u.$$state, e) } }] }

        function $r() { var t = !0,
                e = this;
            this.debugEnabled = function(e) { return H(e) ? (t = e, this) : t }, this.$get = ["$window", function(n) { var r, i = o || /\bEdge\//.test(n.navigator && n.navigator.userAgent); return { log: a("log"), info: a("info"), warn: a("warn"), error: a("error"), debug: (r = a("debug"), function() { t && r.apply(e, arguments) }) };

                function a(t) { var e = n.console || {},
                        r = e[t] || e.log || L; return function() { var t = []; return C(arguments, function(e) { t.push(function(t) { return W(t) && (t.stack && i ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t }(e)) }), Function.prototype.apply.call(r, e, t) } } }] } C([lr, cr, ur], function(t) { t.prototype = Object.create(fr), t.prototype.state = function(e) { if (!arguments.length) return this.$$state; if (t !== ur || !this.$$html5) throw tr("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API"); return this.$$state = j(e) ? null : e, this.$$urlUpdatedByLocation = !0, this } }); var mr = i("$parse"),
            vr = {}.constructor.prototype.valueOf;

        function gr(t) { return t + "" } var Sr = Ht();
        C("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(t) { Sr[t] = !0 }); var Pr = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
            yr = function(t) { this.options = t };
        yr.prototype = { constructor: yr, lex: function(t) { for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) { var e = this.text.charAt(this.index); if ('"' === e || "'" === e) this.readString(e);
                    else if (this.isNumber(e) || "." === e && this.isNumber(this.peek())) this.readNumber();
                    else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
                    else if (this.is(e, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: e }), this.index++;
                    else if (this.isWhitespace(e)) this.index++;
                    else { var n = e + this.peek(),
                            r = n + this.peek(2),
                            i = Sr[e],
                            o = Sr[n],
                            a = Sr[r]; if (i || o || a) { var s = a ? r : o ? n : e;
                            this.tokens.push({ index: this.index, text: s, operator: !0 }), this.index += s.length } else this.throwError("Unexpected next character ", this.index, this.index + 1) } } return this.tokens }, is: function(t, e) { return -1 !== e.indexOf(t) }, peek: function(t) { var e = t || 1; return this.index + e < this.text.length && this.text.charAt(this.index + e) }, isNumber: function(t) { return "0" <= t && t <= "9" && "string" == typeof t }, isWhitespace: function(t) { return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t }, isIdentifierStart: function(t) { return this.options.isIdentifierStart ? this.options.isIdentifierStart(t, this.codePointAt(t)) : this.isValidIdentifierStart(t) }, isValidIdentifierStart: function(t) { return "a" <= t && t <= "z" || "A" <= t && t <= "Z" || "_" === t || "$" === t }, isIdentifierContinue: function(t) { return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(t, this.codePointAt(t)) : this.isValidIdentifierContinue(t) }, isValidIdentifierContinue: function(t, e) { return this.isValidIdentifierStart(t, e) || this.isNumber(t) }, codePointAt: function(t) { return 1 === t.length ? t.charCodeAt(0) : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888 }, peekMultichar: function() { var t = this.text.charAt(this.index),
                    e = this.peek(); if (!e) return t; var n = t.charCodeAt(0),
                    r = e.charCodeAt(0); return n >= 55296 && n <= 56319 && r >= 56320 && r <= 57343 ? t + e : t }, isExpOperator: function(t) { return "-" === t || "+" === t || this.isNumber(t) }, throwError: function(t, e, n) { n = n || this.index; var r = H(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n; throw mr("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text) }, readNumber: function() { for (var t = "", e = this.index; this.index < this.text.length;) { var n = p(this.text.charAt(this.index)); if ("." === n || this.isNumber(n)) t += n;
                    else { var r = this.peek(); if ("e" === n && this.isExpOperator(r)) t += n;
                        else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === t.charAt(t.length - 1)) t += n;
                        else { if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== t.charAt(t.length - 1)) break;
                            this.throwError("Invalid exponent") } } this.index++ } this.tokens.push({ index: e, text: t, constant: !0, value: Number(t) }) }, readIdent: function() { var t = this.index; for (this.index += this.peekMultichar().length; this.index < this.text.length;) { var e = this.peekMultichar(); if (!this.isIdentifierContinue(e)) break;
                    this.index += e.length } this.tokens.push({ index: t, text: this.text.slice(t, this.index), identifier: !0 }) }, readString: function(t) { var e = this.index;
                this.index++; for (var n = "", r = t, i = !1; this.index < this.text.length;) { var o = this.text.charAt(this.index); if (r += o, i) { if ("u" === o) { var a = this.text.substring(this.index + 1, this.index + 5);
                            a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16)) } else { n += Pr[o] || o } i = !1 } else if ("\\" === o) i = !0;
                    else { if (o === t) return this.index++, void this.tokens.push({ index: e, text: r, constant: !0, value: n });
                        n += o } this.index++ } this.throwError("Unterminated quote", e) } }; var br = function(t, e) { this.lexer = t, this.options = e };

        function Cr(t, e) { return void 0 !== t ? t : e }

        function wr(t, e) { return void 0 === t ? e : void 0 === e ? t : t + e } br.Program = "Program", br.ExpressionStatement = "ExpressionStatement", br.AssignmentExpression = "AssignmentExpression", br.ConditionalExpression = "ConditionalExpression", br.LogicalExpression = "LogicalExpression", br.BinaryExpression = "BinaryExpression", br.UnaryExpression = "UnaryExpression", br.CallExpression = "CallExpression", br.MemberExpression = "MemberExpression", br.Identifier = "Identifier", br.Literal = "Literal", br.ArrayExpression = "ArrayExpression", br.Property = "Property", br.ObjectExpression = "ObjectExpression", br.ThisExpression = "ThisExpression", br.LocalsExpression = "LocalsExpression", br.NGValueParameter = "NGValueParameter", br.prototype = { ast: function(t) { this.text = t, this.tokens = this.lexer.lex(t); var e = this.program(); return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e }, program: function() { for (var t = [];;)
                    if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";")) return { type: br.Program, body: t } }, expressionStatement: function() { return { type: br.ExpressionStatement, expression: this.filterChain() } }, filterChain: function() { for (var t = this.expression(); this.expect("|");) t = this.filter(t); return t }, expression: function() { return this.assignment() }, assignment: function() { var t = this.ternary(); if (this.expect("=")) { if (!Tr(t)) throw mr("lval", "Trying to assign a value to a non l-value");
                    t = { type: br.AssignmentExpression, left: t, right: this.assignment(), operator: "=" } } return t }, ternary: function() { var t, e, n = this.logicalOR(); return this.expect("?") && (t = this.expression(), this.consume(":")) ? (e = this.expression(), { type: br.ConditionalExpression, test: n, alternate: t, consequent: e }) : n }, logicalOR: function() { for (var t = this.logicalAND(); this.expect("||");) t = { type: br.LogicalExpression, operator: "||", left: t, right: this.logicalAND() }; return t }, logicalAND: function() { for (var t = this.equality(); this.expect("&&");) t = { type: br.LogicalExpression, operator: "&&", left: t, right: this.equality() }; return t }, equality: function() { for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");) e = { type: br.BinaryExpression, operator: t.text, left: e, right: this.relational() }; return e }, relational: function() { for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");) e = { type: br.BinaryExpression, operator: t.text, left: e, right: this.additive() }; return e }, additive: function() { for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = { type: br.BinaryExpression, operator: t.text, left: e, right: this.multiplicative() }; return e }, multiplicative: function() { for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = { type: br.BinaryExpression, operator: t.text, left: e, right: this.unary() }; return e }, unary: function() { var t; return (t = this.expect("+", "-", "!")) ? { type: br.UnaryExpression, operator: t.text, prefix: !0, argument: this.unary() } : this.primary() }, primary: function() { var t, e; for (this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? t = at(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? t = { type: br.Literal, value: this.options.literals[this.consume().text] } : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek()); e = this.expect("(", "[", ".");) "(" === e.text ? (t = { type: br.CallExpression, callee: t, arguments: this.parseArguments() }, this.consume(")")) : "[" === e.text ? (t = { type: br.MemberExpression, object: t, property: this.expression(), computed: !0 }, this.consume("]")) : "." === e.text ? t = { type: br.MemberExpression, object: t, property: this.identifier(), computed: !1 } : this.throwError("IMPOSSIBLE"); return t }, filter: function(t) { for (var e = [t], n = { type: br.CallExpression, callee: this.identifier(), arguments: e, filter: !0 }; this.expect(":");) e.push(this.expression()); return n }, parseArguments: function() { var t = []; if (")" !== this.peekToken().text)
                    do { t.push(this.filterChain()) } while (this.expect(",")); return t }, identifier: function() { var t = this.consume(); return t.identifier || this.throwError("is not a valid identifier", t), { type: br.Identifier, name: t.text } }, constant: function() { return { type: br.Literal, value: this.consume().value } }, arrayDeclaration: function() { var t = []; if ("]" !== this.peekToken().text)
                    do { if (this.peek("]")) break;
                        t.push(this.expression()) } while (this.expect(",")); return this.consume("]"), { type: br.ArrayExpression, elements: t } }, object: function() { var t, e = []; if ("}" !== this.peekToken().text)
                    do { if (this.peek("}")) break;
                        t = { type: br.Property, kind: "init" }, this.peek().constant ? (t.key = this.constant(), t.computed = !1, this.consume(":"), t.value = this.expression()) : this.peek().identifier ? (t.key = this.identifier(), t.computed = !1, this.peek(":") ? (this.consume(":"), t.value = this.expression()) : t.value = t.key) : this.peek("[") ? (this.consume("["), t.key = this.expression(), this.consume("]"), t.computed = !0, this.consume(":"), t.value = this.expression()) : this.throwError("invalid key", this.peek()), e.push(t) } while (this.expect(",")); return this.consume("}"), { type: br.ObjectExpression, properties: e } }, throwError: function(t, e) { throw mr("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index)) }, consume: function(t) { if (0 === this.tokens.length) throw mr("ueoe", "Unexpected end of expression: {0}", this.text); var e = this.expect(t); return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e }, peekToken: function() { if (0 === this.tokens.length) throw mr("ueoe", "Unexpected end of expression: {0}", this.text); return this.tokens[0] }, peek: function(t, e, n, r) { return this.peekAhead(0, t, e, n, r) }, peekAhead: function(t, e, n, r, i) { if (this.tokens.length > t) { var o = this.tokens[t],
                        a = o.text; if (a === e || a === n || a === r || a === i || !e && !n && !r && !i) return o } return !1 }, expect: function(t, e, n, r) { var i = this.peek(t, e, n, r); return !!i && (this.tokens.shift(), i) }, selfReferential: { this: { type: br.ThisExpression }, $locals: { type: br.LocalsExpression } } }; var xr = 1,
            Er = 2;

        function Or(t, e, n) { var r, i, o, a = t.isPure = function(t, e) { switch (t.type) {
                    case br.MemberExpression:
                        if (t.computed) return !1; break;
                    case br.UnaryExpression:
                        return xr;
                    case br.BinaryExpression:
                        return "+" !== t.operator && xr;
                    case br.CallExpression:
                        return !1 } return void 0 === e ? Er : e }(t, n); switch (t.type) {
                case br.Program:
                    r = !0, C(t.body, function(t) { Or(t.expression, e, a), r = r && t.expression.constant }), t.constant = r; break;
                case br.Literal:
                    t.constant = !0, t.toWatch = []; break;
                case br.UnaryExpression:
                    Or(t.argument, e, a), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch; break;
                case br.BinaryExpression:
                    Or(t.left, e, a), Or(t.right, e, a), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch); break;
                case br.LogicalExpression:
                    Or(t.left, e, a), Or(t.right, e, a), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t]; break;
                case br.ConditionalExpression:
                    Or(t.test, e, a), Or(t.alternate, e, a), Or(t.consequent, e, a), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t]; break;
                case br.Identifier:
                    t.constant = !1, t.toWatch = [t]; break;
                case br.MemberExpression:
                    Or(t.object, e, a), t.computed && Or(t.property, e, a), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = t.constant ? [] : [t]; break;
                case br.CallExpression:
                    o = !!t.filter && function(t, e) { return !t(e).$stateful }(e, t.callee.name), r = o, i = [], C(t.arguments, function(t) { Or(t, e, a), r = r && t.constant, i.push.apply(i, t.toWatch) }), t.constant = r, t.toWatch = o ? i : [t]; break;
                case br.AssignmentExpression:
                    Or(t.left, e, a), Or(t.right, e, a), t.constant = t.left.constant && t.right.constant, t.toWatch = [t]; break;
                case br.ArrayExpression:
                    r = !0, i = [], C(t.elements, function(t) { Or(t, e, a), r = r && t.constant, i.push.apply(i, t.toWatch) }), t.constant = r, t.toWatch = i; break;
                case br.ObjectExpression:
                    r = !0, i = [], C(t.properties, function(t) { Or(t.value, e, a), r = r && t.value.constant, i.push.apply(i, t.value.toWatch), t.computed && (Or(t.key, e, !1), r = r && t.key.constant, i.push.apply(i, t.key.toWatch)) }), t.constant = r, t.toWatch = i; break;
                case br.ThisExpression:
                case br.LocalsExpression:
                    t.constant = !1, t.toWatch = [] } }

        function kr(t) { if (1 === t.length) { var e = t[0].expression,
                    n = e.toWatch; return 1 !== n.length ? n : n[0] !== e ? n : void 0 } }

        function Tr(t) { return t.type === br.Identifier || t.type === br.MemberExpression }

        function Ar(t) { if (1 === t.body.length && Tr(t.body[0].expression)) return { type: br.AssignmentExpression, left: t.body[0].expression, right: { type: br.NGValueParameter }, operator: "=" } }

        function Mr(t) { this.$filter = t }

        function Nr(t) { this.$filter = t }

        function Vr(t, e, n) { this.ast = new br(t, n), this.astCompiler = n.csp ? new Nr(e) : new Mr(e) }

        function Lr(t) { return G(t.valueOf) ? t.valueOf() : vr.call(t) }

        function Rr() { var t, e, n = Ht(),
                r = { true: !0, false: !1, null: null, undefined: void 0 };
            this.addLiteral = function(t, e) { r[t] = e }, this.setIdentifierFns = function(n, r) { return t = n, e = r, this }, this.$get = ["$filter", function(i) { var o = { csp: ct().noUnsafeEval, literals: at(r), isIdentifierStart: G(t) && t, isIdentifierContinue: G(e) && e }; return a.$$getAst = function(t) { return new Vr(new yr(o), i, o).getAst(t).ast }, a;

                function a(t, e) { var r, a; switch (typeof t) {
                        case "string":
                            if (t = t.trim(), !(r = n[a = t])) r = new Vr(new yr(o), i, o).parse(t), n[a] = p(r); return h(r, e);
                        case "function":
                            return h(t, e);
                        default:
                            return h(L, e) } }

                function s(t, e, n) { return null == t || null == e ? t === e : !("object" == typeof t && "object" == typeof(t = Lr(t)) && !n) && (t === e || t != t && e != e) }

                function u(t, e, n, r, i) { var o, a = r.inputs; if (1 === a.length) { var u = s; return a = a[0], t.$watch(function(t) { var e = a(t); return s(e, u, a.isPure) || (o = r(t, void 0, void 0, [e]), u = e && Lr(e)), o }, e, n, i) } for (var c = [], l = [], f = 0, p = a.length; f < p; f++) c[f] = s, l[f] = null; return t.$watch(function(t) { for (var e = !1, n = 0, i = a.length; n < i; n++) { var u = a[n](t);
                            (e || (e = !s(u, c[n], a[n].isPure))) && (l[n] = u, c[n] = u && Lr(u)) } return e && (o = r(t, void 0, void 0, l)), o }, e, n, i) }

                function c(t, e, n, r, i) { var o, a, s = r.literal ? l : H,
                        u = r.$$intercepted || r,
                        c = r.$$interceptor || R,
                        f = r.inputs && !u.inputs; return d.literal = r.literal, d.constant = r.constant, d.inputs = r.inputs, p(d), o = t.$watch(d, e, n, i);

                    function h() { s(a) && o() }

                    function d(t, e, n, r) { return a = f && r ? r[0] : u(t, e, n, r), s(a) && t.$$postDigest(h), c(a) } }

                function l(t) { var e = !0; return C(t, function(t) { H(t) || (e = !1) }), e }

                function f(t, e, n, r) { var i = t.$watch(function(t) { return i(), r(t) }, e, n); return i }

                function p(t) { return t.constant ? t.$$watchDelegate = f : t.oneTime ? t.$$watchDelegate = c : t.inputs && (t.$$watchDelegate = u), t }

                function h(t, e) { if (!e) return t;
                    t.$$interceptor && (e = function(t, e) {
                        function n(n) { return e(t(n)) } return n.$stateful = t.$stateful || e.$stateful, n.$$pure = t.$$pure && e.$$pure, n }(t.$$interceptor, e), t = t.$$intercepted); var n = !1,
                        r = function(r, i, o, a) { var s = n && a ? a[0] : t(r, i, o, a); return e(s) }; return r.$$intercepted = t, r.$$interceptor = e, r.literal = t.literal, r.oneTime = t.oneTime, r.constant = t.constant, e.$stateful || (n = !t.inputs, r.inputs = t.inputs ? t.inputs : [t], e.$$pure || (r.inputs = r.inputs.map(function(t) { return t.isPure === Er ? function(e) { return t(e) } : t }))), p(r) } }] }

        function Ir() { var t = !0;
            this.$get = ["$rootScope", "$exceptionHandler", function(e, n) { return jr(function(t) { e.$evalAsync(t) }, n, t) }], this.errorOnUnhandledRejections = function(e) { return H(e) ? (t = e, this) : t } }

        function Dr() { var t = !0;
            this.$get = ["$browser", "$exceptionHandler", function(e, n) { return jr(function(t) { e.defer(t) }, n, t) }], this.errorOnUnhandledRejections = function(e) { return H(e) ? (t = e, this) : t } }

        function jr(t, e, n) { var r = i("$q", TypeError),
                o = 0,
                a = [];

            function s() { return new function() { var t = this.promise = new u;
                    this.resolve = function(e) { f(t, e) }, this.reject = function(e) { p(t, e) }, this.notify = function(e) { d(t, e) } } }

            function u() { this.$$state = { status: 0 } }

            function c() { for (; !o && a.length;) { var t = a.shift(); if (!Hr(t)) { _r(t); var n = "Possibly unhandled rejection: " + Gt(t.value);
                        W(t.value) ? e(t.value, n) : e(n) } } }

            function l(r) {!n || r.pending || 2 !== r.status || Hr(r) || (0 === o && 0 === a.length && t(c), a.push(r)), !r.processScheduled && r.pending && (r.processScheduled = !0, ++o, t(function() {! function(r) { var i, a, s;
                        s = r.pending, r.processScheduled = !1, r.pending = void 0; try { for (var u = 0, l = s.length; u < l; ++u) { _r(r), a = s[u][0], i = s[u][r.status]; try { G(i) ? f(a, i(r.value)) : 1 === r.status ? f(a, r.value) : p(a, r.value) } catch (t) { p(a, t), t && !0 === t.$$passToExceptionHandler && e(t) } } } finally {--o, n && 0 === o && t(c) } }(r) })) }

            function f(t, e) { t.$$state.status || (e === t ? h(t, r("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : function t(e, n) { var r; var i = !1; try {
                        (_(n) || G(n)) && (r = n.then), G(r) ? (e.$$state.status = -1, r.call(n, function o(t) { if (i) return;
                            i = !0,
                                function t(e, n) { var r; var i = !1; try {
                                        (_(n) || G(n)) && (r = n.then), G(r) ? (e.$$state.status = -1, r.call(n, o, a, function(t) { d(e, t) })) : (e.$$state.value = n, e.$$state.status = 1, l(e.$$state)) } catch (t) { a(t) }

                                    function o(n) { i || (i = !0, t(e, n)) }

                                    function a(t) { i || (i = !0, h(e, t)) } }(e, t) }, a, function(t) { d(e, t) })) : (e.$$state.value = n, e.$$state.status = 1, l(e.$$state)) } catch (t) { a(t) }

                    function o(n) { i || (i = !0, t(e, n)) }

                    function a(t) { i || (i = !0, h(e, t)) } }(t, e)) }

            function p(t, e) { t.$$state.status || h(t, e) }

            function h(t, e) { t.$$state.value = e, t.$$state.status = 2, l(t.$$state) }

            function d(n, r) { var i = n.$$state.pending;
                n.$$state.status <= 0 && i && i.length && t(function() { for (var t, n, o = 0, a = i.length; o < a; o++) { n = i[o][0], t = i[o][3]; try { d(n, G(t) ? t(r) : r) } catch (t) { e(t) } } }) }

            function $(t) { var e = new u; return p(e, t), e }

            function m(t, e, n) { var r = null; try { G(n) && (r = n()) } catch (t) { return $(t) } return Q(r) ? r.then(function() { return e(t) }, $) : e(t) }

            function v(t, e, n, r) { var i = new u; return f(i, t), i.then(e, n, r) } T(u.prototype, { then: function(t, e, n) { if (j(t) && j(e) && j(n)) return this; var r = new u; return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), this.$$state.status > 0 && l(this.$$state), r }, catch: function(t) { return this.then(null, t) }, finally: function(t, e) { return this.then(function(e) { return m(e, g, t) }, function(e) { return m(e, $, t) }, e) } }); var g = v;

            function S(t) { if (!G(t)) throw r("norslvr", "Expected resolverFn, got '{0}'", t); var e = new u; return t(function(t) { f(e, t) }, function(t) { p(e, t) }), e } return S.prototype = u.prototype, S.defer = s, S.reject = $, S.when = v, S.resolve = g, S.all = function(t) { var e = new u,
                    n = 0,
                    r = z(t) ? [] : {}; return C(t, function(t, i) { n++, v(t).then(function(t) { r[i] = t, --n || f(e, r) }, function(t) { p(e, t) }) }), 0 === n && f(e, r), e }, S.race = function(t) { var e = s(); return C(t, function(t) { v(t).then(e.resolve, e.reject) }), e.promise }, S }

        function Hr(t) { return !!t.pur }

        function _r(t) { t.pur = !0 }

        function Ur(t) { _r(t.$$state) }

        function Br() { this.$get = ["$window", "$timeout", function(t, e) { var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
                    r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
                    i = !!n,
                    o = i ? function(t) { var e = n(t); return function() { r(e) } } : function(t) { var n = e(t, 16.66, !1); return function() { e.cancel(n) } }; return o.supported = i, o }] }

        function Fr() { var t = 10,
                e = i("$rootScope"),
                n = null,
                r = null;
            this.digestTtl = function(e) { return arguments.length && (t = e), t }, this.$get = ["$exceptionHandler", "$parse", "$browser", function(i, a, s) {
                function u(t) { t.currentScope.$$destroyed = !0 }

                function c() { this.$id = E(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$suspended = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null } c.prototype = { constructor: c, $new: function(t, e) { var n; return e = e || this, t ? (n = new c).$root = this.$root : (this.$$ChildScope || (this.$$ChildScope = function(t) {
                            function e() { this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = E(), this.$$ChildScope = null, this.$$suspended = !1 } return e.prototype = t, e }(this)), n = new this.$$ChildScope), n.$parent = e, n.$$prevSibling = e.$$childTail, e.$$childHead ? (e.$$childTail.$$nextSibling = n, e.$$childTail = n) : e.$$childHead = e.$$childTail = n, (t || e !== this) && n.$on("$destroy", u), n }, $watch: function(t, e, r, i) { var o = a(t),
                            s = G(e) ? e : L; if (o.$$watchDelegate) return o.$$watchDelegate(this, s, r, o, t); var u = this,
                            c = u.$$watchers,
                            l = { fn: s, last: P, get: o, exp: i || t, eq: !!r }; return n = null, c || ((c = u.$$watchers = []).$$digestWatchIndex = -1), c.unshift(l), c.$$digestWatchIndex++, g(this, 1),
                            function() { var t = ot(c, l);
                                t >= 0 && (g(u, -1), t < c.$$digestWatchIndex && c.$$digestWatchIndex--), n = null } }, $watchGroup: function(t, e) { var n = new Array(t.length),
                            r = new Array(t.length),
                            i = [],
                            o = this,
                            a = !1,
                            s = !0; if (!t.length) { var u = !0; return o.$evalAsync(function() { u && e(r, r, o) }),
                                function() { u = !1 } } if (1 === t.length) return this.$watch(t[0], function(t, i, o) { r[0] = t, n[0] = i, e(r, t === i ? r : n, o) });

                        function c() { a = !1; try { s ? (s = !1, e(r, r, o)) : e(r, n, o) } finally { for (var i = 0; i < t.length; i++) n[i] = r[i] } } return C(t, function(t, e) { var n = o.$watch(t, function(t) { r[e] = t, a || (a = !0, o.$evalAsync(c)) });
                                i.push(n) }),
                            function() { for (; i.length;) i.shift()() } }, $watchCollection: function(t, e) { $.$$pure = a(t).literal, $.$stateful = !$.$$pure; var n, r, i, o = this,
                            s = e.length > 1,
                            u = 0,
                            c = a(t, $),
                            l = [],
                            p = {},
                            h = !0,
                            d = 0;

                        function $(t) { var e, i, o, a; if (!j(n = t)) { if (_(n))
                                    if (b(n)) { r !== l && (d = (r = l).length = 0, u++), e = n.length, d !== e && (u++, r.length = d = e); for (var s = 0; s < e; s++) a = r[s], o = n[s], a != a && o != o || a === o || (u++, r[s] = o) } else { for (i in r !== p && (r = p = {}, d = 0, u++), e = 0, n) f.call(n, i) && (e++, o = n[i], a = r[i], i in r ? a != a && o != o || a === o || (u++, r[i] = o) : (d++, r[i] = o, u++)); if (d > e)
                                            for (i in u++, r) f.call(n, i) || (d--, delete r[i]) } else r !== n && (r = n, u++); return u } } return this.$watch(c, function() { if (h ? (h = !1, e(n, n, o)) : e(n, i, o), s)
                                if (_(n))
                                    if (b(n)) { i = new Array(n.length); for (var t = 0; t < n.length; t++) i[t] = n[t] } else
                                        for (var r in i = {}, n) f.call(n, r) && (i[r] = n[r]);
                            else i = n }) }, $digest: function() { var o, a, u, c, f, d, g, S, b, C = t,
                            w = p.length ? l : this,
                            x = [];
                        m("$digest"), s.$$checkUrlChange(), this === l && null !== r && (s.defer.cancel(r), y()), n = null;
                        do { f = !1, g = w; for (var E = 0; E < p.length; E++) { try {
                                    (0, (b = p[E]).fn)(b.scope, b.locals) } catch (t) { i(t) } n = null } p.length = 0;
                            t: do { if (c = !g.$$suspended && g.$$watchers)
                                    for (c.$$digestWatchIndex = c.length; c.$$digestWatchIndex--;) try { if (o = c[c.$$digestWatchIndex])
                                            if ((a = (0, o.get)(g)) === (u = o.last) || (o.eq ? ut(a, u) : N(a) && N(u))) { if (o === n) { f = !1; break t } } else f = !0, n = o, o.last = o.eq ? at(a, null) : a, (0, o.fn)(a, u === P ? a : u, g), C < 5 && (x[S = 4 - C] || (x[S] = []), x[S].push({ msg: G(o.exp) ? "fn: " + (o.exp.name || o.exp.toString()) : o.exp, newVal: a, oldVal: u })) } catch (t) { i(t) }
                                if (!(d = !g.$$suspended && g.$$watchersCount && g.$$childHead || g !== w && g.$$nextSibling))
                                    for (; g !== w && !(d = g.$$nextSibling);) g = g.$parent } while (g = d); if ((f || p.length) && !C--) throw v(), e("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, x) } while (f || p.length); for (v(); $ < h.length;) try { h[$++]() } catch (t) { i(t) } h.length = $ = 0, s.$$checkUrlChange() }, $suspend: function() { this.$$suspended = !0 }, $isSuspended: function() { return this.$$suspended }, $resume: function() { this.$$suspended = !1 }, $destroy: function() { if (!this.$$destroyed) { var t = this.$parent; for (var e in this.$broadcast("$destroy"), this.$$destroyed = !0, this === l && s.$$applicationDestroyed(), g(this, -this.$$watchersCount), this.$$listenerCount) S(this, this.$$listenerCount[e], e);
                            t && t.$$childHead === this && (t.$$childHead = this.$$nextSibling), t && t.$$childTail === this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = L, this.$on = this.$watch = this.$watchGroup = function() { return L }, this.$$listeners = {}, this.$$nextSibling = null,
                                function t(e) { 9 === o && (e.$$childHead && t(e.$$childHead), e.$$nextSibling && t(e.$$nextSibling)), e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null }(this) } }, $eval: function(t, e) { return a(t)(this, e) }, $evalAsync: function(t, e) { l.$$phase || p.length || s.defer(function() { p.length && l.$digest() }, null, "$evalAsync"), p.push({ scope: this, fn: a(t), locals: e }) }, $$postDigest: function(t) { h.push(t) }, $apply: function(t) { try { m("$apply"); try { return this.$eval(t) } finally { v() } } catch (t) { i(t) } finally { try { l.$digest() } catch (t) { throw i(t), t } } }, $applyAsync: function(t) { var e = this;
                        t && d.push(function() { e.$eval(t) }), t = a(t), null === r && (r = s.defer(function() { l.$apply(y) }, null, "$applyAsync")) }, $on: function(t, e) { var n = this.$$listeners[t];
                        n || (this.$$listeners[t] = n = []), n.push(e); var r = this;
                        do { r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++ } while (r = r.$parent); var i = this; return function() { var r = n.indexOf(e); - 1 !== r && (delete n[r], S(i, 1, t)) } }, $emit: function(t, e) { var n, r, o, a = [],
                            s = this,
                            u = !1,
                            c = { name: t, targetScope: s, stopPropagation: function() { u = !0 }, preventDefault: function() { c.defaultPrevented = !0 }, defaultPrevented: !1 },
                            l = ft([c], arguments, 1);
                        do { for (n = s.$$listeners[t] || a, c.currentScope = s, r = 0, o = n.length; r < o; r++)
                                if (n[r]) try { n[r].apply(null, l) } catch (t) { i(t) } else n.splice(r, 1), r--, o--; if (u) break;
                            s = s.$parent } while (s); return c.currentScope = null, c }, $broadcast: function(t, e) { var n = this,
                            r = this,
                            o = { name: t, targetScope: this, preventDefault: function() { o.defaultPrevented = !0 }, defaultPrevented: !1 }; if (!this.$$listenerCount[t]) return o; for (var a, s, u, c = ft([o], arguments, 1); n = r;) { for (o.currentScope = n, s = 0, u = (a = n.$$listeners[t] || []).length; s < u; s++)
                                if (a[s]) try { a[s].apply(null, c) } catch (t) { i(t) } else a.splice(s, 1), s--, u--; if (!(r = n.$$listenerCount[t] && n.$$childHead || n !== this && n.$$nextSibling))
                                for (; n !== this && !(r = n.$$nextSibling);) n = n.$parent } return o.currentScope = null, o } }; var l = new c,
                    p = l.$$asyncQueue = [],
                    h = l.$$postDigestQueue = [],
                    d = l.$$applyAsyncQueue = [],
                    $ = 0; return l;

                function m(t) { if (l.$$phase) throw e("inprog", "{0} already in progress", l.$$phase);
                    l.$$phase = t }

                function v() { l.$$phase = null }

                function g(t, e) { do { t.$$watchersCount += e } while (t = t.$parent) }

                function S(t, e, n) { do { t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n] } while (t = t.$parent) }

                function P() {}

                function y() { for (; d.length;) try { d.shift()() } catch (t) { i(t) } r = null } }] }

        function qr() { var t = /^\s*(https?|s?ftp|mailto|tel|file):/,
                e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function(e) { return H(e) ? (t = e, this) : t }, this.imgSrcSanitizationWhitelist = function(t) { return H(t) ? (e = t, this) : e }, this.$get = function() { return function(n, r) { var i = r ? e : t,
                        o = ui(n && n.trim()).href; return "" === o || o.match(i) ? n : "unsafe:" + o } } } Mr.prototype = { compile: function(t) { var e = this;
                this.state = { nextId: 0, filters: {}, fn: { vars: [], body: [], own: {} }, assign: { vars: [], body: [], own: {} }, inputs: [] }, Or(t, e.$filter); var n, r = ""; if (this.stage = "assign", n = Ar(t)) { this.state.computing = "assign"; var i = this.nextId();
                    this.recurse(n, i), this.return_(i), r = "fn.assign=" + this.generateFunction("assign", "s,v,l") } var o = kr(t.body);
                e.stage = "inputs", C(o, function(t, n) { var r = "fn" + n;
                    e.state[r] = { vars: [], body: [], own: {} }, e.state.computing = r; var i = e.nextId();
                    e.recurse(t, i), e.return_(i), e.state.inputs.push({ name: r, isPure: t.isPure }), t.watchId = n }), this.state.computing = "fn", this.stage = "main", this.recurse(t); var a = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + r + this.watchFns() + "return fn;",
                    s = new Function("$filter", "getStringValue", "ifDefined", "plus", a)(this.$filter, gr, Cr, wr); return this.state = this.stage = void 0, s }, USE: "use", STRICT: "strict", watchFns: function() { var t = [],
                    e = this.state.inputs,
                    n = this; return C(e, function(e) { t.push("var " + e.name + "=" + n.generateFunction(e.name, "s")), e.isPure && t.push(e.name, ".isPure=" + JSON.stringify(e.isPure) + ";") }), e.length && t.push("fn.inputs=[" + e.map(function(t) { return t.name }).join(",") + "];"), t.join("") }, generateFunction: function(t, e) { return "function(" + e + "){" + this.varsPrefix(t) + this.body(t) + "};" }, filterPrefix: function() { var t = [],
                    e = this; return C(this.state.filters, function(n, r) { t.push(n + "=$filter(" + e.escape(r) + ")") }), t.length ? "var " + t.join(",") + ";" : "" }, varsPrefix: function(t) { return this.state[t].vars.length ? "var " + this.state[t].vars.join(",") + ";" : "" }, body: function(t) { return this.state[t].body.join("") }, recurse: function(t, e, n, r, i, o) { var a, s, u, c, l, f = this; if (r = r || L, !o && H(t.watchId)) return e = e || this.nextId(), void this.if_("i", this.lazyAssign(e, this.computedMember("i", t.watchId)), this.lazyRecurse(t, e, n, r, i, !0)); switch (t.type) {
                    case br.Program:
                        C(t.body, function(e, n) { f.recurse(e.expression, void 0, void 0, function(t) { s = t }), n !== t.body.length - 1 ? f.current().body.push(s, ";") : f.return_(s) }); break;
                    case br.Literal:
                        c = this.escape(t.value), this.assign(e, c), r(e || c); break;
                    case br.UnaryExpression:
                        this.recurse(t.argument, void 0, void 0, function(t) { s = t }), c = t.operator + "(" + this.ifDefined(s, 0) + ")", this.assign(e, c), r(c); break;
                    case br.BinaryExpression:
                        this.recurse(t.left, void 0, void 0, function(t) { a = t }), this.recurse(t.right, void 0, void 0, function(t) { s = t }), c = "+" === t.operator ? this.plus(a, s) : "-" === t.operator ? this.ifDefined(a, 0) + t.operator + this.ifDefined(s, 0) : "(" + a + ")" + t.operator + "(" + s + ")", this.assign(e, c), r(c); break;
                    case br.LogicalExpression:
                        e = e || this.nextId(), f.recurse(t.left, e), f.if_("&&" === t.operator ? e : f.not(e), f.lazyRecurse(t.right, e)), r(e); break;
                    case br.ConditionalExpression:
                        e = e || this.nextId(), f.recurse(t.test, e), f.if_(e, f.lazyRecurse(t.alternate, e), f.lazyRecurse(t.consequent, e)), r(e); break;
                    case br.Identifier:
                        e = e || this.nextId(), n && (n.context = "inputs" === f.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", t.name) + "?l:s"), n.computed = !1, n.name = t.name), f.if_("inputs" === f.stage || f.not(f.getHasOwnProperty("l", t.name)), function() { f.if_("inputs" === f.stage || "s", function() { i && 1 !== i && f.if_(f.isNull(f.nonComputedMember("s", t.name)), f.lazyAssign(f.nonComputedMember("s", t.name), "{}")), f.assign(e, f.nonComputedMember("s", t.name)) }) }, e && f.lazyAssign(e, f.nonComputedMember("l", t.name))), r(e); break;
                    case br.MemberExpression:
                        a = n && (n.context = this.nextId()) || this.nextId(), e = e || this.nextId(), f.recurse(t.object, a, void 0, function() { f.if_(f.notNull(a), function() { t.computed ? (s = f.nextId(), f.recurse(t.property, s), f.getStringValue(s), i && 1 !== i && f.if_(f.not(f.computedMember(a, s)), f.lazyAssign(f.computedMember(a, s), "{}")), c = f.computedMember(a, s), f.assign(e, c), n && (n.computed = !0, n.name = s)) : (i && 1 !== i && f.if_(f.isNull(f.nonComputedMember(a, t.property.name)), f.lazyAssign(f.nonComputedMember(a, t.property.name), "{}")), c = f.nonComputedMember(a, t.property.name), f.assign(e, c), n && (n.computed = !1, n.name = t.property.name)) }, function() { f.assign(e, "undefined") }), r(e) }, !!i); break;
                    case br.CallExpression:
                        e = e || this.nextId(), t.filter ? (s = f.filter(t.callee.name), u = [], C(t.arguments, function(t) { var e = f.nextId();
                            f.recurse(t, e), u.push(e) }), c = s + "(" + u.join(",") + ")", f.assign(e, c), r(e)) : (s = f.nextId(), a = {}, u = [], f.recurse(t.callee, s, a, function() { f.if_(f.notNull(s), function() { C(t.arguments, function(e) { f.recurse(e, t.constant ? void 0 : f.nextId(), void 0, function(t) { u.push(t) }) }), c = a.name ? f.member(a.context, a.name, a.computed) + "(" + u.join(",") + ")" : s + "(" + u.join(",") + ")", f.assign(e, c) }, function() { f.assign(e, "undefined") }), r(e) })); break;
                    case br.AssignmentExpression:
                        s = this.nextId(), a = {}, this.recurse(t.left, void 0, a, function() { f.if_(f.notNull(a.context), function() { f.recurse(t.right, s), c = f.member(a.context, a.name, a.computed) + t.operator + s, f.assign(e, c), r(e || c) }) }, 1); break;
                    case br.ArrayExpression:
                        u = [], C(t.elements, function(e) { f.recurse(e, t.constant ? void 0 : f.nextId(), void 0, function(t) { u.push(t) }) }), c = "[" + u.join(",") + "]", this.assign(e, c), r(e || c); break;
                    case br.ObjectExpression:
                        u = [], l = !1, C(t.properties, function(t) { t.computed && (l = !0) }), l ? (e = e || this.nextId(), this.assign(e, "{}"), C(t.properties, function(t) { t.computed ? (a = f.nextId(), f.recurse(t.key, a)) : a = t.key.type === br.Identifier ? t.key.name : "" + t.key.value, s = f.nextId(), f.recurse(t.value, s), f.assign(f.member(e, a, t.computed), s) })) : (C(t.properties, function(e) { f.recurse(e.value, t.constant ? void 0 : f.nextId(), void 0, function(t) { u.push(f.escape(e.key.type === br.Identifier ? e.key.name : "" + e.key.value) + ":" + t) }) }), c = "{" + u.join(",") + "}", this.assign(e, c)), r(e || c); break;
                    case br.ThisExpression:
                        this.assign(e, "s"), r(e || "s"); break;
                    case br.LocalsExpression:
                        this.assign(e, "l"), r(e || "l"); break;
                    case br.NGValueParameter:
                        this.assign(e, "v"), r(e || "v") } }, getHasOwnProperty: function(t, e) { var n = t + "." + e,
                    r = this.current().own; return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, t + "&&(" + this.escape(e) + " in " + t + ")")), r[n] }, assign: function(t, e) { if (t) return this.current().body.push(t, "=", e, ";"), t }, filter: function(t) { return this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)), this.state.filters[t] }, ifDefined: function(t, e) { return "ifDefined(" + t + "," + this.escape(e) + ")" }, plus: function(t, e) { return "plus(" + t + "," + e + ")" }, return_: function(t) { this.current().body.push("return ", t, ";") }, if_: function(t, e, n) { if (!0 === t) e();
                else { var r = this.current().body;
                    r.push("if(", t, "){"), e(), r.push("}"), n && (r.push("else{"), n(), r.push("}")) } }, not: function(t) { return "!(" + t + ")" }, isNull: function(t) { return t + "==null" }, notNull: function(t) { return t + "!=null" }, nonComputedMember: function(t, e) { return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? t + "." + e : t + '["' + e.replace(/[^$_a-zA-Z0-9]/g, this.stringEscapeFn) + '"]' }, computedMember: function(t, e) { return t + "[" + e + "]" }, member: function(t, e, n) { return n ? this.computedMember(t, e) : this.nonComputedMember(t, e) }, getStringValue: function(t) { this.assign(t, "getStringValue(" + t + ")") }, lazyRecurse: function(t, e, n, r, i, o) { var a = this; return function() { a.recurse(t, e, n, r, i, o) } }, lazyAssign: function(t, e) { var n = this; return function() { n.assign(t, e) } }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function(t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }, escape: function(t) { if (B(t)) return "'" + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'"; if (F(t)) return t.toString(); if (!0 === t) return "true"; if (!1 === t) return "false"; if (null === t) return "null"; if (void 0 === t) return "undefined"; throw mr("esc", "IMPOSSIBLE") }, nextId: function(t, e) { var n = "v" + this.state.nextId++; return t || this.current().vars.push(n + (e ? "=" + e : "")), n }, current: function() { return this.state[this.state.computing] } }, Nr.prototype = { compile: function(t) { var e, n, r = this;
                Or(t, r.$filter), (e = Ar(t)) && (n = this.recurse(e)); var i, o = kr(t.body);
                o && (i = [], C(o, function(t, e) { var n = r.recurse(t);
                    n.isPure = t.isPure, t.input = n, i.push(n), t.watchId = e })); var a = [];
                C(t.body, function(t) { a.push(r.recurse(t.expression)) }); var s = 0 === t.body.length ? L : 1 === t.body.length ? a[0] : function(t, e) { var n; return C(a, function(r) { n = r(t, e) }), n }; return n && (s.assign = function(t, e, r) { return n(t, r, e) }), i && (s.inputs = i), s }, recurse: function(t, e, n) { var r, i, o, a = this; if (t.input) return this.inputs(t.input, t.watchId); switch (t.type) {
                    case br.Literal:
                        return this.value(t.value, e);
                    case br.UnaryExpression:
                        return i = this.recurse(t.argument), this["unary" + t.operator](i, e);
                    case br.BinaryExpression:
                    case br.LogicalExpression:
                        return r = this.recurse(t.left), i = this.recurse(t.right), this["binary" + t.operator](r, i, e);
                    case br.ConditionalExpression:
                        return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), e);
                    case br.Identifier:
                        return a.identifier(t.name, e, n);
                    case br.MemberExpression:
                        return r = this.recurse(t.object, !1, !!n), t.computed || (i = t.property.name), t.computed && (i = this.recurse(t.property)), t.computed ? this.computedMember(r, i, e, n) : this.nonComputedMember(r, i, e, n);
                    case br.CallExpression:
                        return o = [], C(t.arguments, function(t) { o.push(a.recurse(t)) }), t.filter && (i = this.$filter(t.callee.name)), t.filter || (i = this.recurse(t.callee, !0)), t.filter ? function(t, n, r, a) { for (var s = [], u = 0; u < o.length; ++u) s.push(o[u](t, n, r, a)); var c = i.apply(void 0, s, a); return e ? { context: void 0, name: void 0, value: c } : c } : function(t, n, r, a) { var s, u = i(t, n, r, a); if (null != u.value) { for (var c = [], l = 0; l < o.length; ++l) c.push(o[l](t, n, r, a));
                                s = u.value.apply(u.context, c) } return e ? { value: s } : s };
                    case br.AssignmentExpression:
                        return r = this.recurse(t.left, !0, 1), i = this.recurse(t.right),
                            function(t, n, o, a) { var s = r(t, n, o, a),
                                    u = i(t, n, o, a); return s.context[s.name] = u, e ? { value: u } : u };
                    case br.ArrayExpression:
                        return o = [], C(t.elements, function(t) { o.push(a.recurse(t)) }),
                            function(t, n, r, i) { for (var a = [], s = 0; s < o.length; ++s) a.push(o[s](t, n, r, i)); return e ? { value: a } : a };
                    case br.ObjectExpression:
                        return o = [], C(t.properties, function(t) { t.computed ? o.push({ key: a.recurse(t.key), computed: !0, value: a.recurse(t.value) }) : o.push({ key: t.key.type === br.Identifier ? t.key.name : "" + t.key.value, computed: !1, value: a.recurse(t.value) }) }),
                            function(t, n, r, i) { for (var a = {}, s = 0; s < o.length; ++s) o[s].computed ? a[o[s].key(t, n, r, i)] = o[s].value(t, n, r, i) : a[o[s].key] = o[s].value(t, n, r, i); return e ? { value: a } : a };
                    case br.ThisExpression:
                        return function(t) { return e ? { value: t } : t };
                    case br.LocalsExpression:
                        return function(t, n) { return e ? { value: n } : n };
                    case br.NGValueParameter:
                        return function(t, n, r) { return e ? { value: r } : r } } }, "unary+": function(t, e) { return function(n, r, i, o) { var a = t(n, r, i, o); return a = H(a) ? +a : 0, e ? { value: a } : a } }, "unary-": function(t, e) { return function(n, r, i, o) { var a = t(n, r, i, o); return a = H(a) ? -a : -0, e ? { value: a } : a } }, "unary!": function(t, e) { return function(n, r, i, o) { var a = !t(n, r, i, o); return e ? { value: a } : a } }, "binary+": function(t, e, n) { return function(r, i, o, a) { var s = wr(t(r, i, o, a), e(r, i, o, a)); return n ? { value: s } : s } }, "binary-": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a),
                        u = e(r, i, o, a),
                        c = (H(s) ? s : 0) - (H(u) ? u : 0); return n ? { value: c } : c } }, "binary*": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) * e(r, i, o, a); return n ? { value: s } : s } }, "binary/": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) / e(r, i, o, a); return n ? { value: s } : s } }, "binary%": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) % e(r, i, o, a); return n ? { value: s } : s } }, "binary===": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) === e(r, i, o, a); return n ? { value: s } : s } }, "binary!==": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) !== e(r, i, o, a); return n ? { value: s } : s } }, "binary==": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) == e(r, i, o, a); return n ? { value: s } : s } }, "binary!=": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) != e(r, i, o, a); return n ? { value: s } : s } }, "binary<": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) < e(r, i, o, a); return n ? { value: s } : s } }, "binary>": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) > e(r, i, o, a); return n ? { value: s } : s } }, "binary<=": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) <= e(r, i, o, a); return n ? { value: s } : s } }, "binary>=": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) >= e(r, i, o, a); return n ? { value: s } : s } }, "binary&&": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) && e(r, i, o, a); return n ? { value: s } : s } }, "binary||": function(t, e, n) { return function(r, i, o, a) { var s = t(r, i, o, a) || e(r, i, o, a); return n ? { value: s } : s } }, "ternary?:": function(t, e, n, r) { return function(i, o, a, s) { var u = t(i, o, a, s) ? e(i, o, a, s) : n(i, o, a, s); return r ? { value: u } : u } }, value: function(t, e) { return function() { return e ? { context: void 0, name: void 0, value: t } : t } }, identifier: function(t, e, n) { return function(r, i, o, a) { var s = i && t in i ? i : r;
                    n && 1 !== n && s && null == s[t] && (s[t] = {}); var u = s ? s[t] : void 0; return e ? { context: s, name: t, value: u } : u } }, computedMember: function(t, e, n, r) { return function(i, o, a, s) { var u, c, l = t(i, o, a, s); return null != l && (u = gr(u = e(i, o, a, s)), r && 1 !== r && l && !l[u] && (l[u] = {}), c = l[u]), n ? { context: l, name: u, value: c } : c } }, nonComputedMember: function(t, e, n, r) { return function(i, o, a, s) { var u = t(i, o, a, s);
                    r && 1 !== r && u && null == u[e] && (u[e] = {}); var c = null != u ? u[e] : void 0; return n ? { context: u, name: e, value: c } : c } }, inputs: function(t, e) { return function(n, r, i, o) { return o ? o[e] : t(n, r, i) } } }, Vr.prototype = { constructor: Vr, parse: function(t) { var e = this.getAst(t),
                    n = this.astCompiler.compile(e.ast); return n.literal = function(t) { return 0 === t.body.length || 1 === t.body.length && (t.body[0].expression.type === br.Literal || t.body[0].expression.type === br.ArrayExpression || t.body[0].expression.type === br.ObjectExpression) }(e.ast), n.constant = function(t) { return t.constant }(e.ast), n.oneTime = e.oneTime, n }, getAst: function(t) { var e = !1; return ":" === (t = t.trim()).charAt(0) && ":" === t.charAt(1) && (e = !0, t = t.substring(2)), { ast: this.ast.ast(t), oneTime: e } } }; var zr = i("$sce"),
            Wr = { HTML: "html", CSS: "css", MEDIA_URL: "mediaUrl", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
            Gr = /_([a-z])/g;

        function Kr(t) { return t.replace(Gr, ee) }

        function Jr(t) { var e = []; return H(t) && C(t, function(t) { e.push(function(t) { if ("self" === t) return t; if (B(t)) { if (t.indexOf("***") > -1) throw zr("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t); return t = et(t).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"), new RegExp("^" + t + "$") } if (K(t)) return new RegExp("^" + t.source + "$"); throw zr("imatcher", 'Matchers may only be "self", string patterns or RegExp objects') }(t)) }), e }

        function Zr() { this.SCE_CONTEXTS = Wr; var e = ["self"],
                n = [];
            this.resourceUrlWhitelist = function(t) { return arguments.length && (e = Jr(t)), e }, this.resourceUrlBlacklist = function(t) { return arguments.length && (n = Jr(t)), n }, this.$get = ["$injector", "$$sanitizeUri", function(r, i) { var o = function(t) { throw zr("unsafe", "Attempting to use an unsafe value in a safe context.") };

                function a(e, n) { return "self" === e ? ci(n, si) || function(e) { return ci(e, function() { if (t.document.baseURI) return t.document.baseURI;
                            oi || ((oi = t.document.createElement("a")).href = ".", oi = oi.cloneNode(!1)); return oi.href }()) }(n) : !!e.exec(n.href) }

                function s(t) { var e = function(t) { this.$$unwrapTrustedValue = function() { return t } }; return t && (e.prototype = new t), e.prototype.valueOf = function() { return this.$$unwrapTrustedValue() }, e.prototype.toString = function() { return this.$$unwrapTrustedValue().toString() }, e } r.has("$sanitize") && (o = r.get("$sanitize")); var u = s(),
                    c = {}; return c[Wr.HTML] = s(u), c[Wr.CSS] = s(u), c[Wr.MEDIA_URL] = s(u), c[Wr.URL] = s(c[Wr.MEDIA_URL]), c[Wr.JS] = s(u), c[Wr.RESOURCE_URL] = s(c[Wr.URL]), { trustAs: function(t, e) { var n = c.hasOwnProperty(t) ? c[t] : null; if (!n) throw zr("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e); if (null === e || j(e) || "" === e) return e; if ("string" != typeof e) throw zr("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t); return new n(e) }, getTrusted: function(t, r) { if (null === r || j(r) || "" === r) return r; var s = c.hasOwnProperty(t) ? c[t] : null; if (s && r instanceof s) return r.$$unwrapTrustedValue(); if (G(r.$$unwrapTrustedValue) && (r = r.$$unwrapTrustedValue()), t === Wr.MEDIA_URL || t === Wr.URL) return i(r.toString(), t === Wr.MEDIA_URL); if (t === Wr.RESOURCE_URL) { if (function(t) { var r, i, o = ui(t.toString()),
                                        s = !1; for (r = 0, i = e.length; r < i; r++)
                                        if (a(e[r], o)) { s = !0; break } if (s)
                                        for (r = 0, i = n.length; r < i; r++)
                                            if (a(n[r], o)) { s = !1; break } return s }(r)) return r; throw zr("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", r.toString()) } if (t === Wr.HTML) return o(r); throw zr("unsafe", "Attempting to use an unsafe value in a safe context.") }, valueOf: function(t) { return t instanceof u ? t.$$unwrapTrustedValue() : t } } }] }

        function Yr() { var t = !0;
            this.enabled = function(e) { return arguments.length && (t = !!e), t }, this.$get = ["$parse", "$sceDelegate", function(e, n) { if (t && o < 8) throw zr("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information."); var r = Wt(Wr);
                r.isEnabled = function() { return t }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function(t, e) { return e }, r.valueOf = R), r.parseAs = function(t, n) { var i = e(n); return i.literal && i.constant ? i : e(n, function(e) { return r.getTrusted(t, e) }) }; var i = r.parseAs,
                    a = r.getTrusted,
                    s = r.trustAs; return C(Wr, function(t, e) { var n = p(e);
                    r[Kr("parse_as_" + n)] = function(e) { return i(t, e) }, r[Kr("get_trusted_" + n)] = function(e) { return a(t, e) }, r[Kr("trust_as_" + n)] = function(e) { return s(t, e) } }), r }] }

        function Qr() { this.$get = ["$window", "$document", function(t, e) { var n = {},
                    r = !(!(t.nw && t.nw.process) && t.chrome && (t.chrome.app && t.chrome.app.runtime || !t.chrome.app && t.chrome.runtime && t.chrome.runtime.id)) && t.history && t.history.pushState,
                    i = M((/android (\d+)/.exec(p((t.navigator || {}).userAgent)) || [])[1]),
                    a = /Boxee/i.test((t.navigator || {}).userAgent),
                    s = e[0] || {},
                    u = s.body && s.body.style,
                    c = !1,
                    l = !1; return u && (c = !!("transition" in u || "webkitTransition" in u), l = !!("animation" in u || "webkitAnimation" in u)), { history: !(!r || i < 4 || a), hasEvent: function(t) { if ("input" === t && o) return !1; if (j(n[t])) { var e = s.createElement("div");
                            n[t] = "on" + t in e } return n[t] }, csp: ct(), transitions: c, animations: l, android: i } }] }

        function Xr() { this.$get = I(function(t) { return new function(t) { var e = {},
                        n = [],
                        r = this.ALL_TASKS_TYPE = "$$all$$",
                        i = this.DEFAULT_TASK_TYPE = "$$default$$";

                    function o() { var t = n.pop(); return t && t.cb }

                    function a(t) { for (var e = n.length - 1; e >= 0; --e) { var r = n[e]; if (r.type === t) return n.splice(e, 1), r.cb } } this.completeTask = function(n, s) { s = s || i; try { n() } finally {! function(t) { e[t = t || i] && (e[t]--, e[r]--) }(s); var u = e[s],
                                c = e[r]; if (!c || !u)
                                for (var l, f = c ? a : o; l = f(s);) try { l() } catch (e) { t.error(e) } } }, this.incTaskCount = function(t) { e[t = t || i] = (e[t] || 0) + 1, e[r] = (e[r] || 0) + 1 }, this.notifyWhenNoPendingTasks = function(t, i) { e[i = i || r] ? n.push({ type: i, cb: t }) : t() } }(t) }) } var ti = i("$templateRequest");

        function ei() { var t;
            this.httpOptions = function(e) { return e ? (t = e, this) : t }, this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function(e, n, r, i, o) {
                function a(s, u) { a.totalPendingRequests++, B(s) && !j(n.get(s)) || (s = o.getTrustedResourceUrl(s)); var c = r.defaults && r.defaults.transformResponse; return z(c) ? c = c.filter(function(t) { return t !== jn }) : c === jn && (c = null), r.get(s, T({ cache: n, transformResponse: c }, t)).finally(function() { a.totalPendingRequests-- }).then(function(t) { return n.put(s, t.data) }, function(t) { u || (t = ti("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", s, t.status, t.statusText), e(t)); return i.reject(t) }) } return a.totalPendingRequests = 0, a }] }

        function ni() { this.$get = ["$rootScope", "$browser", "$location", function(t, e, n) { var r = { findBindings: function(t, e, n) { var r = []; return C(t.getElementsByClassName("ng-binding"), function(t) { var i = P.element(t).data("$binding");
                            i && C(i, function(i) { n ? new RegExp("(^|\\s)" + et(e) + "(\\s|\\||$)").test(i) && r.push(t) : -1 !== i.indexOf(e) && r.push(t) }) }), r }, findModels: function(t, e, n) { for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) { var o = "[" + r[i] + "model" + (n ? "=" : "*=") + '"' + e + '"]',
                                a = t.querySelectorAll(o); if (a.length) return a } }, getLocation: function() { return n.url() }, setLocation: function(e) { e !== n.url() && (n.url(e), t.$digest()) }, whenStable: function(t) { e.notifyWhenNoOutstandingRequests(t) } }; return r }] } var ri = i("$timeout");

        function ii() { this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(t, e, n, r, i) { var o = {};

                function a(a, s, u) { G(a) || (u = s, s = a, a = L); var c, l = pt(arguments, 3),
                        f = H(u) && !u,
                        p = (f ? r : n).defer(),
                        h = p.promise; return c = e.defer(function() { try { p.resolve(a.apply(null, l)) } catch (t) { p.reject(t), i(t) } finally { delete o[h.$$timeoutId] } f || t.$apply() }, s, "$timeout"), h.$$timeoutId = c, o[c] = p, h } return a.cancel = function(t) { if (!t) return !1; if (!t.hasOwnProperty("$$timeoutId")) throw ri("badprom", "`$timeout.cancel()` called with a promise that was not generated by `$timeout()`."); if (!o.hasOwnProperty(t.$$timeoutId)) return !1; var n = t.$$timeoutId,
                        r = o[n]; return Ur(r.promise), r.reject("canceled"), delete o[n], e.defer.cancel(n) }, a }] } var oi, ai = t.document.createElement("a"),
            si = ui(t.location.href);

        function ui(t) { if (!B(t)) return t; var e = t; return o && (ai.setAttribute("href", e), e = ai.href), ai.setAttribute("href", e), { href: ai.href, protocol: ai.protocol ? ai.protocol.replace(/:$/, "") : "", host: ai.host, search: ai.search ? ai.search.replace(/^\?/, "") : "", hash: ai.hash ? ai.hash.replace(/^#/, "") : "", hostname: ai.hostname, port: ai.port, pathname: "/" === ai.pathname.charAt(0) ? ai.pathname : "/" + ai.pathname } }

        function ci(t, e) { return t = ui(t), e = ui(e), t.protocol === e.protocol && t.host === e.host }

        function li() { this.$get = I(t) }

        function fi(t) { var e = t[0] || {},
                n = {},
                r = "";

            function i(t) { try { return decodeURIComponent(t) } catch (e) { return t } } return function() { var t, o, a, s, u, c = function(t) { try { return t.cookie || "" } catch (t) { return "" } }(e); if (c !== r)
                    for (t = (r = c).split("; "), n = {}, a = 0; a < t.length; a++)(s = (o = t[a]).indexOf("=")) > 0 && (u = i(o.substring(0, s)), j(n[u]) && (n[u] = i(o.substring(s + 1)))); return n } }

        function pi() { this.$get = fi }

        function hi(t) { var e = "Filter";

            function n(r, i) { if (_(r)) { var o = {}; return C(r, function(t, e) { o[e] = n(e, t) }), o } return t.factory(r + e, i) } this.register = n, this.$get = ["$injector", function(t) { return function(n) { return t.get(n + e) } }], n("currency", Pi), n("date", Ni), n("filter", di), n("json", Vi), n("limitTo", Ii), n("lowercase", Li), n("number", yi), n("orderBy", ji), n("uppercase", Ri) }

        function di() { return function(t, e, n, r) { if (!b(t)) { if (null == t) return t; throw i("filter")("notarray", "Expected array but received: {0}", t) } var o, a; switch (r = r || "$", mi(e)) {
                    case "function":
                        o = e; break;
                    case "boolean":
                    case "null":
                    case "number":
                    case "string":
                        a = !0;
                    case "object":
                        o = function(t, e, n, r) { var i = _(t) && n in t;!0 === e ? e = ut : G(e) || (e = function(t, e) { return !j(t) && (null === t || null === e ? t === e : !(_(e) || _(t) && !D(t)) && (t = p("" + t), e = p("" + e), -1 !== t.indexOf(e))) }); return function(o) { return i && !_(o) ? $i(o, t[n], e, n, !1) : $i(o, t, e, n, r) } }(e, n, r, a); break;
                    default:
                        return t } return Array.prototype.filter.call(t, o) } }

        function $i(t, e, n, r, i, o) { var a = mi(t),
                s = mi(e); if ("string" === s && "!" === e.charAt(0)) return !$i(t, e.substring(1), n, r, i); if (z(t)) return t.some(function(t) { return $i(t, e, n, r, i) }); switch (a) {
                case "object":
                    var u; if (i) { for (u in t)
                            if (u.charAt && "$" !== u.charAt(0) && $i(t[u], e, n, r, !0)) return !0; return !o && $i(t, e, n, r, !1) } if ("object" === s) { for (u in e) { var c = e[u]; if (!G(c) && !j(c)) { var l = u === r; if (!$i(l ? t : t[u], c, n, r, l, l)) return !1 } } return !0 } return n(t, e);
                case "function":
                    return !1;
                default:
                    return n(t, e) } }

        function mi(t) { return null === t ? "null" : typeof t } fi.$inject = ["$document"], hi.$inject = ["$provide"]; var vi = 22,
            gi = ".",
            Si = "0";

        function Pi(t) { var e = t.NUMBER_FORMATS; return function(t, n, r) { j(n) && (n = e.CURRENCY_SYM), j(r) && (r = e.PATTERNS[1].maxFrac); var i = n ? /\u00A4/g : /\s*\u00A4\s*/g; return null == t ? t : bi(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(i, n) } }

        function yi(t) { var e = t.NUMBER_FORMATS; return function(t, n) { return null == t ? t : bi(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n) } }

        function bi(t, e, n, r, i) { if (!B(t) && !F(t) || isNaN(t)) return ""; var o, a = !isFinite(t),
                s = !1,
                u = Math.abs(t) + "",
                c = ""; if (a) c = "∞";
            else {
                (function(t, e, n, r) { var i = t.d,
                        o = i.length - t.i,
                        a = (e = j(e) ? Math.min(Math.max(n, o), r) : +e) + t.i,
                        s = i[a]; if (a > 0) { i.splice(Math.max(t.i, a)); for (var u = a; u < i.length; u++) i[u] = 0 } else { o = Math.max(0, o), t.i = 1, i.length = Math.max(1, a = e + 1), i[0] = 0; for (var c = 1; c < a; c++) i[c] = 0 } if (s >= 5)
                        if (a - 1 < 0) { for (var l = 0; l > a; l--) i.unshift(0), t.i++;
                            i.unshift(1), t.i++ } else i[a - 1]++; for (; o < Math.max(0, e); o++) i.push(0); var f = i.reduceRight(function(t, e, n, r) { return e += t, r[n] = e % 10, Math.floor(e / 10) }, 0);
                    f && (i.unshift(f), t.i++) })(o = function(t) { var e, n, r, i, o, a = 0; for ((n = t.indexOf(gi)) > -1 && (t = t.replace(gi, "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charAt(r) === Si; r++); if (r === (o = t.length)) e = [0], n = 1;
                    else { for (o--; t.charAt(o) === Si;) o--; for (n -= r, e = [], i = 0; r <= o; r++, i++) e[i] = +t.charAt(r) } return n > vi && (e = e.splice(0, vi - 1), a = n - 1, n = 1), { d: e, e: a, i: n } }(u), i, e.minFrac, e.maxFrac); var l = o.d,
                    f = o.i,
                    p = o.e,
                    h = []; for (s = l.reduce(function(t, e) { return t && !e }, !0); f < 0;) l.unshift(0), f++;
                f > 0 ? h = l.splice(f, l.length) : (h = l, l = [0]); var d = []; for (l.length >= e.lgSize && d.unshift(l.splice(-e.lgSize, l.length).join("")); l.length > e.gSize;) d.unshift(l.splice(-e.gSize, l.length).join(""));
                l.length && d.unshift(l.join("")), c = d.join(n), h.length && (c += r + h.join("")), p && (c += "e+" + p) } return t < 0 && !s ? e.negPre + c + e.negSuf : e.posPre + c + e.posSuf }

        function Ci(t, e, n, r) { var i = ""; for ((t < 0 || r && t <= 0) && (r ? t = 1 - t : (t = -t, i = "-")), t = "" + t; t.length < e;) t = Si + t; return n && (t = t.substr(t.length - e)), i + t }

        function wi(t, e, n, r, i) { return n = n || 0,
                function(o) { var a = o["get" + t](); return (n > 0 || a > -n) && (a += n), 0 === a && -12 === n && (a = 12), Ci(a, e, r, i) } }

        function xi(t, e, n) { return function(r, i) { var o = r["get" + t](); return i[h((n ? "STANDALONE" : "") + (e ? "SHORT" : "") + t)][o] } }

        function Ei(t) { var e = new Date(t, 0, 1).getDay(); return new Date(t, 0, (e <= 4 ? 5 : 12) - e) }

        function Oi(t) { return function(e) { var n, r = Ei(e.getFullYear()),
                    i = +(n = e, new Date(n.getFullYear(), n.getMonth(), n.getDate() + (4 - n.getDay()))) - +r; return Ci(1 + Math.round(i / 6048e5), t) } }

        function ki(t, e) { return t.getFullYear() <= 0 ? e.ERAS[0] : e.ERAS[1] } Pi.$inject = ["$locale"], yi.$inject = ["$locale"]; var Ti = { yyyy: wi("FullYear", 4, 0, !1, !0), yy: wi("FullYear", 2, 0, !0, !0), y: wi("FullYear", 1, 0, !1, !0), MMMM: xi("Month"), MMM: xi("Month", !0), MM: wi("Month", 2, 1), M: wi("Month", 1, 1), LLLL: xi("Month", !1, !0), dd: wi("Date", 2), d: wi("Date", 1), HH: wi("Hours", 2), H: wi("Hours", 1), hh: wi("Hours", 2, -12), h: wi("Hours", 1, -12), mm: wi("Minutes", 2), m: wi("Minutes", 1), ss: wi("Seconds", 2), s: wi("Seconds", 1), sss: wi("Milliseconds", 3), EEEE: xi("Day"), EEE: xi("Day", !0), a: function(t, e) { return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1] }, Z: function(t, e, n) { var r = -1 * n,
                        i = r >= 0 ? "+" : ""; return i += Ci(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + Ci(Math.abs(r % 60), 2) }, ww: Oi(2), w: Oi(1), G: ki, GG: ki, GGG: ki, GGGG: function(t, e) { return t.getFullYear() <= 0 ? e.ERANAMES[0] : e.ERANAMES[1] } },
            Ai = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
            Mi = /^-?\d+$/;

        function Ni(t) { var e = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/; return function(n, r, i) { var o, a, s = "",
                    u = []; if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, B(n) && (n = Mi.test(n) ? M(n) : function(t) { var n; if (n = t.match(e)) { var r = new Date(0),
                                i = 0,
                                o = 0,
                                a = n[8] ? r.setUTCFullYear : r.setFullYear,
                                s = n[8] ? r.setUTCHours : r.setHours;
                            n[9] && (i = M(n[9] + n[10]), o = M(n[9] + n[11])), a.call(r, M(n[1]), M(n[2]) - 1, M(n[3])); var u = M(n[4] || 0) - i,
                                c = M(n[5] || 0) - o,
                                l = M(n[6] || 0),
                                f = Math.round(1e3 * parseFloat("0." + (n[7] || 0))); return s.call(r, u, c, l, f), r } return t }(n)), F(n) && (n = new Date(n)), !q(n) || !isFinite(n.getTime())) return n; for (; r;)(a = Ai.exec(r)) ? r = (u = ft(u, a, 1)).pop() : (u.push(r), r = null); var c = n.getTimezoneOffset(); return i && (c = gt(i, c), n = Pt(n, i, !0)), C(u, function(e) { o = Ti[e], s += o ? o(n, t.DATETIME_FORMATS, c) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'") }), s } }

        function Vi() { return function(t, e) { return j(e) && (e = 2), $t(t, e) } } Ni.$inject = ["$locale"]; var Li = I(p),
            Ri = I(h);

        function Ii() { return function(t, e, n) { return e = Math.abs(Number(e)) === 1 / 0 ? Number(e) : M(e), N(e) ? t : (F(t) && (t = t.toString()), b(t) ? (n = (n = !n || isNaN(n) ? 0 : M(n)) < 0 ? Math.max(0, t.length + n) : n, e >= 0 ? Di(t, n, n + e) : 0 === n ? Di(t, e, t.length) : Di(t, Math.max(0, n + e), n)) : t) } }

        function Di(t, e, n) { return B(t) ? t.slice(e, n) : d.call(t, e, n) }

        function ji(t) { return function(r, o, a, s) { if (null == r) return r; if (!b(r)) throw i("orderBy")("notarray", "Expected array but received: {0}", r);
                z(o) || (o = [o]), 0 === o.length && (o = ["+"]); var u = o.map(function(e) { var n = 1,
                            r = R; if (G(e)) r = e;
                        else if (B(e) && ("+" !== e.charAt(0) && "-" !== e.charAt(0) || (n = "-" === e.charAt(0) ? -1 : 1, e = e.substring(1)), "" !== e && (r = t(e)).constant)) { var i = r();
                            r = function(t) { return t[i] } } return { get: r, descending: n } }),
                    c = a ? -1 : 1,
                    l = G(s) ? s : n,
                    f = Array.prototype.map.call(r, function(t, n) { return { value: t, tieBreaker: { value: n, type: "number", index: n }, predicateValues: u.map(function(r) { return function(t, n) { var r = typeof t;
                                    null === t ? r = "null" : "object" === r && (t = function(t) { if (G(t.valueOf) && e(t = t.valueOf())) return t; if (D(t) && e(t = t.toString())) return t; return t }(t)); return { value: t, type: r, index: n } }(r.get(t), n) }) } }); return f.sort(function(t, e) { for (var r = 0, i = u.length; r < i; r++) { var o = l(t.predicateValues[r], e.predicateValues[r]); if (o) return o * u[r].descending * c } return (l(t.tieBreaker, e.tieBreaker) || n(t.tieBreaker, e.tieBreaker)) * c }), r = f.map(function(t) { return t.value }) };

            function e(t) { switch (typeof t) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1 } }

            function n(t, e) { var n = 0,
                    r = t.type,
                    i = e.type; if (r === i) { var o = t.value,
                        a = e.value; "string" === r ? (o = o.toLowerCase(), a = a.toLowerCase()) : "object" === r && (_(o) && (o = t.index), _(a) && (a = e.index)), o !== a && (n = o < a ? -1 : 1) } else n = "undefined" === r ? 1 : "undefined" === i ? -1 : "null" === r ? 1 : "null" === i ? -1 : r < i ? -1 : 1; return n } }

        function Hi(t) { return G(t) && (t = { link: t }), t.restrict = t.restrict || "AC", I(t) } ji.$inject = ["$parse"]; var _i = I({ restrict: "E", compile: function(t, e) { if (!e.href && !e.xlinkHref) return function(t, e) { if ("a" === e[0].nodeName.toLowerCase()) { var n = "[object SVGAnimatedString]" === v.call(e.prop("href")) ? "xlink:href" : "href";
                            e.on("click", function(t) { e.attr(n) || t.preventDefault() }) } } } }),
            Ui = {};
        C(Me, function(t, e) { if ("multiple" !== t) { var n = Sn("ng-" + e),
                    r = i; "checked" === t && (r = function(t, e, r) { r.ngModel !== r[n] && i(t, 0, r) }), Ui[n] = function() { return { restrict: "A", priority: 100, link: r } } }

            function i(t, r, i) { t.$watch(i[n], function(t) { i.$set(e, !!t) }) } }), C(Ve, function(t, e) { Ui[e] = function() { return { priority: 100, link: function(t, n, r) { if ("ngPattern" === e && "/" === r.ngPattern.charAt(0)) { var i = r.ngPattern.match(c); if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2])) } t.$watch(r[e], function(t) { r.$set(e, t) }) } } } }), C(["src", "srcset", "href"], function(t) { var e = Sn("ng-" + t);
            Ui[e] = function() { return { priority: 99, link: function(n, r, i) { var a = t,
                            s = t; "href" === t && "[object SVGAnimatedString]" === v.call(r.prop("href")) && (s = "xlinkHref", i.$attr[s] = "xlink:href", a = null), i.$observe(e, function(e) { e ? (i.$set(s, e), o && a && r.prop(a, i[s])) : "href" === t && i.$set(s, null) }) } } } }); var Bi = { $addControl: L, $getControls: I([]), $$renameControl: function(t, e) { t.$name = e }, $removeControl: L, $setValidity: L, $setDirty: L, $setPristine: L, $setSubmitted: L, $$setSubmitted: L },
            Fi = "ng-pending";

        function qi(t, e, n, r, i) { this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = i(e.name || e.ngForm || "")(n), this.$dirty = !1, this.$pristine = !0, this.$valid = !0, this.$invalid = !1, this.$submitted = !1, this.$$parentForm = Bi, this.$$element = t, this.$$animate = r, Ki(this) } qi.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"], qi.prototype = { $rollbackViewValue: function() { C(this.$$controls, function(t) { t.$rollbackViewValue() }) }, $commitViewValue: function() { C(this.$$controls, function(t) { t.$commitViewValue() }) }, $addControl: function(t) { Dt(t.$name, "input"), this.$$controls.push(t), t.$name && (this[t.$name] = t), t.$$parentForm = this }, $getControls: function() { return Wt(this.$$controls) }, $$renameControl: function(t, e) { var n = t.$name;
                this[n] === t && delete this[n], this[e] = t, t.$name = e }, $removeControl: function(t) { t.$name && this[t.$name] === t && delete this[t.$name], C(this.$pending, function(e, n) { this.$setValidity(n, null, t) }, this), C(this.$error, function(e, n) { this.$setValidity(n, null, t) }, this), C(this.$$success, function(e, n) { this.$setValidity(n, null, t) }, this), ot(this.$$controls, t), t.$$parentForm = Bi }, $setDirty: function() { this.$$animate.removeClass(this.$$element, qo), this.$$animate.addClass(this.$$element, zo), this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty() }, $setPristine: function() { this.$$animate.setClass(this.$$element, qo, zo + " ng-submitted"), this.$dirty = !1, this.$pristine = !0, this.$submitted = !1, C(this.$$controls, function(t) { t.$setPristine() }) }, $setUntouched: function() { C(this.$$controls, function(t) { t.$setUntouched() }) }, $setSubmitted: function() { for (var t = this; t.$$parentForm && t.$$parentForm !== Bi;) t = t.$$parentForm;
                t.$$setSubmitted() }, $$setSubmitted: function() { this.$$animate.addClass(this.$$element, "ng-submitted"), this.$submitted = !0, C(this.$$controls, function(t) { t.$$setSubmitted && t.$$setSubmitted() }) } }, Ji({ clazz: qi, set: function(t, e, n) { var r = t[e];
                r ? -1 === r.indexOf(n) && r.push(n) : t[e] = [n] }, unset: function(t, e, n) { var r = t[e];
                r && (ot(r, n), 0 === r.length && delete t[e]) } }); var zi = function(t) { return ["$timeout", "$parse", function(e, n) { return { name: "form", restrict: t ? "EAC" : "E", require: ["form", "^^?form"], controller: qi, compile: function(n, i) { n.addClass(qo).addClass(Bo); var o = i.name ? "name" : !(!t || !i.ngForm) && "ngForm"; return { pre: function(t, n, i, a) { var s = a[0]; if (!("action" in i)) { var u = function(e) { t.$apply(function() { s.$commitViewValue(), s.$setSubmitted() }), e.preventDefault() };
                                        n[0].addEventListener("submit", u), n.on("$destroy", function() { e(function() { n[0].removeEventListener("submit", u) }, 0, !1) }) }(a[1] || s.$$parentForm).$addControl(s); var c = o ? r(s.$name) : L;
                                    o && (c(t, s), i.$observe(o, function(e) { s.$name !== e && (c(t, void 0), s.$$parentForm.$$renameControl(s, e), (c = r(s.$name))(t, s)) })), n.on("$destroy", function() { s.$$parentForm.$removeControl(s), c(t, void 0), T(s, Bi) }) } } } };

                    function r(t) { return "" === t ? n('this[""]').assign : n(t).assign || L } }] },
            Wi = zi(),
            Gi = zi(!0);

        function Ki(t) { t.$$classCache = {}, t.$$classCache[Fo] = !(t.$$classCache[Bo] = t.$$element.hasClass(Bo)) }

        function Ji(t) { var e = t.clazz,
                n = t.set,
                r = t.unset;

            function i(t, e, n) { n && !t.$$classCache[e] ? (t.$$animate.addClass(t.$$element, e), t.$$classCache[e] = !0) : !n && t.$$classCache[e] && (t.$$animate.removeClass(t.$$element, e), t.$$classCache[e] = !1) }

            function o(t, e, n) { e = e ? "-" + Vt(e, "-") : "", i(t, Bo + e, !0 === n), i(t, Fo + e, !1 === n) } e.prototype.$setValidity = function(t, e, a) { var s;
                j(e) ? function(t, e, r, i) { t[e] || (t[e] = {});
                    n(t[e], r, i) }(this, "$pending", t, a) : function(t, e, n, i) { t[e] && r(t[e], n, i);
                    Zi(t[e]) && (t[e] = void 0) }(this, "$pending", t, a), Y(e) ? e ? (r(this.$error, t, a), n(this.$$success, t, a)) : (n(this.$error, t, a), r(this.$$success, t, a)) : (r(this.$error, t, a), r(this.$$success, t, a)), this.$pending ? (i(this, Fi, !0), this.$valid = this.$invalid = void 0, o(this, "", null)) : (i(this, Fi, !1), this.$valid = Zi(this.$error), this.$invalid = !this.$valid, o(this, "", this.$valid)), o(this, t, s = this.$pending && this.$pending[t] ? void 0 : !this.$error[t] && (!!this.$$success[t] || null)), this.$$parentForm.$setValidity(t, s, this) } }

        function Zi(t) { if (t)
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1; return !0 } var Yi = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
            Qi = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
            Xi = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
            to = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
            eo = /^(\d{4,})-(\d{2})-(\d{2})$/,
            no = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            ro = /^(\d{4,})-W(\d\d)$/,
            io = /^(\d{4,})-(\d\d)$/,
            oo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            ao = "keydown wheel mousedown",
            so = Ht();
        C("date,datetime-local,month,time,week".split(","), function(t) { so[t] = !0 }); var uo = { text: function(t, e, n, r, i, o) { lo(t, e, n, r, i, o), co(r) }, date: po("date", eo, fo(eo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": po("datetimelocal", no, fo(no, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"), time: po("time", oo, fo(oo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: po("week", ro, function(t, e) { if (q(t)) return t; if (B(t)) { ro.lastIndex = 0; var n = ro.exec(t); if (n) { var r = +n[1],
                            i = +n[2],
                            o = 0,
                            a = 0,
                            s = 0,
                            u = 0,
                            c = Ei(r),
                            l = 7 * (i - 1); return e && (o = e.getHours(), a = e.getMinutes(), s = e.getSeconds(), u = e.getMilliseconds()), new Date(r, 0, c.getDate() + l, o, a, s, u) } } return NaN }, "yyyy-Www"), month: po("month", io, fo(io, ["yyyy", "MM"]), "yyyy-MM"), number: function(t, e, n, r, i, o) { var a, s;
                ho(t, e, n, r, "number"), $o(r), lo(t, e, n, r, i, o), (H(n.min) || n.ngMin) && (r.$validators.min = function(t, e) { return r.$isEmpty(e) || j(a) || e >= a }, n.$observe("min", function(t) { a = mo(t), r.$validate() }));
                (H(n.max) || n.ngMax) && (r.$validators.max = function(t, e) { return r.$isEmpty(e) || j(s) || e <= s }, n.$observe("max", function(t) { s = mo(t), r.$validate() })); if (H(n.step) || n.ngStep) { var u;
                    r.$validators.step = function(t, e) { return r.$isEmpty(e) || j(u) || So(e, a || 0, u) }, n.$observe("step", function(t) { u = mo(t), r.$validate() }) } }, url: function(t, e, n, r, i, o) { lo(t, e, n, r, i, o), co(r), r.$validators.url = function(t, e) { var n = t || e; return r.$isEmpty(n) || Qi.test(n) } }, email: function(t, e, n, r, i, o) { lo(t, e, n, r, i, o), co(r), r.$validators.email = function(t, e) { var n = t || e; return r.$isEmpty(n) || Xi.test(n) } }, radio: function(t, e, n, r) { var i = !n.ngTrim || "false" !== tt(n.ngTrim);
                j(n.name) && e.attr("name", E());
                e.on("change", function(t) { var o;
                    e[0].checked && (o = n.value, i && (o = tt(o)), r.$setViewValue(o, t && t.type)) }), r.$render = function() { var t = n.value;
                    i && (t = tt(t)), e[0].checked = t === r.$viewValue }, n.$observe("value", r.$render) }, range: function(t, e, n, r, i, o) { ho(t, e, n, r, "range"), $o(r), lo(t, e, n, r, i, o); var a = r.$$hasNativeValidators && "range" === e[0].type,
                    s = a ? 0 : void 0,
                    u = a ? 100 : void 0,
                    c = a ? 1 : void 0,
                    l = e[0].validity,
                    f = H(n.min),
                    p = H(n.max),
                    h = H(n.step),
                    d = r.$render;
                r.$render = a && H(l.rangeUnderflow) && H(l.rangeOverflow) ? function() { d(), r.$setViewValue(e.val()) } : d, f && (r.$validators.min = a ? function() { return !0 } : function(t, e) { return r.$isEmpty(e) || j(s) || e >= s }, $("min", function(t) { if (s = mo(t), N(r.$modelValue)) return; if (a) { var n = e.val();
                        s > n && (n = s, e.val(n)), r.$setViewValue(n) } else r.$validate() }));
                p && (r.$validators.max = a ? function() { return !0 } : function(t, e) { return r.$isEmpty(e) || j(u) || e <= u }, $("max", function(t) { if (u = mo(t), N(r.$modelValue)) return; if (a) { var n = e.val();
                        u < n && (e.val(u), n = u < s ? s : u), r.$setViewValue(n) } else r.$validate() }));
                h && (r.$validators.step = a ? function() { return !l.stepMismatch } : function(t, e) { return r.$isEmpty(e) || j(c) || So(e, s || 0, c) }, $("step", function(t) { if (c = mo(t), N(r.$modelValue)) return;
                    a && r.$viewValue !== e.val() ? r.$setViewValue(e.val()) : r.$validate() }));

                function $(t, r) { e.attr(t, n[t]), n.$observe(t, r) } }, checkbox: function(t, e, n, r, i, o, a, s) { var u = Po(s, t, "ngTrueValue", n.ngTrueValue, !0),
                    c = Po(s, t, "ngFalseValue", n.ngFalseValue, !1);
                e.on("change", function(t) { r.$setViewValue(e[0].checked, t && t.type) }), r.$render = function() { e[0].checked = r.$viewValue }, r.$isEmpty = function(t) { return !1 === t }, r.$formatters.push(function(t) { return ut(t, u) }), r.$parsers.push(function(t) { return t ? u : c }) }, hidden: L, button: L, submit: L, reset: L, file: L };

        function co(t) { t.$formatters.push(function(e) { return t.$isEmpty(e) ? e : e.toString() }) }

        function lo(t, e, n, r, i, o) { var a, s = p(e[0].type); if (!i.android) { var u = !1;
                e.on("compositionstart", function() { u = !0 }), e.on("compositionupdate", function(t) {
                    (j(t.data) || "" === t.data) && (u = !1) }), e.on("compositionend", function() { u = !1, c() }) } var c = function(t) { if (a && (o.defer.cancel(a), a = null), !u) { var i = e.val(),
                        c = t && t.type; "password" === s || n.ngTrim && "false" === n.ngTrim || (i = tt(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, c) } }; if (i.hasEvent("input")) e.on("input", c);
            else { var f = function(t, e, n) { a || (a = o.defer(function() { a = null, e && e.value === n || c(t) })) };
                e.on("keydown", function(t) { var e = t.keyCode;
                    91 === e || 15 < e && e < 19 || 37 <= e && e <= 40 || f(t, this, this.value) }), i.hasEvent("paste") && e.on("paste cut drop", f) } e.on("change", c), so[s] && r.$$hasNativeValidators && s === n.type && e.on(ao, function(t) { if (!a) { var e = this[l],
                        n = e.badInput,
                        r = e.typeMismatch;
                    a = o.defer(function() { a = null, e.badInput === n && e.typeMismatch === r || c(t) }) } }), r.$render = function() { var t = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
                e.val() !== t && e.val(t) } }

        function fo(t, e) { return function(n, r) { var i, o; if (q(n)) return n; if (B(n)) { if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Yi.test(n)) return new Date(n); if (t.lastIndex = 0, i = t.exec(n)) { i.shift(), o = r ? { yyyy: r.getFullYear(), MM: r.getMonth() + 1, dd: r.getDate(), HH: r.getHours(), mm: r.getMinutes(), ss: r.getSeconds(), sss: r.getMilliseconds() / 1e3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, C(i, function(t, n) { n < e.length && (o[e[n]] = +t) }); var a = new Date(o.yyyy, o.MM - 1, o.dd, o.HH, o.mm, o.ss || 0, 1e3 * o.sss || 0); return o.yyyy < 100 && a.setFullYear(o.yyyy), a } } return NaN } }

        function po(t, e, n, r) { return function(i, o, a, s, u, c, l) { ho(i, o, a, s, t), lo(0, o, a, s, u, c); var f, p, h, d, $ = "time" === t || "datetimelocal" === t;
                (s.$parsers.push(function(n) { return s.$isEmpty(n) ? null : e.test(n) ? g(n, f) : void(s.$$parserName = t) }), s.$formatters.push(function(t) { if (t && !q(t)) throw Wo("datefmt", "Expected `{0}` to be a date", t); if (m(t)) { f = t; var e = s.$options.getOption("timezone"); return e && (p = e, f = Pt(f, e, !0)),
                            function(t, e) { var n = r;
                                $ && B(s.$options.getOption("timeSecondsFormat")) && (n = r.replace("ss.sss", s.$options.getOption("timeSecondsFormat")).replace(/:$/, "")); var i = l("date")(t, n, e);
                                $ && s.$options.getOption("timeStripZeroSeconds") && (i = i.replace(/(?::00)?(?:\.000)?$/, "")); return i }(t, e) } return f = null, p = null, "" }), H(a.min) || a.ngMin) && (s.$validators.min = function(t) { return !m(t) || j(h) || n(t) >= h }, a.$observe("min", function(t) { h = v(t), s.$validate() }));
                (H(a.max) || a.ngMax) && (s.$validators.max = function(t) { return !m(t) || j(d) || n(t) <= d }, a.$observe("max", function(t) { d = v(t), s.$validate() }));

                function m(t) { return t && !(t.getTime && t.getTime() != t.getTime()) }

                function v(t) { return H(t) && !q(t) ? g(t) || void 0 : t }

                function g(t, e) { var r = s.$options.getOption("timezone");
                    p && p !== r && (e = St(e, gt(p))); var i = n(t, e); return !isNaN(i) && r && (i = Pt(i, r)), i } } }

        function ho(t, e, n, r, i) { var o = e[0];
            (r.$$hasNativeValidators = _(o.validity)) && r.$parsers.push(function(t) { var n = e.prop(l) || {}; if (!n.badInput && !n.typeMismatch) return t;
                r.$$parserName = i }) }

        function $o(t) { t.$parsers.push(function(e) { return t.$isEmpty(e) ? null : to.test(e) ? parseFloat(e) : void(t.$$parserName = "number") }), t.$formatters.push(function(e) { if (!t.$isEmpty(e)) { if (!F(e)) throw Wo("numfmt", "Expected `{0}` to be a number", e);
                    e = e.toString() } return e }) }

        function mo(t) { return H(t) && !F(t) && (t = parseFloat(t)), N(t) ? void 0 : t }

        function vo(t) { return (0 | t) === t }

        function go(t) { var e = t.toString(),
                n = e.indexOf("."); if (-1 === n) { if (-1 < t && t < 1) { var r = /e-(\d+)$/.exec(e); if (r) return Number(r[1]) } return 0 } return e.length - n - 1 }

        function So(t, e, n) { var r = Number(t),
                i = !vo(r),
                o = !vo(e),
                a = !vo(n); if (i || o || a) { var s = i ? go(r) : 0,
                    u = o ? go(e) : 0,
                    c = a ? go(n) : 0,
                    l = Math.max(s, u, c),
                    f = Math.pow(10, l);
                r *= f, e *= f, n *= f, i && (r = Math.round(r)), o && (e = Math.round(e)), a && (n = Math.round(n)) } return (r - e) % n == 0 }

        function Po(t, e, n, r, i) { var o; if (H(r)) { if (!(o = t(r)).constant) throw Wo("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r); return o(e) } return i } var yo = ["$browser", "$sniffer", "$filter", "$parse", function(t, e, n, r) { return { restrict: "E", require: ["?ngModel"], link: { pre: function(i, o, a, s) { s[0] && (uo[p(a.type)] || uo.text)(i, o, a, s[0], e, t, n, r) } } } }],
            bo = /^(true|false|\d+)$/,
            Co = function() {
                function t(t, e, n) { var r = H(n) ? n : 9 === o ? "" : null;
                    t.prop("value", r), e.$set("value", n) } return { restrict: "A", priority: 100, compile: function(e, n) { return bo.test(n.ngValue) ? function(e, n, r) { t(n, r, e.$eval(r.ngValue)) } : function(e, n, r) { e.$watch(r.ngValue, function(e) { t(n, r, e) }) } } } },
            wo = ["$compile", function(t) { return { restrict: "AC", compile: function(e) { return t.$$addBindingClass(e),
                            function(e, n, r) { t.$$addBindingInfo(n, r.ngBind), n = n[0], e.$watch(r.ngBind, function(t) { n.textContent = _t(t) }) } } } }],
            xo = ["$interpolate", "$compile", function(t, e) { return { compile: function(n) { return e.$$addBindingClass(n),
                            function(n, r, i) { var o = t(r.attr(i.$attr.ngBindTemplate));
                                e.$$addBindingInfo(r, o.expressions), r = r[0], i.$observe("ngBindTemplate", function(t) { r.textContent = j(t) ? "" : t }) } } } }],
            Eo = ["$sce", "$parse", "$compile", function(t, e, n) { return { restrict: "A", compile: function(r, i) { var o = e(i.ngBindHtml),
                            a = e(i.ngBindHtml, function(e) { return t.valueOf(e) }); return n.$$addBindingClass(r),
                            function(e, r, i) { n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function() { var n = o(e);
                                    r.html(t.getTrustedHtml(n) || "") }) } } } }],
            Oo = I({ restrict: "A", require: "ngModel", link: function(t, e, n, r) { r.$viewChangeListeners.push(function() { t.$eval(n.ngChange) }) } });

        function ko(t, e) { var n; return t = "ngClass" + t, ["$parse", function(a) { return { restrict: "AC", link: function(s, u, c) { var l, f = u.data("$classCounts"),
                            p = !0;

                        function h(t, e) { var n = []; return C(t, function(t) {
                                (e > 0 || f[t]) && (f[t] = (f[t] || 0) + e, f[t] === +(e > 0) && n.push(t)) }), n.join(" ") } f || (f = Ht(), u.data("$classCounts", f)), "ngClass" !== t && (n || (n = a("$index", function(t) { return 1 & t })), s.$watch(n, function(t) { t === e ? (n = h(i(n = l), 1), c.$addClass(n)) : function(t) { t = h(i(t), -1), c.$removeClass(t) }(l); var n;
                            p = t })), s.$watch(a(c[t], o), function(t) { p === e && function(t, e) { var n = i(t),
                                    o = i(e),
                                    a = r(n, o),
                                    s = r(o, n),
                                    u = h(a, -1),
                                    l = h(s, 1);
                                c.$addClass(l), c.$removeClass(u) }(l, t);
                            l = t }) } } }];

            function r(t, e) { if (!t || !t.length) return []; if (!e || !e.length) return t; var n = [];
                t: for (var r = 0; r < t.length; r++) { for (var i = t[r], o = 0; o < e.length; o++)
                        if (i === e[o]) continue t;
                    n.push(i) }
                return n }

            function i(t) { return t && t.split(" ") }

            function o(t) { if (!t) return t; var e = t; return z(t) ? e = t.map(o).join(" ") : _(t) ? e = Object.keys(t).filter(function(e) { return t[e] }).join(" ") : B(t) || (e = t + ""), e } } var To = ko("", !0),
            Ao = ko("Odd", 0),
            Mo = ko("Even", 1),
            No = Hi({ compile: function(t, e) { e.$set("ngCloak", void 0), t.removeClass("ng-cloak") } }),
            Vo = [function() { return { restrict: "A", scope: !0, controller: "@", priority: 500 } }],
            Lo = {},
            Ro = { blur: !0, focus: !0 };

        function Io(t, e, n, r, i, o) { return { restrict: "A", compile: function(a, s) { var u = t(s[r]); return function(t, r) { r.on(i, function(r) { var i = function() { u(t, { $event: r }) }; if (e.$$phase)
                                if (o) t.$evalAsync(i);
                                else try { i() } catch (t) { n(t) } else t.$apply(i) }) } } } } C("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(t) { var e = Sn("ng-" + t);
            Lo[e] = ["$parse", "$rootScope", "$exceptionHandler", function(n, r, i) { return Io(n, r, i, e, t, Ro[t]) }] }); var Do = ["$animate", "$compile", function(t, e) { return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function(n, r, i, o, a) { var s, u, c;
                        n.$watch(i.ngIf, function(n) { n ? u || a(function(n, o) { u = o, n[n.length++] = e.$$createComment("end ngIf", i.ngIf), s = { clone: n }, t.enter(n, r.parent(), r) }) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = jt(s.clone), t.leave(c).done(function(t) {!1 !== t && (c = null) }), s = null)) }) } } }],
            jo = ["$templateRequest", "$anchorScroll", "$animate", function(t, e, n) { return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: P.noop, compile: function(r, i) { var o = i.ngInclude || i.src,
                            a = i.onload || "",
                            s = i.autoscroll; return function(r, i, u, c, l) { var f, p, h, d = 0,
                                $ = function() { p && (p.remove(), p = null), f && (f.$destroy(), f = null), h && (n.leave(h).done(function(t) {!1 !== t && (p = null) }), p = h, h = null) };
                            r.$watch(o, function(o) { var u = function(t) {!1 === t || !H(s) || s && !r.$eval(s) || e() },
                                    p = ++d;
                                o ? (t(o, !0).then(function(t) { if (!r.$$destroyed && p === d) { var e = r.$new();
                                        c.template = t; var s = l(e, function(t) { $(), n.enter(t, null, i).done(u) });
                                        h = s, (f = e).$emit("$includeContentLoaded", o), r.$eval(a) } }, function() { r.$$destroyed || p === d && ($(), r.$emit("$includeContentError", o)) }), r.$emit("$includeContentRequested", o)) : ($(), c.template = null) }) } } } }],
            Ho = ["$compile", function(e) { return { restrict: "ECA", priority: -400, require: "ngInclude", link: function(n, r, i, o) { if (v.call(r[0]).match(/SVG/)) return r.empty(), void e(le(o.template, t.document).childNodes)(n, function(t) { r.append(t) }, { futureParentElement: r });
                        r.html(o.template), e(r.contents())(n) } } }],
            _o = Hi({ priority: 450, compile: function() { return { pre: function(t, e, n) { t.$eval(n.ngInit) } } } }),
            Uo = function() { return { restrict: "A", priority: 100, require: "ngModel", link: function(t, e, n, r) { var i = n.ngList || ", ",
                            o = "false" !== n.ngTrim,
                            a = o ? tt(i) : i;
                        r.$parsers.push(function(t) { if (!j(t)) { var e = []; return t && C(t.split(a), function(t) { t && e.push(o ? tt(t) : t) }), e } }), r.$formatters.push(function(t) { if (z(t)) return t.join(i) }), r.$isEmpty = function(t) { return !t || !t.length } } } },
            Bo = "ng-valid",
            Fo = "ng-invalid",
            qo = "ng-pristine",
            zo = "ng-dirty",
            Wo = i("ngModel");

        function Go(t, e, n, r, i, o, a, s, u) { var c;
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = u(n.name || "", !1)(t), this.$$parentForm = Bi, this.$options = Ko, this.$$updateEvents = "", this.$$updateEventHandler = this.$$updateEventHandler.bind(this), this.$$parsedNgModel = i(n.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$parserName = "parse", this.$$currentValidationRunId = 0, this.$$scope = t, this.$$rootScope = t.$root, this.$$attr = n, this.$$element = r, this.$$animate = o, this.$$timeout = a, this.$$parse = i, this.$$q = s, this.$$exceptionHandler = e, Ki(this), (c = this).$$scope.$watch(function(t) { var e = c.$$ngModelGet(t); return e === c.$modelValue || c.$modelValue != c.$modelValue && e != e || c.$$setModelValue(e), e }) } Go.$inject = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$q", "$interpolate"], Go.prototype = { $$initGetterSetters: function() { if (this.$options.getOption("getterSetter")) { var t = this.$$parse(this.$$attr.ngModel + "()"),
                        e = this.$$parse(this.$$attr.ngModel + "($$$p)");
                    this.$$ngModelGet = function(e) { var n = this.$$parsedNgModel(e); return G(n) && (n = t(e)), n }, this.$$ngModelSet = function(t, n) { G(this.$$parsedNgModel(t)) ? e(t, { $$$p: n }) : this.$$parsedNgModelAssign(t, n) } } else if (!this.$$parsedNgModel.assign) throw Wo("nonassign", "Expression '{0}' is non-assignable. Element: {1}", this.$$attr.ngModel, yt(this.$$element)) }, $render: L, $isEmpty: function(t) { return j(t) || "" === t || null === t || t != t }, $$updateEmptyClasses: function(t) { this.$isEmpty(t) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty")) }, $setPristine: function() { this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, zo), this.$$animate.addClass(this.$$element, qo) }, $setDirty: function() { this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, qo), this.$$animate.addClass(this.$$element, zo), this.$$parentForm.$setDirty() }, $setUntouched: function() { this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched") }, $setTouched: function() { this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched") }, $rollbackViewValue: function() { this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, this.$render() }, $validate: function() { if (!N(this.$modelValue)) { var t = this.$$lastCommittedViewValue,
                        e = this.$$rawModelValue,
                        n = this.$valid,
                        r = this.$modelValue,
                        i = this.$options.getOption("allowInvalid"),
                        o = this;
                    this.$$runValidators(e, t, function(t) { i || n === t || (o.$modelValue = t ? e : void 0, o.$modelValue !== r && o.$$writeModelToScope()) }) } }, $$runValidators: function(t, e, n) { this.$$currentValidationRunId++; var r, i, o = this.$$currentValidationRunId,
                    a = this;
                (function() { var t = a.$$parserName; if (!j(a.$$parserValid)) return a.$$parserValid || (C(a.$validators, function(t, e) { s(e, null) }), C(a.$asyncValidators, function(t, e) { s(e, null) })), s(t, a.$$parserValid), a.$$parserValid;
                    s(t, null); return !0 })() ? ! function() { var n = !0; if (C(a.$validators, function(r, i) { var o = Boolean(r(t, e));
                            n = n && o, s(i, o) }), !n) return C(a.$asyncValidators, function(t, e) { s(e, null) }), !1; return !0 }() ? u(!1): (r = [], i = !0, C(a.$asyncValidators, function(n, o) { var a = n(t, e); if (!Q(a)) throw Wo("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", a);
                    s(o, void 0), r.push(a.then(function() { s(o, !0) }, function() { i = !1, s(o, !1) })) }), r.length ? a.$$q.all(r).then(function() { u(i) }, L) : u(!0)): u(!1);

                function s(t, e) { o === a.$$currentValidationRunId && a.$setValidity(t, e) }

                function u(t) { o === a.$$currentValidationRunId && n(t) } }, $commitViewValue: function() { var t = this.$viewValue;
                this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== t || "" === t && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(t), this.$$lastCommittedViewValue = t, this.$pristine && this.$setDirty(), this.$$parseAndValidate()) }, $$parseAndValidate: function() { var t = this.$$lastCommittedViewValue,
                    e = this; if (this.$$parserValid = !j(t) || void 0, this.$setValidity(this.$$parserName, null), this.$$parserName = "parse", this.$$parserValid)
                    for (var n = 0; n < this.$parsers.length; n++)
                        if (j(t = this.$parsers[n](t))) { this.$$parserValid = !1; break } N(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope)); var r = this.$modelValue,
                    i = this.$options.getOption("allowInvalid");

                function o() { e.$modelValue !== r && e.$$writeModelToScope() } this.$$rawModelValue = t, i && (this.$modelValue = t, o()), this.$$runValidators(t, this.$$lastCommittedViewValue, function(n) { i || (e.$modelValue = n ? t : void 0, o()) }) }, $$writeModelToScope: function() { this.$$ngModelSet(this.$$scope, this.$modelValue), C(this.$viewChangeListeners, function(t) { try { t() } catch (t) { this.$$exceptionHandler(t) } }, this) }, $setViewValue: function(t, e) { this.$viewValue = t, this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(e) }, $$debounceViewValueCommit: function(t) { var e = this.$options.getOption("debounce");
                F(e[t]) ? e = e[t] : F(e.default) && -1 === this.$options.getOption("updateOn").indexOf(t) ? e = e.default : F(e["*"]) && (e = e["*"]), this.$$timeout.cancel(this.$$pendingDebounce); var n = this;
                e > 0 ? this.$$pendingDebounce = this.$$timeout(function() { n.$commitViewValue() }, e) : this.$$rootScope.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function() { n.$commitViewValue() }) }, $overrideModelOptions: function(t) { this.$options = this.$options.createChild(t), this.$$setUpdateOnEvents() }, $processModelValue: function() { var t = this.$$format();
                this.$viewValue !== t && (this.$$updateEmptyClasses(t), this.$viewValue = this.$$lastCommittedViewValue = t, this.$render(), this.$$runValidators(this.$modelValue, this.$viewValue, L)) }, $$format: function() { for (var t = this.$formatters, e = t.length, n = this.$modelValue; e--;) n = t[e](n); return n }, $$setModelValue: function(t) { this.$modelValue = this.$$rawModelValue = t, this.$$parserValid = void 0, this.$processModelValue() }, $$setUpdateOnEvents: function() { this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler), this.$$updateEvents = this.$options.getOption("updateOn"), this.$$updateEvents && this.$$element.on(this.$$updateEvents, this.$$updateEventHandler) }, $$updateEventHandler: function(t) { this.$$debounceViewValueCommit(t && t.type) } }, Ji({ clazz: Go, set: function(t, e) { t[e] = !0 }, unset: function(t, e) { delete t[e] } }); var Ko, Jo = ["$rootScope", function(t) { return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Go, priority: 1, compile: function(e) { return e.addClass(qo).addClass("ng-untouched").addClass(Bo), { pre: function(t, e, n, r) { var i = r[0],
                                    o = r[1] || i.$$parentForm,
                                    a = r[2];
                                a && (i.$options = a.$options), i.$$initGetterSetters(), o.$addControl(i), n.$observe("name", function(t) { i.$name !== t && i.$$parentForm.$$renameControl(i, t) }), t.$on("$destroy", function() { i.$$parentForm.$removeControl(i) }) }, post: function(e, n, r, i) { var o = i[0];

                                function a() { o.$setTouched() } o.$$setUpdateOnEvents(), n.on("blur", function() { o.$touched || (t.$$phase ? e.$evalAsync(a) : e.$apply(a)) }) } } } } }],
            Zo = /(\s+|^)default(\s+|$)/;

        function Yo(t) { this.$$options = t } Yo.prototype = { getOption: function(t) { return this.$$options[t] }, createChild: function(t) { var e = !1; return C(t = T({}, t), function(n, r) { "$inherit" === n ? "*" === r ? e = !0 : (t[r] = this.$$options[r], "updateOn" === r && (t.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === r && (t.updateOnDefault = !1, t[r] = tt(n.replace(Zo, function() { return t.updateOnDefault = !0, " " }))) }, this), e && (delete t["*"], Xo(t, this.$$options)), Xo(t, Ko.$$options), new Yo(t) } }, Ko = new Yo({ updateOn: "", updateOnDefault: !0, debounce: 0, getterSetter: !1, allowInvalid: !1, timezone: null }); var Qo = function() {
            function t(t, e) { this.$$attrs = t, this.$$scope = e } return t.$inject = ["$attrs", "$scope"], t.prototype = { $onInit: function() { var t = this.parentCtrl ? this.parentCtrl.$options : Ko,
                        e = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                    this.$options = t.createChild(e) } }, { restrict: "A", priority: 10, require: { parentCtrl: "?^^ngModelOptions" }, bindToController: !0, controller: t } };

        function Xo(t, e) { C(e, function(e, n) { H(t[n]) || (t[n] = e) }) } var ta = Hi({ terminal: !0, priority: 1e3 }),
            ea = i("ngOptions"),
            na = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            ra = ["$compile", "$document", "$parse", function(e, n, r) { var i = t.document.createElement("option"),
                    o = t.document.createElement("optgroup"); return { restrict: "A", terminal: !0, require: ["select", "ngModel"], link: { pre: function(t, e, n, r) { r[0].registerOption = L }, post: function(t, s, u, c) { for (var l = c[0], f = c[1], p = u.multiple, h = 0, d = s.children(), $ = d.length; h < $; h++)
                                if ("" === d[h].value) { l.hasEmptyOption = !0, l.emptyOption = d.eq(h); break } s.empty(); var m, v = !!l.emptyOption;
                            a(i.cloneNode(!1)).val("?"); var g = function(t, e, n) { var i = t.match(na); if (!i) throw ea("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", t, yt(e)); var o = i[5] || i[7],
                                        a = i[6],
                                        s = / as /.test(i[0]) && i[1],
                                        u = i[9],
                                        c = r(i[2] ? i[1] : o),
                                        l = s && r(s) || c,
                                        f = u && r(u),
                                        p = u ? function(t, e) { return f(n, e) } : function(t) { return je(t) },
                                        h = function(t, e) { return p(t, S(t, e)) },
                                        d = r(i[2] || i[1]),
                                        $ = r(i[3] || ""),
                                        m = r(i[4] || ""),
                                        v = r(i[8]),
                                        g = {},
                                        S = a ? function(t, e) { return g[a] = e, g[o] = t, g } : function(t) { return g[o] = t, g };

                                    function P(t, e, n, r, i) { this.selectValue = t, this.viewValue = e, this.label = n, this.group = r, this.disabled = i }

                                    function y(t) { var e; if (!a && b(t)) e = t;
                                        else
                                            for (var n in e = [], t) t.hasOwnProperty(n) && "$" !== n.charAt(0) && e.push(n); return e } return { trackBy: u, getTrackByValue: h, getWatchables: r(v, function(t) { for (var e = [], r = y(t = t || []), o = r.length, a = 0; a < o; a++) { var s = t === r ? a : r[a],
                                                    u = t[s],
                                                    c = S(u, s),
                                                    l = p(u, c); if (e.push(l), i[2] || i[1]) { var f = d(n, c);
                                                    e.push(f) } if (i[4]) { var h = m(n, c);
                                                    e.push(h) } } return e }), getOptions: function() { for (var t = [], e = {}, r = v(n) || [], i = y(r), o = i.length, a = 0; a < o; a++) { var s = r === i ? a : i[a],
                                                    c = r[s],
                                                    f = S(c, s),
                                                    g = l(n, f),
                                                    b = p(g, f),
                                                    C = new P(b, g, d(n, f), $(n, f), m(n, f));
                                                t.push(C), e[b] = C } return { items: t, selectValueMap: e, getOptionFromViewValue: function(t) { return e[h(t)] }, getViewValueFromOption: function(t) { return u ? at(t.viewValue) : t.viewValue } } } } }(u.ngOptions, s, t),
                                S = n[0].createDocumentFragment();

                            function P(t, e) { var n = i.cloneNode(!1);
                                e.appendChild(n),
                                    function(t, e) { t.element = e, e.disabled = t.disabled, t.label !== e.label && (e.label = t.label, e.textContent = t.label), e.value = t.selectValue }(t, n) }

                            function y(t) { var e = m.getOptionFromViewValue(t),
                                    n = e && e.element; return n && !n.selected && (n.selected = !0), e } l.generateUnknownOptionValue = function(t) { return "?" }, p ? (l.writeValue = function(t) { if (m) { var e = t && t.map(y) || [];
                                    m.items.forEach(function(t) { t.element.selected && !it(e, t) && (t.element.selected = !1) }) } }, l.readValue = function() { var t = []; return C(s.val() || [], function(e) { var n = m.selectValueMap[e];
                                    n && !n.disabled && t.push(m.getViewValueFromOption(n)) }), t }, g.trackBy && t.$watchCollection(function() { if (z(f.$viewValue)) return f.$viewValue.map(function(t) { return g.getTrackByValue(t) }) }, function() { f.$render() })) : (l.writeValue = function(t) { if (m) { var e = s[0].options[s[0].selectedIndex],
                                        n = m.getOptionFromViewValue(t);
                                    e && e.removeAttribute("selected"), n ? (s[0].value !== n.selectValue && (l.removeUnknownOption(), s[0].value = n.selectValue, n.element.selected = !0), n.element.setAttribute("selected", "selected")) : l.selectUnknownOrEmptyOption(t) } }, l.readValue = function() { var t = m.selectValueMap[s.val()]; return t && !t.disabled ? (l.unselectEmptyOption(), l.removeUnknownOption(), m.getViewValueFromOption(t)) : null }, g.trackBy && t.$watch(function() { return g.getTrackByValue(f.$viewValue) }, function() { f.$render() })), v && (e(l.emptyOption)(t), s.prepend(l.emptyOption), l.emptyOption[0].nodeType === Ft ? (l.hasEmptyOption = !1, l.registerOption = function(t, e) { "" === e.val() && (l.hasEmptyOption = !0, l.emptyOption = e, l.emptyOption.removeClass("ng-scope"), f.$render(), e.on("$destroy", function() { var t = l.$isEmptyOptionSelected();
                                    l.hasEmptyOption = !1, l.emptyOption = void 0, t && f.$render() })) }) : l.emptyOption.removeClass("ng-scope")), t.$watchCollection(g.getWatchables, function() { var t = m && l.readValue(); if (m)
                                    for (var e = m.items.length - 1; e >= 0; e--) { var n = m.items[e];
                                        H(n.group) ? ke(n.element.parentNode) : ke(n.element) }
                                var r = {}; if ((m = g.getOptions()).items.forEach(function(t) { var e;
                                        H(t.group) ? ((e = r[t.group]) || (e = o.cloneNode(!1), S.appendChild(e), e.label = null === t.group ? "null" : t.group, r[t.group] = e), P(t, e)) : P(t, S) }), s[0].appendChild(S), f.$render(), !f.$isEmpty(t)) { var i = l.readValue(),
                                        a = g.trackBy || p;
                                    (a ? ut(t, i) : t === i) || (f.$setViewValue(i), f.$render()) } }) } } } }],
            ia = ["$locale", "$interpolate", "$log", function(t, e, n) { var r = /{}/g,
                    i = /^when(Minus)?(.+)$/; return { link: function(o, a, s) { var u, c = s.count,
                            l = s.$attr.when && a.attr(s.$attr.when),
                            f = s.offset || 0,
                            h = o.$eval(l) || {},
                            d = {},
                            $ = e.startSymbol(),
                            m = e.endSymbol(),
                            v = $ + c + "-" + f + m,
                            g = P.noop;

                        function S(t) { a.text(t || "") } C(s, function(t, e) { var n = i.exec(e); if (n) { var r = (n[1] ? "-" : "") + p(n[2]);
                                h[r] = a.attr(s.$attr[e]) } }), C(h, function(t, n) { d[n] = e(t.replace(r, v)) }), o.$watch(c, function(e) { var r = parseFloat(e),
                                i = N(r); if (i || r in h || (r = t.pluralCat(r - f)), !(r === u || i && N(u))) { g(); var a = d[r];
                                j(a) ? (null != e && n.debug("ngPluralize: no rule defined for '" + r + "' in " + l), g = L, S()) : g = o.$watch(a, S), u = r } }) } } }],
            oa = i("ngRef"),
            aa = ["$parse", function(t) { return { priority: -1, restrict: "A", compile: function(e, n) { var r = Sn(rt(e)),
                            i = t(n.ngRef),
                            o = i.assign || function() { throw oa("nonassign", 'Expression in ngRef="{0}" is non-assignable!', n.ngRef) }; return function(t, e, a) { var s; if (a.hasOwnProperty("ngRefRead")) { if ("$element" === a.ngRefRead) s = e;
                                else if (!(s = e.data("$" + a.ngRefRead + "Controller"))) throw oa("noctrl", 'The controller for ngRefRead="{0}" could not be found on ngRef="{1}"', a.ngRefRead, n.ngRef) } else s = e.data("$" + r + "Controller");
                            o(t, s = s || e), e.on("$destroy", function() { i(t) === s && o(t, null) }) } } } }],
            sa = ["$parse", "$animate", "$compile", function(t, e, n) { var r = i("ngRepeat"),
                    o = function(t, e, n, r, i, o, a) { t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 == (1 & e)) },
                    a = function(t) { return t.clone[0] },
                    s = function(t) { return t.clone[t.clone.length - 1] }; return { restrict: "A", multiElement: !0, transclude: "element", priority: 1e3, terminal: !0, $$tlb: !0, compile: function(i, u) { var c = u.ngRepeat,
                            l = n.$$createComment("end ngRepeat", c),
                            p = c.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/); if (!p) throw r("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", c); var h = p[1],
                            d = p[2],
                            $ = p[3],
                            m = p[4]; if (!(p = h.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/))) throw r("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", h); var v, g, S, P, y = p[3] || p[1],
                            w = p[2]; if ($ && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test($) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test($))) throw r("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", $); var x = { $id: je }; return m ? v = t(m) : (S = function(t, e) { return je(e) }, P = function(t) { return t }),
                            function(t, n, i, u, p) { v && (g = function(e, n, r) { return w && (x[w] = e), x[y] = n, x.$index = r, v(t, x) }); var h = Ht();
                                t.$watchCollection(d, function(i) { var u, d, m, v, x, E, O, k, T, A, M, N, V = n[0],
                                        L = Ht(); if ($ && (t[$] = i), b(i)) T = i, k = g || S;
                                    else
                                        for (var R in k = g || P, T = [], i) f.call(i, R) && "$" !== R.charAt(0) && T.push(R); for (v = T.length, M = new Array(v), u = 0; u < v; u++)
                                        if (x = i === T ? u : T[u], E = i[x], O = k(x, E, u), h[O]) A = h[O], delete h[O], L[O] = A, M[u] = A;
                                        else { if (L[O]) throw C(M, function(t) { t && t.scope && (h[t.id] = t) }), r("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", c, O, E);
                                            M[u] = { id: O, scope: void 0, clone: void 0 }, L[O] = !0 } for (var I in h) { if (N = jt((A = h[I]).clone), e.leave(N), N[0].parentNode)
                                            for (u = 0, d = N.length; u < d; u++) N[u].$$NG_REMOVED = !0;
                                        A.scope.$destroy() } for (u = 0; u < v; u++)
                                        if (x = i === T ? u : T[u], E = i[x], (A = M[u]).scope) { m = V;
                                            do { m = m.nextSibling } while (m && m.$$NG_REMOVED);
                                            a(A) !== m && e.move(jt(A.clone), null, V), V = s(A), o(A.scope, u, y, E, w, x, v) } else p(function(t, n) { A.scope = n; var r = l.cloneNode(!1);
                                            t[t.length++] = r, e.enter(t, null, V), V = r, A.clone = t, L[A.id] = A, o(A.scope, u, y, E, w, x, v) });
                                    h = L }) } } } }],
            ua = ["$animate", function(t) { return { restrict: "A", multiElement: !0, link: function(e, n, r) { e.$watch(r.ngShow, function(e) { t[e ? "removeClass" : "addClass"](n, "ng-hide", { tempClasses: "ng-hide-animate" }) }) } } }],
            ca = ["$animate", function(t) { return { restrict: "A", multiElement: !0, link: function(e, n, r) { e.$watch(r.ngHide, function(e) { t[e ? "addClass" : "removeClass"](n, "ng-hide", { tempClasses: "ng-hide-animate" }) }) } } }],
            la = Hi(function(t, e, n) { t.$watchCollection(n.ngStyle, function(t, n) { n && t !== n && C(n, function(t, n) { e.css(n, "") }), t && e.css(t) }) }),
            fa = ["$animate", "$compile", function(t, e) { return { require: "ngSwitch", controller: ["$scope", function() { this.cases = {} }], link: function(n, r, i, o) { var a = i.ngSwitch || i.on,
                            s = [],
                            u = [],
                            c = [],
                            l = [],
                            f = function(t, e) { return function(n) {!1 !== n && t.splice(e, 1) } };
                        n.$watch(a, function(n) { for (var r, i; c.length;) t.cancel(c.pop()); for (r = 0, i = l.length; r < i; ++r) { var a = jt(u[r].clone);
                                l[r].$destroy(), (c[r] = t.leave(a)).done(f(c, r)) } u.length = 0, l.length = 0, (s = o.cases["!" + n] || o.cases["?"]) && C(s, function(n) { n.transclude(function(r, i) { l.push(i); var o = n.element;
                                    r[r.length++] = e.$$createComment("end ngSwitchWhen"); var a = { clone: r };
                                    u.push(a), t.enter(r, o.parent(), o) }) }) }) } } }],
            pa = Hi({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function(t, e, n, r, i) { C(n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function(t, e, n) { return n[e - 1] !== t }), function(t) { r.cases["!" + t] = r.cases["!" + t] || [], r.cases["!" + t].push({ transclude: i, element: e }) }) } }),
            ha = Hi({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function(t, e, n, r, i) { r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({ transclude: i, element: e }) } }),
            da = i("ngTransclude"),
            $a = ["$compile", function(t) { return { restrict: "EAC", compile: function(e) { var n = t(e.contents()); return e.empty(),
                            function(t, e, r, i, o) { if (!o) throw da("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", yt(e));
                                r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = ""); var a = r.ngTransclude || r.ngTranscludeSlot;

                                function s() { n(t, function(t) { e.append(t) }) } o(function(t, n) { t.length && function(t) { for (var e = 0, n = t.length; e < n; e++) { var r = t[e]; if (r.nodeType !== Bt || r.nodeValue.trim()) return !0 } }(t) ? e.append(t) : (s(), n.$destroy()) }, null, a), a && !o.isSlotFilled(a) && s() } } } }],
            ma = ["$templateCache", function(t) { return { restrict: "E", terminal: !0, compile: function(e, n) { if ("text/ng-template" === n.type) { var r = n.id,
                                i = e[0].text;
                            t.put(r, i) } } } }],
            va = { $setViewValue: L, $render: L };

        function ga(t, e) { t.prop("selected", e), t.attr("selected", e) } var Sa = ["$element", "$scope", function(e, n) { var r = this,
                    i = new Ue;
                r.selectValueMap = {}, r.ngModelCtrl = va, r.multiple = !1, r.unknownOption = a(t.document.createElement("option")), r.hasEmptyOption = !1, r.emptyOption = void 0, r.renderUnknownOption = function(t) { var n = r.generateUnknownOptionValue(t);
                    r.unknownOption.val(n), e.prepend(r.unknownOption), ga(r.unknownOption, !0), e.val(n) }, r.updateUnknownOption = function(t) { var n = r.generateUnknownOptionValue(t);
                    r.unknownOption.val(n), ga(r.unknownOption, !0), e.val(n) }, r.generateUnknownOptionValue = function(t) { return "? " + je(t) + " ?" }, r.removeUnknownOption = function() { r.unknownOption.parent() && r.unknownOption.remove() }, r.selectEmptyOption = function() { r.emptyOption && (e.val(""), ga(r.emptyOption, !0)) }, r.unselectEmptyOption = function() { r.hasEmptyOption && ga(r.emptyOption, !1) }, n.$on("$destroy", function() { r.renderUnknownOption = L }), r.readValue = function() { var t = e.val(),
                        n = t in r.selectValueMap ? r.selectValueMap[t] : t; return r.hasOption(n) ? n : null }, r.writeValue = function(t) { var n = e[0].options[e[0].selectedIndex]; if (n && ga(a(n), !1), r.hasOption(t)) { r.removeUnknownOption(); var i = je(t);
                        e.val(i in r.selectValueMap ? i : t); var o = e[0].options[e[0].selectedIndex];
                        ga(a(o), !0) } else r.selectUnknownOrEmptyOption(t) }, r.addOption = function(t, e) { if (e[0].nodeType !== Ft) { Dt(t, '"option value"'), "" === t && (r.hasEmptyOption = !0, r.emptyOption = e); var n = i.get(t) || 0;
                        i.set(t, n + 1), s() } }, r.removeOption = function(t) { var e = i.get(t);
                    e && (1 === e ? (i.delete(t), "" === t && (r.hasEmptyOption = !1, r.emptyOption = void 0)) : i.set(t, e - 1)) }, r.hasOption = function(t) { return !!i.get(t) }, r.$hasEmptyOption = function() { return r.hasEmptyOption }, r.$isUnknownOptionSelected = function() { return e[0].options[0] === r.unknownOption[0] }, r.$isEmptyOptionSelected = function() { return r.hasEmptyOption && e[0].options[e[0].selectedIndex] === r.emptyOption[0] }, r.selectUnknownOrEmptyOption = function(t) { null == t && r.emptyOption ? (r.removeUnknownOption(), r.selectEmptyOption()) : r.unknownOption.parent().length ? r.updateUnknownOption(t) : r.renderUnknownOption(t) }; var o = !1;

                function s() { o || (o = !0, n.$$postDigest(function() { o = !1, r.ngModelCtrl.$render() })) } var u = !1;

                function c(t) { u || (u = !0, n.$$postDigest(function() { n.$$destroyed || (u = !1, r.ngModelCtrl.$setViewValue(r.readValue()), t && r.ngModelCtrl.$render()) })) } r.registerOption = function(t, e, n, i, o) { var a, u;
                    n.$attr.ngValue ? n.$observe("value", function(t) { var n, i = e.prop("selected");
                        H(u) && (r.removeOption(a), delete r.selectValueMap[u], n = !0), u = je(t), a = t, r.selectValueMap[u] = t, r.addOption(t, e), e.attr("value", u), n && i && c() }) : i ? n.$observe("value", function(t) { var n;
                        r.readValue(); var i = e.prop("selected");
                        H(a) && (r.removeOption(a), n = !0), a = t, r.addOption(t, e), n && i && c() }) : o ? t.$watch(o, function(t, i) { n.$set("value", t); var o = e.prop("selected");
                        i !== t && r.removeOption(i), r.addOption(t, e), i && o && c() }) : r.addOption(n.value, e);
                    n.$observe("disabled", function(t) {
                        ("true" === t || t && e.prop("selected")) && (r.multiple ? c(!0) : (r.ngModelCtrl.$setViewValue(null), r.ngModelCtrl.$render())) }), e.on("$destroy", function() { var t = r.readValue(),
                            e = n.value;
                        r.removeOption(e), s(), (r.multiple && t && -1 !== t.indexOf(e) || t === e) && c(!0) }) } }],
            Pa = function() { return { restrict: "E", require: ["select", "?ngModel"], controller: Sa, priority: 1, link: { pre: function(t, e, n, r) { var i = r[0],
                                o = r[1]; if (!o) return void(i.registerOption = L); if (i.ngModelCtrl = o, e.on("change", function() { i.removeUnknownOption(), t.$apply(function() { o.$setViewValue(i.readValue()) }) }), n.multiple) { i.multiple = !0, i.readValue = function() { var t = []; return C(e.find("option"), function(e) { if (e.selected && !e.disabled) { var n = e.value;
                                            t.push(n in i.selectValueMap ? i.selectValueMap[n] : n) } }), t }, i.writeValue = function(t) { C(e.find("option"), function(e) { var n = !!t && (it(t, e.value) || it(t, i.selectValueMap[e.value])),
                                            r = e.selected;
                                        n !== r && ga(a(e), n) }) }; var s, u = NaN;
                                t.$watch(function() { u !== o.$viewValue || ut(s, o.$viewValue) || (s = Wt(o.$viewValue), o.$render()), u = o.$viewValue }), o.$isEmpty = function(t) { return !t || 0 === t.length } } }, post: function(t, e, n, r) { var i = r[1]; if (!i) return; var o = r[0];
                            i.$render = function() { o.writeValue(i.$viewValue) } } } } },
            ya = ["$interpolate", function(t) { return { restrict: "E", priority: 100, compile: function(e, n) { var r, i; return H(n.ngValue) || (H(n.value) ? r = t(n.value, !0) : (i = t(e.text(), !0)) || n.$set("value", e.text())),
                            function(t, e, n) { var o = e.parent(),
                                    a = o.data("$selectController") || o.parent().data("$selectController");
                                a && a.registerOption(t, e, n, r, i) } } } }],
            ba = function() { return { restrict: "A", require: "?ngModel", link: function(t, e, n, r) { r && (n.required = !0, r.$validators.required = function(t, e) { return !n.required || !r.$isEmpty(e) }, n.$observe("required", function() { r.$validate() })) } } },
            Ca = function() { return { restrict: "A", require: "?ngModel", link: function(t, e, n, r) { if (r) { var o, a = n.ngPattern || n.pattern;
                            n.$observe("pattern", function(t) { if (B(t) && t.length > 0 && (t = new RegExp("^" + t + "$")), t && !t.test) throw i("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", a, t, yt(e));
                                o = t || void 0, r.$validate() }), r.$validators.pattern = function(t, e) { return r.$isEmpty(e) || j(o) || o.test(e) } } } } },
            wa = function() { return { restrict: "A", require: "?ngModel", link: function(t, e, n, r) { if (r) { var i = -1;
                            n.$observe("maxlength", function(t) { var e = M(t);
                                i = N(e) ? -1 : e, r.$validate() }), r.$validators.maxlength = function(t, e) { return i < 0 || r.$isEmpty(e) || e.length <= i } } } } },
            xa = function() { return { restrict: "A", require: "?ngModel", link: function(t, e, n, r) { if (r) { var i = 0;
                            n.$observe("minlength", function(t) { i = M(t) || 0, r.$validate() }), r.$validators.minlength = function(t, e) { return r.$isEmpty(e) || e.length >= i } } } } };
        t.angular.bootstrap ? t.console && console.log("WARNING: Tried to load AngularJS more than once.") : (! function() { var e; if (!Lt) { var n = lt();
                (s = j(n) ? t.jQuery : n ? t[n] : void 0) && s.fn.on ? (a = s, T(s.fn, { scope: Ae.scope, isolateScope: Ae.isolateScope, controller: Ae.controller, injector: Ae.injector, inheritedData: Ae.inheritedData })) : a = pe, e = a.cleanData, a.cleanData = function(t) { for (var n, r, i = 0; null != (r = t[i]); i++)(n = (a._data(r) || {}).events) && n.$destroy && a(r).triggerHandler("$destroy");
                    e(t) }, P.element = a, Lt = !0 } }(), function(e) { T(e, { errorHandlingConfig: n, bootstrap: Tt, copy: at, extend: T, merge: A, equals: ut, element: a, forEach: C, injector: Ye, noop: L, bind: ht, toJson: $t, fromJson: mt, identity: R, isUndefined: j, isDefined: H, isString: B, isFunction: G, isObject: _, isNumber: F, isElement: nt, isArray: z, version: Kt, isDate: q, callbacks: { $$counter: 0 }, getTestability: Mt, reloadWithDebugInfo: At, $$minErr: i, $$csp: ct, $$encodeUriSegment: wt, $$encodeUriQuery: xt, $$lowercase: p, $$stringify: _t, $$uppercase: h }), (u = function(t) { var e = i("$injector"),
                    n = i("ng");

                function r(t, e, n) { return t[e] || (t[e] = n()) } var o = r(t, "angular", Object); return o.$$minErr = o.$$minErr || i, r(o, "module", function() { var t = {}; return function(i, o, a) { var s = {}; return function(t, e) { if ("hasOwnProperty" === t) throw n("badname", "hasOwnProperty is not a valid {0} name", e) }(i, "module"), o && t.hasOwnProperty(i) && (t[i] = null), r(t, i, function() { if (!o) throw e("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", i); var t = [],
                                r = [],
                                u = [],
                                c = f("$injector", "invoke", "push", r),
                                l = { _invokeQueue: t, _configBlocks: r, _runBlocks: u, info: function(t) { if (H(t)) { if (!_(t)) throw n("aobj", "Argument '{0}' must be an object", "value"); return s = t, this } return s }, requires: o, name: i, provider: p("$provide", "provider"), factory: p("$provide", "factory"), service: p("$provide", "service"), value: f("$provide", "value"), constant: f("$provide", "constant", "unshift"), decorator: p("$provide", "decorator", r), animation: p("$animateProvider", "register"), filter: p("$filterProvider", "register"), controller: p("$controllerProvider", "register"), directive: p("$compileProvider", "directive"), component: p("$compileProvider", "component"), config: c, run: function(t) { return u.push(t), this } }; return a && c(a), l;

                            function f(e, n, r, i) { return i || (i = t),
                                    function() { return i[r || "push"]([e, n, arguments]), l } }

                            function p(e, n, r) { return r || (r = t),
                                    function(t, o) { return o && G(o) && (o.$$moduleName = i), r.push([e, n, arguments]), l } } }) } }) }(t))("ng", ["ngLocale"], ["$provide", function(t) { t.provider({ $$sanitizeUri: qr }), t.provider("$compile", $n).directive({ a: _i, input: yo, textarea: yo, form: Wi, script: ma, select: Pa, option: ya, ngBind: wo, ngBindHtml: Eo, ngBindTemplate: xo, ngClass: To, ngClassEven: Mo, ngClassOdd: Ao, ngCloak: No, ngController: Vo, ngForm: Gi, ngHide: ca, ngIf: Do, ngInclude: jo, ngInit: _o, ngNonBindable: ta, ngPluralize: ia, ngRef: aa, ngRepeat: sa, ngShow: ua, ngStyle: la, ngSwitch: fa, ngSwitchWhen: pa, ngSwitchDefault: ha, ngOptions: ra, ngTransclude: $a, ngModel: Jo, ngList: Uo, ngChange: Oo, pattern: Ca, ngPattern: Ca, required: ba, ngRequired: ba, minlength: xa, ngMinlength: xa, maxlength: wa, ngMaxlength: wa, ngValue: Co, ngModelOptions: Qo }).directive({ ngInclude: Ho }).directive(Ui).directive(Lo), t.provider({ $anchorScroll: Qe, $animate: an, $animateCss: cn, $$animateJs: rn, $$animateQueue: on, $$AnimateRunner: un, $$animateAsyncRun: sn, $browser: ln, $cacheFactory: fn, $controller: wn, $document: xn, $$isDocumentHidden: En, $exceptionHandler: On, $filter: hi, $$forceReflow: kn, $interpolate: Gn, $interval: Jn, $$intervalFactory: Zn, $http: Fn, $httpParamSerializer: In, $httpParamSerializerJQLike: Dn, $httpBackend: zn, $xhrFactory: qn, $jsonpCallbacks: Yn, $location: dr, $log: $r, $parse: Rr, $rootScope: Fr, $q: Ir, $$q: Dr, $sce: Yr, $sceDelegate: Zr, $sniffer: Qr, $$taskTrackerFactory: Xr, $templateCache: pn, $templateRequest: ei, $$testability: ni, $timeout: ii, $window: li, $$rAF: Br, $$jqLite: De, $$Map: Be, $$cookieReader: pi }) }]).info({ angularVersion: "1.7.5" }) }(P), P.module("ngLocale", [], ["$provide", function(t) { var e = "one",
                n = "other";
            t.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", short: "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-¤", negSuf: "", posPre: "¤", posSuf: "" }] }, id: "en-us", localeID: "en_US", pluralCat: function(t, r) { var i = 0 | t,
                        o = function(t, e) { var n = e;
                            void 0 === n && (n = Math.min(function(t) { var e = (t += "").indexOf("."); return -1 == e ? 0 : t.length - e - 1 }(t), 3)); var r = Math.pow(10, n); return { v: n, f: (t * r | 0) % r } }(t, r); return 1 == i && 0 == o.v ? e : n } }) }]), a(function() { kt(t.document, Tt) })) }(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>') }], [5]);