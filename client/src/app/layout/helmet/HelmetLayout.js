import React from 'react';
import { withRouter } from 'react-router';
import Helmet from 'react-helmet';
import seo from '@app/const/const';
import { any, string, shape } from 'prop-types';

function HelmetLayout(props) {
  const getAttrs = rest => ({
    lang: 'en',
    itemscope: undefined,
    itemtype: `http://schema.org/${rest.schema || 'WebPage'}`
  });

  const getTitle = rest =>
    rest.title
      ? rest.title + seo.defaultSep + seo.defaultTitle
      : seo.defaultTitle;

  const getLinks = (a, pathname) => [
    {
      rel: 'canonical',
      href: seo.SITE_URL + pathname
    }
  ];

  const getMetaTags = ({
    title,
    description,
    image,
    noCrawl,
    published,
    updated,
    category,
    tags
  }) => {
    const theTitle = title
      ? (title + seo.defaultSep + seo.defaultTitle).substring(0, 60)
      : seo.defaultTitle;
    const theDescription = description
      ? description.substring(0, 155)
      : seo.defaultDescription;
    const theImage = image ? `${SITE_URL}${image}` : seo.defaultImage;

    const metaTags = [
      { itemprop: 'name', content: theTitle },
      { itemprop: 'description', content: theDescription },
      { itemprop: 'image', content: theImage },
      { name: 'description', content: theDescription }
      // { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'twitter:site', content: defaultTwitter },
      // { name: 'twitter:title', content: theTitle },
      // { name: 'twitter:description', content: theDescription },
      // { name: 'twitter:creator', content: twitter || defaultTwitter },
      // { name: 'twitter:image:src', content: theImage },
      // { property: 'og:title', content: theTitle },
      // { property: 'og:type', content: contentType || 'website' },
      // { property: 'og:url', content: SITE_URL + pathname },
      // { property: 'og:image', content: theImage },
      // { property: 'og:description', content: theDescription },
      // { property: 'og:site_name', content: defaultTitle },
      // { property: 'fb:app_id', content: FACEBOOK_APP_ID }
    ];

    if (noCrawl) {
      metaTags.push({ name: 'robots', content: 'noindex, nofollow' });
    }
    if (published) {
      metaTags.push({ name: 'article:published_time', content: published });
    }
    if (updated) {
      metaTags.push({ name: 'article:modified_time', content: updated });
    }
    if (category) {
      metaTags.push({ name: 'article:section', content: category });
    }
    if (tags) {
      metaTags.push({ name: 'article:tag', content: tags });
    }

    return metaTags;
  };

  const { children, ...rest } = props;

  return (
    <>
      <Helmet
        htmlAttributes={getAttrs(rest)}
        title={getTitle(rest)}
        link={getLinks(rest, props.location.pathname)}
        meta={getMetaTags(rest, props.location.pathname)}
      />
      {children}
    </>
  );
}

HelmetLayout.propTypes = {
  children: shape({}),
  location: any,
  className: string,
  id: string
};

export default withRouter(HelmetLayout);
