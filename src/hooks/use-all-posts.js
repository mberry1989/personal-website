import { graphql, useStaticQuery } from "gatsby";

export const useAllPosts = () => {
    const { allKontentItemExternalArticle, allKontentItemPost } =
      useStaticQuery(graphql`
        query {
          allKontentItemExternalArticle(
            sort: { fields: elements___date___value, order: DESC }
          ) {
            nodes {
              elements {
                title {
                  value
                }
                date {
                  value(formatString: "MMMM Do, YYYY")
                }
                host {
                  value {
                    name
                  }
                }
                image {
                  value {
                    system {
                      codename
                      id
                      type
                    }
                    ... on kontent_item_media {
                      id
                      system {
                        codename
                        id
                        type
                      }
                      elements {
                        alt {
                          value
                        }
                        asset {
                          value {
                            description
                            height
                            name
                            size
                            type
                            url
                            width
                          }
                        }
                      }
                    }
                  }
                }
              }
              system {
                id
                type
              }
            }
          }
          allKontentItemPost(
            sort: { fields: elements___date___value, order: DESC }
          ) {
            nodes {
              elements {
                category {
                  value {
                    name
                  }
                }
                date {
                  value(formatString: "MMMM Do, YYYY")
                }
                title {
                  value
                }
                topic {
                  value {
                    name
                  }
                }
                image {
                  value {
                    system {
                      codename
                      id
                      type
                    }
                    ... on kontent_item_media {
                      id
                      system {
                        codename
                        id
                        type
                      }
                      elements {
                        alt {
                          value
                        }
                        asset {
                          value {
                            description
                            height
                            name
                            size
                            type
                            url
                            width
                          }
                        }
                      }
                    }
                  }
                }
              }
              system {
                id
                type
              }
            }
          }
        }
      `);
    return [allKontentItemExternalArticle, allKontentItemPost]
}

