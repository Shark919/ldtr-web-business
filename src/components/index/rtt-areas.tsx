import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { Button, Container, Grid, GridColumn, GridRow, Icon } from 'semantic-ui-react';
import navigateWithLocale, { getPathWithLocale } from './../navigateWithLocale';
import SectionHeader from './../sectionHeader';
import './rtt.less';

const SectionRTTAreas = ({ t }) => {
    const handleOnRTTAreaCardClick = (href, that) => {
        navigateWithLocale(href);
    };

    const RTTAreaCard = ({ source, text, href = '/rtt-areas' }) => {
        return (
            <BackgroundImage
                Tag="div"
                className="rounded hover-animate shadow-lg dark-overlay rtt-areas-card-background"
                fluid={source}
                onClick={handleOnRTTAreaCardClick.bind(this, href)}
            >
                <div className="rtt-areas-card-background-text-wrapper">
                    <h3 className="rtt-areas-card-background-text">{text}</h3>
                </div>
            </BackgroundImage>
        );
    };

    const data = useStaticQuery(
        graphql`
            query {
                relationship: file(relativePath: { eq: "rtt-areas/relationship.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 380, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
                confidence: file(relativePath: { eq: "rtt-areas/confidence.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 380, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
                addiction: file(relativePath: { eq: "rtt-areas/addiction.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 380, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
                fears: file(relativePath: { eq: "rtt-areas/fears.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 380, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
                weight: file(relativePath: { eq: "rtt-areas/weight.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 380, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
                stress: file(relativePath: { eq: "rtt-areas/stress.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 380, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
            }
        `,
    );

    return (
        <section className="bg-secondary">
            <Container>
                <SectionHeader
                    headline={t('index-rtt-areas-headline')}
                    subheadline={t('index-rtt-areas-subheadline')}
                    primary={false}
                    textAlign="left"
                ></SectionHeader>
                <Grid columns="equal" width="16" stackable doubling>
                    <GridRow only="mobile computer large screen widescreen">
                        <GridColumn>
                            <RTTAreaCard source={data.relationship.childImageSharp.fluid} text={t('rtt-area-1')} />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.confidence.childImageSharp.fluid} text={t('rtt-area-2')} href="/wahre-selbstliebe-erfahren" />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.addiction.childImageSharp.fluid} text={t('rtt-area-3')} />
                        </GridColumn>
                    </GridRow>
                    <GridRow only="mobile computer large screen widescreen">
                        <GridColumn>
                            <RTTAreaCard source={data.fears.childImageSharp.fluid} text={t('rtt-area-4')} />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.weight.childImageSharp.fluid} text={t('rtt-area-5')} href="/hypnose-zur-gewichtsreduktion" />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.stress.childImageSharp.fluid} text={t('rtt-area-6')} />
                        </GridColumn>
                    </GridRow>
                    <GridRow only="tablet">
                        <GridColumn>
                            <RTTAreaCard source={data.relationship.childImageSharp.fluid} text={t('rtt-area-1')} />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.confidence.childImageSharp.fluid} text={t('rtt-area-2')} />
                        </GridColumn>
                    </GridRow>
                    <GridRow only="tablet">
                        <GridColumn>
                            <RTTAreaCard source={data.addiction.childImageSharp.fluid} text={t('rtt-area-3')} />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.fears.childImageSharp.fluid} text={t('rtt-area-4')} />
                        </GridColumn>
                    </GridRow>
                    <GridRow only="tablet">
                        <GridColumn>
                            <RTTAreaCard source={data.weight.childImageSharp.fluid} text={t('rtt-area-5')} />
                        </GridColumn>
                        <GridColumn>
                            <RTTAreaCard source={data.stress.childImageSharp.fluid} text={t('rtt-area-6')} />
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Container textAlign="center" className="rtt-main-button-container">
                    <Link to={getPathWithLocale('/rtt-areas')}>
                        <Button
                            secondary={true}
                            basic
                            inverted={false}
                            size="medium"
                            className="rounded shadow hover-animate"
                        >
                            <Icon name="tasks" className="left" style={{ opacity: '1' }}></Icon>
                            {t('rtt-areas-button')}
                        </Button>
                    </Link>
                </Container>
            </Container>
        </section>
    );
};

export default SectionRTTAreas;
