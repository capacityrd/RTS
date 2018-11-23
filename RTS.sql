-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 06-09-2018 a las 18:42:38
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `id3159803_dcsocialweb_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `RTS`
--

CREATE TABLE `RTS_STB` (
  `ID` int(11) NOT NULL,
  `channelNumber` int(4) NOT NULL,
  `channelName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `URL` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `block` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `RTS`
--

INSERT INTO `RTS_STB` (`ID`, `channelNumber`, `channelName`, `URL`, `status`, `block`, `image`, `country`) VALUES
(1, 2, 'Teleantillas', 'https://www.gatotv.com/canal/tele_antillas', 1, 'Locales', 'Teleantillas', ''),
(2, 3, 'TNT', 'https://mi.tv/co/canales/tnt', 1, 'Movies', 'TNT', ''),
(3, 4, 'Canal 4 RD', '', 1, 'Locales', 'Canal 4 RD', ''),
(4, 5, 'Telemicro', 'https://www.gatotv.com/canal/5_telemicro', 1, 'Locales', 'Telemicro', ''),
(5, 6, 'Golden', 'https://mi.tv/co/canales/golden', 1, 'Movies', 'Golden', ''),
(6, 7, 'Antena 7', 'https://www.gatotv.com/canal/7_republica_dominicana', 1, 'Locales', 'Antena 7', ''),
(7, 8, 'ESPN 3', 'https://mi.tv/co/canales/espn-3', 1, 'Sports', 'ESPN 3', ''),
(8, 9, 'Color Visión', 'https://www.gatotv.com/canal/9_republica_dominicana', 1, 'Locales', 'Color Vision', ''),
(9, 10, 'RTS', '', 0, '', 'RTS', ''),
(10, 11, 'Telesistema', 'https://www.gatotv.com/canal/telesistema_11', 1, 'Locales', 'Telesistema', ''),
(11, 12, 'Discovery Kids', 'https://www.gatotv.com/canal/discovery_kids_latinoamerica', 1, 'Infantiles', 'Discovery Kids', ''),
(12, 13, 'Telecentro', 'https://www.gatotv.com/canal/13_de_republica_dominicana_telecentro', 1, 'Locales', 'Telecentro', ''),
(13, 14, 'MLB Network', 'https://www.ontvtonight.com/guide/listings/channel/69032811/mlb-network.html', 1, 'Sports', 'MLB Network', ''),
(14, 15, 'Digital 15', 'https://www.gatotv.com/canal/15_republica_dominicana', 1, 'Locales', 'Digital 15', ''),
(15, 16, 'Disney Junior', 'https://www.gatotv.com/canal/disney_junior', 1, 'Infantiles', 'Disney Junior', ''),
(16, 17, '', '', 0, 'Erotic', '', ''),
(17, 18, 'Enlace', 'https://www.gatotv.com/canal/enlace', 1, 'Religion', 'Enlace', ''),
(18, 19, 'CineVisión', '', 1, 'Locales', 'Cinevision', ''),
(19, 20, 'NBC Universo', 'http://tv.twcc.com/listings/mun2', 1, 'Entretenimiento', 'NBC Universo', ''),
(20, 21, 'Antena 21', '', 1, 'Locales', 'Antena 21', ''),
(21, 22, 'Cine Latino', 'https://mi.tv/co/canales/cinelatino', 1, 'Movies', 'Cine Latino', ''),
(22, 23, 'Discovery home & health', 'https://mi.tv/co/canales/discovery-home-and-health', 1, 'Entretenimiento', 'DiscoveryHH', ''),
(23, 24, 'ESPN 2', 'https://mi.tv/co/canales/espn-2', 1, 'Sports', 'ESPN 2', ''),
(24, 26, 'A&E', 'https://mi.tv/co/canales/a-e-mundo', 1, 'Entretenimiento', 'A&E', ''),
(25, 27, 'RNN', '', 1, 'Locales', 'RNN', ''),
(26, 28, 'Multipremier', 'https://mi.tv/co/canales/multipremier', 1, 'Movies', 'Multipremier', ''),
(27, 29, 'Ve Plus', 'https://mi.tv/co/canales/ve-plus-tv', 1, 'Entretenimiento', 'Ve Plus', ''),
(28, 30, 'Antena 3', 'https://mi.tv/co/canales/antena3', 1, 'Internacionales', 'Antena 3', 'Spain'),
(29, 31, 'Cartoon Network', 'https://mi.tv/co/canales/cartoon-network', 1, 'Infantiles', 'Cartoon Network', ''),
(30, 32, 'HBO Comedy', 'http://tv.twcc.com/listings/cinemax', 0, 'Movies', 'HBOC', ''),
(31, 33, 'Super Canal', '', 1, 'Locales', 'Supercanal', ''),
(32, 34, 'Telefuturo 23', 'http://telefuturo.com.do/home/programacion/', 1, 'Locales', 'Telefuturo', ''),
(33, 35, 'Lifetime', 'https://mi.tv/co/canales/lifetime', 1, 'Entretenimiento', 'Lifetime', ''),
(34, 36, 'Cinemax', 'http://tv.twcc.com/listings/cinemax', 0, 'Movies', 'Cinemax', ''),
(35, 37, 'CDN', 'https://www.gatotv.com/canal/cdn', 1, 'Locales', 'CDN', ''),
(36, 38, 'Animal Planet', 'https://mi.tv/co/canales/animal-planet', 1, 'Culture', 'Animal Planet', ''),
(37, 39, 'Boomerang', 'https://mi.tv/co/canales/boomerang-cartoon', 1, 'Infantiles', 'Boomerang', ''),
(38, 40, 'VTV', 'https://www.gatotv.com/canal/vtv_honduras_vica_tv', 1, 'Internacionales', 'VTV', 'Honduras'),
(39, 41, 'Telemundo', 'http://tv.twcc.com/listings/wnju-telemundo', 1, 'Entretenimiento', 'Telemundo', ''),
(40, 42, 'Nat Geo Wild', 'https://mi.tv/co/canales/nat-geo-wild', 1, 'Culture', 'Nat Geo Wild', ''),
(41, 43, 'HBO', 'http://tv.twcc.com/listings/hbo', 1, 'Movies', 'HBO', ''),
(42, 44, 'TL Novelas', 'https://mi.tv/co/canales/tlnovelas', 1, 'Entretenimiento', 'TLNovelas', ''),
(43, 45, 'Teleradioamérica', '', 1, 'Locales', 'TRA', ''),
(44, 48, '', '', 0, '', '', ''),
(45, 47, 'Amé 47', '', 1, 'Locales', 'Ame47', ''),
(46, 46, 'Claro Sports', 'https://www.gatotv.com/canal/claro_sports', 1, 'Sports', 'Claro Sports', ''),
(47, 49, 'Warner Channel', 'https://mi.tv/co/canales/warner', 1, 'Entretenimiento', 'Warner Channel', ''),
(48, 50, 'EWTN', 'https://mi.tv/co/canales/ewtn', 1, 'Religion', 'EWTN', ''),
(49, 51, 'Tooncast', 'https://mi.tv/co/canales/tooncast', 1, 'Infantiles', 'Tooncast', ''),
(50, 52, 'USA', 'http://tv.twcc.com/listings/usa-network', 1, 'Entretenimiento', 'USA', ''),
(51, 53, 'Disney XD', 'https://mi.tv/mx/canales/disney-xd', 1, 'Infantiles', 'Disney XD', ''),
(52, 54, 'MoreMax', 'https://www.ontvtonight.com/guide/listings/channel/69046789/more-max-east.html', 1, 'Movies', 'MoreMax', ''),
(53, 55, 'AMC', 'https://mi.tv/ar/canales/amc', 1, 'Movies', 'AMC', ''),
(54, 56, 'TV Recuerdos', '', 1, 'Locales', 'TVRecuerdos', ''),
(55, 57, 'WAPA', 'https://www.gatotv.com/canal/wapa_tv', 1, 'Internacionales', 'WAPA', 'PuertoRico'),
(56, 58, 'CNN en español', 'https://mi.tv/co/canales/cnn-en-espanol', 1, 'News', 'CNNe', ''),
(57, 59, 'AXN', 'https://mi.tv/co/canales/axn', 1, 'Entretenimiento', 'AXN', ''),
(58, 60, 'Las Estrellas', 'https://mi.tv/co/canales/canal-de-las-estrellas', 1, 'Entretenimiento', 'Las Estrellas', ''),
(59, 61, 'H2', 'https://mi.tv/co/canales/h2', 1, 'Culture', 'H2', ''),
(60, 62, 'E!', 'https://mi.tv/co/canales/e', 1, 'Entretenimiento', 'E!', ''),
(61, 63, 'Telemundo Internacional', 'https://mi.tv/co/canales/telemundo', 1, 'Entretenimiento', 'Telemundo Internacional', ''),
(62, 64, 'Discovery Channel', 'https://mi.tv/co/canales/discovery-channel', 1, 'Culture', 'Discovery Channel', ''),
(63, 65, 'RitmoSon', 'https://mi.tv/gt/canales/ritmoson-latino', 1, 'Musical', 'RitmoSon', ''),
(64, 66, 'ID', 'https://mi.tv/co/canales/discovery-id-hd', 1, 'Culture', 'ID', ''),
(65, 67, 'Sony', 'https://mi.tv/co/canales/sony', 1, 'Entretenimiento', 'Sony', ''),
(66, 68, 'Más Chic', 'https://mi.tv/co/canales/mas-chic', 1, 'Entretenimiento', 'MasChic', ''),
(67, 69, 'Fox Life', 'https://mi.tv/co/canales/fox-life', 1, 'Entretenimiento', 'FoxLife', ''),
(68, 70, 'History Channel', 'https://mi.tv/co/canales/history', 1, 'Culture', 'History Channel', ''),
(69, 71, 'Aliento Visión', 'https://mi.tv/co/canales/aliento-vision', 1, 'Religion', 'AlientoVision', ''),
(70, 72, 'UrbanTV', '', 1, 'Musical', 'UrbanTV', ''),
(71, 73, 'Disney Channel', 'https://mi.tv/co/canales/disney-multicountry', 1, 'Infantiles', 'Disney Channel', ''),
(72, 74, 'TNT', 'http://tv.twcc.com/listings/turner-network-tv', 0, 'Entretenimiento', 'TNT', ''),
(73, 75, 'Nickelodeon', 'https://mi.tv/co/canales/nickelodeon', 1, 'Infantiles', 'Nick', ''),
(74, 76, 'MoreMax', 'http://tv.twcc.com/listings/moremax', 1, 'Movies', 'MoreMax', ''),
(75, 77, 'CityTV', 'https://mi.tv/co/canales/citytv', 1, 'Internacionales', 'CityTV', 'Colombia'),
(76, 78, 'ESPN', 'https://mi.tv/co/canales/espn', 1, 'Sports', 'ESPN', ''),
(77, 79, 'TeleHit', 'https://mi.tv/co/canales/telehit-hd', 1, 'Musical', 'TeleHit', ''),
(78, 80, 'CDN Sports Max', 'https://www.gatotv.com/canal/cdn_sportsmax', 1, 'Locales', 'CDN Sports Max', ''),
(79, 81, 'Cadena del Milagro', 'https://mi.tv/hn/canales/cdm-cadena-de-milagros', 1, 'Religion', 'CDM', ''),
(80, 82, 'ESPN 3', 'https://mi.tv/co/canales/espn-3', 1, 'Sports', 'ESPN 3', ''),
(81, 83, 'TV UNAM', 'https://mi.tv/mx/canales/tv-unam', 1, 'Culture', 'TVUNAM', ''),
(82, 84, 'Aprende TV', 'https://www.gatotv.com/canal/aprende', 1, 'Culture', '', ''),
(83, 85, 'PrimeTime', '', 1, '', '', ''),
(84, 86, 'TCM', 'https://mi.tv/co/canales/tcm', 1, 'Movies', 'TCM', ''),
(85, 87, 'Space', 'https://mi.tv/co/canales/space', 1, 'Movies', 'Space', ''),
(86, 88, 'WAPA 2 Deportes', 'https://www.gatotv.com/canal/wapa_2_deportes', 1, 'Sports', 'WAPA2', ''),
(87, 89, 'La Voz de María', '', 1, 'Religion', 'La Voz de Maria', ''),
(88, 90, 'Pasiones', 'https://mi.tv/co/canales/pasiones', 1, 'Entretenimiento', 'Pasiones', ''),
(89, 91, 'Distrito Comedia', 'https://mi.tv/gt/canales/distrito-comedia', 1, 'Entretenimiento', 'Distrito Comedia', ''),
(90, 92, 'RTU', '', 1, '', 'RTU', ''),
(91, 93, 'Venevisión Plus', '', 0, 'Entretenimiento', 'VenevisionPlus', ''),
(92, 94, 'WIPR', '', 1, 'Internacionales', 'WIPR', 'PuertoRico'),
(93, 95, 'TNT Series', 'https://mi.tv/co/canales/tnt-series', 1, 'Entretenimiento', 'TNT Series', ''),
(94, 96, 'TVE', 'https://mi.tv/co/canales/tve', 1, 'Internacionales', 'TVE', 'Spain'),
(95, 97, '3ABN', 'https://mi.tv/hn/canales/3abn-latino', 1, 'Religion', '3ABN', ''),
(96, 98, 'RT', 'https://www.gatotv.com/canal/rt_en_espanol', 1, 'News', 'RT', ''),
(97, 99, 'Cinemax Latino', 'http://ar.cinemax.tv/schedule', 1, 'Movies', 'Cinemax', ''),
(98, 100, 'Discovery Turbo', 'https://mi.tv/co/canales/discovery-turbo', 1, 'Culture', 'Discovery Turbo', ''),
(99, 101, 'Fox Sports', 'https://mi.tv/co/canales/fox-sports', 1, 'Sports', 'Fox Sports', ''),
(100, 102, 'TLC', 'https://mi.tv/co/canales/discovery-tlc', 1, 'Culture', 'TLC', ''),
(101, 103, 'National Geographic', 'https://mi.tv/co/canales/national-geographic', 1, 'Culture', 'National Geographic', ''),
(102, 104, 'France 24', '', 0, 'News', 'France24', ''),
(103, 36, 'De Película', 'https://mi.tv/mx/canales/de-pelicula', 1, 'Movies', 'DePelicula', ''),
(104, 104, 'DW', 'https://mi.tv/co/canales/deutsche-welle-amerika', 1, 'Internacionales', 'DW', 'Alemania'),
(105, 99, 'Cinecanal', 'https://mi.tv/co/canales/cinecanal-hd', 0, 'Movies', 'Cinecanal', ''),
(107, 32, 'CineMax', 'http://www.ontvtonight.com/guide/listings/channel/69046993/cinemax-east.html', 1, 'Movies', 'Cinemax', ''),
(108, 74, 'Starz', 'https://www.ontvtonight.com/guide/listings/channel/69047025/starz-east.html', 1, 'Movies', 'Starz', ''),
(111, 93, 'TBS Veryfunny', 'https://mi.tv/co/canales/tbs-veryfunny-pan', 1, 'Entretenimiento', 'TBS Very Funny', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `RTS`
--
ALTER TABLE `RTS_STB`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `RTS`
--
ALTER TABLE `RTS_STB`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
