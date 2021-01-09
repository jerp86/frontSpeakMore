import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

import { Container, Message, LinkIcons, Social } from './styles';

const Footer: React.FC = () => {
  const logo =
    'https://s3-sa-east-1.amazonaws.com/prod-jobsite-files.kenoby.com/uploads/vortx-1558635133-logo-horiz-coloridopng.png';

  return (
    <Container>
      <Message>Desenvolvido por Jerp</Message>

      <LinkIcons>
        <Social href="https://www.linkedin.com/in/jerp/">
          <FaLinkedin />
        </Social>
        <Social href="https://github.com/jerp86">
          <FaGithub />
        </Social>
        <Social href="https://api.whatsapp.com/send?phone=5514998439153">
          <FaWhatsapp />
        </Social>
      </LinkIcons>

      {/* <Message>Desenvolvido por Jerp©</Message> */}
      <Social href="https://vortx.com.br/">
        <img
          src={logo}
          alt="Logo Vórtx"
          title="Vórtx | Inovação e transparência em serviços fiduciários"
        />
      </Social>
    </Container>
  );
};

export default Footer;
