import React from 'react';
import Hero from '../Hero/Hero.js';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import ReactHtmlParser from 'react-html-parser';
import Container from '../Container/Container.js';

class List extends React.Component {

    //definicja typów propsów:
    static propTypes = {
      title: PropTypes.node.isRequired,
      image: PropTypes.string,
      description: PropTypes.node,
      columns: PropTypes.array,
      addColumn: PropTypes.func,
    }
    static defaultProps = {
      description: settings.defaultListDescription,
    }
    render() {
      const {title, image, description, columns, addColumn} = this.props;
      return (
        <section className={styles.component}>
          <Container>
            <Hero titleText={title} image={image} />
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
            <div className={styles.columns}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </div>
            { <div className={styles.creator}>
              <Creator text={settings.columnCreatorText} action={addColumn}/>
            </div> }
          </Container>
        </section>
      );
    }
}

export default List;
