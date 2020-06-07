import Img from 'gatsby-image';
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import './blog-post-introduction.less';

interface Props {
    content: any;
}

export default function BlogPostIntroduction({ content }: Props) {
    return (
        <section className="blog-introduction">
            <Grid stackable>
                <Grid.Column width={8}>
                    <Image className="rounded" wrapped ui={false}>
                        {content.images != null && (
                            <Img className="rounded shadow" fluid={content.images[0].childImageSharp.fluid} />
                        )}
                    </Image>
                </Grid.Column>
                <Grid.Column width={8}>
                    <h2 className="global-headline">{content.title}</h2>
                    <article>
                        <p>{content.content}</p>
                    </article>
                </Grid.Column>
            </Grid>
        </section>
    );
}
