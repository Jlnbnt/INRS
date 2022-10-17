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

export const GET_POST_BY_TITLE = gql`
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
