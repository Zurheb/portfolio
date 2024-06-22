import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Sample translation resources
const resources = {
  en: {
    translation: {
      header: {
        logo: "Behruz",
        About: "Home",
        TechStack: "Tech Stack",
        Project: "Projects",
        Contact: "Contacts"
      },
      about: {
        title: "About Me",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi repudiandae maxime vitae iusto dolorum rem optio soluta fugiat iure deleniti sequi vero voluptatem vel cupiditate sit tempora quibusdam, error delectus! Maxime corporis consectetur nisi iure earum odio dicta temporibus nihil ex labore?",
        moreInfoButton: "Learn more",
        info: {
          name: "Name",
          surname: "Surname",
          patronymic: "Patronymic",
          birthday: "Birthday",
          email: "Email",
          phone: "Phone",
          nationality: "Nationality",
          motherland: "Motherland",
          hobbies: "Hobbies",
          favoriteGenre: "Favorite genre",
          favoriteMusic: "Favorite music"
        }
      }, 
      hero: {
        greeting: "Hi",
        name: "My name is",
        fullName: "Behruz Berdiev",
        profession: "I create websites that save the world"
      },
      section1:{
        paragraph:"My Tech Stack",
        p:"Technologies I’ve been working with recently"
      },
      section2:{
        projects:"Projects",
        p:"Things I’ve built recently",
        projectsname1:"42",
        projectsname2:"Elixer",
        projectsname3:"Spin",
        description1:'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
        description2:'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
        description3:'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
        StartDate:"Start Date",
        EndDate:"End Date",
        LanguagesUsed:"Languages Used",
        data1:"February 2023",
        data2:"March 2023",
        data3:"24 February 2024 ",
        end1:" March 2023",
        end2:"April 2023",
        end3:"May 2023",
        code:"View code",
        live:"Live Preview"
      },
      contact:{
        title:"Contact Me",
        p:"Feel free to reach out to me by filling out the form below.",
        input1:"Your Name",
        input2:"Your Email",
        input3:"Your Message",
        button:"Send Message",
        name:"Name is required",
        email1:"Email is required",
        email2:"Incorrect email",
        mas:"Message is required",
      }
    }
  },
  ru: {
    translation: {
      header: {
        logo: "Бехруз",
        About: "Главная",
        TechStack: "технологический стек",
        Project: "Проекты",
        Contact: "Контакты"
      },
      about: {
        title: "Обо мне",
        description: "Лорем ипсум, долор сит амет консектетур адиписицинг елит. Коммоди репудиандае максима витае иусто долорум рем оптио солута фугиат iure деленити секиу веро волуптатем вел цупидитате сит темпора quibusdam, error delectus! Maxime corporis consectetur nisi iure earum odio dicta temporibus nihil ex labore?",
        moreInfoButton: "Узнать больше",
        info: {
          name: "Имя",
          surname: "Фамилия",
          patronymic: "Отчество",
          birthday: "День рождения",
          email: "Электронная почта",
          phone: "Телефон",
          nationality: "Национальность",
          motherland: "Родина",
          hobbies: "Хобби",
          favoriteGenre: "Любимый жанр",
          favoriteMusic: "Любимая музыка"
        }
      },
      hero: {
        greeting: "Привет",
        name: "Меня зовут",
        fullName: "Бехруз Бердиев",
        profession: "Я создаю веб-сайты, которые спасают мир"
      },
      section1: {
        paragraph: "Мой технологический стек",
        p: "Технологии, с которыми я недавно работал"
      },
      section2: {
        projects: "Проекты",
        p: "Вещи, которые я недавно создал",
        projectsname1: "Проверка интерфейса пользователя/UX",
        projectsname2: "Проект 2",
        projectsname3: "Проект 3",
        description1: 'Место находится недалеко от пляжа Барселонета и остановки автобуса всего в 2 минутах ходьбы и рядом с "Навильо", где вы можете насладиться основной ночной жизнью в Барселоне.',
        description2: 'Место находится недалеко от пляжа Барселонета и остановки автобуса всего в 2 минутах ходьбы и рядом с "Навильо", где вы можете насладиться основной ночной жизнью в Барселоне.',
        description3: 'Место находится недалеко от пляжа Барселонета и остановки автобуса всего в 2 минутах ходьбы и рядом с "Навильо", где вы можете насладиться основной ночной жизнью в Барселоне.',
        StartDate: "Дата начала",
        EndDate: "Дата окончания",
        LanguagesUsed: "Используемые языки",
        data1: "Февраль 2023",
        data2: "Март 2023",
        data3: "Январь 2023",
        end1: "Март 2023",
        end2: "Апрель 2023",
        end3: "Май 2023",
        code: "Просмотреть код",
        live: "Прямой просмотр"
      },
      contact: {
        title: "Свяжитесь со мной",
        p: "Не стесняйтесь связаться со мной, заполнив форму ниже.",
        input1: "Ваше имя",
        input2: "Ваш Email",
        input3: "Ваше сообщение",
        button: "Отправить сообщение",
        name:"Имя обязательно",
        email1:"Email обязателен",
        email2:"Некорректный email",
        mas:"Сообщение обязательно",
      },
    }
  },
  uz: {
    translation: {
      header: {
        logo: "Behruz",
        About: "Bosh sahifa",
        TechStack: "Texnologiya steki",
        Project: "Loyihalar",
        Contact: "Aloqalar"
      },
      about: {
        title: "Men haqimda",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi repudiandae maxime vitae iusto dolorum rem optio soluta fugiat iure deleniti sequi vero voluptatem vel cupiditate sit tempora quibusdam, error delectus! Maxime corporis consectetur nisi iure earum odio dicta temporibus nihil ex labore?",
        moreInfoButton: "Ko'proq ma'lumot",
        info: {
          name: "Ism",
          surname: "Familiya",
          patronymic: "Otasi",
          birthday: "Tug'ilgan kuni",
          email: "Elektron pochta",
          phone: "Telefon",
          nationality: "Millat",
          motherland: "Vatan",
          hobbies: "Xobbi",
          favoriteGenre: "Sevimli janr",
          favoriteMusic: "Sevimli musiqa"
        }
      },
      hero: {
        greeting: "Salom",
        name: " Meni Ismim",
        fullName: "Behruz Berdiev",
        profession: "Men dunyoni saqlaydigan veb-saytlar yarataman"
      },
      section1: {
        paragraph: "Mening texnologiya stapim",
        p: "Men oxir-oxiriga ishlagan texnologiyalar"
      },
      section2: {
        projects: "Loyihalar",
        p: "Men oxir-oxiriga qurghan narsalar",
        projectsname1: "UI/UX Tekshiruv tekshiruvi",
        projectsname2: "Loyiha 2",
        projectsname3: "Loyiha 3",
        description1: 'Joy Barceloneta Beachga yaqin va avtobus o`chilgan joyga faqat 2 daqiqa uzluqda va "Naviglio"ga yaqin, bu erda Barselonaning asosiy kechki hayotidan foydalanishingiz mumkin.',
        description2: 'Joy Barceloneta Beachga yaqin va avtobus o`chilgan joyga faqat 2 daqiqa uzluqda va "Naviglio"ga yaqin, bu erda Barselonaning asosiy kechki hayotidan foydalanishingiz mumkin.',
        description3: 'Joy Barceloneta Beachga yaqin va avtobus o`chilgan joyga faqat 2 daqiqa uzluqda va "Naviglio"ga yaqin, bu erda Barselonaning asosiy kechki hayotidan foydalanishingiz mumkin.',
        StartDate: "Boshlang‘ich sanasi",
        EndDate: "Tugash sanasi",
        LanguagesUsed: "Foydalanilgan tillar",
        data1: "Febrayr 2023",
        data2: "Mart 2023",
        data3: "Yanvar 2023",
        end1: "Mart 2023",
        end2: "Aprel 2023",
        end3: "May 2023",
        code: "Kodni ko'rish",
        live: "Jonli ko‘rish"
      },
      contact: {
        title: "Menga murojaat qiling",
        p: "Quyidagi shaklarni to'ldirib menga murojaat qiling.",
        input1: "Ismingiz",
        input2: "Elektron pochta",
        input3: "Xabar",
        button: "Xabar yuboring",
        name:"Ism majburiy",
        email1:"Email majburiy",
        email2:" Noto‘g‘ri email",
        mas:"Xabar majburiy",
      },
    }
  },
  es: {
    translation: {
      header: {
        logo: "Behruz",
        About: "Inicio",
        TechStack: "Tecnologías",
        Project: "Proyectos",
        Contact: "Contactos"
      },
      about: {
        title: "Sobre mí",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi repudiandae maxime vitae iusto dolorum rem optio soluta fugiat iure deleniti sequi vero voluptatem vel cupiditate sit tempora quibusdam, error delectus! Maxime corporis consectetur nisi iure earum odio dicta temporibus nihil ex labore?",
        moreInfoButton: "Saber más",
        info: {
          name: "Nombre",
          surname: "Apellido",
          patronymic: "Patronímico",
          birthday: "Cumpleaños",
          email: "Correo electrónico",
          phone: "Teléfono",
          nationality: "Nacionalidad",
          motherland: "Patria",
          hobbies: "Pasatiempos",
          favoriteGenre: "Género favorito",
          favoriteMusic: "Música favorita"
        }
      },
      hero: {
        greeting: "Hola",
        name: "Mi nombre es",
        fullName: "Behruz Berdiev",
        profession: "Creo sitios web que salvan el mundo"
      },
      section1: {
        paragraph: "Mi pila tecnológica",
        p: "Tecnologías con las que he estado trabajando recientemente"
      },
      section2: {
        projects: "Proyectos",
        p: "Cosas que he construido recientemente",
        projectsname1: "Revisión de interfaz de usuario/UX",
        projectsname2: "Proyecto 2",
        projectsname3: "Proyecto 3",
        description1: "El lugar está cerca de la playa de Barceloneta y la parada de autobús a solo 2 minutos a pie y cerca de 'Naviglio' donde puedes disfrutar de la principal vida nocturna en Barcelona.",
        description2: "El lugar está cerca de la playa de Barceloneta y la parada de autobús a solo 2 minutos a pie y cerca de 'Naviglio' donde puedes disfrutar de la principal vida nocturna en Barcelona.",
        description3: "El lugar está cerca de la playa de Barceloneta y la parada de autobús a solo 2 minutos a pie y cerca de 'Naviglio' donde puedes disfrutar de la principal vida nocturna en Barcelona.",
        StartDate: "Fecha de inicio",
        EndDate: "Fecha de finalización",
        LanguagesUsed: "Idiomas utilizados",
        data1: "Febrero de 2023",
        data2: "Marzo de 2023",
        data3: "Enero de 2023",
        end1: "Marzo de 2023",
        end2: "Abril de 2023",
        end3: "Mayo de 2023",
        code: "Ver código",
        live: "Vista previa en vivo"
      },
      contact: {
        title: "Contáctame",
        p: "No dudes en ponerte en contacto conmigo completando el formulario a continuación.",
        input1: "Tu nombre",
        input2: "Tu correo electrónico",
        input3: "Tu mensaje",
        button: "Enviar mensaje",
        name:"El nombre es obligatorio",
        email1:"El correo electrónico es obligatorio",
        email2:"Correo electrónico incorrecto",
        mas:"El mensaje es obligatorio",
      },
    }
  },
  fr: {
    translation: {
      header: {
        
        About: "Accueil",
        TechStack: "Technologies",
        Project: "Projets",
        Contact: "Contacts"
      },
      about: {
        title: "À propos de moi",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi repudiandae maxime vitae iusto dolorum rem optio soluta fugiat iure deleniti sequi vero voluptatem vel cupiditate sit tempora quibusdam, error delectus! Maxime corporis consectetur nisi iure earum odio dicta temporibus nihil ex labore?",
        moreInfoButton: "En savoir plus",
        info: {
          name: "Nom",
          surname: "Nom de famille",
          patronymic: "Patronyme",
          birthday: "Anniversaire",
          email: "Courriel",
          phone: "Téléphone",
          nationality: "Nationalité",
          motherland: "Patrie",
          hobbies: "Passe-temps",
          favoriteGenre: "Genre préféré",
          favoriteMusic: "Musique préférée"
        }
      },
      hero: {
        greeting: "Salut",
        name: "Je m'appelle",
        fullName: "Behruz Berdiev",
        profession: "Je crée des sites web qui sauvent le monde",
      },
      section1: {
        paragraph: "Mon stack technologique",
        p: "Technologies avec lesquelles j'ai récemment travaillé"
      },
      section2: {
        projects: "Projets",
        p: "Choses que j'ai récemment construites",
        projectsname1: "Examen de l'interface utilisateur/UX",
        projectsname2: "Projet 2",
        projectsname3: "Projet 3",
        description1: "L'endroit est proche de la plage de Barceloneta et de l'arrêt de bus à seulement 2 minutes à pied et près de 'Naviglio' où vous pouvez profiter de la principale vie nocturne à Barcelone.",
        description2: "L'endroit est proche de la plage de Barceloneta et de l'arrêt de bus à seulement 2 minutes à pied et près de 'Naviglio' où vous pouvez profiter de la principale vie nocturne à Barcelone.",
        description3: "L'endroit est proche de la plage de Barceloneta et de l'arrêt de bus à seulement 2 minutes à pied et près de 'Naviglio' où vous pouvez profiter de la principale vie nocturne à Barcelone.",
        StartDate: "Date de début",
        EndDate: "Date de fin",
        LanguagesUsed: "Langues utilisées",
        data1: "Février 2023",
        data2: "Mars 2023",
        data3: "Janvier 2023",
        end1: "Mars 2023",
        end2: "Avril 2023",
        end3: "Mai 2023",
        code: "Voir le code",
        live: "Aperçu en direct",
    },
    contact: {
      title: "Contactez-moi",
      p: "N'hésitez pas à me contacter en remplissant le formulaire ci-dessous.",
      input1: "Votre nom",
      input2: "Votre adresse e-mail",
      input3: "Votre message",
      button: "Env",
      name:"Le nom est obligatoire",
      email1:"L'email est obligatoire",
      email2:"Email incorrect",
      mas:"Le message est obligatoire",
    },
  }
}
}

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false // Not needed for React
    }
  });

export default i18n;
