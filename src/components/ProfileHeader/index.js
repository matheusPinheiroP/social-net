import React from "react";
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  SmallProfilePic,
  HeaderContainerSeparator,
  HeaderTitle,
  InfoIconButton,
  InfoIcon,
  ButtonReturn
} from "./styles";

const ProfileHeader = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack('Details');
  }

  function handleConfiguration() {
    navigation.navigate('Configurations');
  } 

  return (
    <Container>
      <ButtonReturn onPress={handleBack}>
        <SmallProfilePic />
      </ButtonReturn>
      <HeaderContainerSeparator />

      <HeaderTitle>Your Profile</HeaderTitle>
      <InfoIconButton onPress={handleConfiguration}>
        <InfoIcon />
      </InfoIconButton>
    </Container>
  );
};

export default ProfileHeader;
