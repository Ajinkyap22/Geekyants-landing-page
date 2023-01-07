// hero
export const heroSection = {
  query: `
      query MyQuery {
        ban_ner {
          id
          options
          header
          button
          subheading
        }
      }`,
};

// trusted by
export const partners = {
  query: `query MyQuery {
        trustedPartner {
          partners
        }
      }`,
};

// what we do
export const whatWeDo = {
  query: `
      query MyQuery {
        work {
          id
          icon
          heading
          description
        }
      }`,
};

// products and open source
export const products = {
  query: `query MyQuery {
          sourceProducts {
            description
            heading
            icon
            id
          }
        }
        `,
};

// communities
export const communities = {
  query: `query MyQuery {
        communities {
          communities
          id
        }
      }`,
};

// insights
export const insights = {
  query: `query MyQuery {
      insights {
        description
        date
        id
        image
        title
      }
    }`,
};

// meetups
export const communityMeetups = {
  query: `
      query MyQuery {
        communityMeetup {
          meetups
        }
      }`,
};

// footer
export const footer = {
  query: `query MyQuery {
      footer {
        company
        enagagement
        hireDevelopers
        id
        quickLinks
        awards
        addresses
        socialIcons
      }
    }`,
};
