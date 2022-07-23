-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-07-2022 a las 20:31:42
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `valpez_db`
--

--
-- Volcado de datos para la tabla `classes`
--

INSERT INTO `classes` (`id`, `name`, `category`) VALUES
(1, 'Accesorios Pesca', 'Pesca'),
(2, 'Cañas', 'Pesca'),
(3, 'Carretes', 'Pesca'),
(4, 'Herramientas Pesca', 'Pesca'),
(5, 'Lineas', 'Pesca'),
(6, 'Señuelos', 'Pesca'),
(7, 'Terminales', 'Pesca'),
(8, 'Accesorios Camping', 'Camping'),
(9, 'Aislantes', 'Camping'),
(10, 'Bastones', 'Camping'),
(11, 'Carpas', 'Camping'),
(12, 'Cocina', 'Camping'),
(13, 'Herramientas Camping', 'Camping'),
(14, 'Hidratación', 'Camping'),
(15, 'Morrales', 'Camping'),
(16, 'Riñoneras', 'Camping'),
(17, 'Sleeping', 'Camping');

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `name`, `product_num`) VALUES
(1, 'img - 1658555974888.png', 1),
(2, 'img - 1658555974692.jpg', 1),
(3, 'img - 1658555974694.png', 1),
(4, 'img - 1658557177526.png', 2),
(5, 'img - 1658557177530.png', 2),
(6, 'img - 1658557370749.jpg', 3),
(7, 'img - 1658557370860.jpg', 3),
(8, 'img - 1658557564103.jpg', 4),
(9, 'img - 1658557564038.jpg', 4),
(10, 'img - 1658557564104.jpg', 4),
(11, 'img - 1658557713704.jpg', 5),
(12, 'img - 1658557713705.jpg', 5),
(13, 'img - 1658557713769.jpg', 5),
(14, 'img - 1658557713820.jpg', 5),
(15, 'img - 1658575537599.jpg', 6),
(16, 'img - 1658575710911.jpg', 7),
(17, 'img - 1658575710983.jpg', 7),
(18, 'img - 1658575710980.jpg', 7),
(19, 'img - 1658575711103.jpg', 7),
(20, 'img - 1658575842603.jpg', 8),
(21, 'img - 1658575842612.jpg', 8),
(22, 'img - 1658575842609.jpg', 8),
(23, 'img - 1658576018336.jpg', 9),
(24, 'img - 1658576018578.jpg', 9),
(25, 'img - 1658576018150.jpg', 9),
(26, 'img - 1658576018580.jpg', 9),
(27, 'img - 1658576211462.jpg', 10),
(28, 'img - 1658576211491.jpg', 10),
(29, 'img - 1658576211531.jpg', 10),
(30, 'img - 1658576211547.jpg', 10),
(31, 'img - 1658594937755.jpg', 11),
(32, 'img - 1658594937850.jpg', 11),
(33, 'img - 1658594937958.jpg', 11),
(34, 'img - 1658594937960.jpg', 11),
(35, 'img - 1658595448515.jpg', 12),
(36, 'img - 1658595637183.jpg', 13),
(37, 'img - 1658595637272.jpg', 13),
(38, 'img - 1658595637353.jpg', 13),
(39, 'img - 1658595637435.jpg', 13),
(40, 'img - 1658595894322.jpg', 14),
(41, 'img - 1658595894569.jpg', 14),
(42, 'img - 1658595894612.jpg', 14),
(43, 'img - 1658595894672.jpg', 14),
(44, 'img - 1658596133527.jpg', 15),
(45, 'img - 1658596298699.jpg', 16),
(46, 'img - 1658596494385.jpg', 17),
(47, 'img - 1658596881862.jpg', 19),
(48, 'img - 1658596882008.jpg', 19),
(49, 'img - 1658596882031.jpg', 19),
(50, 'img - 1658597182551.jpg', 18),
(51, 'img - 1658597182690.jpg', 18),
(52, 'img - 1658597182732.jpg', 18),
(53, 'img - 1658597359062.png', 20),
(54, 'img - 1658597359147.png', 20),
(55, 'img - 1658597359259.png', 20);

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `smallDescription`, `detailedDescription`, `url`, `units`, `colors`, `sizes`, `reference`, `class_id`) VALUES
(1, 'Carpa P-Series NatureHike', 380000, 'Diseño mejorado para brindar mayor amplitud. Carpa fabricada en poliéster y nylon, con malla transpirable y estructura de aluminio.', 'Capacidad:  2 personas.\r\nImpermeabilidad: 3000 mm.\r\nPeso: 2400 gr.\r\nDimensiones: 210 x 130 x 110 cm.', '', 5, 'verde, azul, naranja', '210 x 130 x 110 cm.', 'CRP01C', 11),
(2, 'Estufa a Gas', 45000, 'Estufa a gas en acero inoxidable, ajuste tipo rosca universal, adaptable a pipetas Primus, con perilla +/- para encendido y ajuste de la llama. \r\nPeso: 50 gr, potencia: 2200 W.', '', '', 5, 'plateado', '10 cm', 'ETF01C', 12),
(3, 'Caña Casting Shimano New Gen FX', 75000, 'La serie FX de cañas fue creada para pescadores de todas las edades y niveles de habilidad. Estas cañas versátiles cubren una amplia variedad de aplicaciones y longitudes, perfectas para cualquier corriente, río o lago.', '2 piezas.\r\nTécnica Casting\r\nConstrucción aeroglass\r\nGrip EVA\r\nGuías de óxido de aluminio\r\n\r\nPoder: Medium \r\nAccion Fast \r\nLínea Mono: 8-17lb \r\nLinea trenzada: 10-30 lb \r\nPeso Lanzado: 1/4 - 5/8 oz', 'https://youtu.be/8chvXk88o1g', 5, 'gris', '198 cm', 'CÑC01P', 2),
(4, 'Caña Casting Okuma Wave Power', 115000, 'Blank construido en carbono 24T\r\nAcción rápida.\r\nPasahilos SIC con marcos de acero inoxidable.\r\nMango dividido con detalla EVA, para reducir el peso y lograr buen equilibrio.\r\nPorta carrete de grafito.', 'Longitud 6\'(183cm)\r\nAcción Heavy\r\nPiezas 2\r\nLínea 8 - 17 lb\r\nLongitud empuñadora delantera 35mm\r\nLongitud empuñadora trasera 275mm\r\nGuías 8+Tip\r\nPeso caña 108 gr.\r\n', 'https://youtu.be/mK86_eCMFVg', 5, 'negro', '183 cm', 'CÑC01P', 2),
(5, 'Caña Casting Abu Garcia Vendetta', 316000, 'Cuenta con la tecnología IntraCarbon™ con fibras de grafito multidireccionales que recubren el blanco de 30 toneladas para mejorar la resistencia y la sensibilidad.', 'La cubierta del asiento con carrete de micro clic lo asegura sólidamente en su lugar, y los mangos de EVA de alta densidad con un diseño de curva de contorno proporciona comodidad y durabilidad. \r\nLas guías de acero inoxidable con insertos de circonio minimizan la fricción para los moldes largos y prolongan la vida de la línea. \r\nEl asiento del carrete de exposición extrema diseñado por Abu Garcia aumenta el contacto y la sensibilidad.\r\nTecnología intracarbón\r\nBlanco de grafito de 30 toneladas\r\n Asiento del carrete Micro Click\r\n Agarres EVA de alta densidad\r\nGuías de acero inoxidable\r\nInserciones de circonio\r\nAsiento de carrete de exposición extrema', 'https://youtu.be/t9wLddPW2oQ', 5, 'rojo', '198 cm', 'CÑC01P', 2),
(6, 'Caña Spinning Shimano Solara - 2 piezas', 90000, 'Shimano Aero Glass® su construcción da a esta caña gran potencia. Equipada con guías anillo O y el corcho se encarga de darle acabado.', 'Guías de óxido de aluminio reforzados.\r\nFijación sólida en grafito para porta-carrete.\r\nEmpuñadura de corcho y asas de agarre trasero.\r\nPoder Medium Heavy.\r\nAcción Fast.\r\nLínea Mono 8-17 lb.\r\nLínea Trenzada 10-30lb.\r\nPeso Lanzado 1/4-3/4oz.\r\nEstilo Mango E.\r\nMango delantero 7.6cm.\r\nMango Trasero 20.3cm.', 'https://youtu.be/5NudbLMESfk', 5, 'cobre', '198 cm', 'CÑS01P', 2),
(7, 'Caña Spinning Daiwa Laguna', 150000, 'Grafito IM-6 con construcción de carbono tejido.\r\nPortacarrete con capucha de acero inoxidable.\r\nGuías de óxido de aluminio.\r\nLigero, agarre de espuma dividida.\r\nConstrucción robusta con porta anzuelos.', 'Poder Ultralight.\r\nAcción Fast.\r\nLongitud 6’(182cm).\r\nPiezas 2.\r\nLinea (lb) 1-4.\r\nPeso Lanzado 1/32 - 1/8 oz.\r\n# de Guías 7.', 'https://youtu.be/UExIcoEPdrg', 5, 'negro', '182 cm', 'CÑS01P', 2),
(8, 'Caña Spinning Fenwick HMX', 372500, 'Utiliza blanco de fibra de carbono de módulo intermedio suave para proporcionar una acción excepcionalmente sensible, al tiempo que conserva la fuerza y la sensibilidad.', 'Las guías de acero inoxidable Sea Guide® con inserciones de circonio minimizan el peso y reducen la fricción de la línea. El mango cuenta con un TAC ™ estratégicamente colocado en corcho para brindar máxima comodidad y control en cualquier clima.\r\n\r\nAcción excepcional con gran sensibilidad.\r\nMódulo de construcción de fibra de carbono en blanco.\r\nGuías de acero inoxidable Sea Guide.\r\nInserciones de óxido de circonio.\r\nMango de corcho con TAC.', 'https://youtu.be/ufGQs6a0nh4', 5, 'gris', '198 cm', 'CÑS01P', 2),
(9, 'Carretel Casting Bass Pro Shops Megacast 4 Balineras', 232000, 'Cuerpo de grafito para un peso muy ligero.\r\nMango de aluminio.\r\nSistema de freno magnético para asegurar un funcionamiento suave día tras día.\r\nSistema de cuatro balineras.\r\nAntireversa instantánea PowerLock.\r\nBobina de aluminio forjado dorado.', 'Mano derecha.', '', 5, 'gris, negro', '1000', 'CRT01C', 3),
(10, 'Carrete Casting 13 Fishing Origin TX Saltwater 6+1Balineras', 521200, 'Construido con un diseño resistente que puede resistir cualquier condición en la que se encuentre. Este carrete es la definición de dúo dinámico porque está diseñado para hacer doble uso tanto en agua salada como en agua dulce.', '¡Un marco a prueba de corrosión con 6 + 1 balineras resistentes a la corrosión y de alto giro lo hace posible! Experimentará un rendimiento liviano, suave e ininterrumpido de lanzamiento tras lanzamiento. El Origin TX ofrece 18 libras de resistencia máxima que te brinda la potencia necesaria para tener el control durante la batalla, tiene lo que se necesita para llevar sus peces al bote. Construido con frenado centrífugo de 6 vías y un sistema de guía de línea arrowhead que permite mayores distancias. El Origin TX ¡establece el estándar en durabilidad, confiabilidad y rendimiento absoluto!\r\n\r\nEstructura de chasis compuesto ligero y placa lateral.\r\n6 + 1 balineras de alta resistencia a la corrosión.\r\nPorta Anzuelo integrado.\r\nAnti-reversa Dead Stop.\r\n\r\nCapacidad de Línea (yds/lbs) 135/12.\r\nArrastre máximo 18 lbs.\r\nRelación de engranaje 7.3:1\r\nRecuperación de línea 30.7’’ (77cm).\r\nPeso 7.3oz(206g).\r\nRecuperación Izquierda.', 'https://youtu.be/XfKkF7RlZEk', 5, 'negro, aguamarina', '3000', 'CRT01C', 3),
(11, 'Carrete Casting Daiwa Tatula SV TW 8 Balineras', 749112, 'Para un rendimiento de gama alta Daiwa® Tatula® SV TW Baitcast. Basado en el éxito del original, Daiwa ha agregado su aclamada tecnología Vertical sin estrés (SV) para darle al Tatula una capacidad de casting más intuitiva.', 'Carrete compacto y versátil en 3 velocidades de recuperación.\r\nLas versiones están codificadas por colores para una identificación instantánea\r\nConcepto SV para backlash-free casting de todos los pesos de señuelos\r\nBobina Super Duralumin SV con inductor magnético\r\nRegula la velocidad del carrete por el peso del señuelo\r\nTecnología de rotación de aire\r\nSistema de viento de nivel T-Wing para lanzamientos largos y precisos\r\nMarco compacto de aluminio de 1 pieza\r\nSistema de 8 balineras (7 + 1) con 2 CRBB (Super Corrosion Resistant Ball Bearing)\r\nAnti-reversa instantánea\r\nArrastre de carbono UTD con hasta 13.2 lbs. poder de arrastre\r\nMango barrido de 90 mm con perillas I de tacto suave\r\nPeso 7.2oz(204g), Capacidad de Línea (yds/lbs) 14/100, 16/90, Relación de engranaje 8.1:1, Recuperación de línea 32.8\" (82cm), Recuperación Izquierda, Arrastre 13.2lb.', 'https://youtu.be/blSdc503kV4', 10, 'negro, gris', '5000, 2500, 3000', 'CRT01C', 3),
(12, 'Carrete Spinning Okuma Fuel Spin 1 Balinera', 83600, 'Destacan por su color especial y porque posee un cuerpo de grafito resistente a la corrosión. El carretel está equipado con un rotor de flujo ciclónico para un secado más rápido, minimizando la corrosión.', 'Sistema de frenos Multi-disco, con arandelas de fieltro aceitadas con aceite japones\r\n\r\n1BB para mayor suavidad y durabilidad\r\n\r\nPiñón de latón cortado a máquina de precisión.\r\n\r\nCuerpo y rotor de grafito resistente a la corrosión.\r\n\r\nCFR: tecnología de rotor de flujo ciclónico, para secado más rápido\r\n\r\nCarretel de aluminio mecanizado y anodizado.\r\n\r\nPick up de acero inoxidable resistente a la corrosión.\r\n\r\nRESII: Sistema de ecualización de rotor equilibrado por computadora.\r\n\r\nRelación de engranaje 5.0:1, Peso 266g, Recuperación por vuelta 79cm, Arrastre máximo 18lb, Capacidad de línea en mm: 0.30/240, 0.35/170, 0.40/125.', 'https://youtu.be/92KSYddms18', 7, 'azul', '5000, 3000', 'CRT01S', 3),
(13, 'Carrete Spinning Daiwa Crossfire LT', 160800, 'La ingeniería del nuevo Crossfire se guió por el concepto LT de diseños de carrete más ligeros y resistentes que utilizan compuestos de última generación. El nuevo LT reduce hasta un 20 por ciento del peso del carrete del antiguo diseño Crossfire. ', 'El sólido carrete de aluminio ABS resiste la flexión y la distorsión, y es lo suficientemente profundo como para soportar una gran cantidad de yardas. El corazón del carrete son los Digigears forjados en frío con precisión. El proceso de fabricación de vanguardia optimiza la malla entre los engranajes principal y piñón. La innovadora grasa patentada de Daiwa hace que el Advanced Tournament Drag System (ATD) sea uno de los más suaves del mercado. El ajuste y el acabado se completan con un elegante mango de aluminio mecanizado que optimiza el agarre y proporciona un par positivo al engranaje principal. La nueva línea CROSSFIRE LT es cómoda en agua dulce o agua salada.\r\n\r\n-Nuevo diseño\r\n\r\n-Diseño de equipo digital Digigear ™\r\n\r\n-Anti-retroceso infinito\r\n\r\n-Carrete de aluminio ABS\r\n\r\n-Mango de aluminio mecanizado\r\n\r\n-Abreviado “LT” por liviano (“light”) y duro (“tough”).', '', 10, 'plateado', '3000, 2500', 'CRT01S', 3),
(14, 'Carrete Spinning Abu Garcia Revo Rocket 10 Balineras', 744576, 'El Revo® Rocket Spinning Reel de Abu Garcia® eleva el nivel en el rendimiento de alta velocidad, por lo que puede bloquear esos puntos de emboscada y forzar ataques de reacción furiosos sin tener que buscar una configuración de baitcast.', '-El último carrete de spinning de alta velocidad y alto rendimiento.\r\n\r\n-Relación de engranaje de 7.0:1 muy rápido\r\n\r\n-Construcción IM-C6 con caja de cambios X-craftic y cuerpo de carbono C6\r\n\r\n-Rotor de carbono ligero, fuerte C6\r\n\r\n-Bobina lista para trenzar de aluminio mecanizado\r\n\r\n-Diseño de borde de carrete Rocket de flujo libre\r\n\r\n-Diadema Everlast para mayor durabilidad\r\n\r\n-Oscilación lenta para una línea uniforme\r\n\r\n-Sistema de gestión de línea Abu Garcia Rocket line management™.\r\n\r\n-Diseño de equipo optimizado por computadora (COG)\r\n\r\n-Sistema AMGearing mecanizado de precisión\r\n\r\n-Eje principal de aluminio para aviación\r\n\r\n-Sistema de calidad 9 + 1 Balineras\r\n\r\n-Sistema de arrastre de matriz de carbono suave y consistente\r\n\r\n-Mango compacto de carbono doblado con perillas EVA planas.', 'https://youtu.be/YFk7ndBqLts', 10, 'rojo, negro', '3000', 'CRT01S', 3),
(15, 'Offshore Angler Inshore Series Popper', 13700, 'Este popper ofrece grandes capturas para un precio tan bajo! Da una oportunidad real a un pez trofeo sin tener que derrochar su dinero en un señuelo costos. Probado para provocar golpes de superficie agresivos con escupe de agua.', 'Sólidamente construido con un perfil compacto, cabeza cóncava splashy y un esquema de color tremendamente detallado. Ganchos de alta calidad con acabado de estaño resistente al agua salada. Offshore Angler es una marca Bass Pro Shops.', '', 15, 'blanco', '8cm', 'SÑ01P', 6),
(16, 'Señuelo Marine Sports Minimax', 23300, 'Anzuelos VMC, Señuelo de hundimiento (Sinking) , Natación irregular.', '', '', 10, 'blanco, rojo, verde, azul', '5cm', 'SÑ01M', 6),
(17, 'Rapala Ultra Light Shad', 33800, 'Pequeño sólo en talla, no en posibilidad de pesca. Lastrado para alcanzar distancias lejanas. Su acción es perfecta incluso al recoger a gran velocidad y en aguas rápidas. La acción es compacta, profundizando lentamente durante las pausas.', '-Cuerpo con peso\r\n\r\n-Diseño de babero que profundiza\r\n\r\n-Acción compacta\r\n\r\n-Escamas externas\r\n\r\n-Ojos holográficos 3D\r\n\r\n-Probados a mano', 'https://youtu.be/Dw-ruGArHbc', 10, 'amarillo, gris, rojo, verde', '4cm', 'SÑ01S', 6),
(18, 'Maletín Shakespeare Small Tackle Bag', 129800, 'Excelente bolso para transportar tus señuelos, carreteles, accesorios y demas para tus días de pesca.', '- Medidas 29x18x20cm(11.25 x 7.24 x 7.9). \r\n- 937 pulgadas cúbicas. \r\n- Gran apertura superior con cierre de cremallera. \r\n- Bolsillo frontal con cierre de cremallera. \r\n- El bolsillo delantero para accesorios organiza el equipo \r\n- Dos bolsillos laterales con cierres de cremallera.', '', 5, 'verde, negro, rojo', 'unico', 'MR01C', 15),
(19, 'Mochila Camuflada Ridge Hunter 2.0 Hunting Pack', 98900, 'Perfecto para caminatas, cuenta con una fácil organización para todo tu equipo. Un compartimento principal grande con cremalleras dobles que ofrece una entrada sencilla para que pueda encontrar lo que necesita', 'Mientras que un compartimento secundario cuenta con un sistema de organización interno de 3 partes para garantizar que los artículos de uso frecuente se puedan ubicar de inmediato. El bolsillo frontal con cremallera asegura lo esencial, mientras que el bolsillo lateral de malla elástica es perfecto para guardar termos de hidratación. Cuenta con correas de hombro ajustables y una textura antideslizante que evita que se resbalen o rocen.\r\nCompartimento principal grande y de fácil acceso\r\nEl compartimento secundario cuenta con organización interna\r\nEl bolsillo lateral de malla elástica es ideal para botellas de agua\r\nCorreas de hombro ajustables\r\nTextura antideslizante que reduce el roce\r\nMEDIDAS: 41.91 cm H x 35,56 cm x 22,86 cm', '', 5, 'cafe, negro, amarillo', 'unico', 'MR01C', 15),
(20, 'Ollas Antiadherentes', 50000, 'Olla para camping con manijas antideslizantes, material antiadherente, capacidad 1L.', 'Olla antiadherente fabricada en aleación de aluminio, contenido del paquete: una olla (olla+tapa).', '', 5, 'gris, verde, naranja', 'unico', 'CCN01O', 12);

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `user`, `email`, `dob`, `address`, `photo`, `password`, `category`) VALUES
(1, 'Sebastian Vallejo Perez', 'AdmValpez', 'tiendavalpez@gmail.com', '1995-05-26', 'Cra 52 #100C-08', 'img - 1658555450248.jpg', '$2a$10$7lKD.TOJpDC0lovHcUxL.uY7zdyJWj6U2TAXKHGU/wnUkbdvJ1BDG', 'root'),
(2, 'Camila Mejia', 'AdmCamiM', 'cami@valpez.com', '1998-03-27', 'cll 123 05 05', 'img - 1658599109420.JPG', '$2a$10$wi76K1pXbTM/KrSwaZFwJe5/ZzhIxyXJDtjr6F8R0xGpCaYzb1G9S', 'root'),
(3, 'Ernesto Perez', 'FrailejonE', 'ernesto@frailejon.com', '2000-12-05', 'paramo 123', 'img - 1658599483436.JPG', '$2a$10$K.iy9B085iHgA4qEkhbZdOCiWZSZbQrLyKXNuvPFzNxMmWY5ey2Ru', 'client'),
(4, 'Vegeta', 'VegetaDB', 'vegeta@dragonball.com', '1980-06-07', 'Cll 123 01 01', 'img - 1658599895410.JPG', '$2a$10$SDUyUvQJ8x81if0CwagSG.ET2RdAXMoljs2Vcf3Hxb6EeJHYLT2V.', 'client'),
(5, 'Goku', 'GokuDB', 'goku@dragonball.com', '1985-10-09', 'Cll 56 06 06', 'img - 1658600151235.JPG', '$2a$10$vDYiY7UZzQ3jRrlt2pmGy.9XJqy0si5pQOPwDmh/pPLKbQ0HtFhXK', 'client');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
