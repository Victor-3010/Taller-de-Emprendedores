// ============================================
// BASE DE DATOS DE LIBROS
// ============================================
const librosLocales = [
    {
        id: 1,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        imagen: "https://covers.openlibrary.org/b/id/8739161-L.jpg",
        paginas: 15,
        genero: "Clásico",
        descripcion: "Las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza.",
        contenido: [
            "<h3>Capítulo I</h3><p>En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.</p><p>Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.</p>",
            "<h3>Capítulo II</h3><p>Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza.</p><p>Quieren decir que tenía el sobrenombre de Quijada o Quesada, que en esto hay alguna diferencia en los autores que deste caso escriben.</p>",
            "<h3>Capítulo III</h3><p>Llenósele la fantasía de todo aquello que leía en los libros, así de encantamentos como de pendencias, batallas, desafíos, heridas, requiebros, amores, tormentas y disparates imposibles.</p>",
            "<h3>Capítulo IV</h3><p>En efecto, rematado ya su juicio, vino a dar en el más extraño pensamiento que jamás dio loco en el mundo: hacerse caballero andante.</p>",
            "<h3>Capítulo V</h3><p>Pensó en darle un nombre a su rocín, y después de cuatro días, vino a llamarle Rocinante, nombre, a su parecer, alto, sonoro y significativo.</p>",
            "<h3>Capítulo VI</h3><p>Buscó una dama de quien enamorarse, porque el caballero andante sin amores era árbol sin hojas y sin fruto.</p>",
            "<h3>Capítulo VII</h3><p>A ésta le pareció ser bien darle título de señora de sus pensamientos; y vino a llamarla Dulcinea del Toboso.</p>",
            "<h3>Capítulo VIII — Los molinos de viento</h3><p>En esto, descubrieron treinta o cuarenta molinos de viento que hay en aquel campo, y así como Don Quijote los vio, dijo a su escudero: La ventura va guiando nuestras cosas mejor de lo que acertáramos a desear.</p>",
            "<h3>Capítulo IX</h3><p>¿No ves tú, Sancho, que aquellos son gigantes? No son gigantes, sino molinos de viento, respondió Sancho. Y el que no lo ve así, es porque no entiende de estas aventuras.</p>",
            "<h3>Capítulo X</h3><p>Don Quijote arremetió a todo galope contra el primer molino que estaba delante, dando una lanzada en el aspa, la cual, dando vuelta con gran furia, hizo la lanza pedazos.</p>",
            "<h3>Capítulo XI</h3><p>Sancho Panza fue donde había caído su señor, y cuando llegó le halló que no se podía mover, tal fue el golpe que dio con él Rocinante.</p>",
            "<h3>Capítulo XII</h3><p>Válame Dios, dijo Sancho, ¿no le dije yo a vuestra merced que mirase bien lo que hacía, que no eran sino molinos de viento?</p>",
            "<h3>Capítulo XIII</h3><p>Calla, amigo Sancho, respondió Don Quijote, que las cosas de la guerra, más que otras, están sujetas a continua mudanza.</p>",
            "<h3>Capítulo XIV</h3><p>Así es la verdad, dijo Sancho Panza; mas sé decir que desde que soy escudero de vuestra merced jamás he tenido buena hora.</p>",
            "<h3>FIN</h3><p>¡Has completado Don Quijote de la Mancha! La obra cumbre de la literatura española, considerada la primera novela moderna del mundo.</p><p><em>\"La pluma es la lengua del alma.\"</em> — Miguel de Cervantes</p>"
        ]
    },
    {
        id: 2,
        titulo: "Romeo y Julieta",
        autor: "William Shakespeare",
        imagen: "https://covers.openlibrary.org/b/id/8739505-L.jpg",
        paginas: 12,
        genero: "Teatro",
        descripcion: "La más famosa historia de amor entre dos jóvenes de familias enemigas en Verona.",
        contenido: [
            "<h3>Acto I — Escena I</h3><p>Verona. Una plaza pública. Dos casas rivales, los Montesco y los Capuleto, llevan años en una enemistad mortal que tiene dividida a toda la ciudad.</p>",
            "<h3>Acto I — Escena II</h3><p>Romeo Montesco, joven apasionado, está enamorado de Rosalina. Su amigo Benvolio lo convence de ir a la fiesta de los Capuleto para olvidarla.</p>",
            "<h3>Acto I — El encuentro</h3><p>En el gran salón de los Capuleto, Romeo ve a Julieta por primera vez. Sus ojos se encuentran y el mundo desaparece. <em>\"¿Enseñó la antorcha a brillar a su alrededor?\"</em></p>",
            "<h3>Acto I — El descubrimiento</h3><p>Julieta descubre que el joven del que se ha enamorado es Romeo Montesco. <em>\"Mi único amor, nacido de mi único odio.\"</em></p>",
            "<h3>Acto II — El balcón</h3><p>Romeo escala hasta el jardín. Julieta aparece en su balcón sin saber que él la observa. <em>\"¡Ah, Romeo, Romeo! ¿Por qué eres tú Romeo?\"</em></p>",
            "<h3>Acto II — El matrimonio</h3><p>Con la ayuda del Fray Lorenzo, Romeo y Julieta se casan en secreto al día siguiente.</p>",
            "<h3>Acto III — La tragedia</h3><p>Tybalt mata a Mercutio. Romeo venga a su amigo matando a Tybalt y es desterrado de Verona.</p>",
            "<h3>Acto III — La despedida</h3><p>Romeo y Julieta pasan su noche de bodas. <em>\"¿Quieres irte? Aún no es de día, fue el ruiseñor, no la alondra.\"</em></p>",
            "<h3>Acto IV — El plan</h3><p>Para evitar casarse con Paris, Julieta toma un brebaje que la hace parecer muerta.</p>",
            "<h3>Acto V — La tumba</h3><p>Romeo no recibe el mensaje a tiempo. Creyendo a Julieta muerta, bebe veneno junto a su amada.</p>",
            "<h3>Acto V — El final</h3><p>Julieta despierta y encuentra a Romeo muerto. Toma el puñal y se da muerte.</p>",
            "<h3>Epílogo</h3><p>Las familias hacen las paces. <em>\"Pues nunca hubo historia de más pena, que la de Julieta y su Romeo.\"</em></p>"
        ]
    },
    {
        id: 3,
        titulo: "Orgullo y Prejuicio",
        autor: "Jane Austen",
        imagen: "https://covers.openlibrary.org/b/id/8739161-L.jpg",
        paginas: 10,
        genero: "Romance",
        descripcion: "La historia de Elizabeth Bennet y el señor Darcy.",
        contenido: [
            "<h3>Capítulo I</h3><p>Es una verdad mundialmente reconocida que un hombre soltero, poseedor de una gran fortuna, necesita una esposa.</p>",
            "<h3>Capítulo II</h3><p>Querido señor Bennet, ¿sabes que por fin se ha alquilado Netherfield Park? El señor Bingley y sus amigos hacen su aparición en el vecindario.</p>",
            "<h3>Capítulo III — El baile</h3><p>En el baile de Meryton, el altivo señor Darcy llega con Bingley. Su orgullo pronto lo hace antipático para todos.</p>",
            "<h3>Capítulo IV — Primera impresión</h3><p>Darcy dice de Elizabeth: <em>\"Solo tolerable; no es lo suficientemente hermosa para tentarme.\"</em> Elizabeth lo encuentra ridículo pero lo olvida pronto.</p>",
            "<h3>Capítulo V — Wickham</h3><p>El encantador señor Wickham llega al vecindario y le cuenta a Elizabeth que Darcy lo arruinó injustamente.</p>",
            "<h3>Capítulo VI — La primera propuesta</h3><p>Darcy declara su amor a Elizabeth de manera tan arrogante que ella lo rechaza con firmeza.</p>",
            "<h3>Capítulo VII — La carta</h3><p>Darcy le escribe una larga carta explicando la verdad. Elizabeth comienza a ver cuánto orgullo y prejuicio han nublado su juicio.</p>",
            "<h3>Capítulo VIII — Pemberley</h3><p>Elizabeth visita la mansión Pemberley y encuentra a Darcy tratando a todos con genuina amabilidad.</p>",
            "<h3>Capítulo IX — El reencuentro</h3><p>Darcy ayuda a rescatar a la hermana menor de Elizabeth del escándalo. Elizabeth reconoce su nobleza.</p>",
            "<h3>FIN</h3><p>Tras superar el orgullo de uno y el prejuicio de la otra, Elizabeth y Darcy se comprometen. <em>\"Solo lo más profundo del amor me haría consentir en esto.\"</em></p>"
        ]
    },
    {
        id: 4,
        titulo: "Oliver Twist",
        autor: "Charles Dickens",
        imagen: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
        paginas: 10,
        genero: "Clásico",
        descripcion: "Un huérfano que escapa del asilo para caer en las garras de ladrones en el Londres victoriano.",
        contenido: [
            "<h3>Capítulo I — El nacimiento</h3><p>En una casa de caridad nació Oliver Twist. Su madre fijó sus pálidos ojos en su hijo y expiró.</p>",
            "<h3>Capítulo II — El asilo</h3><p>Oliver creció pálido y enclenque, pero con un espíritu que ni el hambre ni los golpes lograron apagar.</p>",
            "<h3>Capítulo III — \"¿Podría tener más?\"</h3><p>Hambriento, Oliver se acerca con su plato vacío: <em>\"Por favor, señor... quisiera un poco más.\"</em> El escándalo fue monumental.</p>",
            "<h3>Capítulo IV — El escape</h3><p>Oliver huye hacia Londres. Exhausto, conoce al Golfo, que lo lleva a casa de Fagin.</p>",
            "<h3>Capítulo V — Fagin</h3><p>En el East End, Oliver conoce al viejo Fagin y su banda de carteristas sin entender lo que ocurre.</p>",
            "<h3>Capítulo VI — El robo</h3><p>Oliver sale con la banda. Asustado, huye pero es capturado por la multitud.</p>",
            "<h3>Capítulo VII — El señor Brownlow</h3><p>El señor Brownlow lleva a Oliver a su casa. Oliver conoce por primera vez la bondad de un hogar.</p>",
            "<h3>Capítulo VIII — El secuestro</h3><p>Fagin y Bill Sikes secuestran a Oliver. Nancy, con el corazón dividido, participa pero siente remordimiento.</p>",
            "<h3>Capítulo IX — La traición</h3><p>Nancy revela el paradero de Oliver a las autoridades y paga con su vida por ello.</p>",
            "<h3>FIN</h3><p>La verdadera identidad de Oliver sale a la luz: es el hijo legítimo de un caballero. Finalmente encuentra un verdadero hogar.</p>"
        ]
    },
    {
        id: 5,
        titulo: "Moby Dick",
        autor: "Herman Melville",
        imagen: "https://covers.openlibrary.org/b/id/9255566-L.jpg",
        paginas: 10,
        genero: "Aventura",
        descripcion: "La épica obsesión del capitán Ahab por cazar a la ballena blanca.",
        contenido: [
            "<h3>Capítulo I</h3><p><em>Llámame Ismael.</em> Hace algunos años, teniendo poco dinero y nada que me interesara en tierra, pensé que navegaría y vería la parte acuática del mundo.</p>",
            "<h3>Capítulo II — Queequeg</h3><p>En New Bedford, Ismael conoce a Queequeg, un arponero polinesio cubierto de tatuajes, el hombre más noble y leal que ha conocido.</p>",
            "<h3>Capítulo III — El Pequod</h3><p>A bordo del Pequod, el capitán Ahab aparece con una pata de marfil. Su mirada es la de un hombre consumido por una obsesión.</p>",
            "<h3>Capítulo IV — La obsesión</h3><p>Ahab clava una moneda de oro en el mástil: será para quien aviste primero a Moby Dick, la ballena blanca que le arrancó la pierna.</p>",
            "<h3>Capítulo V — Starbuck</h3><p><em>\"Estoy dispuesto a cazar ballenas por dinero\"</em>, dice Starbuck, <em>\"pero no por venganza. La venganza contra una ballena es una blasfemia.\"</em></p>",
            "<h3>Capítulo VI — La ballena blanca</h3><p>Los marineros hablan en susurros de Moby Dick. Es descomunal, inteligente, casi sobrenatural. Muchos creen que es inmortal.</p>",
            "<h3>Capítulo VII — Primer avistamiento</h3><p>Tres días de caza. Moby Dick aparece al amanecer, blanca como la nieve, rompiendo el océano.</p>",
            "<h3>Capítulo VIII — La batalla</h3><p>Ahab clava su arpón en Moby Dick, pero la cuerda lo atrapa y lo arrastra al mar.</p>",
            "<h3>Capítulo IX — El hundimiento</h3><p>El Pequod, embestido por la ballena, se hunde llevando a toda la tripulación.</p>",
            "<h3>FIN</h3><p>Solo Ismael flota sobre un ataúd hasta ser rescatado. <em>\"Y yo solo escapé para contártelo.\"</em></p>"
        ]
    },
    {
        id: 6,
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        imagen: "https://covers.openlibrary.org/b/id/8479576-L.jpg",
        paginas: 10,
        genero: "Fábula",
        descripcion: "Un aviador perdido en el desierto conoce a un misterioso principito de un pequeño asteroide.",
        contenido: [
            "<h3>Capítulo I</h3><p>Cuando yo tenía seis años vi en un libro sobre la selva virgen una magnífica lámina. Representaba una serpiente boa que se tragaba a una fiera.</p>",
            "<h3>Capítulo II — El Principito</h3><p>Estaba solo en el Sahara cuando una vocecita me despertó: <em>\"Por favor... ¡dibújame un cordero!\"</em></p>",
            "<h3>Capítulo III — El asteroide B-612</h3><p>El Principito vivía en el asteroide B-612. Tenía tres volcanes y una rosa única que amaba profundamente.</p>",
            "<h3>Capítulo IV — Los planetas</h3><p>En su viaje visitó un rey sin súbditos, un vanidoso, un bebedor y un hombre de negocios que contaba estrellas.</p>",
            "<h3>Capítulo V — El farolero</h3><p>Un farolero encendía y apagaba su farol cada minuto. Era el único que le pareció sensato al Principito.</p>",
            "<h3>Capítulo VI — La Tierra</h3><p>En la Tierra, el Principito descubrió que había miles de rosas iguales a la suya. Esto lo entristeció.</p>",
            "<h3>Capítulo VII — El Zorro</h3><p><em>\"Por favor... ¡domestícame!\"</em>, pidió el zorro. <em>\"Si me domesticas, mi vida se llenará de sol.\"</em></p>",
            "<h3>Capítulo VIII — El secreto</h3><p><em>\"Solo se ve bien con el corazón. Lo esencial es invisible a los ojos.\"</em></p>",
            "<h3>Capítulo IX — El regreso</h3><p>El Principito decidió regresar a su planeta. Una serpiente lo ayudaría a volver.</p>",
            "<h3>FIN</h3><p><em>\"Si amas a una flor que vive en una estrella, es muy dulce mirar el cielo por la noche.\"</em></p>"
        ]
    },
    {
        id: 7,
        titulo: "Crimen y Castigo",
        autor: "Fiódor Dostoievski",
        imagen: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
        paginas: 10,
        genero: "Clásico",
        descripcion: "La historia de Raskolnikov, un estudiante que comete un crimen y lucha con su conciencia.",
        contenido: [
            "<h3>Parte I</h3><p>Raskolnikov, un estudiante pobre de San Petersburgo, ha concebido una teoría: los hombres extraordinarios tienen derecho a transgredir las leyes morales ordinarias.</p>",
            "<h3>Parte I — El plan</h3><p>Decide asesinar a una vieja prestamista a quien considera un piojo dañino para la sociedad. Se dice que será un acto útil.</p>",
            "<h3>Parte II — El crimen</h3><p>Comete el crimen. Pero en el momento crucial mata también a la hermana inocente de la anciana. El plan perfecto se convierte en horror.</p>",
            "<h3>Parte II — La fiebre</h3><p>Raskolnikov cae en una fiebre delirante. La culpa lo consume aunque intenta convencerse de que actuó correctamente.</p>",
            "<h3>Parte III — Porfirio</h3><p>El investigador Porfirio Petrovich comienza a sospechar de Raskolnikov. Sus conversaciones son un duelo psicológico demoledor.</p>",
            "<h3>Parte IV — Sonia</h3><p>Conoce a Sonia Marmeladova, una joven que se ha sacrificado por su familia. En ella encuentra algo que no comprende: fe y compasión.</p>",
            "<h3>Parte V — La confesión</h3><p>Raskolnikov le confiesa a Sonia el crimen. Ella le dice que debe entregarse y sufrir para redimirse.</p>",
            "<h3>Parte VI — El colapso</h3><p>Su teoría del hombre extraordinario se derrumba completamente. No es Napoleón. Es un asesino que no puede vivir con su crimen.</p>",
            "<h3>Parte VI — La entrega</h3><p>Raskolnikov se entrega a la policía. Es condenado a ocho años de trabajos forzados en Siberia.</p>",
            "<h3>Epílogo</h3><p>En Siberia, Sonia lo sigue. Lentamente, a través del sufrimiento y el amor, Raskolnikov comienza su verdadera redención.</p>"
        ]
    },
    {
        id: 8,
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        imagen: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        paginas: 10,
        genero: "Realismo mágico",
        descripcion: "La saga de la familia Buendía en el pueblo mítico de Macondo.",
        contenido: [
            "<h3>Capítulo I</h3><p>Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.</p>",
            "<h3>Capítulo II — Macondo</h3><p>José Arcadio Buendía funda Macondo con un grupo de familias. Es una aldea de veinte casas de barro con un río de piedras blancas y enormes como huevos prehistóricos.</p>",
            "<h3>Capítulo III — Los gitanos</h3><p>Cada año llegan los gitanos con nuevos inventos. Melquíades trae el hielo, el imán, la lupa. José Arcadio cree que con la ciencia todo es posible.</p>",
            "<h3>Capítulo IV — La insomnia</h3><p>Una plaga de insomnio arrasa Macondo. Los habitantes olvidan todo. Deben poner etiquetas a las cosas para recordar su nombre y su uso.</p>",
            "<h3>Capítulo V — Úrsula</h3><p>Úrsula Iguarán, matriarca de los Buendía, es el verdadero pilar de la familia. Mientras los hombres se pierden en guerras y delirios, ella mantiene la casa.</p>",
            "<h3>Capítulo VI — Las guerras</h3><p>El coronel Aureliano Buendía organiza treinta y dos levantamientos armados y los pierde todos. Tiene diecisiete hijos con diecisiete mujeres distintas.</p>",
            "<h3>Capítulo VII — La compañía bananera</h3><p>Llega la compañía bananera yanqui. Macondo prospera pero pierde su alma. La huelga termina en masacre y el gobierno borra el evento de la historia.</p>",
            "<h3>Capítulo VIII — La decadencia</h3><p>La familia Buendía comienza a declinar. Las generaciones se repiten con los mismos nombres y los mismos defectos fatales.</p>",
            "<h3>Capítulo IX — El manuscrito</h3><p>Aureliano descifra los manuscritos de Melquíades y descubre que todo estaba escrito de antemano, incluyendo el fin de Macondo.</p>",
            "<h3>FIN</h3><p>Un viento bíblico arrasa Macondo. <em>\"Las estirpes condenadas a cien años de soledad no tenían una segunda oportunidad sobre la tierra.\"</em></p>"
        ]
    },
    {
        id: 9,
        titulo: "El Conde de Montecristo",
        autor: "Alexandre Dumas",
        imagen: "https://covers.openlibrary.org/b/id/8739161-L.jpg",
        paginas: 12,
        genero: "Aventura",
        descripcion: "La historia de Edmond Dantès, traicionado e injustamente encarcelado, que escapa para buscar venganza.",
        contenido: [
            "<h3>Capítulo I — El marino</h3><p>Edmond Dantès, joven y prometedor marino marsellés, está a punto de convertirse en capitán y casarse con su amada Mercedes.</p>",
            "<h3>Capítulo II — La traición</h3><p>Sus rivales lo traicionan falsamente acusándolo de ser agente bonapartista. Es arrestado el día de su boda.</p>",
            "<h3>Capítulo III — El Château d'If</h3><p>Edmond es encarcelado en la isla-prisión del Château d'If. Sin juicio. Sin esperanza. La desesperación lo consume.</p>",
            "<h3>Capítulo IV — El abate Faria</h3><p>Conoce al abate Faria, un anciano sabio y erudito. Durante años, Faria le enseña idiomas, ciencias, filosofía. Y le revela el secreto del tesoro de la isla de Montecristo.</p>",
            "<h3>Capítulo V — La fuga</h3><p>Edmond escapa cosido en el saco mortuorio del abate. Lo arrojan al mar. Nada hacia la libertad después de catorce años de prisión.</p>",
            "<h3>Capítulo VI — El tesoro</h3><p>Encuentra el fabuloso tesoro en la isla de Montecristo. De marinero pobre se convierte en uno de los hombres más ricos del mundo.</p>",
            "<h3>Capítulo VII — El Conde</h3><p>Regresa a París como el misterioso Conde de Montecristo. Nadie lo reconoce. Comienza a tejer su red de venganza.</p>",
            "<h3>Capítulo VIII — La venganza</h3><p>Uno a uno, sus enemigos caen. Pero Edmond descubre que la venganza no trae la paz que esperaba.</p>",
            "<h3>Capítulo IX — El precio</h3><p>Inocentes sufren por su venganza. Edmond comienza a cuestionar si se ha convertido en el instrumento de Dios o del diablo.</p>",
            "<h3>Capítulo X</h3><p>Edmond libera a Haydée y a Maximilien. <em>\"Toda la sabiduría humana está en estas dos palabras: esperar y esperar.\"</em></p>",
            "<h3>Capítulo XI</h3><p>El Conde parte hacia el horizonte con Haydée. La venganza ha terminado. Ahora busca la redención.</p>",
            "<h3>FIN</h3><p><em>\"Hasta el día en que Dios se digne revelar el porvenir al hombre, toda la sabiduría humana estará contenida en estas dos palabras: Esperar y Esperar.\"</em></p>"
        ]
    },
    {
        id: 10,
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        imagen: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
        paginas: 10,
        genero: "Terror",
        descripcion: "El científico Víctor Frankenstein crea vida artificial con terribles consecuencias.",
        contenido: [
            "<h3>Carta I</h3><p>El explorador Walton escribe a su hermana desde el Ártico. Ha encontrado a un hombre exhausto sobre el hielo: Víctor Frankenstein.</p>",
            "<h3>Capítulo I — La infancia</h3><p>Víctor crece en Ginebra, apasionado por la ciencia y los filósofos alquimistas. Sueña con descubrir el secreto de la vida.</p>",
            "<h3>Capítulo II — La universidad</h3><p>En Ingolstadt, Víctor se obsesiona con la biología y la química. Comienza a experimentar con tejidos muertos.</p>",
            "<h3>Capítulo III — La creación</h3><p>Una noche tormentosa, tras años de trabajo, la criatura abre sus ojos acuosos amarillos. Víctor, aterrado por lo que ha hecho, huye.</p>",
            "<h3>Capítulo IV — El abandono</h3><p>La criatura, sola y confundida, aprende a sobrevivir. Observa a una familia durante meses, aprende a hablar y a leer. Anhela pertenecer.</p>",
            "<h3>Capítulo V — El rechazo</h3><p>La criatura intenta acercarse a los humanos. Todos huyen horrorizados por su apariencia. El rechazo se convierte en furia.</p>",
            "<h3>Capítulo VI — La demanda</h3><p>La criatura encuentra a Víctor y le exige que le cree una compañera. <em>\"Soy malvado porque soy miserable.\"</em></p>",
            "<h3>Capítulo VII — La promesa rota</h3><p>Víctor comienza a crear la compañera pero la destruye. La criatura jura venganza: <em>\"Estaré contigo en tu noche de bodas.\"</em></p>",
            "<h3>Capítulo VIII — La persecución</h3><p>La criatura cumple sus amenazas. Víctor persigue a su creación hasta el Ártico, consumido por el odio y la culpa.</p>",
            "<h3>FIN</h3><p>Víctor muere a bordo del barco de Walton. La criatura aparece para llorar sobre su creador. <em>\"Seré el último en sufrir.\"</em> Desaparece en la oscuridad del Ártico.</p>"
        ]
    },
    {
        id: 11,
        titulo: "La Odisea",
        autor: "Homero",
        imagen: "https://covers.openlibrary.org/b/id/8775054-L.jpg",
        paginas: 10,
        genero: "Épica",
        descripcion: "El largo viaje de Odiseo de regreso a Ítaca tras la guerra de Troya.",
        contenido: [
            "<h3>Canto I — Invocación</h3><p>Cuéntame, Musa, las aventuras del hombre ingenioso que vagó largo tiempo tras destruir la sagrada ciudad de Troya.</p>",
            "<h3>Canto V — Calipso</h3><p>Odiseo lleva siete años retenido por la ninfa Calipso en su isla. Los dioses finalmente ordenan su liberación.</p>",
            "<h3>Canto VI — Los feacios</h3><p>Náufrago, Odiseo llega a la tierra de los feacios donde la princesa Nausícaa lo encuentra en la playa.</p>",
            "<h3>Canto IX — El Cíclope</h3><p>Odiseo y sus hombres quedan atrapados en la cueva de Polifemo. Odiseo lo ciega con una estaca y escapa bajo la panza de los carneros.</p>",
            "<h3>Canto X — Circe</h3><p>La maga Circe transforma a los hombres de Odiseo en cerdos. Odiseo, protegido por Hermes, la vence y libera a sus hombres.</p>",
            "<h3>Canto XI — El Hades</h3><p>Odiseo desciende al reino de los muertos. Habla con el alma de Aquiles, Tiresias y su propia madre.</p>",
            "<h3>Canto XII — Escila y Caribdis</h3><p>Navega entre el monstruo de seis cabezas y el terrible remolino. Pierde a seis hombres pero el barco sobrevive.</p>",
            "<h3>Canto XIII — El regreso</h3><p>Los feacios llevan a Odiseo dormido hasta las costas de Ítaca. Veinte años después de partir, por fin está en casa.</p>",
            "<h3>Canto XXI — El arco</h3><p>Penélope propone un concurso: quien tense el arco de Odiseo y atraviese doce hachas, se casará con ella. Solo Odiseo puede hacerlo.</p>",
            "<h3>Canto XXII — La venganza</h3><p>Odiseo revela su identidad y con Telémaco extermina a los pretendientes que han saqueado su palacio durante veinte años.</p>"
        ]
    },
    {
        id: 12,
        titulo: "El Alquimista",
        autor: "Paulo Coelho",
        imagen: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        paginas: 8,
        genero: "Fábula",
        descripcion: "Un joven pastor andaluz emprende un viaje en busca de un tesoro y descubre el significado de la vida.",
        contenido: [
            "<h3>Parte I — El sueño</h3><p>Santiago, un joven pastor andaluz, sueña repetidamente con un tesoro escondido junto a las pirámides de Egipto. Una gitana y un viejo rey le dicen que debe seguir su Leyenda Personal.</p>",
            "<h3>Parte I — El robo</h3><p>Al llegar a África, Santiago es robado. Sin dinero y sin hablar árabe, debe empezar desde cero en Tánger.</p>",
            "<h3>Parte II — El mercader</h3><p>Trabaja para un vendedor de cristales durante casi un año. Aprende que el miedo al fracaso nos impide seguir nuestros sueños.</p>",
            "<h3>Parte II — La caravana</h3><p>Cruza el desierto del Sahara en caravana. Conoce al inglés que busca al Alquimista y aprende que el mundo tiene un alma.</p>",
            "<h3>Parte II — El oasis</h3><p>En el oasis de Al-Fayoum conoce a Fátima. Se enamora. Ella le dice que si es un hombre del desierto, regresará.</p>",
            "<h3>Parte II — El Alquimista</h3><p>Conoce al misterioso Alquimista, que puede transformar el plomo en oro. Le enseña que el tesoro no está en el destino sino en el viaje.</p>",
            "<h3>Parte II — La prueba</h3><p>Los guerreros del desierto capturan a Santiago y al Alquimista. Le piden a Santiago que demuestre sus poderes convirtiéndose en el viento.</p>",
            "<h3>FIN</h3><p>Santiago llega a las pirámides. Excava pero no encuentra nada. Un ladrón le dice que él también soñó con un tesoro en España. Santiago regresa y encuentra el tesoro bajo el árbol donde dormía sus ovejas.<br><em>\"Cuando quieres algo, todo el universo conspira para que puedas realizarlo.\"</em></p>"
        ]
    }
];

// ============================================
// ESTADO DE LECTURA
// ============================================
let progresoLectura = JSON.parse(localStorage.getItem('progresoLectura')) || {};

// ============================================
// CATÁLOGO COMPLETO
// ============================================
let catalogoCompleto = [...librosLocales];
let resultadosBusqueda = [];
let busquedaActiva = false;
let searchTimeout = null;

// ============================================
// VARIABLES GLOBALES DEL LECTOR
// ============================================
let libroActual = null;
let paginaActual = 1;
let filtroActual = 'todos';
let ordenActual = 'reciente';
let tamanioLetra = 1.15;

// ============================================
// BÚSQUEDA
// ============================================
async function buscarEnOpenLibrary(query) {
    if (!query || query.trim().length < 2) return [];
    try {
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10&fields=key,title,author_name,cover_i,first_publish_year,subject`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error en API');
        const data = await response.json();
        return data.docs
            .filter(libro => libro.cover_i && libro.author_name)
            .map(libro => ({
                id: `ol_${libro.key.replace('/works/', '')}`,
                titulo: libro.title,
                autor: libro.author_name ? libro.author_name[0] : 'Autor desconocido',
                imagen: `https://covers.openlibrary.org/b/id/${libro.cover_i}-L.jpg`,
                paginas: Math.floor(Math.random() * 10) + 5,
                genero: libro.subject ? libro.subject[0] : 'General',
                descripcion: `Publicado en ${libro.first_publish_year || 'fecha desconocida'}`,
                contenido: [
                    `<h3>Sobre este libro</h3><p>Estás explorando <em>"${libro.title}"</em> de ${libro.author_name?.[0] || 'Autor desconocido'}.</p><p>Este libro está disponible en Open Library.</p>`
                ],
                desdeAPI: true
            }));
    } catch (error) {
        return [];
    }
}

function buscarEnLocal(query) {
    const q = query.toLowerCase();
    return catalogoCompleto.filter(libro =>
        libro.titulo.toLowerCase().includes(q) ||
        libro.autor.toLowerCase().includes(q) ||
        (libro.genero && libro.genero.toLowerCase().includes(q))
    );
}

function buscarLibros() {
    const query = document.getElementById('searchInput').value.trim();
    clearTimeout(searchTimeout);
    if (query.length === 0) { cerrarPanelBusqueda(); return; }
    if (query.length < 2) return;

    const locales = buscarEnLocal(query);
    mostrarResultadosBusqueda(locales, query, true);

    searchTimeout = setTimeout(async () => {
        if (document.getElementById('searchInput').value.trim() !== query) return;
        const apiResults = await buscarEnOpenLibrary(query);
        if (document.getElementById('searchInput').value.trim() === query) {
            const todos = [...locales];
            apiResults.forEach(libro => {
                if (!todos.find(l => l.titulo.toLowerCase() === libro.titulo.toLowerCase())) {
                    todos.push(libro);
                    if (!catalogoCompleto.find(l => l.id === libro.id)) catalogoCompleto.push(libro);
                }
            });
            mostrarResultadosBusqueda(todos, query, false);
        }
    }, 500);
}

function crearPanelBusqueda() {
    const panel = document.createElement('div');
    panel.id = 'searchPanel';
    panel.className = 'search-panel';
    panel.innerHTML = `
        <div class="search-panel-header"><span id="searchCount" class="search-count"></span></div>
        <div id="searchResults" class="search-results-list"></div>
        <div class="search-panel-footer"><span class="search-powered">Resultados de <strong>Open Library</strong> + biblioteca local</span></div>
    `;
    const navSearch = document.querySelector('.nav-search');
    navSearch.style.position = 'relative';
    navSearch.appendChild(panel);
    return panel;
}

function mostrarResultadosBusqueda(resultados, query, soloLocal) {
    let panel = document.getElementById('searchPanel');
    if (!panel) panel = crearPanelBusqueda();
    panel.style.display = 'block';
    busquedaActiva = true;
    resultadosBusqueda = resultados;

    const lista = document.getElementById('searchResults');
    const contador = document.getElementById('searchCount');

    if (resultados.length === 0 && !soloLocal) {
        lista.innerHTML = `<div class="search-empty"><span class="search-empty-icon">🔍</span><p>No se encontraron resultados para <strong>"${query}"</strong></p></div>`;
        if (contador) contador.textContent = '0 resultados';
        return;
    }

    if (contador) contador.textContent = `${resultados.length} resultado${resultados.length !== 1 ? 's' : ''}`;

    lista.innerHTML = resultados.slice(0, 8).map(libro => `
        <div class="search-item" onclick="seleccionarResultado('${libro.id}')">
            <img src="${libro.imagen}" alt="${libro.titulo}" class="search-item-img" onerror="this.src='https://via.placeholder.com/40x55/1a1a24/666?text=📖'">
            <div class="search-item-info">
                <span class="search-item-titulo">${libro.titulo}</span>
                <span class="search-item-autor">${libro.autor}</span>
                ${libro.desdeAPI ? '<span class="search-api-badge">Open Library</span>' : ''}
            </div>
            <span class="search-item-genero">${libro.genero || ''}</span>
        </div>
    `).join('');
}

function cerrarPanelBusqueda() {
    const panel = document.getElementById('searchPanel');
    if (panel) panel.style.display = 'none';
    busquedaActiva = false;
}

function seleccionarResultado(libroId) {
    const libro = catalogoCompleto.find(l => String(l.id) === String(libroId));
    if (libro) {
        cerrarPanelBusqueda();
        document.getElementById('searchInput').value = '';
        abrirLector(libro.id);
    }
}

// ============================================
// GUARDAR PROGRESO
// ============================================
function guardarProgreso(libroId, pagina) {
    const libro = catalogoCompleto.find(l => String(l.id) === String(libroId));
    if (!libro) return;
    progresoLectura[libroId] = {
        pagina,
        totalPaginas: libro.paginas,
        completado: pagina === libro.paginas,
        ultimaLectura: new Date().toISOString()
    };
    localStorage.setItem('progresoLectura', JSON.stringify(progresoLectura));
    actualizarTodasLasVistas();
}

// ============================================
// NAVEGACIÓN DE VISTAS
// ============================================
function mostrarVista(vista) {
    cerrarPanelBusqueda();
    document.querySelectorAll('.vista').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));

    const vistaEl = document.getElementById(`vista${vista.charAt(0).toUpperCase() + vista.slice(1)}`);
    if (vistaEl) vistaEl.classList.add('active');
    if (event && event.target) event.target.classList.add('active');

    if (vista === 'biblioteca') cargarBiblioteca();
    else if (vista === 'continuar') cargarContinuarLeyendo();
    else cargarLibrosInicio();
}

// ============================================
// CARGAR INICIO
// ============================================
function cargarLibrosInicio() {
    const continuarDiv = document.getElementById('continuarLeyendo');
    const popularesDiv = document.getElementById('librosPopulares');
    const recomendadosDiv = document.getElementById('librosRecomendados');

    if (!continuarDiv) return;

    const librosConProgreso = librosLocales.filter(l => progresoLectura[l.id] && !progresoLectura[l.id].completado);

    continuarDiv.innerHTML = librosConProgreso.length > 0
        ? librosConProgreso.slice(0, 4).map(l => crearTarjetaLibro(l, (progresoLectura[l.id].pagina / l.paginas) * 100)).join('')
        : '<p class="mensaje-vacio">No tienes libros en progreso. ¡Comienza a leer!</p>';

    popularesDiv.innerHTML = librosLocales.slice(0, 6).map(l => {
        const pct = progresoLectura[l.id] ? (progresoLectura[l.id].pagina / l.paginas) * 100 : 0;
        return crearTarjetaLibro(l, pct);
    }).join('');

    const recomendados = librosLocales.filter(l => !progresoLectura[l.id]);
    recomendadosDiv.innerHTML = (recomendados.length > 0 ? recomendados.slice(0, 6) : librosLocales.slice(6))
        .map(l => crearTarjetaLibro(l, 0)).join('');
}

// ============================================
// CARGAR BIBLIOTECA
// ============================================
function cargarBiblioteca() {
    const bibliotecaDiv = document.getElementById('bibliotecaLibros');
    if (!bibliotecaDiv) return;

    let librosAMostrar = catalogoCompleto.filter(l => {
        if (filtroActual === 'todos') return progresoLectura[l.id];
        if (filtroActual === 'leyendo') return progresoLectura[l.id] && !progresoLectura[l.id].completado;
        if (filtroActual === 'completados') return progresoLectura[l.id] && progresoLectura[l.id].completado;
        return false;
    });

    bibliotecaDiv.innerHTML = librosAMostrar.length > 0
        ? librosAMostrar.map(l => {
            const p = progresoLectura[l.id];
            return crearTarjetaLibro(l, (p.pagina / p.totalPaginas) * 100);
        }).join('')
        : `<div class="mensaje-vacio"><p>No tienes libros en esta categoría</p><button class="btn-control" onclick="mostrarVista('inicio')">Explorar libros</button></div>`;

    actualizarEstadisticas();
}

function actualizarEstadisticas() {
    const total = Object.keys(progresoLectura).length;
    const completados = Object.values(progresoLectura).filter(p => p.completado).length;
    let progresoTotal = 0;
    Object.values(progresoLectura).forEach(p => progresoTotal += (p.pagina / p.totalPaginas) * 100);
    const promedio = total > 0 ? Math.round(progresoTotal / total) : 0;

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('totalLibros', total);
    set('librosLeyendo', total - completados);
    set('librosCompletados', completados);
    set('promedioProgreso', promedio + '%');
}

function filtrarBiblioteca(filtro) {
    filtroActual = filtro;
    document.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    cargarBiblioteca();
}

// ============================================
// CARGAR CONTINUAR LEYENDO
// ============================================
function cargarContinuarLeyendo() {
    const listaContinuar = document.getElementById('listaContinuar');
    const sugerenciasDiv = document.getElementById('sugerenciasContinuar');
    if (!listaContinuar) return;

    let librosEnProgreso = catalogoCompleto
        .filter(l => progresoLectura[l.id] && !progresoLectura[l.id].completado)
        .map(l => ({ ...l, progreso: progresoLectura[l.id] }));

    if (ordenActual === 'reciente') librosEnProgreso.sort((a, b) => new Date(b.progreso.ultimaLectura) - new Date(a.progreso.ultimaLectura));
    else if (ordenActual === 'progreso') librosEnProgreso.sort((a, b) => (b.progreso.pagina / b.paginas) - (a.progreso.pagina / a.paginas));
    else if (ordenActual === 'alfabetico') librosEnProgreso.sort((a, b) => a.titulo.localeCompare(b.titulo));

    listaContinuar.innerHTML = librosEnProgreso.length > 0
        ? librosEnProgreso.map(l => crearItemContinuar(l)).join('')
        : `<div class="mensaje-vacio"><p>No tienes libros en progreso</p><button class="btn-control" onclick="mostrarVista('inicio')">Comenzar a leer</button></div>`;

    if (sugerenciasDiv) {
        sugerenciasDiv.innerHTML = librosLocales.filter(l => !progresoLectura[l.id]).slice(0, 4)
            .map(l => crearTarjetaLibro(l, 0)).join('');
    }
}

function crearItemContinuar(libro) {
    const p = libro.progreso;
    const pct = Math.round((p.pagina / p.totalPaginas) * 100);
    const fecha = new Date(p.ultimaLectura).toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return `
        <div class="continuar-item">
            <img src="${libro.imagen}" alt="${libro.titulo}" class="continuar-imagen" onerror="this.src='https://via.placeholder.com/90x135/1a1a24/666?text=📖'">
            <div class="continuar-info">
                <h3>${libro.titulo}</h3>
                <p class="autor">${libro.autor}</p>
                <div class="continuar-progreso">
                    <div class="progreso-texto">
                        <span>Página ${p.pagina} de ${p.totalPaginas}</span>
                        <span>${pct}%</span>
                    </div>
                    <div class="progreso-detalle"><div class="barra" style="width:${pct}%"></div></div>
                </div>
                <div class="continuar-footer">
                    <span class="ultima-lectura">Última lectura: ${fecha}</span>
                    <button class="btn-continuar" onclick="abrirLector('${libro.id}')">Continuar →</button>
                </div>
            </div>
        </div>
    `;
}

function ordenarContinuarLeyendo(orden) {
    ordenActual = orden;
    cargarContinuarLeyendo();
}

// ============================================
// TARJETA DE LIBRO
// ============================================
function crearTarjetaLibro(libro, progreso) {
    return `
        <div class="libro-card" onclick="abrirLector('${libro.id}')">
            <img src="${libro.imagen}" alt="${libro.titulo}" onerror="this.src='https://via.placeholder.com/200x280/1a1a24/666?text=📖'">
            <div class="libro-info">
                <h3>${libro.titulo}</h3>
                <p>${libro.autor}</p>
                ${libro.genero ? `<span class="libro-genero">${libro.genero}</span>` : ''}
                <div class="progreso-indicador">
                    <div class="barra" style="width:${Math.round(progreso)}%"></div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// LECTOR
// ============================================
function abrirLector(libroId) {
    libroActual = catalogoCompleto.find(l => String(l.id) === String(libroId));
    if (!libroActual) return;

    paginaActual = progresoLectura[libroId] ? progresoLectura[libroId].pagina : 1;

    document.getElementById('libroTitulo').textContent = libroActual.titulo;
    document.getElementById('libroAutor').textContent = libroActual.autor;

    actualizarLector();
    document.getElementById('lectorModal').style.display = 'block';

    const tema = localStorage.getItem('temaLectura') || 'claro';
    cambiarTema(tema);

    const tam = localStorage.getItem('tamanioLetra');
    if (tam) {
        tamanioLetra = parseFloat(tam);
        document.getElementById('paginaContenido').style.fontSize = `${tamanioLetra}rem`;
    }
}

function cerrarLector() {
    document.getElementById('lectorModal').style.display = 'none';
}

function actualizarLector() {
    if (!libroActual) return;

    document.getElementById('paginaContenido').innerHTML = libroActual.contenido[paginaActual - 1] || '';

    const textoPagina = `Página ${paginaActual} de ${libroActual.paginas}`;
    const setPag = (id) => { const el = document.getElementById(id); if (el) el.textContent = textoPagina; };
    setPag('infoPagina');
    setPag('infoPaginaSimple');

    const pct = (paginaActual / libroActual.paginas) * 100;
    document.getElementById('progresoLectura').style.width = `${pct}%`;
    const pt = document.getElementById('progresoTexto');
    if (pt) pt.textContent = `${Math.round(pct)}% completado`;

    document.getElementById('btnAnterior').disabled = paginaActual === 1;
    document.getElementById('btnSiguiente').disabled = paginaActual === libroActual.paginas;

    document.getElementById('paginaContenido').scrollTop = 0;
    guardarProgreso(libroActual.id, paginaActual);
}

function cambiarPagina(dir) {
    if (!libroActual) return;
    const nueva = paginaActual + dir;
    if (nueva >= 1 && nueva <= libroActual.paginas) {
        paginaActual = nueva;
        actualizarLector();
    }
}

function cambiarTema(tema) {
    const modal = document.getElementById('lectorModal');
    modal.classList.remove('tema-claro', 'tema-oscuro', 'tema-sepia');
    if (tema === 'oscuro') modal.classList.add('tema-oscuro');
    else if (tema === 'sepia') modal.classList.add('tema-sepia');
    localStorage.setItem('temaLectura', tema);
}

function ajustarLetra(accion) {
    tamanioLetra = accion === 'mas' ? Math.min(tamanioLetra + 0.1, 2.0) : Math.max(tamanioLetra - 0.1, 0.8);
    document.getElementById('paginaContenido').style.fontSize = `${tamanioLetra}rem`;
    localStorage.setItem('tamanioLetra', tamanioLetra);
}

function actualizarTodasLasVistas() {
    const vistaActiva = document.querySelector('.vista.active');
    if (!vistaActiva) return;
    if (vistaActiva.id === 'vistaBiblioteca') cargarBiblioteca();
    else if (vistaActiva.id === 'vistaContinuar') cargarContinuarLeyendo();
    else cargarLibrosInicio();
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    cargarLibrosInicio();

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', buscarLibros);
        searchInput.addEventListener('keydown', e => {
            if (e.key === 'Escape') { cerrarPanelBusqueda(); searchInput.value = ''; }
            if (e.key === 'Enter' && resultadosBusqueda.length > 0) seleccionarResultado(resultadosBusqueda[0].id);
        });
    }

    document.addEventListener('click', e => {
        const navSearch = document.querySelector('.nav-search');
        if (navSearch && !navSearch.contains(e.target)) cerrarPanelBusqueda();
    });

    document.addEventListener('keydown', e => {
        const modal = document.getElementById('lectorModal');
        if (!modal) return;
        if (e.key === 'Escape' && modal.style.display === 'block') cerrarLector();
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') cambiarPagina(-1);
            else if (e.key === 'ArrowRight') cambiarPagina(1);
        }
    });
});