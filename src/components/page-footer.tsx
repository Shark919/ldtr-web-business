import { Link } from 'gatsby';
import React from 'react';
import { Button, Container, Grid, Header, Icon, List, Segment } from 'semantic-ui-react';
import Logo from './logo';
import { getPathWithLocale } from './navigateWithLocale';

const PageFooter = ({ t }) => {
    return (
        <footer>
            <div className="footer-main">
                <Container>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header className="footer-nav-header" as="h4" content={t('footer-directory')} />
                                <List link>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/')}>{t('aboutme')}</Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/blog')}>{t('blog')}</Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/shop')}>{t('shop')}</Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/contact')}>{t('contact')}</Link>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header className="footer-nav-header" as="h4" content={t('footer-pages')} />
                                <List link>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/book-call')}>{t('book-call')}</Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/faq')}>{t('faq')}</Link>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header className="footer-nav-header" as="h4" content={t('footer-general')} />
                                <List link>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/impressum')}>{t('impressum')}</Link>
                                    </List.Item>
                                    <List.Item>
                                        <Link to={getPathWithLocale('/dataprotection')}>{t('dataprotection')}</Link>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Header className="footer-nav-header" as="h4" content={t('footer-services')} />
                                <Link to={getPathWithLocale('/book-call')}>
                                    <Button primary={true} inverted={false} size="small">
                                        {t('book-first-call')}
                                    </Button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
            <Segment inverted vertical>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Logo inverted={true} />
                            <a
                                style={{ color: 'white', margin: '0' }}
                                href="https://explorechristoph.com"
                                target="_blank"
                                rel="noopener"
                            >
                                © 2020, ExploreChristoph. All rights reserved.
                            </a>
                            <div>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener">
                                    <Icon className="hover-animate" size="large" name="facebook" inverted></Icon>
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener">
                                    <Icon className="hover-animate" size="large" name="linkedin" inverted></Icon>
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener">
                                    <Icon className="hover-animate" size="large" name="instagram" inverted></Icon>
                                </a>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener">
                                    <Icon className="hover-animate" size="large" name="youtube" inverted></Icon>
                                </a>
                            </div>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </footer>
    );
};

export default PageFooter;
