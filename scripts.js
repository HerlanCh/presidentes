// Datos de los presidentes (podrían cargarse desde una API)
const presidentsData = [
    {
        "id": 1,
        "name": "Simón Bolívar",
        "period": "1825",
        "party": "Independentista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sim%C3%B3n_Bol%C3%ADvar._Toro_Moreno%2C_Luis._1922%2C_Legislative_Palace%2C_La_Paz.png/330px-Sim%C3%B3n_Bol%C3%ADvar._Toro_Moreno%2C_Luis._1922%2C_Legislative_Palace%2C_La_Paz.png",
        "bio": "Libertador de Bolivia y primer presidente, aunque brevemente. Delegó el mando a Sucre.",
        "details": {
            "fullPeriod": "12 de agosto de 1825 - 29 de diciembre de 1825",
            "birth": "24 de julio de 1783, Caracas, Venezuela",
            "death": "17 de diciembre de 1830 (47 años), Santa Marta, Colombia",
            "profession": "Militar, político",
            "fullBio": "Simón Bolívar fue el principal líder de la independencia sudamericana, conocido como El Libertador. En 1825 fue proclamado presidente provisional de Bolivia tras la independencia, aunque no ejerció el cargo plenamente, delegando el mando al general Antonio José de Sucre. Su visión política y militar sentó las bases para la formación de Bolivia como república."
        }
    },
    {
        "id": 2,
        "name": "Antonio José de Sucre",
        "period": "1826 - 1828",
        "party": "Independentista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Martin_Tovar_y_Tovar_12.JPG/330px-Martin_Tovar_y_Tovar_12.JPG",
        "bio": "Sucre fue el segundo presidente de Bolivia y colaborador cercano de Bolívar. Promovió la organización del Estado boliviano y fue fundamental en su consolidación.",
        "details": {
            "fullPeriod": "29 de diciembre de 1825 - 18 de abril de 1828",
            "birth": "3 de febrero de 1795, Cumaná, Venezuela",
            "death": "4 de junio de 1830 (35 años), Berruecos, Colombia",
            "profession": "Militar, político",
            "fullBio": "Antonio José de Sucre fue un militar y político venezolano, líder clave en la independencia de varios países sudamericanos. Como primer presidente constitucional de Bolivia, estableció las bases institucionales del nuevo Estado, impulsó la educación y la organización republicana. Su mandato enfrentó conflictos internos y conspiraciones que forzaron su renuncia."
        }
    },
    {
        "id": 3,
        "name": "José María Pérez de Urdininea",
        "period": "1828",
        "party": "Independentista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/03_-_Jos%C3%A9_Mar%C3%ADa_P%C3%A9rez_de_Urdininea_%28CROPPED%29.png/250px-03_-_Jos%C3%A9_Mar%C3%ADa_P%C3%A9rez_de_Urdininea_%28CROPPED%29.png",
        "bio": "Gobernó interinamente durante breves meses en 1828.",
        "details": {
            "fullPeriod": "18 de abril de 1828 - 2 de agosto de 1828",
            "birth": "31 de octubre de 1784, Luribay, La Paz",
            "death": "4 de noviembre de 1865 (81 años), La Paz, Bolivia",
            "profession": "Militar, político",
            "fullBio": "José María Pérez de Urdininea fue un militar y político boliviano que asumió la presidencia interina en un periodo de inestabilidad política. Su gobierno fue breve y se centró en mantener el orden mientras se buscaba un presidente constitucional. Participó activamente en las guerras de independencia y en la consolidación inicial del país."
        }
    },
    {
        "id": 4,
        "name": "José Miguel de Velasco Franco",
        "period": "Varias veces: 1828, 1829, 1839–1841, 1848",
        "party": "Independentista",
        "category": ["siglo19", "militares", "políticos"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/04c_-_Jos%C3%A9_Miguel_de_Velasco_%28CROPPED%29.png/330px-04c_-_Jos%C3%A9_Miguel_de_Velasco_%28CROPPED%29.png",
        "bio": "Presidente en varias ocasiones, enfrentó crisis políticas y golpes de Estado.",
        "details": {
            "fullPeriod": "Diversos periodos: 1828, 1829, 1839–1841, 1848",
            "birth": "22 de diciembre de 1795, La Paz",
            "death": "7 de abril de 1859 (63 años), La Paz, Bolivia",
            "profession": "Militar, político",
            "fullBio": "José Miguel de Velasco fue un militar y político que desempeñó la presidencia de Bolivia en varias ocasiones durante tiempos turbulentos. Su liderazgo se caracterizó por esfuerzos por estabilizar la república frente a golpes de Estado y rebeliones internas, siendo una figura clave en la política boliviana de la primera mitad del siglo XIX."
        }
    },
    {
        "id": 5,
        "name": "Pedro Blanco Soto",
        "period": "1828–1829",
        "party": "Independentista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pedro_Blanco_Soto.jpg/180px-Pedro_Blanco_Soto.jpg",
        "bio": "Breve presidencia, asesinado tras un golpe militar.",
        "details": {
            "fullPeriod": "26 de diciembre de 1828 - 1 de enero de 1829",
            "birth": "13 de marzo de 1795, La Paz",
            "death": "1 de enero de 1829 (33 años), La Paz, Bolivia",
            "profession": "Militar, político",
            "fullBio": "Pedro Blanco Soto tuvo una breve y trágica presidencia en Bolivia. Fue designado presidente en un periodo de inestabilidad y fue asesinado durante un golpe militar solo unos días después de asumir el poder, siendo una de las primeras víctimas políticas de la joven república."
        }
    },
    {
        "id": 6,
        "name": "Andrés de Santa Cruz",
        "period": "1829–1839",
        "party": "Independentista",
        "category": ["siglo19", "militares", "políticos"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/06_-_Andr%C3%A9s_de_Santa_Cruz_%28CROPPED%29.png/250px-06_-_Andr%C3%A9s_de_Santa_Cruz_%28CROPPED%29.png",
        "bio": "Figura clave en la historia de Bolivia y Perú, impulsor de la Confederación Perú-Boliviana.",
        "details": {
            "fullPeriod": "24 de mayo de 1829 - 20 de febrero de 1839",
            "birth": "30 de noviembre de 1792, La Paz, Bolivia",
            "death": "25 de septiembre de 1865 (72 años), Valparaíso, Chile",
            "profession": "Militar, político",
            "fullBio": "Andrés de Santa Cruz fue un militar y estadista boliviano que ejerció la presidencia durante una década. Fue el principal artífice de la Confederación Perú-Boliviana, un proyecto que buscaba unir ambos países para fortalecer la región. Su gobierno se destacó por reformas internas y el impulso a la integración, aunque enfrentó oposición y guerras que llevaron al fin de la Confederación."
        }
    },
    {
        "id": 7,
        "name": "Sebastián Ágreda",
        "period": "1841",
        "party": "Independentista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/07_-_Sebasti%C3%A1n_%C3%81greda_%28CROPPED%29.png/250px-07_-_Sebasti%C3%A1n_%C3%81greda_%28CROPPED%29.png",
        "bio": "Presidente interino tras la renuncia de Santa Cruz, breve mandato en 1841.",
        "details": {
            "fullPeriod": "20 de febrero de 1841 - 9 de junio de 1841",
            "birth": "1795, Chuquisaca",
            "death": "1875, Bolivia",
            "profession": "Militar, político",
            "fullBio": "Sebastián Ágreda fue un general boliviano que asumió la presidencia interina tras la renuncia de Andrés de Santa Cruz. Su mandato fue corto y se enfocó en mantener la estabilidad política mientras se convocaba a una nueva autoridad legítima. Fue una figura respetada por su trayectoria militar y compromiso con el país."
        }
    },
    {
        "id": 8,
        "name": "Mariano Enrique Calvo",
        "period": "1841",
        "party": "Independentista",
        "category": ["siglo19", "políticos"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mariano_Calvo.jpg/180px-Mariano_Calvo.jpg",
        "bio": "Presidente interino tras Sebastián Ágreda, breve periodo en 1841.",
        "details": {
            "fullPeriod": "9 de junio de 1841 - 22 de septiembre de 1841",
            "birth": "1782, La Paz",
            "death": "1842, La Paz",
            "profession": "Político, abogado",
            "fullBio": "Mariano Enrique Calvo fue un político y abogado que ejerció la presidencia interina durante pocos meses en 1841, tras la presidencia interina de Sebastián Ágreda. Su mandato sirvió para mantener el orden hasta la llegada de José Ballivián, quien asumiría el liderazgo político del país."
        }
    },
    {
        "id": 9,
        "name": "José Ballivián",
        "period": "1841–1847",
        "party": "Independentista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Jos%C3%A9_Ballivi%C3%A1n.jpg/250px-Jos%C3%A9_Ballivi%C3%A1n.jpg",
        "bio": "Presidente y general que defendió la soberanía boliviana y promovió el desarrollo.",
        "details": {
            "fullPeriod": "22 de septiembre de 1841 - 2 de febrero de 1847",
            "birth": "5 de julio de 1805, La Paz",
            "death": "22 de febrero de 1852 (46 años), Lima, Perú",
            "profession": "Militar, político",
            "fullBio": "José Ballivián fue un destacado militar y presidente boliviano conocido por su victoria en la Batalla de Ingavi, que reafirmó la soberanía boliviana frente a Perú. Durante su mandato promovió la defensa del territorio, reformas militares y el fortalecimiento del Estado. Su gobierno consolidó la estabilidad tras años de conflicto."
        }
    },
    {
        "id": 10,
        "name": "Eusebio Guilarte Vera",
        "period": "1847–1848",
        "party": "Independentista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eusebio_Guilarte_Vera_-_bolivianischer_Pr%C3%A4sident.jpg/180px-Eusebio_Guilarte_Vera_-_bolivianischer_Pr%C3%A4sident.jpg",
        "bio": "Presidente interino, su mandato fue breve y terminó con un golpe de Estado.",
        "details": {
            "fullPeriod": "2 de febrero de 1847 - 12 de diciembre de 1848",
            "birth": "1805, Bolivia",
            "death": "1849, Bolivia",
            "profession": "Militar",
            "fullBio": "Eusebio Guilarte Vera fue un militar que asumió la presidencia interina tras la renuncia de José Ballivián. Su gobierno fue breve y marcado por inestabilidad política, terminando con un golpe de Estado que llevó a Manuel Isidoro Belzu al poder."
        }
    },
    {
        "id": 11,
        "name": "Manuel Isidoro Belzu",
        "period": "1848–1855",
        "party": "Independentista",
        "category": ["siglo19", "militares", "populistas"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/ManuelIsidoroBelzu.jpg/180px-ManuelIsidoroBelzu.jpg",
        "bio": "General y político, fundador de una corriente populista en Bolivia.",
        "details": {
            "fullPeriod": "12 de diciembre de 1848 - 15 de agosto de 1855",
            "birth": "4 de marzo de 1808, La Paz",
            "death": "27 de marzo de 1865 (57 años), La Paz",
            "profession": "Militar, político",
            "fullBio": "Manuel Isidoro Belzu fue un militar y político que gobernó Bolivia con una política populista orientada a los sectores indígenas y populares. Su gobierno estuvo marcado por la defensa de la soberanía nacional y reformas sociales para apoyar a los sectores menos favorecidos. Fue un líder carismático que enfrentó la oposición de las élites conservadoras y dejó un legado de cambio político importante."
        }
    },
    {
        "id": 12,
        "name": "Jorge Córdova",
        "period": "1855–1857",
        "party": "Independentista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Jorge-cordova.jpg/180px-Jorge-cordova.jpg",
        "bio": "Militar y presidente, su mandato terminó abruptamente por una revuelta.",
        "details": {
            "fullPeriod": "15 de agosto de 1855 - 9 de septiembre de 1857",
            "birth": "1822, La Paz",
            "death": "1862, Bolivia",
            "profession": "Militar, político",
            "fullBio": "Jorge Córdova fue un militar que llegó a la presidencia en medio de tensiones políticas. Su gobierno enfrentó resistencia y terminó con un levantamiento que lo derrocó. Su mandato es recordado como un periodo de inestabilidad tras la era de Belzu."
        }
    },
    {
        "id": 13,
        "name": "José María Linares",
        "period": "1857–1861",
        "party": "Independentista",
        "category": ["siglo19", "políticos"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Jos%C3%A9_Mar%C3%ADa_Linares.jpg/250px-Jos%C3%A9_Mar%C3%ADa_Linares.jpg",
        "bio": "Dictador que promovió la modernización y centralización del Estado.",
        "details": {
            "fullPeriod": "9 de septiembre de 1857 - 14 de enero de 1861",
            "birth": "1808, Potosí",
            "death": "1861, Chile",
            "profession": "Político, escritor",
            "fullBio": "José María Linares fue un político y dictador que implementó reformas para modernizar y centralizar Bolivia. Durante su gobierno, buscó fortalecer el poder ejecutivo y mejorar la administración pública. Sin embargo, su mandato terminó con un golpe de Estado que lo obligó al exilio."
        }
    },
    {
        "id": 14,
        "name": "José María de Achá",
        "period": "1861–1864",
        "party": "Independentista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/JoseMariaAcha.jpg/180px-JoseMariaAcha.jpg",
        "bio": "Militar y presidente, enfrentó conflictos internos y la guerra civil.",
        "details": {
            "fullPeriod": "14 de enero de 1861 - 28 de diciembre de 1864",
            "birth": "1810, Tarija",
            "death": "1868, Bolivia",
            "profession": "Militar, político",
            "fullBio": "José María de Achá fue un militar que asumió la presidencia en una época marcada por conflictos internos y luchas por el poder. Durante su gobierno enfrentó una guerra civil que debilitó su autoridad y condujo a su derrocamiento. A pesar de esto, intentó mantener el orden y preservar la unidad del país."
        }
    },
    {
        "id": 15,
        "name": "Mariano Melgarejo",
        "period": "1864–1871",
        "party": "Independentista",
        "category": ["siglo19", "dictadores"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/MarianoMelgarejo.jpg/180px-MarianoMelgarejo.jpg",
        "bio": "Dictador polémico, conocido por su gobierno autoritario y controvertido.",
        "details": {
            "fullPeriod": "28 de diciembre de 1864 - 15 de enero de 1871",
            "birth": "1820, Tarata",
            "death": "1871, Chile",
            "profession": "Militar, dictador",
            "fullBio": "Mariano Melgarejo fue uno de los dictadores más polémicos de Bolivia, conocido por su gobierno autoritario, actos arbitrarios y mala reputación entre la población. Su mandato estuvo marcado por la represión, corrupción y entrega de territorios. Fue finalmente derrocado y exiliado, dejando un legado negativo en la historia boliviana."
        }
    },
    {
        "id": 16,
        "name": "Agustín Morales",
        "period": "1871–1872",
        "party": "Independentista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/AGUST_N_MORALES_HERN_NDEZ.jpg/180px-AGUST_N_MORALES_HERN_NDEZ.jpg",
        "bio": "Militar que asumió la presidencia tras derrocar a Melgarejo.",
        "details": {
            "fullPeriod": "15 de enero de 1871 - 27 de noviembre de 1872",
            "birth": "18 de diciembre de 1808, La Paz",
            "death": "27 de noviembre de 1872 (63 años), La Paz",
            "profession": "Militar, político",
            "fullBio": "Agustín Morales fue un militar que tomó el poder tras un golpe de Estado contra Mariano Melgarejo. Durante su breve gobierno intentó estabilizar la situación política y controlar la influencia de grupos opositores. Su mandato terminó abruptamente cuando fue asesinado por un miembro de su guardia personal."
        }
    },
    {
        "id": 17,
        "name": "Tomás Frías Ametller",
        "period": "1872–1873, 1874–1876",
        "party": "Independentista",
        "category": ["siglo19", "políticos"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/AGUST_N_MORALES_HERN_NDEZ.jpg/180px-AGUST_N_MORALES_HERN_NDEZ.jpg",
        "bio": "Político y estadista que asumió la presidencia en dos períodos.",
        "details": {
            "fullPeriod": "28 de noviembre de 1872 - 4 de mayo de 1873; 28 de febrero de 1874 - 11 de mayo de 1876",
            "birth": "21 de octubre de 1804, Potosí",
            "death": "10 de diciembre de 1884 (80 años), Sucre",
            "profession": "Abogado, político",
            "fullBio": "Tomás Frías fue un abogado y político que asumió la presidencia en dos ocasiones, ambas en momentos de crisis. Fue conocido por su rectitud y compromiso con la legalidad, intentando estabilizar al país después de periodos turbulentos. Promovió reformas judiciales y administrativas para fortalecer el Estado."
        }
    },
    {
        "id": 18,
        "name": "Adolfo Ballivián",
        "period": "1873–1874",
        "party": "Independentista",
        "category": ["siglo19", "políticos"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ADOLFO_BALLIVI_N_COLL.jpg/180px-ADOLFO_BALLIVI_N_COLL.jpg",
        "bio": "Presidente joven y reformista, su mandato fue breve por enfermedad.",
        "details": {
            "fullPeriod": "4 de mayo de 1873 - 14 de febrero de 1874",
            "birth": "Ballivián, Bolivia, 1831",
            "death": "1874, Sucre",
            "profession": "Militar, político",
            "fullBio": "Adolfo Ballivián fue un joven militar y político que asumió la presidencia con un espíritu reformista y modernizador. Su gobierno buscó impulsar la educación y mejorar la infraestructura, pero su mandato fue interrumpido por una enfermedad que causó su muerte prematura."
        }
    },
    {
        "id": 19,
        "name": "Hilarión Daza",
        "period": "1876–1879",
        "party": "Independentista",
        "category": ["siglo19", "militares"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/HILARI%C3%93N_DAZA_GROSELLE.jpg/180px-HILARI%C3%93N_DAZA_GROSELLE.jpg",
        "bio": "Dictador militar, su mandato terminó con la Guerra del Pacífico.",
        "details": {
            "fullPeriod": "28 de mayo de 1876 - 28 de diciembre de 1879",
            "birth": "January 1, 1840, La Paz",
            "death": "1894, Chile",
            "profession": "Militar, dictador",
            "fullBio": "Hilarión Daza fue un militar que llegó al poder mediante un golpe de Estado. Su mandato autoritario estuvo marcado por controversias y la preparación para la Guerra del Pacífico. Fue depuesto debido a su manejo polémico del conflicto y exiliado. Su gobierno afectó profundamente la estabilidad de Bolivia."
        }
    },
    {
        "id": 20,
        "name": "Narciso Campero",
        "period": "1880–1884",
        "party": "Independentista",
        "category": ["siglo19", "militares", "políticos"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/NARCISO_CAMPERO_LEYES.jpg/180px-NARCISO_CAMPERO_LEYES.jpg",
        "bio": "Militar y político que dirigió Bolivia tras la Guerra del Pacífico.",
        "details": {
            "fullPeriod": "28 de diciembre de 1880 - 4 de septiembre de 1884",
            "birth": "29 de enero de 1813, Tarija",
            "death": "1896, Bolivia",
            "profession": "Militar, político",
            "fullBio": "Narciso Campero fue un militar y político que asumió la presidencia en el periodo posterior a la Guerra del Pacífico, intentando reconstruir el país tras la pérdida de territorios. Su gobierno se centró en la recuperación económica y la estabilización política, enfrentando grandes desafíos internos y externos."
        }
    },
    {
        "id": 21,
        "name": "Gregorio Pacheco",
        "period": "1884–1888",
        "party": "Independentista",
        "category": ["siglo19", "civiles"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/GREGORIO_PACHECO_LEYES.jpg/180px-GREGORIO_PACHECO_LEYES.jpg",
        "bio": "Empresario y político, su gobierno se destacó por obras públicas y estabilidad económica.",
        "details": {
            "fullPeriod": "4 de septiembre de 1884 - 15 de agosto de 1888",
            "birth": "4 de noviembre de 1823, Potosí",
            "death": "16 de septiembre de 1899, Sucre",
            "profession": "Empresario, político",
            "fullBio": "Gregorio Pacheco fue un empresario que se convirtió en presidente, aportando su experiencia para modernizar la economía boliviana. Durante su gobierno impulsó la construcción de ferrocarriles, escuelas y obras públicas, y promovió la estabilidad política tras años de conflictos."
        }
    },
    {
        "id": 22,
        "name": "Aniceto Arce",
        "period": "1888–1892",
        "party": "Conservador",
        "category": ["siglo19", "civiles"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Aniceto_Arce.jpg/180px-Aniceto_Arce.jpg",
        "bio": "Presidente conservador, promovió la minería y el ferrocarril.",
        "details": {
            "fullPeriod": "15 de agosto de 1888 - 11 de agosto de 1892",
            "birth": "15 de abril de 1824, Sucre",
            "death": "14 de abril de 1906, Sucre",
            "profession": "Abogado, político",
            "fullBio": "Aniceto Arce fue un político y abogado que impulsó el desarrollo económico basado en la minería y la construcción de ferrocarriles para conectar Bolivia con puertos en el Pacífico. Su gobierno fortaleció el sistema conservador y promovió la inversión extranjera."
        }
    },
    {
        "id": 23,
        "name": "Mariano Baptista",
        "period": "1892–1896",
        "party": "Conservador",
        "category": ["siglo19", "civiles"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mariano_Baptista_Caserta.jpg/180px-Mariano_Baptista_Caserta.jpg",
        "bio": "Conservador, trabajó en fortalecer la diplomacia y modernización del país.",
        "details": {
            "fullPeriod": "11 de agosto de 1892 - 19 de agosto de 1896",
            "birth": "27 de junio de 1832, La Paz",
            "death": "19 de agosto de 1907, Sucre",
            "profession": "Abogado, político",
            "fullBio": "Mariano Baptista fue un político conservador que durante su gobierno buscó estabilizar las relaciones internacionales y promover reformas administrativas. Fue clave en la consolidación del sistema político conservador y en el fortalecimiento de la educación y la infraestructura."
        }
    },
    {
        "id": 24,
        "name": "Severo Fernández Alonso",
        "period": "1896–1899",
        "party": "Conservador",
        "category": ["siglo19", "civiles"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/SEVERO_FERN%C3%81NDEZ_ALONSO_CABALLERO.jpg/180px-SEVERO_FERN%C3%81NDEZ_ALONSO_CABALLERO.jpg",
        "bio": "Presidente conservador, su gobierno terminó con la Revolución Federalista.",
        "details": {
            "fullPeriod": "19 de agosto de 1896 - 12 de abril de 1899",
            "birth": "29 de noviembre de 1857, La Paz",
            "death": "1920, La Paz",
            "profession": "Político",
            "fullBio": "Severo Fernández asumió la presidencia en un momento de gran conflicto político. Su gobierno fue marcado por la oposición creciente que desembocó en la Revolución Federalista, que terminó con el dominio conservador y su destitución. Fue un periodo de profunda crisis institucional."
        }
    },
    {
        "id": 25,
        "name": "José Manuel Pando",
        "period": "1899–1904",
        "party": "Liberal",
        "category": ["siglo19", "militares", "civiles"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/25_-_Jos%C3%A9_Manuel_Pando_%28CROPPED%29.png/250px-25_-_Jos%C3%A9_Manuel_Pando_%28CROPPED%29.png",
        "bio": "Militar y líder liberal que encabezó la Revolución Federalista y modernizó el país.",
        "details": {
            "fullPeriod": "12 de abril de 1899 - 14 de agosto de 1904",
            "birth": "27 de julio de 1849, La Paz",
            "death": "1917, La Paz",
            "profession": "Militar, político",
            "fullBio": "José Manuel Pando fue un militar y político que lideró la Revolución Federalista contra el régimen conservador. Su gobierno liberal implementó reformas sociales, modernizó la administración pública y promovió la integración nacional y el desarrollo económico, especialmente en el área ferroviaria."
        }
    },
    {
        "id": 26,
        "name": "Ismael Montes",
        "period": "1904–1909, 1913–1917",
        "party": "Liberal",
        "category": ["siglo20", "militares", "políticos"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/26_-_Ismael_Montes_%28CROPPED%29.png/250px-26_-_Ismael_Montes_%28CROPPED%29.png",
        "bio": "Dos veces presidente liberal, modernizó la infraestructura y promovió la educación.",
        "details": {
            "fullPeriod": "14 de agosto de 1904 - 12 de agosto de 1909; 14 de agosto de 1913 - 15 de agosto de 1917",
            "birth": "8 de octubre de 1861, La Paz",
            "death": "16 de noviembre de 1933, La Paz",
            "profession": "Militar, político",
            "fullBio": "Ismael Montes fue un militar y político liberal que gobernó Bolivia en dos periodos. Durante su primer mandato, se enfocó en consolidar la pacificación tras la Guerra del Pacífico y en desarrollar la infraestructura ferroviaria y educativa. En su segundo mandato, continuó con la modernización del Estado y promovió reformas sociales y económicas."
        }
    },
    {
        "id": 27,
        "name": "Eliodoro Villazón",
        "period": "1909–1913",
        "party": "Liberal",
        "category": ["siglo20", "civiles"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Eliodoro_Villaz%C3%B3n_con_banda_presidencial.jpg/180px-Eliodoro_Villaz%C3%B3n_con_banda_presidencial.jpg",
        "bio": "Presidente liberal, su gobierno continuó con la estabilidad y desarrollo económico.",
        "details": {
            "fullPeriod": "12 de agosto de 1909 - 14 de agosto de 1913",
            "birth": "22 de noviembre de 1848, La Paz",
            "death": "12 de julio de 1939, La Paz",
            "profession": "Abogado, político",
            "fullBio": "Eliodoro Villazón fue un abogado y político que asumió la presidencia continuando el proyecto liberal. Su gobierno estuvo marcado por la estabilidad política, la promoción del desarrollo económico y la atención en la educación y la justicia, manteniendo la paz social y las relaciones internacionales."
        }
    },
    {
        "id": 28,
        "name": "José Gutiérrez Guerra",
        "period": "1917–1920",
        "party": "Liberal",
        "category": ["siglo20", "civiles"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Jos%C3%A9_Guti%C3%A9rrez_Guerra._Bazoberri%2C_Luis_%28Photo%29._c._1916%2C_C%C3%ADrculo_Militar%2C_La_Paz.png/250px-Jos%C3%A9_Guti%C3%A9rrez_Guerra._Bazoberri%2C_Luis_%28Photo%29._c._1916%2C_C%C3%ADrculo_Militar%2C_La_Paz.png",
        "bio": "Último presidente liberal antes de la crisis, enfrentó problemas económicos y sociales.",
        "details": {
            "fullPeriod": "15 de agosto de 1917 - 12 de julio de 1920",
            "birth": "29 de diciembre de 1869, Sucre",
            "death": "23 de enero de 1929, Sucre",
            "profession": "Economista, político",
            "fullBio": "José Gutiérrez Guerra fue un economista y político que enfrentó una época de crisis económica y social. Su gobierno liberal trató de mantener la estabilidad, pero la oposición creció debido a problemas financieros y sociales, lo que llevó a su derrocamiento por un golpe de estado."
        }
    },
    {
        "id": 29,
        "name": "Bautista Saavedra",
        "period": "1920–1925",
        "party": "Republicano",
        "category": ["siglo20", "civiles"],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/29b_-_Bautista_Saavedra.png/250px-29b_-_Bautista_Saavedra.png",
        "bio": "Líder del Partido Republicano, su gobierno abrió una nueva era política en Bolivia.",
        "details": {
            "fullPeriod": "12 de julio de 1920 - 3 de septiembre de 1925",
            "birth": "30 de enero de 1870, La Paz",
            "death": "1 de enero de 1939, La Paz",
            "profession": "Abogado, político",
            "fullBio": "Bautista Saavedra fue un líder del Partido Republicano que asumió la presidencia tras un golpe de estado que marcó el fin del dominio liberal. Su gobierno inició reformas políticas importantes, fortaleció el poder ejecutivo y promovió cambios sociales que influyeron en la política boliviana durante las siguientes décadas."
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
const modal = document.getElementById('president-modal');
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
function loadPresidents(category) {
    let filteredPresidents = [];

    if (category === 'todos') {
        filteredPresidents = [...presidentsData];
    } else {
        filteredPresidents = presidentsData.filter(president =>
            president.category.includes(category)
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

    presidentsToShow.forEach(president => {
        html += `
        <div class="president-card" onclick="openModal(${president.id})">
            <div class="president-image">
                <img src="${president.image}" alt="${president.name}" loading="lazy">
                <div class="president-period">${president.period}</div>
            </div>
            <div class="president-info">
                <h3 class="president-name">${president.name}</h3>
                <span class="president-party">${president.party}</span>
                <p class="president-bio">${president.bio}</p>
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

    const filteredPresidents = presidentsData.filter(president =>
        president.name.toLowerCase().includes(searchTerm) ||
        president.party.toLowerCase().includes(searchTerm) ||
        president.period.toLowerCase().includes(searchTerm) ||
        president.bio.toLowerCase().includes(searchTerm)
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

    const suggestions = presidentsData.filter(president =>
        president.name.toLowerCase().includes(searchTerm) ||
        president.party.toLowerCase().includes(searchTerm)
    ).slice(0, 5);

    let html = '';
    suggestions.forEach(president => {
        html += `<div class="suggestion-item" onclick="selectSuggestion('${president.name}')">
                 <i class="fas fa-search"></i> ${president.name} (${president.period})</div>`;
    });

    searchSuggestions.innerHTML = html;
}

// Seleccionar sugerencia
function selectSuggestion(name) {
    searchInput.value = name;
    performSearch();
}

// Abrir modal con detalles del presidente
function openModal(presidentId) {
    const president = presidentsData.find(p => p.id === presidentId);

    if (!president) return;

    const modalHtml = `
        <div class="modal-header">
            <h2>${president.name}</h2>
            <button class="close-modal" onclick="closeModal()">&times;</button>
        </div>
        <div class="modal-body">
            <div class="modal-image">
                <img src="${president.image.replace('220px', '800px')}" alt="${president.name}">
            </div>
            <div class="modal-info">
                <div class="president-details">
                    <div class="detail-item">
                        <span class="detail-label">Período:</span>
                        <span>${president.details.fullPeriod}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Nacimiento:</span>
                        <span>${president.details.birth}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Fallecimiento:</span>
                        <span>${president.details.death}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Profesión:</span>
                        <span>${president.details.profession}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Partido:</span>
                        <span>${president.party}</span>
                    </div>
                </div>
                
                <h3>Biografía</h3>
                <div class="modal-bio">
                    <p>${president.details.fullBio}</p>
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

function loadPresidents(category) {
    let filteredPresidents = [];

    if (category === 'todos') {
        filteredPresidents = [...presidentsData];
    } else if (category === 'cronologico') {
        // Ordenar por año de inicio del período
        filteredPresidents = [...presidentsData].sort((a, b) => {
            const yearA = parseInt(a.period.split('–')[0]);
            const yearB = parseInt(b.period.split('–')[0]);
            return yearA - yearB;
        });
    } else {
        filteredPresidents = presidentsData.filter(president =>
            president.category.includes(category)
        );
    }

    if (category === 'cronologico') {
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

    presidentsToShow.forEach((president, index) => {
        const years = president.period.split('–');
        const startYear = years[0].trim();
        const endYear = years[1] ? years[1].trim() : 'Presente';
        
        html += `
        <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}" onclick="openModal(${president.id})">
            <div class="timeline-content">
                <div class="timeline-year">${startYear} - ${endYear}</div>
                <div class="timeline-card">
                    <div class="timeline-image">
                        <img src="${president.image}" alt="${president.name}" loading="lazy">
                    </div>
                    <div class="timeline-info">
                        <h3>${president.name}</h3>
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
