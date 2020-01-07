-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2019 at 05:48 PM
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
  `decentralization` int(1) NOT NULL COMMENT '1- Admin / 2- Teacher / 3- Student',
  `Name` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `Avatar` varchar(2555) COLLATE utf8_vietnamese_ci NOT NULL,
  `BirthDay` date NOT NULL,
  `PhoneNumber` int(12) NOT NULL,
  `Email` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `Address` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `Sex` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id_account`, `username`, `password`, `decentralization`, `Name`, `Avatar`, `BirthDay`, `PhoneNumber`, `Email`, `Address`, `Sex`) VALUES
(24, 'hachitu', 'hachitu', 1, '', '', '0000-00-00', 0, '', '', 0),
(25, 'SV20001', 'SV20001', 3, 'Hà Chí Tú', 'Avatar-1559993026242.jpg', '1998-05-03', 1234, 'sinhvien1@gmail.com', 'Trái đất', 1),
(26, 'SV20002', 'SV20002', 3, 'Sinh viên 2', '', '1998-05-04', 1235, 'sinhvien2@gmail.com', 'Trái đất', 1),
(27, 'SV20003', 'SV20003', 3, 'Sinh viên 3', 'Avatar-1560052206125.jpg', '1998-05-05', 1236, 'sinhvien3@gmail.com', 'Trái đất', 1),
(28, 'SV20004', 'SV20004', 3, 'Sinh viên 4', '', '1998-05-06', 1237, 'sinhvien4@gmail.com', 'Trái đất', 1),
(29, 'SV20005', 'SV20005', 3, 'Sinh viên 5', '', '1998-05-07', 1238, 'sinhvien5@gmail.com', 'Trái đất', 1),
(30, 'SV20006', 'SV20006', 3, 'Sinh viên 6', '', '1998-05-08', 1239, 'sinhvien6@gmail.com', 'Trái đất', 1),
(31, 'SV20007', 'SV20007', 3, 'Sinh viên 7', '', '1998-05-09', 1240, 'sinhvien7@gmail.com', 'Trái đất', 1),
(32, 'SV20008', 'SV20008', 3, 'Sinh viên 8', '', '1998-05-10', 1241, 'sinhvien8@gmail.com', 'Trái đất', 1),
(33, 'SV20009', 'SV20009', 3, 'Sinh viên 9', '', '1998-05-11', 1242, 'sinhvien9@gmail.com', 'Trái đất', 1),
(34, 'SV20010', 'SV20010', 3, 'Sinh viên 10', '', '1998-05-12', 1243, 'sinhvien10@gmail.com', 'Trái đất', 1),
(35, 'SV20011', 'SV20011', 3, 'Sinh viên 11', '', '1998-05-13', 1244, 'sinhvien11@gmail.com', 'Trái đất', 1),
(36, 'SV20012', 'SV20012', 3, 'Sinh viên 12', '', '1998-05-14', 1245, 'sinhvien12@gmail.com', 'Trái đất', 1),
(37, 'SV20013', 'SV20013', 3, 'Sinh viên 13', '', '1998-05-15', 1246, 'sinhvien13@gmail.com', 'Trái đất', 1),
(38, 'SV20014', 'SV20014', 3, 'Sinh viên 14', '', '1998-05-16', 1247, 'sinhvien14@gmail.com', 'Trái đất', 1),
(39, 'SV20015', 'SV20015', 3, 'Sinh viên 15', '', '1998-05-17', 1248, 'sinhvien15@gmail.com', 'Trái đất', 1),
(40, 'SV20016', 'SV20016', 3, 'Sinh viên 16', '', '1998-05-18', 1249, 'sinhvien16@gmail.com', 'Trái đất', 1),
(41, 'SV20017', 'SV20017', 3, 'Sinh viên 17', '', '1998-05-19', 1250, 'sinhvien17@gmail.com', 'Trái đất', 1),
(42, 'SV20018', 'SV20018', 3, 'Sinh viên 18', '', '1998-05-20', 1251, 'sinhvien18@gmail.com', 'Trái đất', 1),
(43, 'SV20019', 'SV20019', 3, 'Sinh viên 19', '', '1998-05-21', 1252, 'sinhvien19@gmail.com', 'Trái đất', 1),
(44, 'SV20020', 'SV20020', 3, 'Sinh viên 20', '', '1998-05-22', 1253, 'sinhvien20@gmail.com', 'Trái đất', 1),
(45, 'SV20021', 'SV20021', 3, 'Sinh viên 21', '', '1998-05-23', 1254, 'sinhvien21@gmail.com', 'Trái đất', 1),
(46, 'SV20022', 'SV20022', 3, 'Sinh viên 22', '', '1998-05-24', 1255, 'sinhvien22@gmail.com', 'Trái đất', 1),
(47, 'GV20001', 'GV20001', 2, 'Lê Chí Luận', 'Avatar-1559993210466.jpg', '1972-02-25', 1234, 'giangvien1@gmail.com', 'Trái đất', 1),
(48, 'GV20002', 'GV20002', 2, 'Giảng viên 2', 'Avatar-1559996784774.jpg', '1972-02-26', 1235, 'giangvien2@gmail.com', 'Trái đất', 1),
(49, 'GV20001', 'GV20001', 2, 'Giảng viên 1', '', '1972-02-25', 1234, 'giangvien1@gmail.com', 'Trái đất', 1),
(50, 'GV20002', 'GV20002', 2, 'Giảng viên 2', '', '1972-02-26', 1235, 'giangvien2@gmail.com', 'Trái đất', 1),
(51, 'GV20003', 'GV20003', 2, 'Giảng viên 3', '', '1972-02-27', 1236, 'giangvien3@gmail.com', 'Trái đất', 1),
(52, 'GV20004', 'GV20004', 2, 'Giảng viên 4', '', '1972-02-28', 1237, 'giangvien4@gmail.com', 'Trái đất', 1),
(53, 'GV20005', 'GV20005', 2, 'Giảng viên 5', '', '1972-02-29', 1238, 'giangvien5@gmail.com', 'Trái đất', 1),
(54, 'GV20006', 'GV20006', 2, 'Giảng viên 6', '', '1972-03-01', 1239, 'giangvien6@gmail.com', 'Trái đất', 1),
(55, 'GV20007', 'GV20007', 2, 'Giảng viên 7', '', '1972-03-02', 1240, 'giangvien7@gmail.com', 'Trái đất', 1),
(56, 'GV20008', 'GV20008', 2, 'Giảng viên 8', '', '1972-03-03', 1241, 'giangvien8@gmail.com', 'Trái đất', 1),
(57, 'GV20009', 'GV20009', 2, 'Giảng viên 9', '', '1972-03-04', 1242, 'giangvien9@gmail.com', 'Trái đất', 1),
(58, 'GV20010', 'GV20010', 2, 'Giảng viên 10', '', '1972-03-05', 1243, 'giangvien10@gmail.com', 'Trái đất', 1),
(59, 'GV20011', 'GV20011', 2, 'Giảng viên 11', '', '1972-03-06', 1244, 'giangvien11@gmail.com', 'Trái đất', 1),
(60, 'GV20012', 'GV20012', 2, 'Giảng viên 12', '', '1972-03-07', 1245, 'giangvien12@gmail.com', 'Trái đất', 1),
(61, 'GV20013', 'GV20013', 2, 'Giảng viên 13', '', '1972-03-08', 1246, 'giangvien13@gmail.com', 'Trái đất', 1),
(62, 'GV20014', 'GV20014', 2, 'Giảng viên 14', '', '1972-03-09', 1247, 'giangvien14@gmail.com', 'Trái đất', 1),
(63, 'GV20015', 'GV20015', 2, 'Giảng viên 15', '', '1972-03-10', 1248, 'giangvien15@gmail.com', 'Trái đất', 1),
(64, 'GV20016', 'GV20016', 2, 'Giảng viên 16', '', '1972-03-11', 1249, 'giangvien16@gmail.com', 'Trái đất', 1),
(65, 'GV20017', 'GV20017', 2, 'Giảng viên 17', '', '1972-03-12', 1250, 'giangvien17@gmail.com', 'Trái đất', 1),
(66, 'GV20018', 'GV20018', 2, 'Giảng viên 18', '', '1972-03-13', 1251, 'giangvien18@gmail.com', 'Trái đất', 1),
(67, 'GV20019', 'GV20019', 2, 'Giảng viên 19', '', '1972-03-14', 1252, 'giangvien19@gmail.com', 'Trái đất', 1),
(68, 'GV20020', 'GV20020', 2, 'Giảng viên 20', '', '1972-03-15', 1253, 'giangvien20@gmail.com', 'Trái đất', 1),
(69, 'GV20021', 'GV20021', 2, 'Giảng viên 21', '', '1972-03-16', 1254, 'giangvien21@gmail.com', 'Trái đất', 1),
(70, 'GV20022', 'GV20022', 2, 'Giảng viên 22', '', '1972-03-17', 1255, 'giangvien22@gmail.com', 'Trái đất', 1);

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
  `CountStudent` int(100) NOT NULL,
  `status_teacher` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `classmodule`
--

INSERT INTO `classmodule` (`ID_Classmodule`, `NameClass`, `ID_Teacher`, `ID_Subject`, `TimeStart`, `TimeEnd`, `CountStudent`, `status_teacher`) VALUES
(22, 'Lớp học 1', 23, 1, '2019-04-20', '2020-04-20', 2, 1),
(23, 'Lớp học 2', 24, 2, '2019-04-21', '2020-04-21', 1, 0),
(24, 'Lớp học 3', 25, 3, '2019-04-22', '2020-04-22', 2, 0),
(25, 'Lớp học 4', 26, 4, '2019-04-23', '2020-04-23', 0, 0),
(26, 'Lớp học 5', 27, 5, '2019-04-24', '2020-04-24', 0, 0),
(27, 'Lớp học 6', 28, 6, '2019-04-25', '2020-04-25', 0, 0),
(28, 'Lớp học 7', 29, 7, '2019-04-26', '2020-04-26', 0, 0),
(29, 'Lớp học 8', 30, 8, '2019-04-27', '2020-04-27', 0, 0),
(30, 'Lớp học 9', 31, 9, '2019-04-28', '2020-04-28', 0, 0),
(31, 'Lớp học 10', 32, 10, '2019-04-29', '2020-04-29', 0, 0),
(32, 'Lớp học 11', 33, 11, '2019-04-30', '2020-04-30', 0, 0),
(33, 'Lớp học 12', 34, 12, '2019-05-01', '2020-05-01', 0, 0),
(34, 'Lớp học 13', 35, 13, '2019-05-02', '2020-05-02', 0, 0),
(35, 'Lớp học 14', 36, 14, '2019-05-03', '2020-05-03', 0, 0),
(36, 'Lớp học 15', 37, 15, '2019-05-04', '2020-05-04', 0, 0),
(37, 'Lớp học 16', 38, 16, '2019-05-05', '2020-05-05', 0, 0),
(38, 'Lớp học 17', 39, 17, '2019-05-06', '2020-05-06', 0, 0),
(39, 'Lớp học 18', 40, 18, '2019-05-07', '2020-05-07', 0, 0),
(40, 'Lớp học 19', 41, 19, '2019-05-08', '2020-05-08', 0, 0);

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
(47, 18, '25', '<h2>Chào các em, anh là lớp trưởng của lớp mình. hết</h2>', '2019-06-08 18:12:44', '0000-00-00 00:00:00'),
(48, 19, '47', '<h2><strong>Chào cả lớp&nbsp;</strong></h2>', '2019-06-08 18:27:29', '0000-00-00 00:00:00'),
(49, 18, '47', '<h2><i><strong>OKE CHÀO EM</strong></i></h2>', '2019-06-08 18:27:47', '0000-00-00 00:00:00'),
(57, 25, '48', '<h2><i><strong>ádfghjsa</strong></i></h2>', '2019-06-09 10:56:39', '0000-00-00 00:00:00'),
(56, 18, '25', '<h2><strong>ABC XYZ</strong></h2>', '2019-06-09 10:55:52', '0000-00-00 00:00:00'),
(53, 22, '52', '<p>1234567</p>', '2019-06-09 10:39:55', '0000-00-00 00:00:00'),
(54, 23, '53', '<h2><strong>123</strong></h2>', '2019-06-09 10:41:30', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `detailclassmodule`
--

CREATE TABLE `detailclassmodule` (
  `ID_Detail` int(10) NOT NULL,
  `ID_Classmodule` int(100) NOT NULL,
  `ID_Student` int(180) NOT NULL,
  `status` int(11) NOT NULL,
  `TimeRegis` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `detailclassmodule`
--

INSERT INTO `detailclassmodule` (`ID_Detail`, `ID_Classmodule`, `ID_Student`, `status`, `TimeRegis`) VALUES
(9, 22, 45, 1, '2019-06-08'),
(10, 23, 45, 0, '2019-06-08'),
(11, 24, 47, 0, '2019-06-09'),
(12, 22, 47, 1, '2019-06-09'),
(13, 24, 45, 0, '2019-06-09');

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

--
-- Dumping data for table `point`
--

INSERT INTO `point` (`ID_Point`, `ID_Student`, `ID_Subject`, `chuyencan`, `giuaky`, `cuoiky`, `tongket10`, `tongket4`, `chu`, `status`) VALUES
(837, 45, 1, 9, 9, 9, 9, 4, 'A', 1),
(838, 45, 2, 0, 0, 0, 0, 0, '', 3),
(839, 45, 3, 0, 0, 0, 0, 0, '', 3),
(840, 45, 4, 0, 0, 0, 0, 0, '', 2),
(841, 45, 5, 0, 0, 0, 0, 0, '', 2),
(842, 45, 6, 0, 0, 0, 0, 0, '', 2),
(843, 45, 7, 0, 0, 0, 0, 0, '', 2),
(844, 45, 8, 0, 0, 0, 0, 0, '', 2),
(845, 45, 9, 0, 0, 0, 0, 0, '', 2),
(846, 45, 10, 0, 0, 0, 0, 0, '', 2),
(847, 45, 11, 0, 0, 0, 0, 0, '', 2),
(848, 45, 12, 0, 0, 0, 0, 0, '', 2),
(849, 45, 13, 0, 0, 0, 0, 0, '', 2),
(850, 45, 14, 0, 0, 0, 0, 0, '', 2),
(851, 45, 15, 0, 0, 0, 0, 0, '', 2),
(852, 45, 16, 0, 0, 0, 0, 0, '', 2),
(853, 45, 17, 0, 0, 0, 0, 0, '', 2),
(854, 45, 18, 0, 0, 0, 0, 0, '', 2),
(855, 45, 19, 0, 0, 0, 0, 0, '', 2),
(856, 46, 1, 0, 0, 0, 0, 0, '', 2),
(857, 46, 2, 0, 0, 0, 0, 0, '', 2),
(858, 46, 3, 0, 0, 0, 0, 0, '', 2),
(859, 46, 4, 0, 0, 0, 0, 0, '', 2),
(860, 46, 5, 0, 0, 0, 0, 0, '', 2),
(861, 46, 6, 0, 0, 0, 0, 0, '', 2),
(862, 46, 7, 0, 0, 0, 0, 0, '', 2),
(863, 46, 8, 0, 0, 0, 0, 0, '', 2),
(864, 46, 9, 0, 0, 0, 0, 0, '', 2),
(865, 46, 10, 0, 0, 0, 0, 0, '', 2),
(866, 46, 11, 0, 0, 0, 0, 0, '', 2),
(867, 46, 12, 0, 0, 0, 0, 0, '', 2),
(868, 46, 13, 0, 0, 0, 0, 0, '', 2),
(869, 46, 14, 0, 0, 0, 0, 0, '', 2),
(870, 46, 15, 0, 0, 0, 0, 0, '', 2),
(871, 46, 16, 0, 0, 0, 0, 0, '', 2),
(872, 46, 17, 0, 0, 0, 0, 0, '', 2),
(873, 46, 18, 0, 0, 0, 0, 0, '', 2),
(874, 46, 19, 0, 0, 0, 0, 0, '', 2),
(875, 47, 1, 9, 9, 9, 9, 4, 'A', 1),
(876, 47, 2, 0, 0, 0, 0, 0, '', 2),
(877, 47, 3, 0, 0, 0, 0, 0, '', 3),
(878, 47, 4, 0, 0, 0, 0, 0, '', 2),
(879, 47, 5, 0, 0, 0, 0, 0, '', 2),
(880, 47, 6, 0, 0, 0, 0, 0, '', 2),
(881, 47, 7, 0, 0, 0, 0, 0, '', 2),
(882, 47, 8, 0, 0, 0, 0, 0, '', 2),
(883, 47, 9, 0, 0, 0, 0, 0, '', 2),
(884, 47, 10, 0, 0, 0, 0, 0, '', 2),
(885, 47, 11, 0, 0, 0, 0, 0, '', 2),
(886, 47, 12, 0, 0, 0, 0, 0, '', 2),
(887, 47, 13, 0, 0, 0, 0, 0, '', 2),
(888, 47, 14, 0, 0, 0, 0, 0, '', 2),
(889, 47, 15, 0, 0, 0, 0, 0, '', 2),
(890, 47, 16, 0, 0, 0, 0, 0, '', 2),
(891, 47, 17, 0, 0, 0, 0, 0, '', 2),
(892, 47, 18, 0, 0, 0, 0, 0, '', 2),
(893, 47, 19, 0, 0, 0, 0, 0, '', 2),
(894, 48, 1, 0, 0, 0, 0, 0, '', 2),
(895, 48, 2, 0, 0, 0, 0, 0, '', 2),
(896, 48, 3, 0, 0, 0, 0, 0, '', 2),
(897, 48, 4, 0, 0, 0, 0, 0, '', 2),
(898, 48, 5, 0, 0, 0, 0, 0, '', 2),
(899, 48, 6, 0, 0, 0, 0, 0, '', 2),
(900, 48, 7, 0, 0, 0, 0, 0, '', 2),
(901, 48, 8, 0, 0, 0, 0, 0, '', 2),
(902, 48, 9, 0, 0, 0, 0, 0, '', 2),
(903, 48, 10, 0, 0, 0, 0, 0, '', 2),
(904, 48, 11, 0, 0, 0, 0, 0, '', 2),
(905, 48, 12, 0, 0, 0, 0, 0, '', 2),
(906, 48, 13, 0, 0, 0, 0, 0, '', 2),
(907, 48, 14, 0, 0, 0, 0, 0, '', 2),
(908, 48, 15, 0, 0, 0, 0, 0, '', 2),
(909, 48, 16, 0, 0, 0, 0, 0, '', 2),
(910, 48, 17, 0, 0, 0, 0, 0, '', 2),
(911, 48, 18, 0, 0, 0, 0, 0, '', 2),
(912, 48, 19, 0, 0, 0, 0, 0, '', 2),
(913, 49, 1, 0, 0, 0, 0, 0, '', 2),
(914, 49, 2, 0, 0, 0, 0, 0, '', 2),
(915, 49, 3, 0, 0, 0, 0, 0, '', 2),
(916, 49, 4, 0, 0, 0, 0, 0, '', 2),
(917, 49, 5, 0, 0, 0, 0, 0, '', 2),
(918, 49, 6, 0, 0, 0, 0, 0, '', 2),
(919, 49, 7, 0, 0, 0, 0, 0, '', 2),
(920, 49, 8, 0, 0, 0, 0, 0, '', 2),
(921, 49, 9, 0, 0, 0, 0, 0, '', 2),
(922, 49, 10, 0, 0, 0, 0, 0, '', 2),
(923, 49, 11, 0, 0, 0, 0, 0, '', 2),
(924, 49, 12, 0, 0, 0, 0, 0, '', 2),
(925, 49, 13, 0, 0, 0, 0, 0, '', 2),
(926, 49, 14, 0, 0, 0, 0, 0, '', 2),
(927, 49, 15, 0, 0, 0, 0, 0, '', 2),
(928, 49, 16, 0, 0, 0, 0, 0, '', 2),
(929, 49, 17, 0, 0, 0, 0, 0, '', 2),
(930, 49, 18, 0, 0, 0, 0, 0, '', 2),
(931, 49, 19, 0, 0, 0, 0, 0, '', 2),
(932, 50, 1, 0, 0, 0, 0, 0, '', 2),
(933, 50, 2, 0, 0, 0, 0, 0, '', 2),
(934, 50, 3, 0, 0, 0, 0, 0, '', 2),
(935, 50, 4, 0, 0, 0, 0, 0, '', 2),
(936, 50, 5, 0, 0, 0, 0, 0, '', 2),
(937, 50, 6, 0, 0, 0, 0, 0, '', 2),
(938, 50, 7, 0, 0, 0, 0, 0, '', 2),
(939, 50, 8, 0, 0, 0, 0, 0, '', 2),
(940, 50, 9, 0, 0, 0, 0, 0, '', 2),
(941, 50, 10, 0, 0, 0, 0, 0, '', 2),
(942, 50, 11, 0, 0, 0, 0, 0, '', 2),
(943, 50, 12, 0, 0, 0, 0, 0, '', 2),
(944, 50, 13, 0, 0, 0, 0, 0, '', 2),
(945, 50, 14, 0, 0, 0, 0, 0, '', 2),
(946, 50, 15, 0, 0, 0, 0, 0, '', 2),
(947, 50, 16, 0, 0, 0, 0, 0, '', 2),
(948, 50, 17, 0, 0, 0, 0, 0, '', 2),
(949, 50, 18, 0, 0, 0, 0, 0, '', 2),
(950, 50, 19, 0, 0, 0, 0, 0, '', 2),
(951, 51, 1, 0, 0, 0, 0, 0, '', 2),
(952, 51, 2, 0, 0, 0, 0, 0, '', 2),
(953, 51, 3, 0, 0, 0, 0, 0, '', 2),
(954, 51, 4, 0, 0, 0, 0, 0, '', 2),
(955, 51, 5, 0, 0, 0, 0, 0, '', 2),
(956, 51, 6, 0, 0, 0, 0, 0, '', 2),
(957, 51, 7, 0, 0, 0, 0, 0, '', 2),
(958, 51, 8, 0, 0, 0, 0, 0, '', 2),
(959, 51, 9, 0, 0, 0, 0, 0, '', 2),
(960, 51, 10, 0, 0, 0, 0, 0, '', 2),
(961, 51, 11, 0, 0, 0, 0, 0, '', 2),
(962, 51, 12, 0, 0, 0, 0, 0, '', 2),
(963, 51, 13, 0, 0, 0, 0, 0, '', 2),
(964, 51, 14, 0, 0, 0, 0, 0, '', 2),
(965, 51, 15, 0, 0, 0, 0, 0, '', 2),
(966, 51, 16, 0, 0, 0, 0, 0, '', 2),
(967, 51, 17, 0, 0, 0, 0, 0, '', 2),
(968, 51, 18, 0, 0, 0, 0, 0, '', 2),
(969, 51, 19, 0, 0, 0, 0, 0, '', 2),
(970, 52, 1, 0, 0, 0, 0, 0, '', 2),
(971, 52, 2, 0, 0, 0, 0, 0, '', 2),
(972, 52, 3, 0, 0, 0, 0, 0, '', 2),
(973, 52, 4, 0, 0, 0, 0, 0, '', 2),
(974, 52, 5, 0, 0, 0, 0, 0, '', 2),
(975, 52, 6, 0, 0, 0, 0, 0, '', 2),
(976, 52, 7, 0, 0, 0, 0, 0, '', 2),
(977, 52, 8, 0, 0, 0, 0, 0, '', 2),
(978, 52, 9, 0, 0, 0, 0, 0, '', 2),
(979, 52, 10, 0, 0, 0, 0, 0, '', 2),
(980, 52, 11, 0, 0, 0, 0, 0, '', 2),
(981, 52, 12, 0, 0, 0, 0, 0, '', 2),
(982, 52, 13, 0, 0, 0, 0, 0, '', 2),
(983, 52, 14, 0, 0, 0, 0, 0, '', 2),
(984, 52, 15, 0, 0, 0, 0, 0, '', 2),
(985, 52, 16, 0, 0, 0, 0, 0, '', 2),
(986, 52, 17, 0, 0, 0, 0, 0, '', 2),
(987, 52, 18, 0, 0, 0, 0, 0, '', 2),
(988, 52, 19, 0, 0, 0, 0, 0, '', 2),
(989, 53, 1, 0, 0, 0, 0, 0, '', 2),
(990, 53, 2, 0, 0, 0, 0, 0, '', 2),
(991, 53, 3, 0, 0, 0, 0, 0, '', 2),
(992, 53, 4, 0, 0, 0, 0, 0, '', 2),
(993, 53, 5, 0, 0, 0, 0, 0, '', 2),
(994, 53, 6, 0, 0, 0, 0, 0, '', 2),
(995, 53, 7, 0, 0, 0, 0, 0, '', 2),
(996, 53, 8, 0, 0, 0, 0, 0, '', 2),
(997, 53, 9, 0, 0, 0, 0, 0, '', 2),
(998, 53, 10, 0, 0, 0, 0, 0, '', 2),
(999, 53, 11, 0, 0, 0, 0, 0, '', 2),
(1000, 53, 12, 0, 0, 0, 0, 0, '', 2),
(1001, 53, 13, 0, 0, 0, 0, 0, '', 2),
(1002, 53, 14, 0, 0, 0, 0, 0, '', 2),
(1003, 53, 15, 0, 0, 0, 0, 0, '', 2),
(1004, 53, 16, 0, 0, 0, 0, 0, '', 2),
(1005, 53, 17, 0, 0, 0, 0, 0, '', 2),
(1006, 53, 18, 0, 0, 0, 0, 0, '', 2),
(1007, 53, 19, 0, 0, 0, 0, 0, '', 2),
(1008, 54, 1, 0, 0, 0, 0, 0, '', 2),
(1009, 54, 2, 0, 0, 0, 0, 0, '', 2),
(1010, 54, 3, 0, 0, 0, 0, 0, '', 2),
(1011, 54, 4, 0, 0, 0, 0, 0, '', 2),
(1012, 54, 5, 0, 0, 0, 0, 0, '', 2),
(1013, 54, 6, 0, 0, 0, 0, 0, '', 2),
(1014, 54, 7, 0, 0, 0, 0, 0, '', 2),
(1015, 54, 8, 0, 0, 0, 0, 0, '', 2),
(1016, 54, 9, 0, 0, 0, 0, 0, '', 2),
(1017, 54, 10, 0, 0, 0, 0, 0, '', 2),
(1018, 54, 11, 0, 0, 0, 0, 0, '', 2),
(1019, 54, 12, 0, 0, 0, 0, 0, '', 2),
(1020, 54, 13, 0, 0, 0, 0, 0, '', 2),
(1021, 54, 14, 0, 0, 0, 0, 0, '', 2),
(1022, 54, 15, 0, 0, 0, 0, 0, '', 2),
(1023, 54, 16, 0, 0, 0, 0, 0, '', 2),
(1024, 54, 17, 0, 0, 0, 0, 0, '', 2),
(1025, 54, 18, 0, 0, 0, 0, 0, '', 2),
(1026, 54, 19, 0, 0, 0, 0, 0, '', 2),
(1027, 55, 1, 0, 0, 0, 0, 0, '', 2),
(1028, 55, 2, 0, 0, 0, 0, 0, '', 2),
(1029, 55, 3, 0, 0, 0, 0, 0, '', 2),
(1030, 55, 4, 0, 0, 0, 0, 0, '', 2),
(1031, 55, 5, 0, 0, 0, 0, 0, '', 2),
(1032, 55, 6, 0, 0, 0, 0, 0, '', 2),
(1033, 55, 7, 0, 0, 0, 0, 0, '', 2),
(1034, 55, 8, 0, 0, 0, 0, 0, '', 2),
(1035, 55, 9, 0, 0, 0, 0, 0, '', 2),
(1036, 55, 10, 0, 0, 0, 0, 0, '', 2),
(1037, 55, 11, 0, 0, 0, 0, 0, '', 2),
(1038, 55, 12, 0, 0, 0, 0, 0, '', 2),
(1039, 55, 13, 0, 0, 0, 0, 0, '', 2),
(1040, 55, 14, 0, 0, 0, 0, 0, '', 2),
(1041, 55, 15, 0, 0, 0, 0, 0, '', 2),
(1042, 55, 16, 0, 0, 0, 0, 0, '', 2),
(1043, 55, 17, 0, 0, 0, 0, 0, '', 2),
(1044, 55, 18, 0, 0, 0, 0, 0, '', 2),
(1045, 55, 19, 0, 0, 0, 0, 0, '', 2),
(1046, 56, 1, 0, 0, 0, 0, 0, '', 2),
(1047, 56, 2, 0, 0, 0, 0, 0, '', 2),
(1048, 56, 3, 0, 0, 0, 0, 0, '', 2),
(1049, 56, 4, 0, 0, 0, 0, 0, '', 2),
(1050, 56, 5, 0, 0, 0, 0, 0, '', 2),
(1051, 56, 6, 0, 0, 0, 0, 0, '', 2),
(1052, 56, 7, 0, 0, 0, 0, 0, '', 2),
(1053, 56, 8, 0, 0, 0, 0, 0, '', 2),
(1054, 56, 9, 0, 0, 0, 0, 0, '', 2),
(1055, 56, 10, 0, 0, 0, 0, 0, '', 2),
(1056, 56, 11, 0, 0, 0, 0, 0, '', 2),
(1057, 56, 12, 0, 0, 0, 0, 0, '', 2),
(1058, 56, 13, 0, 0, 0, 0, 0, '', 2),
(1059, 56, 14, 0, 0, 0, 0, 0, '', 2),
(1060, 56, 15, 0, 0, 0, 0, 0, '', 2),
(1061, 56, 16, 0, 0, 0, 0, 0, '', 2),
(1062, 56, 17, 0, 0, 0, 0, 0, '', 2),
(1063, 56, 18, 0, 0, 0, 0, 0, '', 2),
(1064, 56, 19, 0, 0, 0, 0, 0, '', 2),
(1065, 57, 1, 0, 0, 0, 0, 0, '', 2),
(1066, 57, 2, 0, 0, 0, 0, 0, '', 2),
(1067, 57, 3, 0, 0, 0, 0, 0, '', 2),
(1068, 57, 4, 0, 0, 0, 0, 0, '', 2),
(1069, 57, 5, 0, 0, 0, 0, 0, '', 2),
(1070, 57, 6, 0, 0, 0, 0, 0, '', 2),
(1071, 57, 7, 0, 0, 0, 0, 0, '', 2),
(1072, 57, 8, 0, 0, 0, 0, 0, '', 2),
(1073, 57, 9, 0, 0, 0, 0, 0, '', 2),
(1074, 57, 10, 0, 0, 0, 0, 0, '', 2),
(1075, 57, 11, 0, 0, 0, 0, 0, '', 2),
(1076, 57, 12, 0, 0, 0, 0, 0, '', 2),
(1077, 57, 13, 0, 0, 0, 0, 0, '', 2),
(1078, 57, 14, 0, 0, 0, 0, 0, '', 2),
(1079, 57, 15, 0, 0, 0, 0, 0, '', 2),
(1080, 57, 16, 0, 0, 0, 0, 0, '', 2),
(1081, 57, 17, 0, 0, 0, 0, 0, '', 2),
(1082, 57, 18, 0, 0, 0, 0, 0, '', 2),
(1083, 57, 19, 0, 0, 0, 0, 0, '', 2),
(1084, 58, 1, 0, 0, 0, 0, 0, '', 2),
(1085, 58, 2, 0, 0, 0, 0, 0, '', 2),
(1086, 58, 3, 0, 0, 0, 0, 0, '', 2),
(1087, 58, 4, 0, 0, 0, 0, 0, '', 2),
(1088, 58, 5, 0, 0, 0, 0, 0, '', 2),
(1089, 58, 6, 0, 0, 0, 0, 0, '', 2),
(1090, 58, 7, 0, 0, 0, 0, 0, '', 2),
(1091, 58, 8, 0, 0, 0, 0, 0, '', 2),
(1092, 58, 9, 0, 0, 0, 0, 0, '', 2),
(1093, 58, 10, 0, 0, 0, 0, 0, '', 2),
(1094, 58, 11, 0, 0, 0, 0, 0, '', 2),
(1095, 58, 12, 0, 0, 0, 0, 0, '', 2),
(1096, 58, 13, 0, 0, 0, 0, 0, '', 2),
(1097, 58, 14, 0, 0, 0, 0, 0, '', 2),
(1098, 58, 15, 0, 0, 0, 0, 0, '', 2),
(1099, 58, 16, 0, 0, 0, 0, 0, '', 2),
(1100, 58, 17, 0, 0, 0, 0, 0, '', 2),
(1101, 58, 18, 0, 0, 0, 0, 0, '', 2),
(1102, 58, 19, 0, 0, 0, 0, 0, '', 2),
(1103, 59, 1, 0, 0, 0, 0, 0, '', 2),
(1104, 59, 2, 0, 0, 0, 0, 0, '', 2),
(1105, 59, 3, 0, 0, 0, 0, 0, '', 2),
(1106, 59, 4, 0, 0, 0, 0, 0, '', 2),
(1107, 59, 5, 0, 0, 0, 0, 0, '', 2),
(1108, 59, 6, 0, 0, 0, 0, 0, '', 2),
(1109, 59, 7, 0, 0, 0, 0, 0, '', 2),
(1110, 59, 8, 0, 0, 0, 0, 0, '', 2),
(1111, 59, 9, 0, 0, 0, 0, 0, '', 2),
(1112, 59, 10, 0, 0, 0, 0, 0, '', 2),
(1113, 59, 11, 0, 0, 0, 0, 0, '', 2),
(1114, 59, 12, 0, 0, 0, 0, 0, '', 2),
(1115, 59, 13, 0, 0, 0, 0, 0, '', 2),
(1116, 59, 14, 0, 0, 0, 0, 0, '', 2),
(1117, 59, 15, 0, 0, 0, 0, 0, '', 2),
(1118, 59, 16, 0, 0, 0, 0, 0, '', 2),
(1119, 59, 17, 0, 0, 0, 0, 0, '', 2),
(1120, 59, 18, 0, 0, 0, 0, 0, '', 2),
(1121, 59, 19, 0, 0, 0, 0, 0, '', 2),
(1122, 60, 1, 0, 0, 0, 0, 0, '', 2),
(1123, 60, 2, 0, 0, 0, 0, 0, '', 2),
(1124, 60, 3, 0, 0, 0, 0, 0, '', 2),
(1125, 60, 4, 0, 0, 0, 0, 0, '', 2),
(1126, 60, 5, 0, 0, 0, 0, 0, '', 2),
(1127, 60, 6, 0, 0, 0, 0, 0, '', 2),
(1128, 60, 7, 0, 0, 0, 0, 0, '', 2),
(1129, 60, 8, 0, 0, 0, 0, 0, '', 2),
(1130, 60, 9, 0, 0, 0, 0, 0, '', 2),
(1131, 60, 10, 0, 0, 0, 0, 0, '', 2),
(1132, 60, 11, 0, 0, 0, 0, 0, '', 2),
(1133, 60, 12, 0, 0, 0, 0, 0, '', 2),
(1134, 60, 13, 0, 0, 0, 0, 0, '', 2),
(1135, 60, 14, 0, 0, 0, 0, 0, '', 2),
(1136, 60, 15, 0, 0, 0, 0, 0, '', 2),
(1137, 60, 16, 0, 0, 0, 0, 0, '', 2),
(1138, 60, 17, 0, 0, 0, 0, 0, '', 2),
(1139, 60, 18, 0, 0, 0, 0, 0, '', 2),
(1140, 60, 19, 0, 0, 0, 0, 0, '', 2),
(1141, 61, 1, 0, 0, 0, 0, 0, '', 2),
(1142, 61, 2, 0, 0, 0, 0, 0, '', 2),
(1143, 61, 3, 0, 0, 0, 0, 0, '', 2),
(1144, 61, 4, 0, 0, 0, 0, 0, '', 2),
(1145, 61, 5, 0, 0, 0, 0, 0, '', 2),
(1146, 61, 6, 0, 0, 0, 0, 0, '', 2),
(1147, 61, 7, 0, 0, 0, 0, 0, '', 2),
(1148, 61, 8, 0, 0, 0, 0, 0, '', 2),
(1149, 61, 9, 0, 0, 0, 0, 0, '', 2),
(1150, 61, 10, 0, 0, 0, 0, 0, '', 2),
(1151, 61, 11, 0, 0, 0, 0, 0, '', 2),
(1152, 61, 12, 0, 0, 0, 0, 0, '', 2),
(1153, 61, 13, 0, 0, 0, 0, 0, '', 2),
(1154, 61, 14, 0, 0, 0, 0, 0, '', 2),
(1155, 61, 15, 0, 0, 0, 0, 0, '', 2),
(1156, 61, 16, 0, 0, 0, 0, 0, '', 2),
(1157, 61, 17, 0, 0, 0, 0, 0, '', 2),
(1158, 61, 18, 0, 0, 0, 0, 0, '', 2),
(1159, 61, 19, 0, 0, 0, 0, 0, '', 2),
(1160, 62, 1, 0, 0, 0, 0, 0, '', 2),
(1161, 62, 2, 0, 0, 0, 0, 0, '', 2),
(1162, 62, 3, 0, 0, 0, 0, 0, '', 2),
(1163, 62, 4, 0, 0, 0, 0, 0, '', 2),
(1164, 62, 5, 0, 0, 0, 0, 0, '', 2),
(1165, 62, 6, 0, 0, 0, 0, 0, '', 2),
(1166, 62, 7, 0, 0, 0, 0, 0, '', 2),
(1167, 62, 8, 0, 0, 0, 0, 0, '', 2),
(1168, 62, 9, 0, 0, 0, 0, 0, '', 2),
(1169, 62, 10, 0, 0, 0, 0, 0, '', 2),
(1170, 62, 11, 0, 0, 0, 0, 0, '', 2),
(1171, 62, 12, 0, 0, 0, 0, 0, '', 2),
(1172, 62, 13, 0, 0, 0, 0, 0, '', 2),
(1173, 62, 14, 0, 0, 0, 0, 0, '', 2),
(1174, 62, 15, 0, 0, 0, 0, 0, '', 2),
(1175, 62, 16, 0, 0, 0, 0, 0, '', 2),
(1176, 62, 17, 0, 0, 0, 0, 0, '', 2),
(1177, 62, 18, 0, 0, 0, 0, 0, '', 2),
(1178, 62, 19, 0, 0, 0, 0, 0, '', 2),
(1179, 63, 1, 0, 0, 0, 0, 0, '', 2),
(1180, 63, 2, 0, 0, 0, 0, 0, '', 2),
(1181, 63, 3, 0, 0, 0, 0, 0, '', 2),
(1182, 63, 4, 0, 0, 0, 0, 0, '', 2),
(1183, 63, 5, 0, 0, 0, 0, 0, '', 2),
(1184, 63, 6, 0, 0, 0, 0, 0, '', 2),
(1185, 63, 7, 0, 0, 0, 0, 0, '', 2),
(1186, 63, 8, 0, 0, 0, 0, 0, '', 2),
(1187, 63, 9, 0, 0, 0, 0, 0, '', 2),
(1188, 63, 10, 0, 0, 0, 0, 0, '', 2),
(1189, 63, 11, 0, 0, 0, 0, 0, '', 2),
(1190, 63, 12, 0, 0, 0, 0, 0, '', 2),
(1191, 63, 13, 0, 0, 0, 0, 0, '', 2),
(1192, 63, 14, 0, 0, 0, 0, 0, '', 2),
(1193, 63, 15, 0, 0, 0, 0, 0, '', 2),
(1194, 63, 16, 0, 0, 0, 0, 0, '', 2),
(1195, 63, 17, 0, 0, 0, 0, 0, '', 2),
(1196, 63, 18, 0, 0, 0, 0, 0, '', 2),
(1197, 63, 19, 0, 0, 0, 0, 0, '', 2),
(1198, 64, 1, 0, 0, 0, 0, 0, '', 2),
(1199, 64, 2, 0, 0, 0, 0, 0, '', 2),
(1200, 64, 3, 0, 0, 0, 0, 0, '', 2),
(1201, 64, 4, 0, 0, 0, 0, 0, '', 2),
(1202, 64, 5, 0, 0, 0, 0, 0, '', 2),
(1203, 64, 6, 0, 0, 0, 0, 0, '', 2),
(1204, 64, 7, 0, 0, 0, 0, 0, '', 2),
(1205, 64, 8, 0, 0, 0, 0, 0, '', 2),
(1206, 64, 9, 0, 0, 0, 0, 0, '', 2),
(1207, 64, 10, 0, 0, 0, 0, 0, '', 2),
(1208, 64, 11, 0, 0, 0, 0, 0, '', 2),
(1209, 64, 12, 0, 0, 0, 0, 0, '', 2),
(1210, 64, 13, 0, 0, 0, 0, 0, '', 2),
(1211, 64, 14, 0, 0, 0, 0, 0, '', 2),
(1212, 64, 15, 0, 0, 0, 0, 0, '', 2),
(1213, 64, 16, 0, 0, 0, 0, 0, '', 2),
(1214, 64, 17, 0, 0, 0, 0, 0, '', 2),
(1215, 64, 18, 0, 0, 0, 0, 0, '', 2),
(1216, 64, 19, 0, 0, 0, 0, 0, '', 2),
(1217, 65, 1, 0, 0, 0, 0, 0, '', 2),
(1218, 65, 2, 0, 0, 0, 0, 0, '', 2),
(1219, 65, 3, 0, 0, 0, 0, 0, '', 2),
(1220, 65, 4, 0, 0, 0, 0, 0, '', 2),
(1221, 65, 5, 0, 0, 0, 0, 0, '', 2),
(1222, 65, 6, 0, 0, 0, 0, 0, '', 2),
(1223, 65, 7, 0, 0, 0, 0, 0, '', 2),
(1224, 65, 8, 0, 0, 0, 0, 0, '', 2),
(1225, 65, 9, 0, 0, 0, 0, 0, '', 2),
(1226, 65, 10, 0, 0, 0, 0, 0, '', 2),
(1227, 65, 11, 0, 0, 0, 0, 0, '', 2),
(1228, 65, 12, 0, 0, 0, 0, 0, '', 2),
(1229, 65, 13, 0, 0, 0, 0, 0, '', 2),
(1230, 65, 14, 0, 0, 0, 0, 0, '', 2),
(1231, 65, 15, 0, 0, 0, 0, 0, '', 2),
(1232, 65, 16, 0, 0, 0, 0, 0, '', 2),
(1233, 65, 17, 0, 0, 0, 0, 0, '', 2),
(1234, 65, 18, 0, 0, 0, 0, 0, '', 2),
(1235, 65, 19, 0, 0, 0, 0, 0, '', 2),
(1236, 66, 1, 0, 0, 0, 0, 0, '', 2),
(1237, 66, 2, 0, 0, 0, 0, 0, '', 2),
(1238, 66, 3, 0, 0, 0, 0, 0, '', 2),
(1239, 66, 4, 0, 0, 0, 0, 0, '', 2),
(1240, 66, 5, 0, 0, 0, 0, 0, '', 2),
(1241, 66, 6, 0, 0, 0, 0, 0, '', 2),
(1242, 66, 7, 0, 0, 0, 0, 0, '', 2),
(1243, 66, 8, 0, 0, 0, 0, 0, '', 2),
(1244, 66, 9, 0, 0, 0, 0, 0, '', 2),
(1245, 66, 10, 0, 0, 0, 0, 0, '', 2),
(1246, 66, 11, 0, 0, 0, 0, 0, '', 2),
(1247, 66, 12, 0, 0, 0, 0, 0, '', 2),
(1248, 66, 13, 0, 0, 0, 0, 0, '', 2),
(1249, 66, 14, 0, 0, 0, 0, 0, '', 2),
(1250, 66, 15, 0, 0, 0, 0, 0, '', 2),
(1251, 66, 16, 0, 0, 0, 0, 0, '', 2),
(1252, 66, 17, 0, 0, 0, 0, 0, '', 2),
(1253, 66, 18, 0, 0, 0, 0, 0, '', 2),
(1254, 66, 19, 0, 0, 0, 0, 0, '', 2);

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
  `Description` varchar(180) COLLATE utf8_vietnamese_ci NOT NULL,
  `Level` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`ID_Student`, `ID_Account`, `StudentCode`, `Description`, `Level`) VALUES
(45, 25, 'SV20001', '', 1),
(46, 26, 'SV20002', '', 1),
(47, 27, 'SV20003', '', 1),
(48, 28, 'SV20004', '', 1),
(49, 29, 'SV20005', '', 1),
(50, 30, 'SV20006', '', 1),
(51, 31, 'SV20007', '', 1),
(52, 32, 'SV20008', '', 1),
(53, 33, 'SV20009', '', 1),
(54, 34, 'SV20010', '', 1),
(55, 35, 'SV20011', '', 1),
(56, 36, 'SV20012', '', 1),
(57, 37, 'SV20013', '', 1),
(58, 38, 'SV20014', '', 1),
(59, 39, 'SV20015', '', 1),
(60, 40, 'SV20016', '', 1),
(61, 41, 'SV20017', '', 1),
(62, 42, 'SV20018', '', 1),
(63, 43, 'SV20019', '', 1),
(64, 44, 'SV20020', '', 1),
(65, 45, 'SV20021', '', 1),
(66, 46, 'SV20022', '', 1);

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

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`ID_Subject`, `NameSubject`, `Number`, `Image`, `Description`, `Level`) VALUES
(1, 'Môn học 1', 1, '', '', 1),
(2, 'Môn học 2', 2, '', '', 1),
(3, 'Môn học 3', 3, '', '', 1),
(4, 'Môn học 4', 1, '', '', 1),
(5, 'Môn học 5', 2, '', '', 1),
(6, 'Môn học 6', 3, '', '', 2),
(7, 'Môn học 7', 1, '', '', 2),
(8, 'Môn học 8', 2, '', '', 2),
(9, 'Môn học 9', 3, '', '', 3),
(10, 'Môn học 10', 1, '', '', 3),
(11, 'Môn học 11', 2, '', '', 3),
(12, 'Môn học 12', 3, '', '', 4),
(13, 'Môn học 13', 1, '', '', 4),
(14, 'Môn học 14', 2, '', '', 5),
(15, 'Môn học 15', 3, '', '', 5),
(16, 'Môn học 16', 1, '', '', 6),
(17, 'Môn học 17', 2, '', '', 6),
(18, 'Môn học 18', 3, '', '', 6),
(19, 'Môn học 19', 1, '', '', 6);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `ID_Teacher` int(10) NOT NULL,
  `ID_Account` int(10) NOT NULL,
  `TeacherCode` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `Description` varchar(180) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`ID_Teacher`, `ID_Account`, `TeacherCode`, `Description`) VALUES
(23, 47, 'GV20001', ''),
(24, 48, 'GV20002', ''),
(25, 51, 'GV20003', ''),
(26, 52, 'GV20004', ''),
(27, 53, 'GV20005', ''),
(28, 54, 'GV20006', ''),
(29, 55, 'GV20007', ''),
(30, 56, 'GV20008', ''),
(31, 57, 'GV20009', ''),
(32, 58, 'GV20010', ''),
(33, 59, 'GV20011', ''),
(34, 60, 'GV20012', ''),
(35, 61, 'GV20013', ''),
(36, 62, 'GV20014', ''),
(37, 63, 'GV20015', ''),
(38, 64, 'GV20016', ''),
(39, 65, 'GV20017', ''),
(40, 66, 'GV20018', ''),
(41, 67, 'GV20019', ''),
(42, 68, 'GV20020', ''),
(43, 69, 'GV20021', ''),
(44, 70, 'GV20022', '');

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
(18, 22, '25', 1, '2019-06-08 18:12:44', '0000-00-00 00:00:00', 'Chào các em hihi', '<h2>Chào các em, anh là lớp trưởng của lớp mình. hết</h2>'),
(19, 22, '47', 2, '2019-06-08 18:27:29', '0000-00-00 00:00:00', 'Có ai ở đây không ?', '<h2><strong>Chào cả lớp&nbsp;</strong></h2>'),
(25, 23, '48', 1, '2019-06-09 10:56:39', '0000-00-00 00:00:00', 'File tài liệu môn học', '<h2><i><strong>ádfghjsa</strong></i></h2>'),
(22, 25, '52', 2, '2019-06-09 10:39:55', '0000-00-00 00:00:00', 'Thảo luận nào các bạn ', '<p>1234567</p>'),
(23, 26, '53', 2, '2019-06-09 10:41:30', '0000-00-00 00:00:00', 'Thảo luận nào các bạn ', '<h2><strong>123</strong></h2>');

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
  MODIFY `id_account` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `classmodule`
--
ALTER TABLE `classmodule`
  MODIFY `ID_Classmodule` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `ID_Comment` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `detailclassmodule`
--
ALTER TABLE `detailclassmodule`
  MODIFY `ID_Detail` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `point`
--
ALTER TABLE `point`
  MODIFY `ID_Point` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1255;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `ID_Student` int(180) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `ID_Subject` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `ID_Teacher` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
  MODIFY `ID_Topic` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
