import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 4rem;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  blockquote {
    font-size: 14px;
    font-style: italic;
    padding: 15px 20px 15px 15px;
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-right-width: 0;
    border-left-width: 0;
    border-style: solid;
    margin: 2rem 0;
    text-align: center;
  }

  span {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const LogoAbout = styled.img`
  max-width: 300px;
  margin-bottom: 2rem;
`;