import { createGlobalStyle } from 'styled-components';

const image =
  'https://s3-sa-east-1.amazonaws.com/prod-jobsite-files.kenoby.com/uploads/vortx-1558636672-slide2jpg.JPG';

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    color: #8e734a;
    min-height: 100vh;
    -webkit-font-smoothing:  antialiased !important;

    background-image: url(${image});
    background-position: 70% top;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
      display: block;
    }
  }

  body, input, button {
    font-family: Roboto, sans-serif;
  }

  #root {
    max-width: 60rem;
    margin: 0 auto;
    padding: 1rem 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    cursor: pointer;
  }
`;
