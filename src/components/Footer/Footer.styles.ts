import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #111;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: 40px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    font-size: 14px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: white;
    font-size: 18px;
    transition: 0.3s;

    &:hover {
      color: #ff4757;
    }
  }
`;