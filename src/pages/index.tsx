import { graphql } from 'gatsby';
import React from 'react';
import HeaderOverlay from '../components/header-overlay/header-overlay';
import '../components/i18n/i18n';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface Props {
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
            };
        };
        mobileImage: any;
        desktopImage: any;
    };
}

export default class Index extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;
        const sources = [
            data.mobileImage.childImageSharp.fluid,
            {
                ...data.desktopImage.childImageSharp.fluid,
                media: `(min-width: 768px)`,
            },
        ];
        return (
            <Layout title={siteTitle}>
                <SEO title="Index" />
                <HeaderOverlay
                    sources={sources}
                    color="#f5f4f0"
                    inverted={false}
                    content={<OverlayContent inverted={false} />}
                />
            </Layout>
        );
    }
}

const OverlayContent = ({ inverted }) => {
    return (
        <div>
            <h1 className={`header-overlay-headline ${inverted ? 'header-overlay-headline-inverted' : null}`}>
                Transform Your Life
            </h1>
            <h2 className={`header-overlay-subheadline ${inverted ? 'header-overlay-subheadline-inverted' : null}`}>
                Learn from the world’s best teachers, on the world’s leading personal growth platform. Join our
                community of 12 million students from 80 countries.
            </h2>
        </div>
    );
};

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        desktopImage: file(relativePath: { eq: "main-banner.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        mobileImage: file(relativePath: { eq: "main-banner-mobile.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
