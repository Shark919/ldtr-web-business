import de from 'hyphenated-de';
import en from 'hyphenated-en-us';
import i18next from 'i18next';
import React from 'react';
import Hyphenated from 'react-hyphen';
import './plain-header.less';

const PlainHeader = ({ content }) => {
    return (
        <div className="plain-header">
            <div className="plain-header-container">
                <div className="responsive-desktop-container plain-header-container-desktop">
                    <div className="plain-header-grid">
                        <div data-sal="slide-down" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                            <Hyphenated language={i18next.language === 'de' ? de : en}>{content}</Hyphenated>
                        </div>
                    </div>
                </div>
                <div className="responsive-mobile-container plain-header-container-mobile">
                    <div className="plain-header-grid">
                        <div data-sal="slide-down" data-sal-delay="0" data-sal-duration="300" data-sal-easing="ease">
                            <Hyphenated language={i18next.language === 'de' ? de : en}>{content}</Hyphenated>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlainHeader;
