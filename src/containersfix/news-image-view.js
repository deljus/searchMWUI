import React, { Component } from 'react';

class NewsImageView extends Component {
    render(){
        return (
            <div className="row row-center">
                <div className="well well-news">
                <div className="media">
                    <div className="pull-left">
                        <span className="fa-stack fa-2x">
                            <img src={ this.props.imageLink } alt="Picture of me taking a photo of an image" />
                        </span>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">Nicotine</h4>
                        <p>Nicotine is a potent parasympathomimetic stimulant and an alkaloid found in the nightshade
                            family of plants. Nicotine acts as a receptor agonist at most nicotinic acetylcholine
                            receptors (nAChRs), except at two nicotinic receptor subunits (nAChRα9 and nAChRα10)
                            where it acts as a receptor antagonist.
                            <a href="https://en.wikipedia.org/wiki/Nicotine" target="blank">More</a></p>
                    </div>
                </div>
                </div>
            </div>
            )

    }
}

export default NewsImageView;


