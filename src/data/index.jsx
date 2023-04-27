import styled from 'styled-components'

export const homeDiv = (id, title, bgColor) => {
  const DIV = styled.div`
    &:hover {
      box-shadow: 2px 2px 25px ${bgColor};
      transition: box-shadow 500ms;
    }
  `
  return (
    <div
      className={`col-12 col-md-6 col-lg-3 ${
        bgColor !== 'white' ? 'text-white' : null
      }`}
      key={id}
    >
      <DIV
        className="card h-100 row gx-0 gx-md-1  mb-5 "
        style={{ backgroundColor: bgColor }}
      >
        <div className="card-body row align-items-center ">
          <h5 className="card-title col-12">{title}</h5>

          <p className="card-text col-12 fw-light">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>

          <a
            href="#"
            className={`card-link  fw-light ${
              bgColor !== 'white' ? ' text-white' : 'text-dark'
            }`}
          >
            Voir plus
          </a>
        </div>
      </DIV>
    </div>
  )
}

export const homeContainer = [
  {
    id: 'Service-Client',
    title: 'Service client amical 24h/24 et 7j/7',
    bgColor: 'white',
  },

  {
    id: 'Horaire',
    title: 'Pas de plages horaires, réservez quand vous voulez',
    bgColor: '#2abbca',
  },

  {
    id: 'Prix',
    title: 'Prix ​​abordable et initial',
    bgColor: '#e5521d',
  },

  {
    id: 'Professionnalisme',
    title: 'Des professionnels contrôlés et sélectionnés',
    bgColor: 'white',
  },
]

export const CapacitiesContent = [
  {
    id: 'marketing',
    cover:
      'https://www.o-communication.com/wp-content/uploads/2019/03/strategie-de-marque-agence-paris-pilotage.jpg',
    title: 'STRATÉGIE DE MARQUE',
    cap: [
      {
        ids: 'audit',
        text: 'Audit du capital marque',
      },
      {
        ids: 'analyse',
        text: "Analyse d'audience        ",
      },
      {
        ids: 'examen',
        text: 'Examen concurrentiel',
      },
      {
        ids: 'direction',
        text: 'Direction stratégique',
      },
    ],
  },

  {
    id: 'identity',
    cover:
      'https://www.pixartprinting.fr/blog/wp-content/uploads/2019/07/brand_id-450x250.png',
    title: 'IDENTITÉ DE MARQUE',
    cap: [
      {
        ids: 'position',
        text: 'Positionnement visuel',
      },
      {
        ids: 'système',
        text: "Système d'identité visuelle",
      },
      {
        ids: 'guide',
        text: "Guides d'icônes et d'illustrations",
      },
      {
        ids: 'demande',
        text: 'Demande de marque',
      },
    ],
  },

  {
    id: 'strat',
    cover:
      'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/12/Digital-marketing-trends-2022.jpg?auto=format&q=60&w=1860&h=1395&fit=crop&crop=faces',
    title: 'MEILLEUR STRATÉGIE',
    cap: [
      {
        ids: 'verbal',
        text: 'Identité verbale',
      },
      {
        ids: 'slogan',
        text: 'Exploration du slogan',
      },
      {
        ids: 'communication',
        text: 'Guide du style de communication',
      },
    ],
  },
]

export const CapacitiesContainer = () => {
  return (
    <>
      {CapacitiesContent.map((item) => (
        <div key={item.id} className="col col-md-6 col-lg-4 mb-5 mb-md-0">
          <div className="card p-2 rounded-4 h-100">
            <img
              src={item.cover}
              className="card-img-top rounded-3"
              alt={item.title}
              style={{ height: '150px' }}
            />
            <div className="card-body mt-2">
              <h5 className="card-title" style={{ color: '#e5521d ' }}>
                {item.title}
              </h5>

              <ul className="card-text fw-light">
                {item.cap.map((capItem) => (
                  <li key={capItem.ids} className="my-3">
                    {capItem.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export const AProposContent = [
  {
    id: '1',
    level: '50%',
    bgColor: '#999999',
  },
  {
    id: '2',
    level: '17%',
    bgColor: '#2abbca',
  },
  {
    id: '3',
    level: '20%',
    bgColor: '#2abbca',
  },
  {
    id: '4',
    level: '13%',
    bgColor: '#e5521d',
  },
]

export const AProposContainer = (id, level, bgColor) => {
  return (
    <div className="col-12 col-md-12 col-lg-6  p-2 text-white" key={id}>
      <div className="p-2 rounded-2" style={{ backgroundColor: bgColor }}>
        <div style={{ fontSize: '4em' }} className="text-center fw-bold">
          {level}
        </div>
        <p className="fw-light text-center">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>
      </div>
    </div>
  )
}

export const AvisContent = [
  {
    id: '1',
    cover:
      'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/c454083ee16655b8a64f3114/26ad3ed2-3d8c-4eb0-9ed2-35095c7be833.jpg',
    name: 'Jonh Alméda',
    title: 'PDG Société',
  },

  {
    id: '2',
    cover:
      'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/1b2ae244440851e99b390629/ghghhg.jpg',
    name: 'Franck Kinney',
    title: 'Directeur financier',
  },

  {
    id: '3',
    cover:
      'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/af3da5f0a6e2510f966a2b2b/jj.jpg',
    name: 'Stella Larson',
    title: 'secrétaire',
  },

  {
    id: '4',
    cover:
      'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a4c549fb3e6d5406ab3e6696/ghh3-min.jpg',
    name: 'Paul Smith',
    title: 'Directeur commercial',
  },
]

export const AvisConatiner = (id, cover, name, title) => {
  return (
    <div className="card col-12 col-md-6 col-lg-4 border-0 m-4 " key={id}>
      <div className="card-body row rounded-5">
        <div className="col-12 col-md-4">
          <img src={cover} alt={id} className="w-100" />
        </div>

        <div className="col-12 col-md mt-4 mt-md-0">
          <p className="card-text fw-light" style={{ color: '#828282' }}>
            "Proin sed libero enim sed faucibus turpis. At imperdiet dui
            accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra
            diam sit amet nisl."
          </p>
          <h5 className="card-title mb-4">{name}</h5>
          <h6
            className="card-subtitle mb-2 text-body-secondary"
            style={{ color: '#828282' }}
          >
            {title}
          </h6>
        </div>
      </div>
    </div>
  )
}

export const ContactContent = [
  {
    id: '1',
    icone: 'bi bi-geo-alt-fill ',
    title: 'Emplacement de notre bureau',
    text: `The Interior Design Studio Company
    The Courtyard, ​Al Quoz 1,​ Colorado, ​ États-Unis`,
  },

  {
    id: '2',
    icone: 'bi bi-telephone-fill ',
    title: 'Téléphone (fixe)',
    text: 'XXX-XXX-XXX',
  },
]

export const ContactContainer = (id, icone, title, text) => {
  return (
    <div key={id} className=" row my-3">
      <i
        className={` fs-2 col-3 col-md-2 p-1 text-center ${icone}`}
        style={{ color: '#d57958' }}
      />

      <span className="col-9 col-md d-none d-md-block">
        <h4>{title}</h4>
        <p className="fw-light">{text}</p>
      </span>
      <span className="col-9 col-md d-md-none d-block">
        <h5>{title}</h5>
        <p className="fw-light" style={{ fontSize: '0.8em' }}>
          {text}
        </p>
      </span>
    </div>
  )
}

export const MenuContent = [
  {
    id: '1',
    title: 'Accueil',
    href: '#accueil',
  },

  {
    id: '2',
    title: 'Nos capacités',
    href: '#capacities',
  },

  {
    id: '3',
    title: 'A Propos',
    href: '#aboutus',
  },

  {
    id: '4',
    title: 'Avis de nos clients',
    href: '#avisprosect',
  },
  {
    id: '5',
    title: 'Contactez-nous',
    href: '#contact',
  },
]
