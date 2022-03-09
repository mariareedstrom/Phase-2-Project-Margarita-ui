import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <h1>Margarita Mania</h1>
      <h3>It's five o'clokc right here!</h3>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  margin: 20px;
  padding: 10px;
  text-align: center;
  h1 {
    font-family: ${(props) => props.theme.font.primary};
  }
  h3 {
    font-family: ${(props) => props.theme.font.secondary};
  }
`;
