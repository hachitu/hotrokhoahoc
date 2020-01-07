-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2019 at 10:44 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 5.6.39

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `websubjects`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id_account` int(10) NOT NULL,
  `username` varchar(16) COLLATE utf8_vietnamese_ci NOT NULL,
  `password` varchar(150) COLLATE utf8_vietnamese_ci NOT NULL,
  `decentralization` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `classmodule`
--

CREATE TABLE `classmodule` (
  `ID_Classmodule` int(100) NOT NULL,
  `NameClass` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `ID_Teacher` int(10) NOT NULL,
  `ID_Subject` int(10) NOT NULL,
  `TimeStart` date NOT NULL,
  `TimeEnd` date NOT NULL,
  `CountStudent` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `ID_Comment` int(100) NOT NULL,
  `FK_ID_Topic` int(100) NOT NULL,
  `ID_Account` varchar(180) COLLATE utf8_vietnamese_ci NOT NULL,
  `ContentComment` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `Time` datetime NOT NULL,
  `TimeEdit` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`ID_Comment`, `FK_ID_Topic`, `ID_Account`, `ContentComment`, `Time`, `TimeEdit`) VALUES
(18, 9, '4', 'Nội dung nè  123', '2019-02-26 18:39:19', '2019-04-14 19:34:43'),
(19, 9, '4', '<p>Chào heo</p>', '2019-02-26 18:39:39', '2019-02-26 00:00:00'),
(20, 9, '4', '<p>Chào cậu nhé ^^</p>', '2019-02-26 18:42:05', '2019-02-26 18:57:22');

-- --------------------------------------------------------

--
-- Table structure for table `detailclassmodule`
--

CREATE TABLE `detailclassmodule` (
  `ID_Detail` int(10) NOT NULL,
  `ID_Classmodule` int(100) NOT NULL,
  `ID_Student` int(180) NOT NULL,
  `TimeRegis` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `detailclassmodule`
--

INSERT INTO `detailclassmodule` (`ID_Detail`, `ID_Classmodule`, `ID_Student`, `TimeRegis`) VALUES
(4, 3, 1, '2019-01-23'),
(3, 1, 1, '2019-01-23'),
(5, 3, 1, '2019-02-21'),
(6, 1, 2, '2019-02-21'),
(7, 3, 2, '2019-02-21'),
(8, 4, 2, '2019-02-21');

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `id` int(1) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `point`
--

CREATE TABLE `point` (
  `ID_Point` int(10) NOT NULL,
  `ID_Student` int(10) NOT NULL,
  `ID_Subject` int(10) NOT NULL,
  `chuyencan` float NOT NULL,
  `giuaky` float NOT NULL,
  `cuoiky` float NOT NULL,
  `tongket10` float NOT NULL,
  `tongket4` float NOT NULL,
  `chu` varchar(1) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(1) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(1, 'Qua môn'),
(2, 'Chưa học'),
(3, 'Đang học'),
(4, 'Thi lại');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `ID_Student` int(180) NOT NULL,
  `ID_Account` int(10) NOT NULL,
  `StudentCode` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `Avatar` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `NameStudent` varchar(180) COLLATE utf8_vietnamese_ci NOT NULL,
  `BirthDay` date NOT NULL,
  `PhoneNumber` int(12) NOT NULL,
  `Email` varchar(150) COLLATE utf8_vietnamese_ci NOT NULL,
  `Address` varchar(180) COLLATE utf8_vietnamese_ci NOT NULL,
  `Sex` int(2) NOT NULL,
  `Description` varchar(180) COLLATE utf8_vietnamese_ci NOT NULL,
  `Level` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `ID_Subject` int(100) NOT NULL,
  `NameSubject` varchar(150) COLLATE utf8_vietnamese_ci NOT NULL,
  `Number` int(1) NOT NULL,
  `Image` varchar(180) COLLATE utf8_vietnamese_ci NOT NULL,
  `Description` varchar(180) COLLATE utf8_vietnamese_ci NOT NULL,
  `Level` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `ID_Teacher` int(10) NOT NULL,
  `ID_Account` int(10) NOT NULL,
  `TeacherCode` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `Avatar` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `NameTeacher` varchar(180) COLLATE utf8_vietnamese_ci NOT NULL,
  `BirthDay` date NOT NULL,
  `Sex` int(2) NOT NULL,
  `PhoneNumber` varchar(12) COLLATE utf8_vietnamese_ci NOT NULL,
  `Email` varchar(180) COLLATE utf8_vietnamese_ci NOT NULL,
  `Description` varchar(180) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
  `ID_Topic` int(100) NOT NULL,
  `FK_ID_Classmodule` int(100) NOT NULL,
  `ID_Account` varchar(180) COLLATE utf8_vietnamese_ci NOT NULL,
  `Type` int(2) NOT NULL,
  `Time` datetime NOT NULL,
  `TimeEdit` datetime NOT NULL,
  `Title` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `Content` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`ID_Topic`, `FK_ID_Classmodule`, `ID_Account`, `Type`, `Time`, `TimeEdit`, `Title`, `Content`) VALUES
(9, 3, '4', 2, '2019-02-26 18:39:19', '2019-04-14 19:17:07', 'CHÀOOOOOOOOO MỌI NGƯỜI', 'Nội dung nè <3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id_account`);

--
-- Indexes for table `classmodule`
--
ALTER TABLE `classmodule`
  ADD PRIMARY KEY (`ID_Classmodule`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`ID_Comment`);

--
-- Indexes for table `detailclassmodule`
--
ALTER TABLE `detailclassmodule`
  ADD PRIMARY KEY (`ID_Detail`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `point`
--
ALTER TABLE `point`
  ADD PRIMARY KEY (`ID_Point`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`ID_Student`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`ID_Subject`),
  ADD UNIQUE KEY `ID_Subject` (`ID_Subject`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`ID_Teacher`);

--
-- Indexes for table `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`ID_Topic`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id_account` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `classmodule`
--
ALTER TABLE `classmodule`
  MODIFY `ID_Classmodule` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `ID_Comment` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `detailclassmodule`
--
ALTER TABLE `detailclassmodule`
  MODIFY `ID_Detail` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `point`
--
ALTER TABLE `point`
  MODIFY `ID_Point` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `ID_Student` int(180) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `ID_Subject` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `ID_Teacher` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
  MODIFY `ID_Topic` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
