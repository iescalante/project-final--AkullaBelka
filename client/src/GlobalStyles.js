import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Lato');
@import url('https://fonts.googleapis.com/css?family=Roboto');
*, *:before, *:after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
  vertical-align: baseline;
  font-family: 'Roboto', sans-serif;
  ::-webkit-scrollbar {
        width: 20px;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px white;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: white;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: lightgrey;
      }
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1.6;
  background: #031927;
  color: #C8E0F4;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {
  display:flex;
  justify-content: center;
  border-radius:15px;
  padding: 10px;
  border:2px solid #BA1200;
  background: #9DD1F1;
  color: #031927;
  cursor:pointer;

}
a {
  font-size: 2em;
  cursor:pointer;
  color: #C8E0F4;
  :hover {
    transform: scale(1.2);
  }
}
`;
export default GlobalStyles;