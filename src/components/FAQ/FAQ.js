import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {faq} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faq.title} image={faq.image} />
    <p>{faq.text}</p>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default FAQ;