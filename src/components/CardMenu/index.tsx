import React from 'react';
import { Text } from 'react-native';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';

import { globalStyles } from '../../theme/globalStyles';

import {
  Container,
  Button,
  Title,
  InfoContent,
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
      style={globalStyles.defaultShadow}
    >
      <Button
        onPress={onPress}
        {...rest}
      >
        <Title>{title}</Title>
      </Button>

      <InfoContent>
        <Info>
          <InfoIcon
            name={'info-with-circle'}
          />
        </Info>
      </InfoContent>
    </Container>
    //    <GestureHandlerRootView>
    // </GestureHandlerRootView>
  );
}