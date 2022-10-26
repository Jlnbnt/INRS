import { gql } from "@apollo/client";

export const GET_NEWS_PREVIEWS = gql`
  query GetPreviewPosts($reactQuery: String) {
    actualites(where: { reactQuery: $reactQuery }, first: 50) {
      nodes {
        actualites_acf {
          mainImage {
            altText
            sourceUrl(size: THUMBNAIL)
          }
          tag
          mainTitle
        }
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        date
        title
        id
      }
    }
  }
`;

export const GET_EVENTS_PREVIEWS = gql`
  query GetPreviewPosts($reactQuery: String) {
    evenements(where: { reactQuery: $reactQuery }, first: 50) {
      nodes {
        evenements_acf {
          mainImage {
            altText
            sourceUrl(size: THUMBNAIL)
          }
          eventprice
          tag
          mainTitle
          eventDate
          eventHour
          inscriptionLink
          eventPlace
        }
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        title
        id
      }
    }
  }
`;

export const GET_NEWS_BY_ID = gql`
  query GetNewsById($id: ID!) {
    actualite(id: $id) {
      date
      title
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
      actualites_acf {
        mainImage {
          altText
          sourceUrl(size: _1536X1536)
        }
        mainTitle
        tag
        maintext
      }
    }
  }
`;

export const GET_EVENT_BY_ID = gql`
  query GetEventById($id: ID!) {
    evenement(id: $id) {
      title
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
      evenements_acf {
        mainImage {
          altText
          sourceUrl(size: _1536X1536)
        }
        mainTitle
        tag
        maintext
        eventDate
        eventHour
        eventprice
        inscriptionLink
      }
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    layout(id: $id) {
      title
      layouts_acf {
        mainImage {
          altText
          sourceUrl(size: _1536X1536)
        }
        mainTitle
        subTitle
        maintext
      }
      date
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
    }
  }
`;

export const GET_TEAM = gql`
  query GetTeam {
    equipes {
      nodes {
        id
        equipe_acf {
          nom
          prenom
          photo {
            altText
            sourceUrl(size: THUMBNAIL)
          }
          poste
          interets
          description
          socials {
            instagram
            linkedin
            twitter
          }
        }
      }
    }
  }
`;
export const GET_QUOTES = gql`
  query GetQuotes {
    avisClients {
      nodes {
        avis_acf {
          commentaire
          entreprise
          mainImage {
            altText
            sourceUrl(size: THUMBNAIL)
          }
          prenom
          nom
        }
        id
      }
    }
  }
`;

export const GET_ABOUT_FOOTER = gql`
  query GetPostByTitle {
    layouts(where: { search: "A propos - Footer" }) {
      nodes {
        title
        miseEnPage {
          apropos {
            footer {
              partenaires {
                icone1 {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
                icone2 {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
                icone3 {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
                icone4 {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
                icone5 {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
                icone6 {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
              }
              projets {
                projet1 {
                  nombre
                  texte
                  titre
                }
                projet2 {
                  nombre
                  texte
                  titre
                }
                projet3 {
                  nombre
                  texte
                  titre
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_ABOUT_NEWSLETTER = gql`
  query GetNewsletter {
    layouts(where: { search: "Newsletter" }) {
      nodes {
        miseEnPage {
          apropos {
            newsletter {
              texte
              titre
              input {
                bouton
                placeholder
                texte
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ABOUT_SERVICES = gql`
  query GetServices {
    layouts(where: { search: "Services" }) {
      nodes {
        miseEnPage {
          apropos {
            services {
              carte {
                texte
                sousTitre
                image {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
              }
              gridServices {
                service1 {
                  texte
                  titre
                  icone {
                    altText
                    sourceUrl(size: THUMBNAIL)
                  }
                }
                service2 {
                  texte
                  titre
                  icone {
                    altText
                    sourceUrl(size: THUMBNAIL)
                  }
                }
                service3 {
                  texte
                  titre
                  icone {
                    altText
                    sourceUrl(size: THUMBNAIL)
                  }
                }
                service4 {
                  texte
                  titre
                  icone {
                    altText
                    sourceUrl(size: THUMBNAIL)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_ABOUT_HEADER = gql`
  query GetHeader {
    layouts(where: { search: "Header" }) {
      nodes {
        miseEnPage {
          apropos {
            header {
              titreLiens
              baselineLight
              baselineGras
              liens {
                facebook
                github
                instagram
                twitter
              }
              backgroundLight {
                altText
                sourceUrl(size: _2048X2048)
              }
              backgroundDark {
                altText
                sourceUrl(size: _2048X2048)
              }
            }
          }
        }
      }
    }
  }
`;

export const SEND_CONTACT_FORM = gql`
  mutation SendContactForm(
    $email: String = ""
    $phone: String = ""
    $message: String = ""
    $firstName: String = ""
    $lastName: String = ""
  ) {
    contactSubmission(
      input: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        message: $message
        phone: $phone
      }
    ) {
      data
      success
    }
  }
`;
export const GET_JOB_PREVIEW = gql`
  query GetJobPreview {
    jobs {
      nodes {
        jobs_acf {
          titre
          entreprise {
            nom
            lieu
            logo {
              altText
              sourceUrl(size: THUMBNAIL)
            }
          }
          remote
        }
        id
        date
      }
    }
  }
`;

export const GET_JOB_BY_ID = gql`
  query GetJobById($id: ID!) {
    job(id: $id) {
      title
      date
      jobs_acf {
        domaine
        experience
        remote
        texte
        titre
        entreprise {
          editeur {
            avatar {
              altText
              sourceUrl(size: THUMBNAIL)
            }
            nom
            linkedin
            poste
            prenom
          }
          lieu
          nom
          nombre
          logo {
            altText
            sourceUrl(size: THUMBNAIL)
          }
        }
        typeDeTravail
      }
      date
    }
  }
`;

export const SEND_JOB_FORM = gql`
  mutation SendContactForm(
    $email: String = ""
    $phone: String = ""
    $message: String = ""
    $firstName: String = ""
    $lastName: String = ""
    $file: String = ""
    $intitule: String = ""
  ) {
    jobSubmission(
      input: {
        email: $email
        message: $message
        phone: $phone
        firstName: $firstName
        lastName: $lastName
        file: $file
        intitule: $intitule
      }
    ) {
      data
      success
    }
  }
`;

export const GET_VIDEO = gql`
  query NewQuery {
    layouts(where: { title: "Accueil - Video" }) {
      edges {
        node {
          miseEnPage {
            accueil {
              video {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_HOMEPAGE_EXPERTISES = gql`
  query GetExpertises {
    layouts(where: { search: "Expertises" }) {
      nodes {
        miseEnPage {
          accueil {
            expertises {
              carte {
                sousTitre
                texte
                image {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
              }
              gridServices {
                fieldGroupName
                expertise1 {
                  texte
                  titre
                  icone {
                    altText
                    sourceUrl(size: THUMBNAIL)
                  }
                }
                expertise2 {
                  texte
                  titre
                  icone {
                    altText
                    sourceUrl(size: THUMBNAIL)
                  }
                }
                expertise3 {
                  texte
                  titre
                  icone {
                    altText
                    sourceUrl(size: THUMBNAIL)
                  }
                }
                expertise4 {
                  texte
                  titre
                  icone {
                    altText
                    sourceUrl(size: THUMBNAIL)
                  }
                }
                expertise5 {
                  texte
                  titre
                  icone {
                    altText
                    sourceUrl(size: THUMBNAIL)
                  }
                }
                expertise6 {
                  texte
                  titre
                  icone {
                    altText
                    sourceUrl(size: THUMBNAIL)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_HOMEPAGE_FOOTER = gql`
  query GetHomePageFooter {
    layouts(where: { search: "Accueil - Footer" }) {
      nodes {
        title
        miseEnPage {
          accueil {
            footer {
              partenaires {
                icone1 {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
                icone2 {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
                icone3 {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
                icone4 {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
                icone5 {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
                icone6 {
                  altText
                  sourceUrl(size: THUMBNAIL)
                }
              }
              projets {
                projet1 {
                  nombre
                  texte
                  titre
                }
                projet2 {
                  nombre
                  texte
                  titre
                }
                projet3 {
                  nombre
                  texte
                  titre
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_BLOGS_PREVIEWS = gql`
  query GetPreviewPosts($reactQuery: String) {
    blogs(where: { reactQuery: $reactQuery }, first: 50) {
      nodes {
        blog_acf {
          mainImage {
            altText
            sourceUrl(size: THUMBNAIL)
          }
          tag
          mainTitle
        }
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        date
        title
        id
      }
    }
  }
`;

export const GET_LATEST_BLOG = gql`
  query GetPreviewPosts {
    blogs(first: 1) {
      nodes {
        blog_acf {
          mainImage {
            altText
            sourceUrl(size: _2048X2048)
          }
        }
        author {
          node {
            name
          }
        }
        title
        id
      }
    }
  }
`;
export const GET_BLOG_BY_ID = gql`
  query GetNewsById($id: ID!) {
    blog(id: $id) {
      date
      title
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
      blog_acf {
        mainImage {
          altText
          sourceUrl(size: _1536X1536)
        }
        mainTitle
        tag
        maintext
      }
    }
  }
`;
