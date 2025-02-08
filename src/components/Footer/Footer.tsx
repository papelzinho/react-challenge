import { FooterContainer, FooterContent, SocialIcons } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>© {new Date().getFullYear()} Sua Loja. Todos os direitos reservados.</p>
        <SocialIcons>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;