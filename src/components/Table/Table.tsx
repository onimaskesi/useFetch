import React, {FC} from 'react';
import {View} from 'react-native';
import Column from '../Column';
import styles from './Table.style';

type Props = {
  textArrays: {
    [title: string]: any;
  };
};

const Table: FC<Props> = ({textArrays}) => (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
      {Object.keys(textArrays).map((title, i) => {
        return <Column key={i} title={title} texts={textArrays[title]} />;
      })}
    </View>
  </View>
);

export default Table;
