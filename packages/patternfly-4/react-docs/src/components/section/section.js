import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from './section.styles';
import { Title } from '@patternfly/react-core';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: '',
  title: '',
  description: ''
};

const Section = ({ children, className, title, description, ...props }) => (
  <section className={css(styles.section, className)}>
    {Boolean(title || description) && (
      <header className={css(styles.header)}>
        {Boolean(title) && <Title size="lg">{title}</Title>}
        {Boolean(description) && <p>{description}</p>}
      </header>
    )}
    {children}
  </section>
);

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
