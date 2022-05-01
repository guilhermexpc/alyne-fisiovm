import React from 'react';
import { Text } from 'react-native';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from '../../theme/globalStyles';

import {
  Container,
  Button,
  Title,
  Info,
  InfoIcon,
  DescriptionContent
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  description?: string;
  onPress: () => void;
}

export function CardMenu({ title, description, onPress, ...rest }: Props) {
  return (

    <Container
      style={styles.defaultShadow}
    >
      <Button
        onPress={onPress}
        {...rest}
      >
        <Title>{title}</Title>
      </Button>

      <Info>
        <InfoIcon
          name={'info-with-circle'}
        />
      </Info>

    </Container>
    //    <GestureHandlerRootView>
    // </GestureHandlerRootView>
  );
}