import React, { Fragment } from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';

import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import Button from '../Button/Button';
// import PlayButton from '../PlayButton/PlayButton';

import logo from '../../../images/logo.svg';


import bgDesktopDefaultImage from '../../../images/home/homehero-background-d.png';
import bgMobileDefaultImage1 from '../../../images/home/homehero-background-m1.png';
import bgMobileDefaultImage2 from '../../../images/home/homehero-background-m2.png';
import labelDefaultImage from '../../../images/home/homehero-stamp.png';

import bgDesktopfullTitleImage from '../../../images/home/homehero-background2-d.png';
import bgMobilefullTitleImage1 from '../../../images/home/homehero-background2-m1.png';
import bgMobilefullTitleImage2 from '../../../images/home/homehero-background2-m2.png';

import bgDesktopImage from '../../../images/home/home-hero-3.png';
import bgMobileImage from '../../../images/home/home-hero-mobile-3.png';

import sliderData from './sliderData';

import { connect } from 'react-redux';



const Hero = (props) => {
    const {
        subtitle,
        video,
        componentState,
        bgColor,
        bgColorMobile,
        modular,
        counter,
    } = props;

    const getStateData = () => {
        const elements = {
            videoBtn: false,
            title: 'Children always do what their parents do.',
            subtitle: false,
            btnText: 'Eat Like A Pro',
            slider: false,
            sliderContent: false,
            bgColor: false,
            bgColorMobile: false,
            bgImage: false,
            bgImageMobile: false,
            parallax: {
                show: false,
                labelImage: false,
                desktop: {
                    show: false,
                    image: false,
                    repeatImageY: false,
                    edgeImages: false,
                },
                mobile: {
                    show: false,
                    image: false,
                    repeatImageY: false,
                    edgeImages: false,
                },
            },
        };
        switch (componentState) {
            case 'fullTitle':
                return {
                    ...elements,
                    subtitle: 'It is a long established fact that a reader will be distracted',
                    bgColor: '#87CCA4',
                    bgColorMobile: '#F57E6B',
                    parallax: {
                        show: true,
                        desktop: {
                            show: true,
                            image: `url(${bgDesktopfullTitleImage})`,
                            repeatImageY: true,
                        },
                        mobile: {
                            show: true,
                            image: `url(${bgMobilefullTitleImage1}), url(${bgMobilefullTitleImage2})`,
                            edgeImages: true,
                        },
                    },
                };
            case 'bgImage':
                return {
                    ...elements,
                    bgColor: '#cc4311',
                    bgImage: `url(${bgDesktopImage})`,
                    bgImageMobile: `url(${bgMobileImage})`,
                };
            case 'slider':
                return {
                    ...elements,
                    subtitle: 'It is a long established fact that a reader will be distracted',
                    slider: true,
                };
            case 'contentSlider':
                return {
                    ...elements,
                    subtitle: 'It is a long established fact that a reader will be distracted',
                    slider: true,
                    sliderContent: true,
                };
            case 'modular':
                return {
                    ...elements,
                    title: 'Our appliances, built into your home.',
                    subtitle: 'Discover the kitchen that best matches your personality.',
                    btnText: 'Let\'s Start',
                    bgColor: '#7eb1cb',
                    bgColorMobile: '#7eb1cb',
                    parallax: {
                        show: true,
                        desktop: {
                            show: true,
                            image: `url(${bgDesktopDefaultImage})`,
                            repeatImageY: true,
                        },
                        mobile: {
                            show: true,
                            image: `url(${bgMobileDefaultImage1}), url(${bgMobileDefaultImage2})`,
                            edgeImages: true,
                        },
                    },
                };
            default:
                return {
                    ...elements,
                    videoBtn: Boolean(video),
                    subtitle,
                    bgColor,
                    bgColorMobile,
                    parallax: {
                        show: true,
                        labelImage: labelDefaultImage,
                        desktop: {
                            show: true,
                            image: `url(${bgDesktopDefaultImage})`,
                            repeatImageY: true,
                        },
                        mobile: {
                            show: true,
                            image: `url(${bgMobileDefaultImage1}), url(${bgMobileDefaultImage2})`,
                            edgeImages: true,
                        },
                    },
                };
        }
    };

    const stateData = getStateData();

    const contentElement = () => (
        <Fragment>

            <div className="Ta(c) W(655px)--md W(335px)--sm">
                <h1 className="h1 Mt(35px)--sm">
                    {stateData.title}
                </h1>
                {stateData.subtitle &&
                <p className="h7 Mt(10px)">
                    {stateData.subtitle}
                </p>
                }
            </div>
        </Fragment>
    );

    const parallaxElement = () => {
        const { desktop, mobile, labelImage } = stateData.parallax;
        return (
            <div className="JS-parallax parallax" className="headerPattern">
                {desktop.show &&
                <div
                    className="parallaxImage"
                    className={classnames(
                        'hideMobile',
                        desktop.repeatImageY && 'repeatImageY',
                        desktop.edgeImages && 'edgeImages'
                    )}
                    style={{ backgroundImage: desktop.image }}
                />
                }
                {mobile.show &&
                <div
                    className="parallaxImage"
                    className={classnames(
                        'hideDesktop',
                        mobile.repeatImageY && 'repeatImageY',
                        mobile.edgeImages && 'edgeImages'

                    )}
                    style={{ backgroundImage: mobile.image }}
                />
                }
                {labelImage &&
                <img
                    className="labelImage"
                    className={classnames(
                        'Start(17%) B(300px)',
                        'Start(-34px)--sm B(32%)--sm Scale(0.8)--sm'
                    )}
                    src={labelImage}
                    alt="label"
                />
                }
            </div>
        );
    };

    const createSlide = (slide, i) => (
        <div
            key={i}
            className="slide"
        >
            <div
                className="slideImage"
                className="hideMobile"
                style={{ backgroundImage: `url(${slide.desktopImage})` }}
            />
            <div
                className="slideImage"
                className="hideDesktop"
                style={{ backgroundImage: `url(${slide.mobileImage})` }}
            />
            {stateData.sliderContent &&
            <div styleName="slideContent">
                {contentElement()}
            </div>
            }
        </div>
    );

    const sliderElement = () => (
        <div
            className="slider"
            className="JS-slider-carousel"
            data-slider-autoplay="true"
            data-slider-move-access={stateData.sliderContent ? 'true' : 'false'}
            data-slider-type="dots"
        >
            {sliderData.map(createSlide)}
        </div>
    );

    return (
        <header
            className={classnames('root', { modular })}
            className="parallax-container"
            style={{
                backgroundColor: stateData.bgColor,
                backgroundImage: stateData.bgImage
            }}
        >
            <h1 id="counterOgun">
                {counter}
            </h1>

            {(stateData.bgColorMobile || stateData.bgImageMobile) &&
            <div
                className="bgColor"
                className="hideDesktop"
                style={{
                    backgroundColor: stateData.bgColorMobile,
                    backgroundImage: stateData.bgImageMobile
                }}
            />
            }
            {stateData.slider &&
            sliderElement()
            }
            {stateData.parallax.show &&
            parallaxElement()
            }
            <img className="hideDesktop Pos(a) T(30px) xCenter W(66px)" alt="logo" src={logo} />
            {!stateData.sliderContent &&
            contentElement()
            }
        </header>
    );
};

Hero.propTypes = {
    subtitle: PropTypes.bool,
    video: PropTypes.bool,
    bgColor: PropTypes.string,
    bgColorMobile: PropTypes.string,
    componentState: PropTypes.string,
    modular: PropTypes.bool
};

Hero.defaultProps = {
    bgColor: '#7ccb5b'
};

const HeroEditConfig = {

    emptyLabel: 'Hero component',

    isEmpty: function(props) {
        return !props||!props.componentState;
    }
};
const mapStateToProps = (state) => {
    return { counter: state }
}
MapTo('we-retail-journal/components/hero')(connect(mapStateToProps)(Hero), HeroEditConfig);
// export default CSSModules(Hero, styles, { allowMultiple: true });
