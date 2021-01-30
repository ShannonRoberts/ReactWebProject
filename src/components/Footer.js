import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 5vh;
  padding: 2rem;
  background: #1E2121;
  color: #fff;
  display:flex;
  justify-content: left;
  align-items: center;
  box-shadow: 6px 6px 10px 6px rgba(0, 0, 0, 0.4);

`;

const Footer = () => {
    return (
        <Section>
            <p>© 2021 | Made by Shannon Roberts</p>
        </Section>
    )
}

export default Footer
