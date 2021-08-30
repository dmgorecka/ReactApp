import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { settings } from '../../data/dataStore.js';

const Hero = ({titleText, image}) => {
  return (
    <header className={styles.component}>
      <h2 className={styles.title}>{ReactHtmlParser(titleText)}</h2>
      <img className={styles.image} src={image} alt="space" />
    </header>
  );
};

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  image: PropTypes.string,
};

Hero.defaultPropTypes = {
  image: settings.defaultListImage,
  titleText: settings.defaultListTitle,
};

export default Hero;