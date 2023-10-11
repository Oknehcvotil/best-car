import { FooterContainer, Link } from "./Footer.styled"

export const Footer = () => {
    return (
      <FooterContainer>
        Developed by 
        <Link
          href="https://www.linkedin.com/in/kirill-litovchenko/"
          target="blank"
        >
          Kirill Litovchenko
        </Link>
      </FooterContainer>
    );
}