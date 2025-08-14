// Datos de los presidentes (podrían cargarse desde una API)
const presidentsData = [
    {
        "id": 1,
        "nombre": "Simón Bolívar",
        "periodo": "1825",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sim%C3%B3n_Bol%C3%ADvar._Toro_Moreno%2C_Luis._1922%2C_Legislative_Palace%2C_La_Paz.png/330px-Sim%C3%B3n_Bol%C3%ADvar._Toro_Moreno%2C_Luis._1922%2C_Legislative_Palace%2C_La_Paz.png",
        "bio": "Libertador de Bolivia y primer presidente, aunque brevemente. Delegó el mando a Sucre.",
        "detalle": {
            "fullPeriod": "12 de agosto de 1825 - 29 de diciembre de 1825",
            "birth": "24 de julio de 1783, Caracas, Venezuela",
            "death": "17 de diciembre de 1830 (47 años), Santa Marta, Colombia",
            "profession": "Militar, político",
            "fullBio": "Simón Bolívar fue el principal líder de la independencia sudamericana, conocido como El Libertador. En 1825 fue proclamado presidente provisional de Bolivia tras la independencia, aunque no ejerció el cargo plenamente, delegando el mando al general Antonio José de Sucre. Su visión política y militar sentó las bases para la formación de Bolivia como república."
        }
    },
    {
        "id": 2,
        "nombre": "Antonio José de Sucre",
        "periodo": "1826 - 1828",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Martin_Tovar_y_Tovar_12.JPG/330px-Martin_Tovar_y_Tovar_12.JPG",
        "bio": "Sucre fue el segundo presidente de Bolivia y colaborador cercano de Bolívar. Promovió la organización del Estado boliviano y fue fundamental en su consolidación.",
        "detalle": {
            "fullPeriod": "29 de diciembre de 1825 - 18 de abril de 1828",
            "birth": "3 de febrero de 1795, Cumaná, Venezuela",
            "death": "4 de junio de 1830 (35 años), Berruecos, Colombia",
            "profession": "Militar, político",
            "fullBio": "Antonio José de Sucre fue un militar y político venezolano, líder clave en la independencia de varios países sudamericanos. Como primer presidente constitucional de Bolivia, estableció las bases institucionales del nuevo Estado, impulsó la educación y la organización republicana. Su mandato enfrentó conflictos internos y conspiraciones que forzaron su renuncia."
        }
    },
    {
        "id": 3,
        "nombre": "José María Pérez de Urdininea",
        "periodo": "1828",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/03_-_Jos%C3%A9_Mar%C3%ADa_P%C3%A9rez_de_Urdininea_%28CROPPED%29.png/250px-03_-_Jos%C3%A9_Mar%C3%ADa_P%C3%A9rez_de_Urdininea_%28CROPPED%29.png",
        "bio": "Gobernó interinamente durante breves meses en 1828.",
        "detalle": {
            "fullPeriod": "18 de abril de 1828 - 2 de agosto de 1828",
            "birth": "31 de octubre de 1784, Luribay, La Paz",
            "death": "4 de noviembre de 1865 (81 años), La Paz, Bolivia",
            "profession": "Militar, político",
            "fullBio": "José María Pérez de Urdininea fue un militar y político boliviano que asumió la presidencia interina en un periodo de inestabilidad política. Su gobierno fue breve y se centró en mantener el orden mientras se buscaba un presidente constitucional. Participó activamente en las guerras de independencia y en la consolidación inicial del país."
        }
    },
    {
        "id": 4,
        "nombre": "José Miguel de Velasco Franco",
        "periodo": "Varias veces: 1828, 1829, 1839–1841, 1848",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares", "políticos"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/04c_-_Jos%C3%A9_Miguel_de_Velasco_%28CROPPED%29.png/330px-04c_-_Jos%C3%A9_Miguel_de_Velasco_%28CROPPED%29.png",
        "bio": "Presidente en varias ocasiones, enfrentó crisis políticas y golpes de Estado.",
        "detalle": {
            "fullPeriod": "Diversos periodos: 1828, 1829, 1839–1841, 1848",
            "birth": "22 de diciembre de 1795, La Paz",
            "death": "7 de abril de 1859 (63 años), La Paz, Bolivia",
            "profession": "Militar, político",
            "fullBio": "José Miguel de Velasco fue un militar y político que desempeñó la presidencia de Bolivia en varias ocasiones durante tiempos turbulentos. Su liderazgo se caracterizó por esfuerzos por estabilizar la república frente a golpes de Estado y rebeliones internas, siendo una figura clave en la política boliviana de la primera mitad del siglo XIX."
        }
    },
    {
        "id": 5,
        "nombre": "Pedro Blanco Soto",
        "periodo": "1828–1829",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pedro_Blanco_Soto.jpg/180px-Pedro_Blanco_Soto.jpg",
        "bio": "Breve presidencia, asesinado tras un golpe militar.",
        "detalle": {
            "fullPeriod": "26 de diciembre de 1828 - 1 de enero de 1829",
            "birth": "13 de marzo de 1795, La Paz",
            "death": "1 de enero de 1829 (33 años), La Paz, Bolivia",
            "profession": "Militar, político",
            "fullBio": "Pedro Blanco Soto tuvo una breve y trágica presidencia en Bolivia. Fue designado presidente en un periodo de inestabilidad y fue asesinado durante un golpe militar solo unos días después de asumir el poder, siendo una de las primeras víctimas políticas de la joven república."
        }
    },
    {
        "id": 6,
        "nombre": "Andrés de Santa Cruz",
        "periodo": "1829–1839",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares", "políticos"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/06_-_Andr%C3%A9s_de_Santa_Cruz_%28CROPPED%29.png/250px-06_-_Andr%C3%A9s_de_Santa_Cruz_%28CROPPED%29.png",
        "bio": "Figura clave en la historia de Bolivia y Perú, impulsor de la Confederación Perú-Boliviana.",
        "detalle": {
            "fullPeriod": "24 de mayo de 1829 - 20 de febrero de 1839",
            "birth": "30 de noviembre de 1792, La Paz, Bolivia",
            "death": "25 de septiembre de 1865 (72 años), Valparaíso, Chile",
            "profession": "Militar, político",
            "fullBio": "Andrés de Santa Cruz fue un militar y estadista boliviano que ejerció la presidencia durante una década. Fue el principal artífice de la Confederación Perú-Boliviana, un proyecto que buscaba unir ambos países para fortalecer la región. Su gobierno se destacó por reformas internas y el impulso a la integración, aunque enfrentó oposición y guerras que llevaron al fin de la Confederación."
        }
    },
    {
        "id": 7,
        "nombre": "Sebastián Ágreda",
        "periodo": "1841",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/07_-_Sebasti%C3%A1n_%C3%81greda_%28CROPPED%29.png/250px-07_-_Sebasti%C3%A1n_%C3%81greda_%28CROPPED%29.png",
        "bio": "Presidente interino tras la renuncia de Santa Cruz, breve mandato en 1841.",
        "detalle": {
            "fullPeriod": "20 de febrero de 1841 - 9 de junio de 1841",
            "birth": "1795, Chuquisaca",
            "death": "1875, Bolivia",
            "profession": "Militar, político",
            "fullBio": "Sebastián Ágreda fue un general boliviano que asumió la presidencia interina tras la renuncia de Andrés de Santa Cruz. Su mandato fue corto y se enfocó en mantener la estabilidad política mientras se convocaba a una nueva autoridad legítima. Fue una figura respetada por su trayectoria militar y compromiso con el país."
        }
    },
    {
        "id": 8,
        "nombre": "Mariano Enrique Calvo",
        "periodo": "1841",
        "partido": "Independentista",
        "categoria": ["siglo19", "políticos"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mariano_Calvo.jpg/180px-Mariano_Calvo.jpg",
        "bio": "Presidente interino tras Sebastián Ágreda, breve periodo en 1841.",
        "detalle": {
            "fullPeriod": "9 de junio de 1841 - 22 de septiembre de 1841",
            "birth": "1782, La Paz",
            "death": "1842, La Paz",
            "profession": "Político, abogado",
            "fullBio": "Mariano Enrique Calvo fue un político y abogado que ejerció la presidencia interina durante pocos meses en 1841, tras la presidencia interina de Sebastián Ágreda. Su mandato sirvió para mantener el orden hasta la llegada de José Ballivián, quien asumiría el liderazgo político del país."
        }
    },
    {
        "id": 9,
        "nombre": "José Ballivián",
        "periodo": "1841–1847",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Jos%C3%A9_Ballivi%C3%A1n.jpg/250px-Jos%C3%A9_Ballivi%C3%A1n.jpg",
        "bio": "Presidente y general que defendió la soberanía boliviana y promovió el desarrollo.",
        "detalle": {
            "fullPeriod": "22 de septiembre de 1841 - 2 de febrero de 1847",
            "birth": "5 de julio de 1805, La Paz",
            "death": "22 de febrero de 1852 (46 años), Lima, Perú",
            "profession": "Militar, político",
            "fullBio": "José Ballivián fue un destacado militar y presidente boliviano conocido por su victoria en la Batalla de Ingavi, que reafirmó la soberanía boliviana frente a Perú. Durante su mandato promovió la defensa del territorio, reformas militares y el fortalecimiento del Estado. Su gobierno consolidó la estabilidad tras años de conflicto."
        }
    },
    {
        "id": 10,
        "nombre": "Eusebio Guilarte Vera",
        "periodo": "1847–1848",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eusebio_Guilarte_Vera_-_bolivianischer_Pr%C3%A4sident.jpg/180px-Eusebio_Guilarte_Vera_-_bolivianischer_Pr%C3%A4sident.jpg",
        "bio": "Presidente interino, su mandato fue breve y terminó con un golpe de Estado.",
        "detalle": {
            "fullPeriod": "2 de febrero de 1847 - 12 de diciembre de 1848",
            "birth": "1805, Bolivia",
            "death": "1849, Bolivia",
            "profession": "Militar",
            "fullBio": "Eusebio Guilarte Vera fue un militar que asumió la presidencia interina tras la renuncia de José Ballivián. Su gobierno fue breve y marcado por inestabilidad política, terminando con un golpe de Estado que llevó a Manuel Isidoro Belzu al poder."
        }
    },
    {
        "id": 11,
        "nombre": "Manuel Isidoro Belzu",
        "periodo": "1848–1855",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares", "populistas"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/ManuelIsidoroBelzu.jpg/180px-ManuelIsidoroBelzu.jpg",
        "bio": "General y político, fundador de una corriente populista en Bolivia.",
        "detalle": {
            "fullPeriod": "12 de diciembre de 1848 - 15 de agosto de 1855",
            "birth": "4 de marzo de 1808, La Paz",
            "death": "27 de marzo de 1865 (57 años), La Paz",
            "profession": "Militar, político",
            "fullBio": "Manuel Isidoro Belzu fue un militar y político que gobernó Bolivia con una política populista orientada a los sectores indígenas y populares. Su gobierno estuvo marcado por la defensa de la soberanía nacional y reformas sociales para apoyar a los sectores menos favorecidos. Fue un líder carismático que enfrentó la oposición de las élites conservadoras y dejó un legado de cambio político importante."
        }
    },
    {
        "id": 12,
        "nombre": "Jorge Córdova",
        "periodo": "1855–1857",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Jorge-cordova.jpg/180px-Jorge-cordova.jpg",
        "bio": "Militar y presidente, su mandato terminó abruptamente por una revuelta.",
        "detalle": {
            "fullPeriod": "15 de agosto de 1855 - 9 de septiembre de 1857",
            "birth": "1822, La Paz",
            "death": "1862, Bolivia",
            "profession": "Militar, político",
            "fullBio": "Jorge Córdova fue un militar que llegó a la presidencia en medio de tensiones políticas. Su gobierno enfrentó resistencia y terminó con un levantamiento que lo derrocó. Su mandato es recordado como un periodo de inestabilidad tras la era de Belzu."
        }
    },
    {
        "id": 13,
        "nombre": "José María Linares",
        "periodo": "1857–1861",
        "partido": "Independentista",
        "categoria": ["siglo19", "políticos"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Jos%C3%A9_Mar%C3%ADa_Linares.jpg/250px-Jos%C3%A9_Mar%C3%ADa_Linares.jpg",
        "bio": "Dictador que promovió la modernización y centralización del Estado.",
        "detalle": {
            "fullPeriod": "9 de septiembre de 1857 - 14 de enero de 1861",
            "birth": "1808, Potosí",
            "death": "1861, Chile",
            "profession": "Político, escritor",
            "fullBio": "José María Linares fue un político y dictador que implementó reformas para modernizar y centralizar Bolivia. Durante su gobierno, buscó fortalecer el poder ejecutivo y mejorar la administración pública. Sin embargo, su mandato terminó con un golpe de Estado que lo obligó al exilio."
        }
    },
    {
        "id": 14,
        "nombre": "José María de Achá",
        "periodo": "1861–1864",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/JoseMariaAcha.jpg/180px-JoseMariaAcha.jpg",
        "bio": "Militar y presidente, enfrentó conflictos internos y la guerra civil.",
        "detalle": {
            "fullPeriod": "14 de enero de 1861 - 28 de diciembre de 1864",
            "birth": "1810, Tarija",
            "death": "1868, Bolivia",
            "profession": "Militar, político",
            "fullBio": "José María de Achá fue un militar que asumió la presidencia en una época marcada por conflictos internos y luchas por el poder. Durante su gobierno enfrentó una guerra civil que debilitó su autoridad y condujo a su derrocamiento. A pesar de esto, intentó mantener el orden y preservar la unidad del país."
        }
    },
    {
        "id": 15,
        "nombre": "Mariano Melgarejo",
        "periodo": "1864–1871",
        "partido": "Independentista",
        "categoria": ["siglo19", "dictadores"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/MarianoMelgarejo.jpg/180px-MarianoMelgarejo.jpg",
        "bio": "Dictador polémico, conocido por su gobierno autoritario y controvertido.",
        "detalle": {
            "fullPeriod": "28 de diciembre de 1864 - 15 de enero de 1871",
            "birth": "1820, Tarata",
            "death": "1871, Chile",
            "profession": "Militar, dictador",
            "fullBio": "Mariano Melgarejo fue uno de los dictadores más polémicos de Bolivia, conocido por su gobierno autoritario, actos arbitrarios y mala reputación entre la población. Su mandato estuvo marcado por la represión, corrupción y entrega de territorios. Fue finalmente derrocado y exiliado, dejando un legado negativo en la historia boliviana."
        }
    },
    {
        "id": 16,
        "nombre": "Agustín Morales",
        "periodo": "1871–1872",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/AGUST_N_MORALES_HERN_NDEZ.jpg/180px-AGUST_N_MORALES_HERN_NDEZ.jpg",
        "bio": "Militar que asumió la presidencia tras derrocar a Melgarejo.",
        "detalle": {
            "fullPeriod": "15 de enero de 1871 - 27 de noviembre de 1872",
            "birth": "18 de diciembre de 1808, La Paz",
            "death": "27 de noviembre de 1872 (63 años), La Paz",
            "profession": "Militar, político",
            "fullBio": "Agustín Morales fue un militar que tomó el poder tras un golpe de Estado contra Mariano Melgarejo. Durante su breve gobierno intentó estabilizar la situación política y controlar la influencia de grupos opositores. Su mandato terminó abruptamente cuando fue asesinado por un miembro de su guardia personal."
        }
    },
    {
        "id": 17,
        "nombre": "Tomás Frías Ametller",
        "periodo": "1872–1873, 1874–1876",
        "partido": "Independentista",
        "categoria": ["siglo19", "políticos"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/AGUST_N_MORALES_HERN_NDEZ.jpg/180px-AGUST_N_MORALES_HERN_NDEZ.jpg",
        "bio": "Político y estadista que asumió la presidencia en dos períodos.",
        "detalle": {
            "fullPeriod": "28 de noviembre de 1872 - 4 de mayo de 1873; 28 de febrero de 1874 - 11 de mayo de 1876",
            "birth": "21 de octubre de 1804, Potosí",
            "death": "10 de diciembre de 1884 (80 años), Sucre",
            "profession": "Abogado, político",
            "fullBio": "Tomás Frías fue un abogado y político que asumió la presidencia en dos ocasiones, ambas en momentos de crisis. Fue conocido por su rectitud y compromiso con la legalidad, intentando estabilizar al país después de periodos turbulentos. Promovió reformas judiciales y administrativas para fortalecer el Estado."
        }
    },
    {
        "id": 18,
        "nombre": "Adolfo Ballivián",
        "periodo": "1873–1874",
        "partido": "Independentista",
        "categoria": ["siglo19", "políticos"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ADOLFO_BALLIVI_N_COLL.jpg/180px-ADOLFO_BALLIVI_N_COLL.jpg",
        "bio": "Presidente joven y reformista, su mandato fue breve por enfermedad.",
        "detalle": {
            "fullPeriod": "4 de mayo de 1873 - 14 de febrero de 1874",
            "birth": "Ballivián, Bolivia, 1831",
            "death": "1874, Sucre",
            "profession": "Militar, político",
            "fullBio": "Adolfo Ballivián fue un joven militar y político que asumió la presidencia con un espíritu reformista y modernizador. Su gobierno buscó impulsar la educación y mejorar la infraestructura, pero su mandato fue interrumpido por una enfermedad que causó su muerte prematura."
        }
    },
    {
        "id": 19,
        "nombre": "Hilarión Daza",
        "periodo": "1876–1879",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/HILARI%C3%93N_DAZA_GROSELLE.jpg/180px-HILARI%C3%93N_DAZA_GROSELLE.jpg",
        "bio": "Dictador militar, su mandato terminó con la Guerra del Pacífico.",
        "detalle": {
            "fullPeriod": "28 de mayo de 1876 - 28 de diciembre de 1879",
            "birth": "January 1, 1840, La Paz",
            "death": "1894, Chile",
            "profession": "Militar, dictador",
            "fullBio": "Hilarión Daza fue un militar que llegó al poder mediante un golpe de Estado. Su mandato autoritario estuvo marcado por controversias y la preparación para la Guerra del Pacífico. Fue depuesto debido a su manejo polémico del conflicto y exiliado. Su gobierno afectó profundamente la estabilidad de Bolivia."
        }
    },
    {
        "id": 20,
        "nombre": "Narciso Campero",
        "periodo": "1880–1884",
        "partido": "Independentista",
        "categoria": ["siglo19", "militares", "políticos"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/NARCISO_CAMPERO_LEYES.jpg/180px-NARCISO_CAMPERO_LEYES.jpg",
        "bio": "Militar y político que dirigió Bolivia tras la Guerra del Pacífico.",
        "detalle": {
            "fullPeriod": "28 de diciembre de 1880 - 4 de septiembre de 1884",
            "birth": "29 de enero de 1813, Tarija",
            "death": "1896, Bolivia",
            "profession": "Militar, político",
            "fullBio": "Narciso Campero fue un militar y político que asumió la presidencia en el periodo posterior a la Guerra del Pacífico, intentando reconstruir el país tras la pérdida de territorios. Su gobierno se centró en la recuperación económica y la estabilización política, enfrentando grandes desafíos internos y externos."
        }
    },
    {
        "id": 21,
        "nombre": "Gregorio Pacheco",
        "periodo": "1884–1888",
        "partido": "Independentista",
        "categoria": ["siglo19", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/GREGORIO_PACHECO_LEYES.jpg/180px-GREGORIO_PACHECO_LEYES.jpg",
        "bio": "Empresario y político, su gobierno se destacó por obras públicas y estabilidad económica.",
        "detalle": {
            "fullPeriod": "4 de septiembre de 1884 - 15 de agosto de 1888",
            "birth": "4 de noviembre de 1823, Potosí",
            "death": "16 de septiembre de 1899, Sucre",
            "profession": "Empresario, político",
            "fullBio": "Gregorio Pacheco fue un empresario que se convirtió en presidente, aportando su experiencia para modernizar la economía boliviana. Durante su gobierno impulsó la construcción de ferrocarriles, escuelas y obras públicas, y promovió la estabilidad política tras años de conflictos."
        }
    },
    {
        "id": 22,
        "nombre": "Aniceto Arce",
        "periodo": "1888–1892",
        "partido": "Conservador",
        "categoria": ["siglo19", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Aniceto_Arce.jpg/180px-Aniceto_Arce.jpg",
        "bio": "Presidente conservador, promovió la minería y el ferrocarril.",
        "detalle": {
            "fullPeriod": "15 de agosto de 1888 - 11 de agosto de 1892",
            "birth": "15 de abril de 1824, Sucre",
            "death": "14 de abril de 1906, Sucre",
            "profession": "Abogado, político",
            "fullBio": "Aniceto Arce fue un político y abogado que impulsó el desarrollo económico basado en la minería y la construcción de ferrocarriles para conectar Bolivia con puertos en el Pacífico. Su gobierno fortaleció el sistema conservador y promovió la inversión extranjera."
        }
    },
    {
        "id": 23,
        "nombre": "Mariano Baptista",
        "periodo": "1892–1896",
        "partido": "Conservador",
        "categoria": ["siglo19", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mariano_Baptista_Caserta.jpg/180px-Mariano_Baptista_Caserta.jpg",
        "bio": "Conservador, trabajó en fortalecer la diplomacia y modernización del país.",
        "detalle": {
            "fullPeriod": "11 de agosto de 1892 - 19 de agosto de 1896",
            "birth": "27 de junio de 1832, La Paz",
            "death": "19 de agosto de 1907, Sucre",
            "profession": "Abogado, político",
            "fullBio": "Mariano Baptista fue un político conservador que durante su gobierno buscó estabilizar las relaciones internacionales y promover reformas administrativas. Fue clave en la consolidación del sistema político conservador y en el fortalecimiento de la educación y la infraestructura."
        }
    },
    {
        "id": 24,
        "nombre": "Severo Fernández Alonso",
        "periodo": "1896–1899",
        "partido": "Conservador",
        "categoria": ["siglo19", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/SEVERO_FERN%C3%81NDEZ_ALONSO_CABALLERO.jpg/180px-SEVERO_FERN%C3%81NDEZ_ALONSO_CABALLERO.jpg",
        "bio": "Presidente conservador, su gobierno terminó con la Revolución Federalista.",
        "detalle": {
            "fullPeriod": "19 de agosto de 1896 - 12 de abril de 1899",
            "birth": "29 de noviembre de 1857, La Paz",
            "death": "1920, La Paz",
            "profession": "Político",
            "fullBio": "Severo Fernández asumió la presidencia en un momento de gran conflicto político. Su gobierno fue marcado por la oposición creciente que desembocó en la Revolución Federalista, que terminó con el dominio conservador y su destitución. Fue un periodo de profunda crisis institucional."
        }
    },
    {
        "id": 25,
        "nombre": "José Manuel Pando",
        "periodo": "1899–1904",
        "partido": "Liberal",
        "categoria": ["siglo19", "militares", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/25_-_Jos%C3%A9_Manuel_Pando_%28CROPPED%29.png/250px-25_-_Jos%C3%A9_Manuel_Pando_%28CROPPED%29.png",
        "bio": "Militar y líder liberal que encabezó la Revolución Federalista y modernizó el país.",
        "detalle": {
            "fullPeriod": "12 de abril de 1899 - 14 de agosto de 1904",
            "birth": "27 de julio de 1849, La Paz",
            "death": "1917, La Paz",
            "profession": "Militar, político",
            "fullBio": "José Manuel Pando fue un militar y político que lideró la Revolución Federalista contra el régimen conservador. Su gobierno liberal implementó reformas sociales, modernizó la administración pública y promovió la integración nacional y el desarrollo económico, especialmente en el área ferroviaria."
        }
    },
    {
        "id": 26,
        "nombre": "Ismael Montes",
        "periodo": "1904–1909, 1913–1917",
        "partido": "Liberal",
        "categoria": ["siglo20", "militares", "políticos"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/26_-_Ismael_Montes_%28CROPPED%29.png/250px-26_-_Ismael_Montes_%28CROPPED%29.png",
        "bio": "Dos veces presidente liberal, modernizó la infraestructura y promovió la educación.",
        "detalle": {
            "fullPeriod": "14 de agosto de 1904 - 12 de agosto de 1909; 14 de agosto de 1913 - 15 de agosto de 1917",
            "birth": "8 de octubre de 1861, La Paz",
            "death": "16 de noviembre de 1933, La Paz",
            "profession": "Militar, político",
            "fullBio": "Ismael Montes fue un militar y político liberal que gobernó Bolivia en dos periodos. Durante su primer mandato, se enfocó en consolidar la pacificación tras la Guerra del Pacífico y en desarrollar la infraestructura ferroviaria y educativa. En su segundo mandato, continuó con la modernización del Estado y promovió reformas sociales y económicas."
        }
    },
    {
        "id": 27,
        "nombre": "Eliodoro Villazón",
        "periodo": "1909–1913",
        "partido": "Liberal",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Eliodoro_Villaz%C3%B3n_con_banda_presidencial.jpg/180px-Eliodoro_Villaz%C3%B3n_con_banda_presidencial.jpg",
        "bio": "Presidente liberal, su gobierno continuó con la estabilidad y desarrollo económico.",
        "detalle": {
            "fullPeriod": "12 de agosto de 1909 - 14 de agosto de 1913",
            "birth": "22 de noviembre de 1848, La Paz",
            "death": "12 de julio de 1939, La Paz",
            "profession": "Abogado, político",
            "fullBio": "Eliodoro Villazón fue un abogado y político que asumió la presidencia continuando el proyecto liberal. Su gobierno estuvo marcado por la estabilidad política, la promoción del desarrollo económico y la atención en la educación y la justicia, manteniendo la paz social y las relaciones internacionales."
        }
    },
    {
        "id": 28,
        "nombre": "José Gutiérrez Guerra",
        "periodo": "1917–1920",
        "partido": "Liberal",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Jos%C3%A9_Guti%C3%A9rrez_Guerra._Bazoberri%2C_Luis_%28Photo%29._c._1916%2C_C%C3%ADrculo_Militar%2C_La_Paz.png/250px-Jos%C3%A9_Guti%C3%A9rrez_Guerra._Bazoberri%2C_Luis_%28Photo%29._c._1916%2C_C%C3%ADrculo_Militar%2C_La_Paz.png",
        "bio": "Último presidente liberal antes de la crisis, enfrentó problemas económicos y sociales.",
        "detalle": {
            "fullPeriod": "15 de agosto de 1917 - 12 de julio de 1920",
            "birth": "29 de diciembre de 1869, Sucre",
            "death": "23 de enero de 1929, Sucre",
            "profession": "Economista, político",
            "fullBio": "José Gutiérrez Guerra fue un economista y político que enfrentó una época de crisis económica y social. Su gobierno liberal trató de mantener la estabilidad, pero la oposición creció debido a problemas financieros y sociales, lo que llevó a su derrocamiento por un golpe de estado."
        }
    },
    {
        "id": 29,
        "nombre": "Bautista Saavedra",
        "periodo": "1920–1925",
        "partido": "Republicano",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/29b_-_Bautista_Saavedra.png/250px-29b_-_Bautista_Saavedra.png",
        "bio": "Líder del Partido Republicano, su gobierno abrió una nueva era política en Bolivia.",
        "detalle": {
            "fullPeriod": "12 de julio de 1920 - 3 de septiembre de 1925",
            "birth": "30 de enero de 1870, La Paz",
            "death": "1 de enero de 1939, La Paz",
            "profession": "Abogado, político",
            "fullBio": "Bautista Saavedra fue un líder del Partido Republicano que asumió la presidencia tras un golpe de estado que marcó el fin del dominio liberal. Su gobierno inició reformas políticas importantes, fortaleció el poder ejecutivo y promovió cambios sociales que influyeron en la política boliviana durante las siguientes décadas."
        }
    },
    {
        "id": 30,
        "nombre": "Felipe Segundo Guzmán",
        "periodo": "1925–1926",
        "partido": "Republicano",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Felipe_segundo_guzman.jpg/180px-Felipe_segundo_guzman.jpg",
        "bio": "Presidente interino tras Saavedra, pedagogo comprometido con la educación popular.",
        "detalle": {
            "fullPeriod": "3 de septiembre de 1925 - 10 de enero de 1926",
            "birth": "17 de enero de 1879, La Paz",
            "death": "16 de junio de 1932, La Paz",
            "profession": "Pedagogo, político",
            "fullBio": "Felipe Segundo Guzmán Bustillo fue un destacado pedagogo y catedrático universitario —rector de la Universidad de Oruro y profesor de Economía Política en la UMSA—, reconocido por promover la castellanización y Educación Industrial para indígenas :contentReference[oaicite:0]{index=0}. Elegido como presidente provisional por el Congreso luego de anular las elecciones de 1925, su mandato se centró en convocar nuevos comicios (diciembre 1925) y crear instituciones clave, como el Lloyd Aéreo Boliviano :contentReference[oaicite:1]{index=1}. Tras entregar el poder a Hernando Siles, ejerció varios ministerios antes de retirarse. Fue también autor influyente en pedagogía, con el ensayo “El problema pedagógico en Bolivia” :contentReference[oaicite:2]{index=2}. Murió en su ciudad natal a los 53 años."
        }
    },
    {
        "id": 31,
        "nombre": "Hernando Siles Reyes",
        "periodo": "1926–1930",
        "partido": "Socialista-Republicano / Nacionalista",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hernando_siles_reyes.jpg/180px-Hernando_siles_reyes.jpg",
        "bio": "Presidente carismático y reformista, su intento de prórroga causó disturbios.",
        "detalle": {
            "fullPeriod": "10 de enero de 1926 - 28 de mayo de 1930",
            "birth": "5 de agosto de 1882, Sucre",
            "death": "23 de noviembre de 1942, Lima",
            "profession": "Abogado, político",
            "fullBio": "Hernando Siles Reyes, abogado graduado en Sucre, fue elegido presidente con más del 97 % tras las elecciones de diciembre de 1925 :contentReference[oaicite:3]{index=3}. Fundador del Partido Nacionalista, se distanció del ex-mandatario Bautista Saavedra, incluso exiliándolo :contentReference[oaicite:4]{index=4}. Su gobierno promovió la educación, el arte (creación de la Academia de Bellas Artes en 1926), y la construcción del estadio que lleva su nombre :contentReference[oaicite:5]{index=5}, pero quedó marcado por el crack de 1929 y la tensión con Paraguay, preludio de la Guerra del Chaco :contentReference[oaicite:6]{index=6}. En 1930 intentó prorrogar su mandato mediante una ley interpretativa, lo cual desencadenó protestas sangrientas (como en Potosí, 1929) :contentReference[oaicite:7]{index=7}. Presionado, renunció en mayo, se exilió en Perú y falleció en 1942. Fue padre de los futuros presidentes Hernán Siles Zuazo y Luis Adolfo Siles Salinas :contentReference[oaicite:8]{index=8}."
        }
    },
    {
        "id": 32,
        "nombre": "Carlos Blanco Galindo",
        "periodo": "1930–1931",
        "partido": "Cívico-militar",
        "categoria": ["siglo20", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Ex_presidente_Carlos_Blanco_Galindo.jpg/180px-Ex_presidente_Carlos_Blanco_Galindo.jpg",
        "bio": "Militar interino que encabezó una junta de transición tras la renuncia de Siles Reyes.",
        "detalle": {
            "fullPeriod": "28 de junio de 1930 – 5 de marzo de 1931",
            "birth": "12 de marzo de 1882, Cochabamba",
            "death": "2 de octubre de 1943, Cochabamba",
            "profession": "Militar, político",
            "fullBio": "Carlos Blanco Galindo fue un general con formación en derecho y especializado en Francia y Argentina. Doctor honoris causa de la Universidad de San Simón, asumió como presidente de la Junta de Gobierno tras la renuncia de Siles Reyes para restablecer el orden constitucional. Durante sus 8 meses de mandato reorganizó políticamente la oligarquía, convocó elecciones democráticas y fortaleció la autonomía universitaria, aunque su gestión no emprendió grandes obras de infraestructura :contentReference[oaicite:0]{index=0}."
        }
    },
    {
        "id": 33,
        "nombre": "Daniel Salamanca Urey",
        "periodo": "1931–1934",
        "partido": "Partido Liberal / Partido Republicano",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Daniel_Salamanca_Urey.jpg/180px-Daniel_Salamanca_Urey.jpg",
        "bio": "Presidente civil durante la Guerra del Chaco, su gobierno enfrentó severos conflictos militares y políticos.",
        "detalle": {
            "fullPeriod": "5 de marzo de 1931 - 27 de noviembre de 1934",
            "birth": "29 de julio de 1869, Potosí",
            "death": "17 de octubre de 1935, La Paz",
            "profession": "Abogado, político",
            "fullBio": "Daniel Salamanca Urey fue un político y abogado que presidió Bolivia durante la difícil Guerra del Chaco contra Paraguay. Su gobierno se caracterizó por decisiones polémicas y confrontaciones con los militares, buscando dirigir la estrategia bélica y mantener la autoridad civil sobre el ejército. Fue derrocado por un golpe militar tras las derrotas en la guerra y la creciente presión política y social."
        }
    },
    {
        "id": 34,
        "nombre": "José Luis Tejada Sorzano",
        "periodo": "1934–1936",
        "partido": "Liberal",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/34_-_Jos%C3%A9_Luis_Tejada_Sorzano.jpg/250px-34_-_Jos%C3%A9_Luis_Tejada_Sorzano.jpg",
        "bio": "Abogado y político liberal, último presidente antes del golpe que marcó la transición autoritaria.",
        "detalle": {
            "fullPeriod": "1 de diciembre de 1934 – 17 de mayo de 1936",
            "birth": "12 de enero de 1882, La Paz",
            "death": "4 de octubre de 1938, Arica (Chile)",
            "profession": "Abogado, economista, político",
            "fullBio": "José Luis Tejada Sorzano, formado en Derecho en la UMSA y ex-ministro de Hacienda, asumió la presidencia como vicepresidente de Salamanca, en medio de la posguerra chacoana :contentReference[oaicite:1]{index=1}. Su mandato enfrentó la crisis posbélica y económica, promovió la construcción del primer estadio nacional, liderado el COI boliviano y mantuvo cierta estabilidad. Sin embargo, las fuerzas jóvenes del Ejército lo derrocaron en 1936, dando paso a regímenes militaristas :contentReference[oaicite:2]{index=2}."
        }
    },
    {
        "id": 35,
        "nombre": "Germán Busch",
        "periodo": "1936, 1937–1939",
        "partido": "Social-Republicano / Militar",
        "categoria": ["siglo20", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/36_-_Germ%C3%A1n_Busch_%28CROPPED%29.jpg/250px-36_-_Germ%C3%A1n_Busch_%28CROPPED%29.jpg",
        "bio": "Héroe de la Guerra del Chaco, lideró un ciclo de ‘Socialismo Militar’ y fue presidente constitucional.",
        "detalle": {
            "fullPeriod": "17–22 de mayo de 1936 (junta); 13 de julio de 1937 – 23 de agosto de 1939",
            "birth": "23 de marzo de 1903, San Javier (posible) o Beni",
            "death": "23 de agosto de 1939, La Paz",
            "profession": "Militar, político",
            "fullBio": "Víctor Germán Busch Becerra fue uno de los héroes militares de la Guerra del Chaco, jefe del Estado Mayor y líder de la 'Legión de Ex-Combatientes'. Asumió brevemente en 1936 tras derrocar a Tejada Sorzano, y luego fue reelecto en 1937. Promulgó la Constitución Social de 1938, nacionalizó las divisas mineras, creó regalías para hidrocarburos, y reguló el trabajo y la educación :contentReference[oaicite:3]{index=3}. En abril de 1939 se declaró dictador y su muerte en agosto es debatida: oficializada como suicidio, algunos la consideran asesinato :contentReference[oaicite:4]{index=4}."
        }
    },
    {
        "id": 36,
        "nombre": "David Toro Ruilova",
        "periodo": "1936–1937",
        "partido": "Independiente / Militar",
        "categoria": ["siglo20", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/35_-_David_Toro.jpg/250px-35_-_David_Toro.jpg",
        "bio": "Gobernante militar que promovió reformas sociales y económicas tras la Guerra del Chaco.",
        "detalle": {
            "fullPeriod": "17 de mayo de 1936 - 13 de julio de 1937",
            "birth": "24 de julio de 1898, Cochabamba",
            "death": "29 de abril de 1977, Cochabamba",
            "profession": "Militar, político",
            "fullBio": "David Toro Ruilova asumió la presidencia tras un golpe de estado que derrocó a José Luis Tejada Sorzano. Durante su gobierno militar promovió reformas económicas, sociales y laborales, intentando modernizar la administración pública y mejorar la situación de los trabajadores. Fue un precursor de la llamada 'Revolución Militar' que marcaría la política boliviana de la década de 1930."
        }
    },
    {
        "id": 37,
        "nombre": "Carlos Quintanilla",
        "periodo": "1939–1940",
        "partido": "Militar",
        "categoria": ["siglo20", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/CARLOS_QUINTANILLA_QUIROGA.jpg/180px-CARLOS_QUINTANILLA_QUIROGA.jpg",
        "bio": "General interino, asumió tras la muerte de Busch y restauró el orden democrático.",
        "detalle": {
            "fullPeriod": "23 de agosto de 1939 – 15 de abril de 1940",
            "birth": "22 de enero de 1888, Cochabamba",
            "death": "8 de junio de 1964, Cochabamba",
            "profession": "Militar, político",
            "fullBio": "Carlos Quintanilla Quiroga fue comandante en jefe durante el mandato de Busch y asumió la presidencia en calidad provisional tras su muerte :contentReference[oaicite:5]{index=5}. Durante sus 7 meses y 22 días de gobierno anuló leyes de Busch, reguló exportaciones de estaño y convocó a elecciones que llevaron a la presidencia a Peñaranda, sin grandes reformas de fondo :contentReference[oaicite:6]{index=6}."
        }
    },
    {
        "id": 38,
        "nombre": "Enrique Peñaranda",
        "periodo": "1940–1943",
        "partido": "Conservador",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Enrique_Pe%C3%B1aranda.jpg/250px-Enrique_Pe%C3%B1aranda.jpg",
        "bio": "General y presidente conservador, lideró en la Segunda Guerra Mundial y fue derrocado.",
        "detalle": {
            "fullPeriod": "15 de abril de 1940 – 20 de diciembre de 1943",
            "birth": "15 de noviembre de 1892, Chuchulaya, La Paz",
            "death": "22 de diciembre de 1969, Madrid",
            "profession": "Militar, político",
            "fullBio": "Enrique Peñaranda del Castillo fue comandante en jefe durante la Guerra del Chaco y pro-Aliado en la Segunda Guerra Mundial :contentReference[oaicite:7]{index=7}. Elogiado por su lucha conjunta con EE.UU. y Reino Unido, ganó las elecciones de 1940 como candidato conservador. Su administración abogó por el envío de estaño al esfuerzo aliado, pero enfrentó el descontento de sectores reformistas y fue depuesto en 1943 por la facción RADEPA que respaldó a Villarroel :contentReference[oaicite:8]{index=8}."
        }
    },
    {
        "id": 39,
        "nombre": "Gualberto Villarroel López",
        "periodo": "1943–1946",
        "partido": "Movimiento Nacionalista Revolucionario / Junta Militar",
        "categoria": ["siglo20", "civiles", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/39_-_Gualberto_Villarroel_%28CROPPED1%29.jpg/250px-39_-_Gualberto_Villarroel_%28CROPPED1%29.jpg",
        "bio": "Gobernante que buscó reformas sociales y fue derrocado violentamente por el pueblo.",
        "detalle": {
            "fullPeriod": "20 de diciembre de 1943 - 21 de julio de 1946",
            "birth": "15 de diciembre de 1908, La Paz",
            "death": "21 de julio de 1946, La Paz",
            "profession": "Militar, político",
            "fullBio": "Gualberto Villarroel fue un militar y político que llegó al poder mediante un golpe de estado. Durante su gobierno implementó reformas sociales enfocadas en la educación y los derechos laborales, pero su relación con sectores estudiantiles y obreros se volvió tensa. Fue linchado por un motín popular en 1946 tras un periodo de inestabilidad y conflictos políticos."
        }
    },
    {
        "id": 40,
        "nombre": "Néstor Guillén Olmos",
        "periodo": "1946",
        "partido": "Independiente / Transitorio",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/40_-_N%C3%A9stor_Guill%C3%A9n.jpg/250px-40_-_N%C3%A9stor_Guill%C3%A9n.jpg",
        "bio": "Presidente interino tras la caída de Villarroel, su mandato fue breve y de transición.",
        "detalle": {
            "fullPeriod": "21 de julio de 1946 - 17 de agosto de 1946",
            "birth": "10 de noviembre de 1890, La Paz",
            "death": "15 de diciembre de 1966, La Paz",
            "profession": "Político, abogado",
            "fullBio": "Néstor Guillén Olmos asumió la presidencia de manera interina tras la caída de Villarroel, con la tarea de estabilizar el país y organizar la transición hacia un gobierno civil. Su mandato fue corto y principalmente administrativo, buscando pacificar la capital y preparar elecciones."
        }
    },
    {
        "id": 41,
        "nombre": "Tomás Monje Gutiérrez",
        "periodo": "1946–1947",
        "partido": "Independiente / Transitorio",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/41_-_Tom%C3%A1s_Monje_%28CROPPED1%29.jpg/250px-41_-_Tom%C3%A1s_Monje_%28CROPPED1%29.jpg",
        "bio": "Presidente de transición que condujo al país hacia elecciones democráticas.",
        "detalle": {
            "fullPeriod": "17 de agosto de 1946 - 10 de marzo de 1947",
            "birth": "21 de noviembre de 1884, La Paz",
            "death": "15 de agosto de 1954, La Paz",
            "profession": "Abogado, político",
            "fullBio": "Tomás Monje Gutiérrez fue un abogado y político que asumió la presidencia de transición tras la inestabilidad causada por la muerte de Villarroel. Su gobierno se centró en la organización de elecciones democráticas, el mantenimiento del orden y la reconstrucción de las instituciones gubernamentales."
        }
    },
    {
        "id": 42,
        "nombre": "Enrique Hertzog Garzón",
        "periodo": "1947–1949",
        "partido": "Partido Socialista / Partido Republicano",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/42_-_Enrique_Hertzog_%28CROPPED%29.jpg/250px-42_-_Enrique_Hertzog_%28CROPPED%29.jpg",
        "bio": "Presidente civil que enfrentó conflictos políticos internos y debilitamiento de su gobierno.",
        "detalle": {
            "fullPeriod": "10 de marzo de 1947 - 24 de mayo de 1949",
            "birth": "22 de julio de 1897, Sucre",
            "death": "31 de mayo de 1981, La Paz",
            "profession": "Abogado, político",
            "fullBio": "Enrique Hertzog Garzón fue un político y abogado que asumió la presidencia en un contexto de creciente polarización. Su gobierno enfrentó conflictos con el Movimiento Nacionalista Revolucionario y problemas de orden interno, lo que debilitó su autoridad y lo llevó a delegar gran parte de sus funciones en su vicepresidente hasta su renuncia."
        }
    },
     {
        "id": 43,
        "nombre": "Mamerto Urriolagoitia Harriague",
        "periodo": "1949–1951",
        "partido": "Partido de la Concordia Nacional / Conservador",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mamer-urriol.jpg/250px-Mamer-urriol.jpg",
        "bio": "Presidente conservador que enfrentó la agitación política previa a la Revolución de 1952.",
        "detalle": {
            "fullPeriod": "24 de mayo de 1949 - 16 de abril de 1951",
            "birth": "11 de octubre de 1898, Sucre",
            "death": "4 de junio de 1974, Sucre",
            "profession": "Abogado, político",
            "fullBio": "Mamerto Urriolagoitia Harriague fue un presidente conservador que asumió el poder en un periodo de creciente conflicto social y político. Su gobierno enfrentó huelgas y protestas, y se caracterizó por intentar mantener el orden conservador ante la presión del Movimiento Nacionalista Revolucionario. Renunció y dejó el poder al comandante militar Hugo Ballivián."
        }
    },
    {
        "id": 44,
        "nombre": "Hugo Ballivián Rojas",
        "periodo": "1951–1952",
        "partido": "Junta Militar / Transitorio",
        "categoria": ["siglo20", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Hugo_Ballivian_Rojas.jpg/180px-Hugo_Ballivian_Rojas.jpg",
        "bio": "Gobernante militar de transición que asumió tras la renuncia de Urriolagoitia.",
        "detalle": {
            "fullPeriod": "16 de abril de 1951 - 6 de abril de 1952",
            "birth": "26 de junio de 1901, La Paz",
            "death": "7 de marzo de 1995, La Paz",
            "profession": "Militar",
            "fullBio": "Hugo Ballivián Rojas asumió la presidencia tras la renuncia de Mamerto Urriolagoitia. Su gobierno fue de carácter transitorio y militar, enfocado en mantener el orden hasta que el Movimiento Nacionalista Revolucionario liderara la Revolución de 1952, que lo derrocó y marcó un cambio definitivo en la política boliviana."
        }
    },
    {
        "id": 45,
        "nombre": "Víctor Paz Estenssoro",
        "periodo": "1952–1956",
        "partido": "Movimiento Nacionalista Revolucionario",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/V%C3%ADctor_Paz_Estenssoro_con_banda_presidencial.jpg/180px-V%C3%ADctor_Paz_Estenssoro_con_banda_presidencial.jpg",
        "bio": "Líder de la Revolución Nacional, su gobierno promovió reformas sociales y económicas profundas.",
        "detalle": {
            "fullPeriod": "6 de abril de 1952 - 6 de agosto de 1956",
            "birth": "2 de octubre de 1907, Oruro",
            "death": "7 de junio de 2001, La Paz",
            "profession": "Economista, político",
            "fullBio": "Víctor Paz Estenssoro fue el líder del Movimiento Nacionalista Revolucionario que encabezó la Revolución Nacional de 1952. Su gobierno implementó la reforma agraria, nacionalizó el estaño y promovió derechos políticos y sociales para los trabajadores y campesinos, consolidando un cambio estructural en Bolivia."
        }
    },
    {
        "id": 46,
        "nombre": "Hernán Siles Zuazo",
        "periodo": "1956–1960",
        "partido": "Movimiento Nacionalista Revolucionario",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Hern%C3%A1n_Siles_Zuazo_con_banda_presidencial.jpg/180px-Hern%C3%A1n_Siles_Zuazo_con_banda_presidencial.jpg",
        "bio": "Presidente revolucionario que continuó las reformas sociales y económicas de la MNR.",
        "detalle": {
            "fullPeriod": "6 de agosto de 1956 - 6 de agosto de 1960",
            "birth": "21 de julio de 1914, La Paz",
            "death": "6 de agosto de 1996, La Paz",
            "profession": "Político, profesor",
            "fullBio": "Hernán Siles Zuazo fue un líder del Movimiento Nacionalista Revolucionario que asumió la presidencia para continuar las reformas iniciadas en 1952. Durante su gobierno se promovieron la educación, la seguridad social y la consolidación de las reformas agrarias, fortaleciendo el proyecto político de la Revolución Nacional."
        }
    },
    {
        "id": 47,
        "nombre": "René Barrientos Ortuño",
        "periodo": "1964–1969",
        "partido": "Partido Militar / Junta Militar",
        "categoria": ["siglo20", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Presidente_Ren%C3%A9_Barrientos_Ortu%C3%B1o.jpg/180px-Presidente_Ren%C3%A9_Barrientos_Ortu%C3%B1o.jpg",
        "bio": "Militar y presidente populista, buscó estabilizar Bolivia tras golpes y conflictos internos.",
        "detalle": {
            "fullPeriod": "6 de noviembre de 1964 - 27 de abril de 1969",
            "birth": "30 de mayo de 1919, Tarata",
            "death": "27 de abril de 1969, Arque",
            "profession": "Militar, político",
            "fullBio": "René Barrientos Ortuño fue un militar que asumió la presidencia tras un golpe de estado. Su gobierno combinó el autoritarismo con políticas populistas, fomentando la estabilidad política y promoviendo la participación campesina, hasta su muerte en un accidente aéreo que interrumpió su mandato."
        }
    },
    {
        "id": 48,
        "nombre": "Alfredo Ovando Candía",
        "periodo": "1965–1970",
        "partido": "Junta Militar / Independiente",
        "categoria": ["siglo20", "militares"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Alfredo_Ovando_Cand%C3%ADa.jpg/180px-Alfredo_Ovando_Cand%C3%ADa.jpg",
        "bio": "Presidente militar que impulsó políticas nacionalistas y reformistas.",
        "detalle": {
            "fullPeriod": "14 de septiembre de 1965 - 26 de octubre de 1970",
            "birth": "6 de mayo de 1918, La Paz",
            "death": "24 de enero de 1982, La Paz",
            "profession": "Militar, político",
            "fullBio": "Alfredo Ovando Candía fue un militar que asumió la presidencia tras conflictos internos. Su gobierno implementó políticas de nacionalización parcial y fomentó el nacionalismo económico, manteniendo una relación compleja con la izquierda y los movimientos sociales durante su mandato."
        }
    },
    {
        "id": 49,
        "nombre": "Luis Adolfo Siles Salinas",
        "periodo": "1969",
        "partido": "Partido Demócrata / Transitorio",
        "categoria": ["siglo20", "civiles"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/49_-_Luis_Adolfo_Siles_Salinas_%28CROPPED%29.jpg/250px-49_-_Luis_Adolfo_Siles_Salinas_%28CROPPED%29.jpg",
        "bio": "Presidente interino que intentó restaurar la legalidad democrática tras golpes militares.",
        "detalle": {
            "fullPeriod": "26 de octubre de 1969 - 9 de abril de 1970",
            "birth": "21 de agosto de 1925, La Paz",
            "death": "19 de noviembre de 2005, La Paz",
            "profession": "Abogado, político",
            "fullBio": "Luis Adolfo Siles Salinas asumió la presidencia de manera interina en un contexto de inestabilidad militar. Buscó restaurar la legalidad y promover la democracia, pero su gobierno fue breve y terminó derrocado por otro golpe militar, reflejando la fragilidad institucional de Bolivia en ese periodo."
        }
    },
    {
        "id": 50,
        "nombre": "Juan José Torres",
        "periodo": "1970–1971",
        "partido": "Partido Revolucionario de la Izquierda / Militar",
        "categoria": ["siglo20", "militares", "izquierda"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/50_-_Juan_Jos%C3%A9_Torres.jpg/250px-50_-_Juan_Jos%C3%A9_Torres.jpg",
        "bio": "Presidente militar de izquierda que promovió reformas sociales radicales y fue derrocado.",
        "detalle": {
            "fullPeriod": "7 de octubre de 1970 - 21 de agosto de 1971",
            "birth": "5 de marzo de 1920, Cochabamba",
            "death": "2 de junio de 1976, Buenos Aires",
            "profession": "Militar, político",
            "fullBio": "Juan José Torres fue un militar de orientación izquierdista que asumió la presidencia buscando implementar reformas sociales y políticas más radicales. Su gobierno promovió derechos de los trabajadores y campesinos, pero enfrentó fuerte oposición interna y externa, siendo derrocado por un golpe militar que instauró un régimen autoritario."
        }
    },
    {
        "id": 51,
        "nombre": "Hugo Banzer Suárez",
        "periodo": "1971–1978 / 2001",
        "partido": "Partido Nacionalista Revolucionario / Militar",
        "categoria": ["siglo20", "militares", "dictadura"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/GralHugoBanzerSuarez_%28CROPPED%29.jpg/250px-GralHugoBanzerSuarez_%28CROPPED%29.jpg",
        "bio": "Militar que gobernó Bolivia como dictador durante casi 7 años.",
        "detalle": {
            "fullPeriod": "22 de agosto de 1971 - 21 de julio de 1978",
            "birth": "10 de mayo de 1926, Concepción",
            "death": "5 de mayo de 2002, Santa Cruz de la Sierra",
            "profession": "Militar, político",
            "fullBio": "Hugo Banzer Suárez asumió el poder tras un golpe de estado en 1971. Su gobierno se caracterizó por la represión política, la censura y la persecución de opositores. Posteriormente, en democracia, regresó al poder como presidente electo de 1997 a 2001."
        }
    },
    {
        "id": 52,
        "nombre": "Juan Pereda Asbún",
        "periodo": "1978",
        "partido": "Independiente / Militar",
        "categoria": ["siglo20", "militares", "transitorio"],
        "imagen": "https://www.geocities.ws/bolivia/bolivia/presidentes/52_juan_pereda_a.jpg",
        "bio": "Presidente de facto que duró pocos meses en el poder tras un golpe militar.",
        "detalle": {
            "fullPeriod": "21 de julio de 1978 - 24 de noviembre de 1978",
            "birth": "28 de junio de 1931, Sucre",
            "death": "7 de septiembre de 2012, La Paz",
            "profession": "Militar",
            "fullBio": "Juan Pereda Asbún asumió la presidencia tras un golpe de estado contra Hugo Banzer, pero su gobierno fue efímero debido a la presión política y social. Fue depuesto en pocos meses, abriendo paso a la transición democrática y elecciones posteriores."
        }
    },
    {
        "id": 53,
        "nombre": "David Padilla Arancibia",
        "periodo": "1978–1979",
        "partido": "Militar / Transitorio",
        "categoria": ["siglo20", "militares", "transitorio"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/9/99/David_Padilla.jpg",
        "bio": "Presidente militar de transición que convocó a nuevas elecciones.",
        "detalle": {
            "fullPeriod": "24 de noviembre de 1978 - 8 de agosto de 1979",
            "birth": "13 de agosto de 1927, Sucre",
            "death": "25 de septiembre de 2016, Sucre",
            "profession": "Militar",
            "fullBio": "David Padilla Arancibia asumió la presidencia de manera transitoria tras la caída de Juan Pereda. Su gobierno tuvo como objetivo principal restablecer el orden institucional y convocar elecciones democráticas, cumpliendo un papel clave en la transición política."
        }
    },
    {
        "id": 54,
        "nombre": "Wálter Guevara Arze",
        "periodo": "1979",
        "partido": "Demócrata / Civil",
        "categoria": ["siglo20", "civiles", "transitorio"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/W%C3%A1lter_Guevara.jpg/250px-W%C3%A1lter_Guevara.jpg",
        "bio": "Presidente transitorio que buscó pacificar Bolivia en un periodo de crisis política.",
        "detalle": {
            "fullPeriod": "8 de agosto de 1979 - 1 de noviembre de 1979",
            "birth": "12 de enero de 1912, Sucre",
            "death": "19 de abril de 1996, La Paz",
            "profession": "Político, diplomático",
            "fullBio": "Wálter Guevara Arze asumió la presidencia de manera interina después de elecciones inconclusas. Su gobierno buscó estabilizar el país y preparar nuevas elecciones, pero fue derrocado por un golpe militar pocos meses después."
        }
    },
    {
        "id": 55,
        "nombre": "Alberto Natusch Busch",
        "periodo": "1979",
        "partido": "Militar / Golpista",
        "categoria": ["siglo20", "militares", "golpe"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Alberto_Natusch_Busch2.png",
        "bio": "Militar que asumió por golpe y gobernó solo 16 días.",
        "detalle": {
            "fullPeriod": "1 de noviembre de 1979 - 16 de noviembre de 1979",
            "birth": "21 de noviembre de 1933, La Paz",
            "death": "23 de noviembre de 1994, La Paz",
            "profession": "Militar",
            "fullBio": "Alberto Natusch Busch lideró un golpe de estado contra Wálter Guevara Arze, pero su gobierno duró solo 16 días debido a la oposición civil y política. Su breve mandato se considera uno de los más cortos en la historia de Bolivia."
        }
    },
    {
        "id": 56,
        "nombre": "Lydia Gueiler Tejada",
        "periodo": "1979–1980",
        "partido": "Transitoria / Democrática",
        "categoria": ["siglo20", "civiles", "transitorio", "mujer"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Lidia_Gueiler_Tejada_%28Recorte%29.png/181px-Lidia_Gueiler_Tejada_%28Recorte%29.png",
        "bio": "Primera mujer presidenta de Bolivia, liderando un gobierno de transición.",
        "detalle": {
            "fullPeriod": "16 de noviembre de 1979 - 17 de julio de 1980",
            "birth": "20 de agosto de 1921, La Paz",
            "death": "9 de mayo de 2011, La Paz",
            "profession": "Política, diplomática",
            "fullBio": "Lydia Gueiler Tejada asumió la presidencia como presidenta de transición, siendo la primera mujer en Bolivia en ocupar el cargo. Su mandato tuvo como objetivo organizar elecciones democráticas y estabilizar la situación política antes del golpe de Luis García Meza."
        }
    },
    {
        "id": 57,
        "nombre": "Luis García Meza",
        "periodo": "1980–1981",
        "partido": "Militar / Dictadura",
        "categoria": ["siglo20", "militares", "dictadura"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/LuisGarc%C3%ADaMeza1980.png/250px-LuisGarc%C3%ADaMeza1980.png",
        "bio": "Presidente militar autoritario, famoso por la represión y corrupción.",
        "detalle": {
            "fullPeriod": "17 de julio de 1980 - 4 de agosto de 1981",
            "birth": "8 de diciembre de 1929, La Paz",
            "death": "29 de abril de 2018, La Paz",
            "profession": "Militar",
            "fullBio": "Luis García Meza Tejada lideró una dictadura militar marcada por violaciones de derechos humanos, corrupción y represión política. Su gobierno terminó presionado por la comunidad internacional y la resistencia interna, restaurando posteriormente un gobierno civil."
        }
    },
    {
        "id": 58,
        "nombre": "Celso Torrelio Villa",
        "periodo": "1981–1982",
        "partido": "Militar / Dictadura",
        "categoria": ["siglo20", "militares", "dictadura"],
        "imagen": "https://www.historia.com.bo/imagen/escala/2017/1/a1111/celso-torrelio-villa-120117-mx.jpg",
        "bio": "Presidente militar que continuó la dictadura tras la caída de García Meza.",
        "detalle": {
            "fullPeriod": "4 de agosto de 1981 - 21 de julio de 1982",
            "birth": "28 de junio de 1933, Concepción",
            "death": "23 de abril de 1999, La Paz",
            "profession": "Militar",
            "fullBio": "Celso Torrelio Villa asumió la presidencia tras la renuncia de Luis García Meza, manteniendo un régimen militar autoritario. Su gobierno fue de transición hasta la restauración de la democracia en 1982."
        }
    },
    {
        "id": 59,
        "nombre": "Guido Vildoso Calderón",
        "periodo": "1982",
        "partido": "Militar / Transitorio",
        "categoria": ["siglo20", "militares", "transitorio"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Guido_Vildoso.jpg/250px-Guido_Vildoso.jpg",
        "bio": "Presidente transitorio que entregó el poder a un gobierno civil.",
        "detalle": {
            "fullPeriod": "21 de julio de 1982 - 10 de octubre de 1982",
            "birth": "5 abril de 1937, La Paz",
            "death": "13 agosto de 2012, La Paz",
            "profession": "Militar",
            "fullBio": "Guido Vildoso Calderón asumió como presidente transitorio para preparar la transición a la democracia. Entregó el poder a Hernán Siles Zuazo tras elecciones libres, poniendo fin al ciclo de dictaduras militares en Bolivia."
        }
    },
    {
        "id": 60,
        "nombre": "Jaime Paz Zamora",
        "periodo": "1989–1993",
        "partido": "MNR / MIR",
        "categoria": ["siglo20", "civiles", "democracia"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Presidente_Jaime_Paz_Zamora.jpg/180px-Presidente_Jaime_Paz_Zamora.jpg",
        "bio": "Presidente civil que promovió políticas de modernización y apertura económica.",
        "detalle": {
            "fullPeriod": "6 de agosto de 1989 - 6 de agosto de 1993",
            "birth": "15 de abril de 1939, Cochabamba",
            "profession": "Político, abogado",
            "fullBio": "Jaime Paz Zamora fue presidente de Bolivia por el partido MIR. Su gobierno destacó por la consolidación democrática y políticas de apertura económica y modernización, buscando la estabilidad después de décadas de crisis política y dictaduras militares."
        }
    },
     {
        "id": 61,
        "nombre": "Gonzalo Sánchez de Lozada",
        "periodo": "1993–1997 / 2002–2003",
        "partido": "Movimiento Nacionalista Revolucionario (MNR)",
        "categoria": ["siglo20", "siglo21", "civiles", "democracia"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Gonz%C3%A1lo_S%C3%A1nchez_de_Lozada-Agencia_BrasilAntonio_Cruz.jpg/250px-Gonz%C3%A1lo_S%C3%A1nchez_de_Lozada-Agencia_BrasilAntonio_Cruz.jpg",
        "bio": "Presidente electo en dos periodos, su segundo mandato terminó con protestas y renuncia.",
        "detalle": {
            "fullPeriod": "6 de agosto de 1993 - 6 de agosto de 1997 y 6 de agosto de 2002 - 17 de octubre de 2003",
            "birth": "1 de julio de 1930, La Paz",
            "profession": "Político, economista",
            "fullBio": "Sánchez de Lozada promovió políticas de apertura económica y privatizaciones. Su segundo mandato estuvo marcado por protestas sociales conocidas como la 'Guerra del Gas', que derivaron en su renuncia y exilio."
        }
    },
    {
        "id": 62,
        "nombre": "Jorge Quiroga Ramírez",
        "periodo": "2001–2002",
        "partido": "Acción Democrática Nacionalista (ADN)",
        "categoria": ["siglo21", "civiles", "democracia"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Jorge_Quiroga_Ram%C3%ADrez.jpg/180px-Jorge_Quiroga_Ram%C3%ADrez.jpg",
        "bio": "Vicepresidente que asumió tras la renuncia de Sánchez de Lozada.",
        "detalle": {
            "fullPeriod": "7 de agosto de 2001 - 6 de agosto de 2002",
            "birth": "5 de mayo de 1960, Cochabamba",
            "profession": "Político, economista",
            "fullBio": "Jorge Quiroga asumió la presidencia tras la renuncia de Sánchez de Lozada. Su gobierno continuó con políticas de estabilidad económica y preparación de elecciones democráticas para la transición."
        }
    },
    {
        "id": 63,
        "nombre": "Carlos Mesa Gisbert",
        "periodo": "2003–2005",
        "partido": "Independiente / Civil",
        "categoria": ["siglo21", "civiles", "democracia"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Carlos_Mesa._Su%C3%A1rez%2C_Antonio._2004%2C_Antonio_Su%C3%A1rez_collection%2C_La_Paz_%28Cropped%29.jpg/250px-Carlos_Mesa._Su%C3%A1rez%2C_Antonio._2004%2C_Antonio_Su%C3%A1rez_collection%2C_La_Paz_%28Cropped%29.jpg",
        "bio": "Periodista y vicepresidente que asumió tras la renuncia de Sánchez de Lozada.",
        "detalle": {
            "fullPeriod": "17 de octubre de 2003 - 9 de junio de 2005",
            "birth": "12 de agosto de 1953, La Paz",
            "profession": "Político, periodista, historiador",
            "fullBio": "Carlos Mesa asumió la presidencia en medio de la crisis de la 'Guerra del Gas'. Su gobierno se centró en la mediación política y la preparación de nuevas elecciones, renunciando ante presiones sociales y políticas."
        }
    },
    {
        "id": 64,
        "nombre": "Eduardo Rodríguez Veltzé",
        "periodo": "2005",
        "partido": "Transitorio / Civil",
        "categoria": ["siglo21", "civiles", "transitorio"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Eduardo_Rodr%C3%ADguez_Veltz%C3%A9._2005.png/250px-Eduardo_Rodr%C3%ADguez_Veltz%C3%A9._2005.png",
        "bio": "Presidente transitorio que convocó elecciones después de la renuncia de Mesa.",
        "detalle": {
            "fullPeriod": "9 de junio de 2005 - 22 de enero de 2006",
            "birth": "2 de marzo de 1956, Cochabamba",
            "profession": "Jurista, político",
            "fullBio": "Rodríguez Veltzé asumió la presidencia transitoria para garantizar elecciones libres tras la renuncia de Carlos Mesa. Su gestión aseguró la transición pacífica hacia el gobierno de Evo Morales."
        }
    },
    {
        "id": 65,
        "nombre": "Evo Morales Ayma",
        "periodo": "2006–2019",
        "partido": "Movimiento al Socialismo (MAS)",
        "categoria": ["siglo21", "civiles", "democracia", "indígena"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Evo_Morales_Ayma_%28cropped%29.jpg/250px-Evo_Morales_Ayma_%28cropped%29.jpg",
        "bio": "Primer presidente indígena de Bolivia, gobernó durante casi 14 años.",
        "detalle": {
            "fullPeriod": "22 de enero de 2006 - 10 de noviembre de 2019",
            "birth": "26 de octubre de 1959, Isallavi",
            "profession": "Político, sindicalista",
            "fullBio": "Evo Morales impulsó reformas sociales y nacionalizaciones de recursos naturales, fortaleciendo derechos indígenas. Su mandato terminó con controversia y renuncia tras denuncias de fraude electoral en 2019."
        }
    },
    {
        "id": 66,
        "nombre": "Jeanine Áñez Chávez",
        "periodo": "2019–2020",
        "partido": "Demócratas / Civil",
        "categoria": ["siglo21", "civiles", "transitorio", "mujer"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Jeanine_%C3%81%C3%B1ez_%28Official_Photo%2C_2019%29_Cropped_II.jpg/176px-Jeanine_%C3%81%C3%B1ez_%28Official_Photo%2C_2019%29_Cropped_II.jpg",
        "bio": "Presidenta interina que asumió tras la renuncia de Evo Morales.",
        "detalle": {
            "fullPeriod": "12 de noviembre de 2019 - 8 de noviembre de 2020",
            "birth": "13 de junio de 1967, Trinidad",
            "profession": "Política, abogada",
            "fullBio": "Jeanine Áñez asumió la presidencia interina en un contexto de crisis política tras la renuncia de Evo Morales. Su gobierno tuvo como misión convocar nuevas elecciones, enfrentando tensiones políticas y sociales."
        }
    },
    {
        "id": 67,
        "nombre": "Luis Arce Catacora",
        "periodo": "2020–presente",
        "partido": "Movimiento al Socialismo (MAS)",
        "categoria": ["siglo21", "civiles", "democracia"],
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Luis_Alberto_Arce_Catacora_%28Official_Portrait%2C_2020%29_Cropped_II.png/250px-Luis_Alberto_Arce_Catacora_%28Official_Portrait%2C_2020%29_Cropped_II.png",
        "bio": "Economista y presidente actual de Bolivia.",
        "detalle": {
            "fullPeriod": "8 de noviembre de 2020 - presente",
            "birth": "28 de septiembre de 1963, La Paz",
            "profession": "Político, economista",
            "fullBio": "Luis Arce, exministro de Economía de Evo Morales, asumió la presidencia tras ganar elecciones libres en 2020. Su gobierno ha estado enfocado en recuperación económica, manejo de la pandemia y políticas sociales."
        }
    }


    // ... (agregar los demás presidentes con la misma estructura)
];

// Variables globales
let currentTab = 'todos';
let currentPage = 1;
const presidentsPerPage = 8;

// Elementos del DOM
const tabsContainer = document.querySelector('.tabs');
const tabsContentContainer = document.getElementById('tabs-content-container');
const paginationContainer = document.getElementById('pagination-container');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchSuggestions = document.getElementById('searchSuggestions');
const modal = document.getElementById('presidente-modal');
const modalContent = document.querySelector('.modal-content');
const currentYearSpan = document.getElementById('current-year');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Establecer año actual en el footer
    currentYearSpan.textContent = new Date().getFullYear();

    // Cargar datos iniciales
    loadPresidents(currentTab);
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    // Pestañas
    tabsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-btn')) {
            currentTab = e.target.getAttribute('data-tab');
            currentPage = 1;
            loadPresidents(currentTab);

            // Actualizar estado activo de las pestañas
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    });

    // Búsqueda
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        } else {
            showSearchSuggestions();
        }
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Cargar presidentes según categoría
function loadPresidents(categoria) {
    let filteredPresidents = [];

    if (categoria === 'todos') {
        filteredPresidents = [...presidentsData];
    } else {
        filteredPresidents = presidentsData.filter(presidente =>
            presidente.categoria.includes(categoria)
        );
    }

    renderPresidentsGrid(filteredPresidents);
    renderPagination(filteredPresidents.length);
}

// Renderizar la cuadrícula de presidentes
function renderPresidentsGrid(presidents) {
    const startIndex = (currentPage - 1) * presidentsPerPage;
    const endIndex = startIndex + presidentsPerPage;
    const presidentsToShow = presidents.slice(startIndex, endIndex);

    let html = `<div id="${currentTab}" class="tab-content active"><div class="presidents-grid">`;

    presidentsToShow.forEach(presidente => {
        html += `
        <div class="presidente-card" onclick="openModal(${presidente.id})">
            <div class="presidente-imagen">
                <img src="${presidente.imagen}" alt="${presidente.nombre}" loading="lazy">
                <div class="presidente-periodo">${presidente.periodo}</div>
            </div>
            <div class="presidente-info">
                <h3 class="presidente-nombre">${presidente.nombre}</h3>
                <span class="presidente-partido">${presidente.partido}</span>
                <p class="presidente-bio">${presidente.bio}</p>
                <a href="#" class="read-more">Leer más <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
        `;
    });

    html += `</div></div>`;
    tabsContentContainer.innerHTML = html;
}

// Renderizar paginación
function renderPagination(totalPresidents) {
    const totalPages = Math.ceil(totalPresidents / presidentsPerPage);
    let html = '';

    if (totalPages > 1) {
        // Botón anterior
        html += `<button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" 
                 onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
                 <i class="fas fa-chevron-left"></i></button>`;

        // Páginas
        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" 
                     onclick="changePage(${i})">${i}</button>`;
        }

        // Botón siguiente
        html += `<button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" 
                 onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
                 <i class="fas fa-chevron-right"></i></button>`;
    }

    paginationContainer.innerHTML = html;
}

// Cambiar página
function changePage(page) {
    if (page < 1 || page > Math.ceil(presidentsData.length / presidentsPerPage)) return;

    currentPage = page;
    loadPresidents(currentTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Búsqueda de presidentes
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === '') {
        loadPresidents(currentTab);
        searchSuggestions.innerHTML = '';
        return;
    }

    const filteredPresidents = presidentsData.filter(presidente =>
        presidente.nombre.toLowerCase().includes(searchTerm) ||
        presidente.partido.toLowerCase().includes(searchTerm) ||
        presidente.periodo.toLowerCase().includes(searchTerm) ||
        presidente.bio.toLowerCase().includes(searchTerm)
    );

    renderPresidentsGrid(filteredPresidents);
    renderPagination(filteredPresidents.length);
    searchSuggestions.innerHTML = '';
}

// Mostrar sugerencias de búsqueda
function showSearchSuggestions() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === '') {
        searchSuggestions.innerHTML = '';
        return;
    }

    const suggestions = presidentsData.filter(presidente =>
        presidente.nombre.toLowerCase().includes(searchTerm) ||
        presidente.partido.toLowerCase().includes(searchTerm)
    ).slice(0, 5);

    let html = '';
    suggestions.forEach(presidente => {
        html += `<div class="suggestion-item" onclick="selectSuggestion('${presidente.nombre}')">
                 <i class="fas fa-search"></i> ${presidente.nombre} (${presidente.periodo})</div>`;
    });

    searchSuggestions.innerHTML = html;
}

// Seleccionar sugerencia
function selectSuggestion(nombre) {
    searchInput.value = nombre;
    performSearch();
}

// Abrir modal con detalles del presidente
function openModal(presidentId) {
    const presidente = presidentsData.find(p => p.id === presidentId);

    if (!presidente) return;

    const modalHtml = `
        <div class="modal-header">
            <h2>${presidente.nombre}</h2>
            <button class="close-modal" onclick="closeModal()">&times;</button>
        </div>
        <div class="modal-body">
            <div class="modal-imagen">
                <img src="${presidente.imagen.replace('220px', '800px')}" alt="${presidente.nombre}">
            </div>
            <div class="modal-info">
                <div class="presidente-detalle">
                    <div class="detail-item">
                        <span class="detail-label">Período:</span>
                        <span>${presidente.detalle.fullPeriod}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Nacimiento:</span>
                        <span>${presidente.detalle.birth}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Fallecimiento:</span>
                        <span>${presidente.detalle.death}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Profesión:</span>
                        <span>${presidente.detalle.profession}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Partido:</span>
                        <span>${presidente.partido}</span>
                    </div>
                </div>
                
                <h3>Biografía</h3>
                <div class="modal-bio">
                    <p>${presidente.detalle.fullBio}</p>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button onclick="closeModal()" class="modal-close-btn">Cerrar</button>
        </div>
    `;

    modalContent.innerHTML = modalHtml;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function loadPresidents(categoria) {
    let filteredPresidents = [];

    if (categoria === 'todos') {
        filteredPresidents = [...presidentsData];
    } else if (categoria === 'cronologico') {
        // Ordenar por año de inicio del período
        filteredPresidents = [...presidentsData].sort((a, b) => {
            const yearA = parseInt(a.periodo.split('–')[0]);
            const yearB = parseInt(b.periodo.split('–')[0]);
            return yearA - yearB;
        });
    } else {
        filteredPresidents = presidentsData.filter(presidente =>
            presidente.categoria.includes(categoria)
        );
    }

    if (categoria === 'cronologico') {
        renderTimeline(filteredPresidents);
    } else {
        renderPresidentsGrid(filteredPresidents);
    }
    renderPagination(filteredPresidents.length);
}

function renderTimeline(presidents) {
    const startIndex = (currentPage - 1) * presidentsPerPage;
    const endIndex = startIndex + presidentsPerPage;
    const presidentsToShow = presidents.slice(startIndex, endIndex);

    let html = `<div id="cronologico" class="tab-content active"><div class="timeline">`;

    presidentsToShow.forEach((presidente, index) => {
        const years = presidente.periodo.split('–');
        const startYear = years[0].trim();
        const endYear = years[1] ? years[1].trim() : '';

        html += `
        <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}" onclick="openModal(${presidente.id})">
            <div class="timeline-content">
                <div class="timeline-year">${startYear} - ${endYear}</div>
                <div class="timeline-card">
                    <div class="timeline-imagen">
                        <img src="${presidente.imagen}" alt="${presidente.nombre}" loading="lazy">
                    </div>
                    <div class="timeline-info">
                        <h3>${presidente.nombre}</h3>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    html += `</div></div>`;
    tabsContentContainer.innerHTML = html;
}

// Cerrar modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Hacer funciones accesibles globalmente
window.openModal = openModal;
window.closeModal = closeModal;
window.changePage = changePage;
window.selectSuggestion = selectSuggestion;
