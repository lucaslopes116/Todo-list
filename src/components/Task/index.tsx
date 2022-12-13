import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

import Trash from '../../../assets/trash.png';

import { styles } from './styles';

type Props = {
  name: string;
  onRemove: () => void;
  onFinish: () => void;
};

export function Task({ name, onFinish, onRemove }: Props) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <Checkbox
        color={isSelected ? '#5E60CE' : '#4EA8DE'}
        value={isSelected}
        onValueChange={(e) => {
          setSelection(e);
          onFinish();
        }}
        style={styles.checkbox}
      />
      <Text style={[isSelected ? styles.finished : styles.name]}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image source={Trash} />
      </TouchableOpacity>
    </View>
  );
}
