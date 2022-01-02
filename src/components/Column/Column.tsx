import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './Column.style';

type Props = {
  title: string;
  texts: string[];
};

const Column: FC<Props> = ({title, texts}) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
    </View>
    {texts.map((txt, i) => (
      <Text key={i} style={styles.text}>
        {txt}
      </Text>
    ))}
  </View>
);

export default Column;
