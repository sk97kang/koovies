import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Btn = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mainBgColor};
`;

const Movies = () => (
  <Btn>
    <Text>Movies</Text>
  </Btn>
);

export default Movies;
