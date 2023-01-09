// hero
export const heroSection = {
  query: `
    query MyQuery {
      hero {
        id
        heading
        subheading
        subheading_options
        button
        nav_links
      }
    }`,
};

// trusted by
export const partners = {
  query: `query MyQuery {
    trusted_by {
      id
      heading
      subheading
      button
      partners
    }
  }`,
};

// what we do
export const whatWeDo = {
  query: `
    query MyQuery {
      what_we_do {
        id
        heading
        subheading
        button
        work
      }
    }`,
};

// products and open source
export const products = {
  query: `
    query MyQuery {
      products {
        id
        heading
        subheading
        button
        products
      }
    }`,
};

// tech
export const tech = {
  query: `
    query MyQuery {
      tech {
        id
        heading
        subheading
        button
        categories
        top
        web
        mobile
        backend
        design
        testing
      }
    }`,
};

// communities
export const communities = {
  query: `
    query MyQuery {
      communities {
        id
        heading
        subheading
        button
        communities
      }
    }`,
};

// insights
export const insights = {
  query: `
    query MyQuery {
      insights {
        id
        heading
        subheading
        buttons
        cards
      }
    }`,
};

// meetups
export const meetups = {
  query: `
    query MyQuery {
      meetups {
        id
        heading
        subheading
        button
        cards
      }
    }`,
};

// lets build
export const letsBuild = {
  query: `
    query MyQuery {
      lets_build {
        button
        heading_bold
        heading_light
        id
        subheading
      }
    }`,
};

// footer
export const footer = {
  query: `
    query MyQuery {
      footer {
        id
        logo
        description
        brands
        social_icons
        quick_links
        hire
        model
        company
        awards
        contacts
        copyright
        privacy
        tnc
      }
    }`,
};
