CREATE TABLE `Items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(250) DEFAULT NULL,
  `open` varchar(250) DEFAULT NULL,
  `high` varchar(250) DEFAULT NULL,
  `low` varchar(250) DEFAULT NULL,
  `close` varchar(250) DEFAULT NULL,
  `volume` varchar(250) DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Policies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` date DEFAULT NULL,
  `otimo` int(11) DEFAULT NULL,
  `critico` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
)
