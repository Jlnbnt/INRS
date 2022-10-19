import { gql } from "@apollo/client";

export const GET_NEWS_PREVIEWS = gql`
  query GetPreviewPosts($reactQuery: String) {
    actualites(where: { reactQuery: $reactQuery }) {
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
    evenements(where: { reactQuery: $reactQuery }) {
      nodes {
        evenements_acf {
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

export const GET_NEWS_BY_ID = gql`
  query GetNewsById($id: ID!) {
    actualite(id: $id) {
      title
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
      date
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
      date
      evenements_acf {
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

/* export const GET_POST_BY_TITLE = gql`
  query GetPostByTitle($title: String = "Deuxième article") {
    layouts(where: { title: $title }) {
      nodes {
        title
        id
        layouts_acf {
          mainImage {
            altText
            sourceUrl(size: _1536X1536)
          }
          mainTitle
          subTitle
          subTitleSpan
          thirdTitle
          thirdTitleSpan
        }
      }
    }
  }
`; */

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

export const GET_ALL_HIGHLIGHTS = gql`
  query GetPostByTitle(
    $article1: Boolean!
    $title: String!
    $article2: Boolean!
  ) {
    layouts(where: { title: $title }) {
      nodes {
        miseEnPage {
          accueil {
            article1 @include(if: $article1) {
              baselineGras
              baselineLight
              contenu
              lienGras
              lienLight
              titre
              image {
                altText
                sourceUrl(size: _2048X2048)
              }
            }
            article2 @include(if: $article2) {
              baselineGras
              baselineLight
              contenu
              lienGras
              lienLight
              titre
              image {
                altText
                sourceUrl(size: _2048X2048)
              }
            }
          }
        }
        id
      }
    }
  }
`;

export const GET_SINGLE_HIGHLIGHTS = gql`
  query GetPostByTitle($article1: Boolean!, $id: ID!, $article2: Boolean!) {
    layout(id: $id) {
      date
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
      miseEnPage {
        accueil {
          article1 @include(if: $article1) {
            baselineGras
            baselineLight
            contenu
            lienGras
            lienLight
            titre
            image {
              altText
              sourceUrl(size: _2048X2048)
            }
          }
          article2 @include(if: $article2) {
            baselineGras
            baselineLight
            contenu
            lienGras
            lienLight
            titre
            image {
              altText
              sourceUrl(size: _2048X2048)
            }
          }
        }
      }
      id
    }
  }
`;
export const GET_ABOUT_FOOTER = gql`
  query GetPostByTitle {
    layouts(where: { search: "Footer" }) {
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
