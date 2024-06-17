const back = document.querySelector('#back');
const next = document.querySelector('#next');
const boxes = [document.querySelector('.boxOne'), document.querySelector('.boxTwo'), document.querySelector('.boxThree'), document.querySelector('.boxFour')];

gsap.to("h1", { opacity: 1, duration: 0.5, ease:'power1.in'})
gsap.to(".container", { opacity: 1, duration: 0.5, ease:'power1.in', delay: 0.5})

let i = 0;

next.addEventListener('click', () => {
    i++
    if (i === boxes.length-1) {
       next.style.display = "none"

    }
    back.style.display = "block"
    boxes[i].style.display = "block";
    gsap.to(boxes[i], { opacity: 1, duration: 0.5, ease:'power1.in'})
    gsap.to(boxes[i-1], { opacity: 0})
    boxes[i-1].style.display = "none";
})
back.addEventListener('click', () => {
    i--
    if (i === 0) {
        back.style.display = "none"
    }
    next.style.display = "block"
    boxes[i].style.display = "block";
    gsap.to(boxes[i], { opacity: 1, duration: 0.5, ease:'power1.in'})
    gsap.to(boxes[i+1], { opacity: 0})
    boxes[i+1].style.display = "none";
})


const movies = document.querySelectorAll(".movie");
const modalCardMovie = document.querySelector("#modalCardMovie");
const closeModal = document.querySelector("#closeModal");
const heading = document.querySelector("#heading");
const description = document.querySelector("#description");
const trailer = document.querySelector("#trailer");


const movieModalContent = [
    {
        modalHeaders: "Гарри Поттер и Философский камень, 2001 год",
        modalText: "Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: родители умерли, едва ему исполнился год, а от дяди и тёти, взявших сироту на воспитание, достаются лишь тычки да подзатыльники. Но в одиннадцатый день рождения Гарри всё меняется. Странный гость, неожиданно появившийся на пороге, приносит письмо, из которого мальчик узнаёт, что на самом деле он - волшебник и зачислен в школу магии под названием Хогвартс. А уже через пару недель Гарри будет мчаться в поезде Хогвартс-экспресс навстречу новой жизни, где его ждут невероятные приключения, верные друзья и самое главное — ключ к разгадке тайны смерти его родителей.",
        modalVideo: "https://www.youtube.com/embed/AFwrmkAHEk4?si=3g-KHrghRuATtdgu&amp;controls=0",
    },
    {
        modalHeaders: "Гарри Поттер и Тайная комната, 2002 год" ,
        modalText: "Гарри Поттер переходит на второй курс Школы чародейства и волшебства Хогвартс. Эльф Добби предупреждает Гарри об опасности, которая поджидает его там, и просит больше не возвращаться в школу. Юный волшебник не следует совету эльфа и становится свидетелем таинственных событий, разворачивающихся в Хогвартсе. Вскоре Гарри и его друзья узнают о существовании Тайной Комнаты и сталкиваются с новыми приключениями, пытаясь победить темные силы.",
        modalVideo: "https://www.youtube.com/embed/KZ2LPNjWeDM?si=a9OhOfGVQ4JrEBiv&amp;controls=0",
    },
    {
        modalHeaders: "Гарри Поттер и Узник Азкабана, 2004 год",
        modalText: "В третьей части истории о юном волшебнике полюбившиеся всем герои — Гарри Поттер, Рон и Гермиона — возвращаются уже на третий курс школы чародейства и волшебства Хогвартс. На этот раз они должны раскрыть тайну узника, сбежавшего из зловещей тюрьмы Азкабан, чье пребывание на воле создает для Гарри смертельную опасность",
        modalVideo: "https://www.youtube.com/embed/IB7OXZ6WkzQ?si=rk5z3m3r38sNfE4f&amp;controls=0",
    },
    {
        modalHeaders: "Гарри Поттер и Кубок огня, 2005 год",
        modalText: "Гарри Поттер, Рон и Гермиона возвращаются на четвёртый курс школы чародейства и волшебства Хогвартс. При таинственных обстоятельствах Гарри был отобран в число участников опасного соревнования — Турнира Трёх Волшебников, однако проблема в том, что все его соперники — намного старше и сильнее. К тому же, знаки указывают на возвращение Лорда Волдеморта. Вскоре Гарри предстоит побороться не только за победу в соревновании, но и, прежде всего, за свою жизнь.",
        modalVideo: "https://www.youtube.com/embed/4a1g4YisNbQ?si=yHS08kP-q_YBuzpr&amp;controls=0",
    },
    {
        modalHeaders: "Гарри Поттер и Орден Феникса, 2007 год",
        modalText: "Гарри проводит свой пятый год в школе Хогвартс и обнаруживает, что многие из членов волшебного сообщества отрицают факт недавнего состязания юного волшебника с воплощением вселенского зла Волдемортом. Все делают вид, что не имеют ни малейшего представления о том, что злодей вернулся. Однако впереди волшебников ждет необычная схватка.",
        modalVideo: "https://www.youtube.com/embed/Q3P10wkGDBQ?si=avsiCGoCTDugDV&amp;controls=0",
    },
    {
        modalHeaders: "Гарри Поттер и Принц-полукровка, 2009 год",
        modalText: "Теперь не только мир волшебников, но и мир маглов ощущает на себе всевозрастающую силу Волан-де-Морта, а Хогвартс уже никак не назовешь надежным убежищем, каким он был раньше. Гарри подозревает, что в самом замке затаилась некая опасность, но Дамблдор больше сосредоточен на том, чтобы подготовить его к финальной схватке, которая, как он знает, уже не за горами.",
        modalVideo: "https://www.youtube.com/embed/U0hMHgNw8hs?si=CKC7iZEocEBS963L&amp;controls=0",
    },
    {
        modalHeaders: "Гарри Поттер и Дары Смерти. Часть 1, 2010 год",
        modalText: "Гарри Поттера ждёт самое страшное испытание в жизни — смертельная схватка с Волан-де-Мортом. Ждать помощи не от кого — Гарри одинок, как никогда… Друзья и враги Гарри предстают в совершенно неожиданном свете. Граница между Добром и Злом становится всё призрачнее…",
        modalVideo: "https://www.youtube.com/embed/oBTJEwG2NOM?si=BWAgJox-dh7qwsxg&amp;controls=0",
    },
    {
        modalHeaders: "Гарри Поттер и Дары Смерти. Часть 2, 2011 год",
        modalText: "В грандиозной последней главе битва между добрыми и злыми силами мира волшебников перерастает во всеобщую войну. Ставки ещё никогда не были так высоки, а поиск убежища — столь сложен. И, быть может, именно Гарри Поттеру придется пожертвовать всем в финальном сражении с Волан-де-Мортом.",
        modalVideo: "https://www.youtube.com/embed/O5aCY_MPmzc?si=v5sqjrt9UjSxBfSd&amp;controls=0",
    },
    {
        modalHeaders: "Возвращение в Хогвартс,2022 год",
        modalText: "Дэниэл Рэдклифф, Руперт Гринт и Эмма Уотсон встретятся со своими коллегами и впервые за долгие годы окажутся в стенах Хогвартса.",
        modalVideo: "https://www.youtube.com/embed/5sgjNCHZ5C8?si=4PlanqcXJAcV63k5&amp;controls=0",
    },
    {
        modalHeaders: "Фантастические твари и где они обитают — 2016 год",
        modalText: "Поиск и изучение необычайных волшебных существ приводят магозоолога Ньюта Саламандера в Нью-Йорк. Скорее всего, он отбыл бы на поезде дальше, если бы не немаг (так в Америке называют магглов) по имени Якоб, оставленный в неположенном месте магический чемодан и побег из него фантастических животных Ньюта.",
        modalVideo: "https://www.youtube.com/embed/qMtHFUA4jX4?si=PhVY58Z-mn4yNRUu&amp;controls=0&amp;start=19",
    },
    {
        modalHeaders: "Фантастические твари: Преступления Грин-де-Вальда — 2018 год",
        modalText: "Могущественный тёмный волшебник Геллерт Грин-де-Вальд пойман в Штатах, но не собирается молча сидеть в темнице и устраивает грандиозный побег. Теперь ничто не помешает ему добиться своей цели — установить превосходство волшебников над всеми немагическими существами на планете. Чтобы сорвать планы Грин-де-Вальда, Альбус Дамблдор обращается к своему бывшему студенту Ньюту Саламандеру, который соглашается помочь, не подозревая, какая опасность ему грозит. В раскалывающемся на части волшебном мире любовь и верность проверяются на прочность, а конфликт разделяет даже настоящих друзей и членов семей.",
        modalVideo: "https://www.youtube.com/embed/hOcx8OQpEEI?si=D_wgCLG3P9tFnHcG&amp;controls=0",
    },
    {
        modalHeaders:"Фантастические твари: Тайны Дамблдора — 2022 год",
        modalText: "Профессор Альбус Дамблдор узнаёт, что могущественный тёмный волшебник Геллерт Грин-де-Вальд планирует захватить власть над миром. Понимая, что не сможет остановить его в одиночку, Дамблдор просит магозоолога Ньюта Саламандера возглавить команду выдающихся волшебников и одного отважного магла-пекаря. Им предстоят невероятно опасные приключения, встреча со старыми и укрощение новых магических существ и борьба со сторонниками Грин-де-Вальда, которых становится всё больше.",
        modalVideo: "https://www.youtube.com/embed/bMrKXo_5HTQ?si=2QrrNk_xYfd0mKdR&amp;controls=0",
    },
    {
        modalHeaders: "Гарри Поттер и Проклятое дитя",
        modalText: `Пьеса Джека Торна "Гарри Поттер и проклятое дитя" создана на основе оригинальной истории от Дж.К. Роулинг, Джона Тиффани и Джека Торна. Это восьмая книга о Гарри Поттере и первая официальная сценическая постановка. Настоящая версия сценария является финальной и включает дополнительные материалы: генеалогическое древо семьи Гарри Поттера, хронологию важнейших событий в жизни Гарри Поттера и беседу Джона Тиффани и Джека Торна о сценарии.`,
        modalVideo: "https://www.youtube.com/embed/eMe7aPdEIx0?si=vCtVd4gI9qILD_SK&amp;controls=0",
    },
]

        
movies.forEach((movie, index) => {
    movie.addEventListener('click', ()=> {
        
        gsap.to("#modalCardMovie", { opacity: 1, duration: 0.5, ease:'power1.in'})
        modalCardMovie.style.display = "flex";
        heading.textContent = movieModalContent[index].modalHeaders;
        description.textContent = movieModalContent[index].modalText;
        trailer.setAttribute("src", movieModalContent[index].modalVideo )
    })
})



closeModal.addEventListener('click', () => {
    trailer.setAttribute("src", "" );
    gsap.to("#modalCardMovie", { opacity: 0, duration: 0.5, ease:'power1', onComplete:() => {
    modalCardMovie.style.display = "none";
}})
});




const charracters = [
    // hermioneGranger: 
    {
        nameChar: "Гермиона Джин Грейнджер",
        thenPhoto: "act/EmmaThen.jpg",
        nowPhoto: "act/EmmaNow.jpg",
        actName: "Эмма Шарлотта Дьюерре Уотсон <br>(Emma Charlotte Duerre Watson)",
        occup: "Актриса, Режиссер",
        actHeight: "1.65 м",
        birthDay:  "15 апреля, 1990 • Овен • 33 года",
        birthPlace: "Париж, Франция",
        genres: "Фэнтези, приключения, семейный",
        films: "127, 1994 — 2022",
        descr: "Эмма получила свою главную роль в 1999 году, когда ей было всего 9 лет. Участие в грандиозном проекте принесло актрисе множество наград, а также более 10 млн фунтов стерлингов. В 2009 году Эмма была занесена в Книгу рекордов Гиннесса как самая высокооплачиваемая актриса десятилетия."
    },
    // ronWeasley: 
    {
        nameChar: "Рональд Билиус Уизли",
        thenPhoto: "act/RupertThen.jpg",
        nowPhoto: "act/RupertNow.jpg",
        actName: "Руперт Александер Ллойд Гринт <br>(Rupert Alexander Lloyd Grint)",
        occup: "Актер, Продюсер",
        actHeight: "1.73 м",
        birthDay:  "24 августа, 1988 • Дева • 35 лет",
        birthPlace: "Стивенэйдж, Хартфордшир, Англия, Великобритания",
        genres: "Приключения, фэнтези, комедия",
        films: "106, 1989 — 2023",
        descr: "Когда Руперту было всего 11 лет, он увидел по телевидению новость о том, что кинокомпания объявляет кастинг британских детей от 9 до 11 лет для экранизации культового, популярнейшего романа Джоан Роулинг о мальчике-волшебнике «Гарри Поттер и философский камень». Руперт сочинил песню в стиле рэп, где зачитал, как он обожает романы про Гарри и как хочет сниматься в кино в роли лучшего друга Поттера - Рона Уизли. Текст Рона из романа он прочитал в женском платье... Увидев обаятельного рыжеволосого мальчишку, «качающего» рэп в платье, кастинг-директор пригласил Руперта на прослушивание... В 2000-м году Гринт получил заветную роль."
    },
    // harryPotter: 
    {
        nameChar: "Гарри Джеймс Поттер",
        thenPhoto: "act/DanielThen.jpg",
        nowPhoto: "act/DanielNow.jpg",
        actName: "Дэниэл Джейкоб Рэдклифф <br>(Daniel Jacob Radcliffe)",
        occup: "Актер, Продюсер",
        actHeight: "1.65 м",
        birthDay:  "23 июля, 1989 • Лев • 34 года",
        birthPlace: "Лондон, Англия, Великобритания",
        genres: "Комедия, драма, приключения",
        films: "199, 1989 — 2023",
        descr: "В 1999-ом Дэниэл узнал, что киностудия проводит прослушивание юных британцев на роль Гарри Поттера в масштабную высокобюджетную экранизацию бестселлера Джоан Роулинг. Дэниэл Рэдклифф решился примерить на себя роль юного доброго волшебника и пошел на кастинг. Дэниэл поразил продюсеров - мальчик идеально подходил под образ мальчика-сироты Гарри, который вдруг узнает, что на самом деле он особенный и должен учиться в школе волшебства Хоггвардс. Дэниэл был практически сразу утвержден на главную роль.В 2001 году «Гарри Поттер и философский камень» вышел в прокат. Благодаря роли Гарри Поттера Дэниэл Рэдклифф стал невероятно популярным во всем мире и получил космический для подростка гонорар."
    },
    // severusSnape: 
    {
        nameChar: "Северус Снейп",
        thenPhoto: "act/AlanThenjpg.jpg",
        nowPhoto: "act/AlanNow.jpg",
        actName: "Алан Сидни Патрик Рикман <br>(Alan Sidney Patrick Rickman)",
        occup: "Актер, Режиссер, Сценарист, Продюсер",
        actHeight: "1.85 м",
        birthDay:  "21 февраля, 1946 • Рыбы - <b>Дата смерти:</b> 14 января, 2016 • 69 лет",
        birthPlace: "Хаммерсмит, Лондон, Англия, Великобритания",
        genres: "Драма, комедия, фэнтези",
        films: "127, 1975 — 2016",
        descr: "Лучший театральный актер Англии, исполнитель роли Вальмона в «Опасных связях». Является лауреатом премий «Золотой глобус», «Эмми» и BAFTA. В 1996 году сыграл главную роль в фильме «Распутин», за которую получил множество премии и наград. Мировая популярность настигла актер в 55 лет – после того, как на экраны вышел первый фильм о юном волшебнике и необычной школе Хоггвардс по роману Джоан Роулинг «Гарри Поттер и философский камень» (2001). Алан Рикман получил роль злобного профессора после того, как от нее отказался Тим Рот. Рикман сыграл во всех триумфальных продолжениях поттерианы, обретя миллионы поклонников по всему миру."
    },
    // siriusBlack: 
    {     
        nameChar: "Сириус Блэк III",
        thenPhoto: "act/GaryThen.jpg",
        nowPhoto: "act/GaryNow.jpg",
        actName: "Гэри Леонард Олдман <br>(Gary Leonard Oldman)",
        occup: "Актер, Продюсер, Режиссер, Сценарист, Оператор",
        actHeight: "1.74 м",
        birthDay:  "21 марта, 1958 • Овен • 65 лет",
        birthPlace: "Лондон, Англия, Великобритания",
        genres: "Драма, триллер, боевик",
        films: "189, 1979 — 2023",
        descr: "Олдман прославился, благодаря блистательной роли скандально известного басиста группы Sex Pistols Сида Вишеса в фильме «Сид и Нэнси» (1986). Британский актер стал известен и востребован в Голливуде. Уже через год он появился в фильме «Навострите ваши уши» в роли драматурга-гомосексуалиста Джо Ортона, за которую был номинирован на премию BAFTA. Каждый последующий фильм Олдмана собирал только одобрительные и восторженные высказывания о его актерском таланте («Путь 29» (1988), «Преступный закон» (1988), «Розенкранц и Гильденштерн мертвы» (1990), «Состояние иступления» (1990). С 2004 года Олдман получает роль крестного отца Гарри Поттера - Сириуса Блэка в хитовом фильме «Гарри Поттер и узник Азкабана»(2004). Впоследствии Гэри сыграл в других продолжениях фильмов о Гарри Потере."
    },
    // minervaMcGonagall: 
    {
        nameChar: "Минерва Макгонагалл",
        thenPhoto: "act/MaggieThen.jpg",
        nowPhoto: "act/MaggieNow.jpg",
        actName: "Дама Маргарет Натали Смит <br>(Dame Commander Margaret Natalie «Maggie» Smith)",
        occup: "Актриса",
        actHeight: "1.65 м",
        birthDay:  "28 декабря, 1934 • Козерог • 89 лет",
        birthPlace: "Илфорд, Эссекс, Англия, Великобритания",
        genres: "Драма, комедия, мелодрама",
        films: "160, 1947 — 2023",
        descr: "Мэгги Смит – одна из самых выдающихся британских актрис театра, кино и телевидения, пятикратная лауреатка премии BAFTA, двукратный лауреат премии «Оскар» и трёхкратный лауреат премии «Эмми».Но настоящая волна славы накрыла Смит в начале нулевых, после того, как в 2001 году на экраны вышел «Гарри Поттер и философский камень», первая часть саги о маленьком волшебнике. В строгую, но справедливую руководительницу факультета Гриффиндор, профессора Минерву Макгонагалл, влюбились даже те, кто точно не видел ее ни в «Отелло», ни даже в «Капитане Крюке». Критики, правда, тоже хватало: одним юным зрителям 67-летняя актриса казалась слишком молодой для этой роли, другим — слишком старой. Лучшая актриса нашего времени, лауреат множества премий, кавалер ордена кавалеров почета и дама-командор ордена Британской империи. "
    },
    // albusDumbledore: 
    {
        nameChar: "Альбус Персиваль Вульфрик Брайан Дамблдор",
        thenPhoto: "act/MichaelThen.jpg",
        nowPhoto: "act/MichaelNow.jpg",
        actName: "Сэр Майкл Джон Гэмбон <br>(Sir Michael John Gambon)",
        occup: "Актер",
        actHeight: "1.80 м",
        birthDay:  "19 октября, 1940 • Весы - <b>Дата смерти:</b> 27 сентября, 2023 • 82 года",
        birthPlace: "Дублин, Ирландия",
        genres: "рама, комедия, триллер",
        films: "193, 1963 — 2022",
        descr: "популярный британский актер театра и кино. Четырежды лауреат премии BAFTA, номинант на «Золотой глобус» и «Эмми». Получил мировую известность благодаря роли Дамблдора, директора школы волшебников в фантастической эпопее «Гарри Поттер». Наиболее известен по фильмам «Сонная Лощина», «Повар, вор, его жена и ее любовник», «Слоеный торт». Удостоен звания рыцаря Ордена Британской империи.В возрасте 60 лет актер снялся в фильме «Гарри Поттер и узник Азкабана». Он заменил скончавшегося Ричарда Харриса, который воплотил доброго волшебника в фильмах «Гарри Поттер и философский камень» и «Гарри Поттер и Тайная комната». ртист привнес в образ персонажа новые черты, в частности ирландский акцент. Майкл снимался в серии фильмов о Гарри Поттере с 2004 по 2011 год."
    },
    // rubeusHagrid: 
    {
        nameChar: "Рубеус Хагрид",
        thenPhoto: "act/RobbieThen.jpg",
        nowPhoto: "act/RobbieNow.jpg",
        actName: "Энтони Роберт МакМиллан (Робби Колтрейн) <br>(Anthony Robert McMillan OBE (Robbie Coltrane))",
        occup: "Актер, Сценарист, Продюсер, Режиссер",
        actHeight: "1.85 м",
        birthDay:  "30 марта, 1950 • Овен - <b>Дата смерти:</b> 14 октября, 2022 • 72 года",
        birthPlace: "Рутерглен, Саут-Ланаркшир, Шотландия, Великобритания",
        genres: "Комедия, драма, приключения",
        films: "146, 1970 — 2022",
        descr: "В 2001 году впервые сыграл получеловека-полувеликана Хагрида в фильме «Гарри Поттер и философский камень» по одноименному роману Джоан Роулинг. Позже он повторил эту роль во всех без исключения продолжениях франшизы, включая последнюю, которая вышла на экраны в 2011 году. В январе 2022 года он появился в документальном проекте HBO MAX «Возвращение в Хогвартс», посвященном 20-летию поттерианы. «Для меня это конец эпохи, десять лет моей жизни. За это время успели вырасти мои дети. Наследие, которое оставили эти фильмы, перейдет от поколения моих детей к их детям. Так что и через полвека их тоже будут смотреть. Жаль, что меня уже не будет. Но Хагрид будет, да», — сказал Колтрейн в документальном фильме. "
    },
    // voldemort: 
    {
        nameChar: "Волан-де-Морт (Том Марволо Реддл)",
        thenPhoto: "act/RaifThen.jpg",
        nowPhoto: "act/RaifNow.jpg",
        actName: "Рэйф Натаниел Туислтон-Уайкхем-Файнс <br> (Ralph Nathaniel Twisleton-Wykeham-Fiennes)",
        occup: "Актер, Продюсер, Режиссер",
        actHeight: "1.80 м",
        birthDay:  "22 декабря, 1962 • Козерог • 61 год",
        birthPlace: "Ипсвич, Саффолк, Англия, Великобритания",
        genres: "Драма, приключения, комедия",
        films: "178, 1985 — 2023",
        descr: "Британский актер и режиссер. Номинант премии «Оскар». Рэйф Файнс активно снимался в различных фильмах, среди которых можно отметить такие картины, как драмы «Конец романа», «Вкус солнечного света», «Хромофобия», «Белая графиня», триллеры «Паук», «Красный дракон», мелодрама «Госпожа горничная», комедийная драма «Чамскраббер» и остросюжетная лента «Преданный садовник». В 2005 году в очередной части саги про юного волшебника под названием «Гарри Поттер и Кубок огня» (2005) Файнс предстал в образе великого и ужасного Волан-де-Морта. Многочасовой сложный грим сделал актера неузнаваемым и настолько ужасным, что однажды ребенок на съемочной площадке расплакался, увидев злого волшебника. Главный антагонист фэнтези появлялся еще в трех фильмах, причем значимость персонажа все возрастала. Ими стали: «Гарри Поттер и Орден Феникса» (2007), «Гарри Поттер и Дары Смерти: Часть I» (2010), «Гарри Поттер и Дары Смерти: Часть II» (2011)."
    }
];
const actors = document.querySelectorAll(".actor");
const modalCardActor = document.querySelector("#modalCardActor");
const headingActor = document.querySelector("#headingActor");
const descriptionActor = document.querySelector("#descriptionActor");
const thenPhoto = document.querySelector("#then");
const nowPhoto = document.querySelector("#now");
const closeModalActor = document.querySelector("#closeModalActor");




actors.forEach((actor, index) => {

    actor.addEventListener('click', ()=> {
        gsap.to("#modalCardActor", { opacity: 1, duration: 0.5, ease:'power1.in'})
        modalCardActor.style.display = "flex";
        thenPhoto.setAttribute("src", charracters[index].thenPhoto);
        nowPhoto.setAttribute("src", charracters[index].nowPhoto);
        headingActor.innerHTML = charracters[index].actName;
        descriptionActor.innerHTML = ` 
        <b>Имя персонажа:</b> ${charracters[index].nameChar}; <br>
        <b>Имя актера:</b> ${charracters[index].actName}; <br>
        <b>Профессия:</b> ${charracters[index].occup}; <br>
        <b>Рост:</b> ${charracters[index].actHeight}; <br>
        <b>Дата рождения:</b> ${charracters[index].birthDay}; <br>
        <b>Место рождения:</b> ${charracters[index].birthPlace}; <br>
        <b>Жанры:</b> ${charracters[index].genres}; <br>
        <b>Фильмы:</b> ${charracters[index].films}; <br>
        <b>Об актере:</b> ${charracters[index].descr} <br>
        `;
    });
})
closeModalActor.addEventListener('click', () => {
    trailer.setAttribute("src", "" );
    gsap.to("#modalCardActor", { opacity: 0, duration: 0.5, ease:'power1', onComplete:() => {
    modalCardActor.style.display = "none";
}})
});