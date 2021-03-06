import { graphql, Link } from 'gatsby';
import React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';
import ContactForm from '../components/contactForm';
import Layout from '../components/layout';
import { getPathWithLocale } from '../components/navigateWithLocale';
import SEO from '../components/seo';
import PlainHeader from './../components/plain-overlay/plain-header';
import withI18next from './../components/withI18next/withI18next';

interface Props {
    pageContext: any;
    t: any;
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
            };
        };
    };
}

class Contact extends React.Component<Props, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            (function (m, a, i, l, e, r) {
                m['MailerLiteObject'] = e; function f() {
                    var c = { a: arguments, q: [] }; var r = this.push(c); return "number" != typeof r ? r : f.bind(c.q);
                }
                f.q = f.q || []; m[e] = m[e] || f.bind(f.q); m[e].q = m[e].q || f.q; r = a.createElement(i);
                var _ = a.getElementsByTagName(i)[0]; r.async = 1; r.src = l + '?v' + (~~(new Date().getTime() / 1000000));
                _.parentNode.insertBefore(r, _);
            })(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

            var ml_account = ml('accounts', '2640527', 'j8z7t0x0z3', 'load');
        }
    }
    render() {
        const {
            pageContext: { locale },
            t,
        } = this.props;
        const data = this.props.data;
        const siteTitle = data.site.siteMetadata.title;
        const description = data.site.siteMetadata.description;
        return (
            <Layout title={siteTitle} t={t}>
                <SEO title={t('contact')} />
                <Container className="global-header-padding">
                    <PlainHeader content={HeaderContent(t)} />
                    <div className="main-content-sections">
                        <Container>
                            <Container textAlign="center">
                                <p>
                                    {t('contact:introduction-1')}
                                    <Link to={getPathWithLocale('/book-call')}>{t('contact:introduction-button')}</Link>
                                    {t('contact:introduction-2')}
                                </p>
                            </Container>
                            <section>
                                <ContactForm disabled={false} t={t}></ContactForm>
                                <Container text textAlign="center">
                                    <div className="ml-form-embed"
                                        data-account="2640527:j8z7t0x0z3"
                                        data-form="3879751:p0f6l7">
                                    </div>
                                </Container>
                                <Grid textAlign="center" style={{ marginTop: '3rem' }}>
                                    <Grid.Row>
                                        <h3>{t('contact:Folge mir auf')}</h3>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <div>
                                            <a
                                                href="https://www.facebook.com/innerlighthypnotherapy"
                                                target="_blank"
                                                rel="noopener"
                                                aria-label="Facebook"
                                                className="text-secondary"
                                            >
                                                <Icon className="hover-animate" size="big" name="facebook"></Icon>
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/christinmeise/"
                                                target="_blank"
                                                rel="noopener"
                                                aria-label="Linkedin"
                                                className="text-secondary"
                                            >
                                                <Icon className="hover-animate" size="big" name="linkedin"></Icon>
                                            </a>
                                            <a
                                                href="https://instagram.com/innerlight_hypnotherapy"
                                                target="_blank"
                                                rel="noopener"
                                                aria-label="Instagram"
                                                className="text-secondary"
                                            >
                                                <Icon className="hover-animate" size="big" name="instagram"></Icon>
                                            </a>
                                            {/* <a
                                                href="https://www.youtube.com"
                                                target="_blank"
                                                rel="noopener"
                                                aria-label="Youtube"
                                                className="text-secondary"
                                            >
                                                <Icon className="hover-animate" size="big" name="youtube"></Icon>
                                            </a> */}
                                        </div>
                                    </Grid.Row>
                                </Grid>
                            </section>
                        </Container>
                    </div>
                </Container>
            </Layout>
        );
    }
}

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

const HeaderContent = (t) => {
    return (
        <div>
            <h1 className="header-overlay-headline">{t('contact:Kontaktiere Inner Light')}</h1>
            <h2 className="header-overlay-subheadline">
                {t('contact:Hinterlasse deine Nachricht, oder buch jetzt dein kostenloses Erstgespräch!')}
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
    }
`;

export default withI18next(['common', 'contact'])(Contact);
