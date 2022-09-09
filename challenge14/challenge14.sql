CREATE TABLE Jurusan(Kodejurusan VARCHAR(6) PRIMARY KEY NOT NULL,
Namajurusan TEXT NOT NULL);

CREATE TABLE Mahasiswa(
    NIM             VARCHAR(6) PRIMARY KEY NOT NULL,
    Nama            VARCHAR(100) NOT NULL,
    Alamat          TEXT NOT NULL,
    Jurusan         VARCHAR(6) NOT NULL,
    Umur            CHAR(2)
     foreign key (Jurusan) references  Jurusan (Kodejurusan)
);

CREATE TABLE Dosen(
    NIDN            VARCHAR(6) PRIMARY KEY NOT NULL,
    Namadosen       VARCHAR(100) NOT NULL
);

CREATE TABLE Matakuliah(
    Kodematakuliah  VARCHAR(6) PRIMARY KEY NOT NULL,
    Nama            VARCHAR(100) NOT NULL,
    SKS             INTEGER


);

CREATE TABLE kontrak (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    NIM             VARCHAR(6) NOT NULL,
    NIDN            VARCHAR(6) NOT NULL,
    Kodematakuliah  VARCHAR(6) NOT NULL,
    Nilai           VARCHAR(2),
    foreign key (NIM) references Mahasiswa(NIM),
    foreign key (NIDN) references Dosen(NIDN),
    foreign key (Kodematakuliah) references Matakuliah(Kodematakuliah)        
);


INSERT INTO Jurusan(Kodejurusan, Namajurusan) VALUES ('0001', 'TNU');
INSERT INTO Jurusan(Kodejurusan, Namajurusan) VALUES ('0002', 'TLB');
INSERT INTO Jurusan(Kodejurusan, Namajurusan) VALUES ('0003', 'LLU');

INSERT INTO Mahasiswa(NIM, Nama, Alamat, Jurusan, Umur) VALUES ('444207', 'Heril', 'Soppeng', '0001', 21);
INSERT INTO Mahasiswa(NIM, Nama, Alamat, Jurusan, Umur) VALUES ('444208', 'Fernanda', 'Makassar', '0002', 20);
INSERT INTO Mahasiswa(NIM, Nama, Alamat, Jurusan, Umur) VALUES ('444209', 'Rahmat', 'Takalar', '0003', 18);

INSERT INTO Dosen(NIDN, Namadosen) VALUES ('C1020', 'HERDY');
INSERT INTO Dosen(NIDN, Namadosen) VALUES ('C1021', 'GATOT');
INSERT INTO Dosen(NIDN, Namadosen) VALUES ('C1022', 'MUSRI');

INSERT INTO Matakuliah(Kodematakuliah, Nama, SKS) VALUES ('D120', 'Instrument Landing System', 4);
INSERT INTO Matakuliah(Kodematakuliah, Nama, SKS) VALUES ('D121', 'Glide Slope', 3);
INSERT INTO Matakuliah(Kodematakuliah, Nama, SKS) VALUES ('D122', 'Radio Detection and Ranging', 3);

INSERT INTO Kontrak(NIM, NIDN, Kodematakuliah, Nilai) VALUES ('444207', 'C1020', 'D120', 'A');
INSERT INTO Kontrak(NIM, NIDN, Kodematakuliah, Nilai) VALUES ('444208', 'C1021', 'D121', 'AB');
INSERT INTO Kontrak(NIM, NIDN, Kodematakuliah, Nilai) VALUES ('444209', 'C1022', 'D122', 'B');

