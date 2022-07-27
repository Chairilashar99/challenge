1.SELECT Mahasiswa.NIM,
Mahasiswa.Nama,
Mahasiswa.Alamat,
Mahasiswa.Jurusan,
Jurusan.Namajurusan
FROM
    Mahasiswa
    JOIN Jurusan ON Mahasiswa.Jurusan = Jurusan.Kodejurusan;

2.SELECT *
FROM
    Mahasiswa
WHERE
    Umur < 20;

3.SELECT kontrak.NIM,
Mahasiswa.Nama,
kontrak.NIDN,
Dosen.Namadosen,
kontrak.Kodematakuliah,
Matakuliah.Nama,
kontrak.Nilai
FROM
    kontrak
    JOIN Dosen ON kontrak.NIDN = Dosen.NIDN
    JOIN Mahasiswa ON kontrak.NIM = Mahasiswa.NIM
    JOIN Matakuliah ON kontrak.Kodematakuliah = Matakuliah.kodematakuliah
WHERE
    Nilai = 'AB'
    OR nilai = 'A';

4.SELECT
    kontrak.NIM,
    Mahasiswa.Nama,
    sum(Matakuliah.SKS) AS SKS
FROM
    kontrak
    JOIN Matakuliah ON Matakuliah.Kodematakuliah = kontrak.Kodematakuliah
    JOIN Mahasiswa ON kontrak.NIM = Mahasiswa.NIM
GROUP BY
    Mahasiswa.NIM
HAVING
    sum(Matakuliah.SKS) > 10;

5.SELECT
    kontrak.NIM,
    Mahasiswa.Nama,
    kontrak.NIDN,
    Dosen.Namadosen,
    kontrak.Kodematakuliah,
    Matakuliah.Nama,
    kontrak.Nilai
FROM
    kontrak
    JOIN Dosen ON kontrak.NIDN = Dosen.NIDN
    JOIN Mahasiswa ON kontrak.NIM = Mahasiswa.NIM
    JOIN Matakuliah ON kontrak.Kodematakuliah = Matakuliah.kodematakuliah
WHERE
    kontrak.Kodematakuliah = 'D126';

6.SELECT
    kontrak.NIDN,
    Dosen.Namadosen,
    count(distinct Mahasiswa.NIM) AS Mahasiswa
FROM
    kontrak
    JOIN Dosen ON kontrak.NIDN = Dosen.NIDN
    JOIN Mahasiswa ON kontrak.NIM = Mahasiswa.NIM
GROUP BY
    Dosen.Namadosen;

7.SELECT
    *
FROM
    Mahasiswa
ORDER BY
    Umur DESC;

8.SELECT kontrak.NIM,
Mahasiswa.Nama,
Jurusan.Kodejurusan,
Jurusan.Namajurusan,
kontrak.NIDN,
Dosen.Namadosen,
kontrak.Kodematakuliah,
Matakuliah.Nama,
kontrak.Nilai
FROM
    kontrak
    Join Jurusan ON Mahasiswa.Jurusan = Jurusan.Kodejurusan
    JOIN Dosen ON kontrak.NIDN = Dosen.NIDN
    JOIN Mahasiswa ON kontrak.NIM = Mahasiswa.NIM
    JOIN Matakuliah ON kontrak.Kodematakuliah = matakuliah.kodematakuliah
WHERE
    Nilai = 'D'
    or Nilai = 'E';