import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*, *::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Variables */

:root {
--bg-gray: #191A1D;
--bg-black: #141517;
--bg-light-gray: #25262b;
--white: #d9d9d9;
--green: #18E9C3;
--text-gray: #646568;
--text-black: #141517; 
--text-light-gray: #C9C9CA;
--border-gray: #373A40;
--red: #D7263D; 



--text-sm: 1.8rem;
--text-md: 2.4rem;
--text-lg: 4.2rem;
--text-xl: 8.6rem;
}



/* Reset margins */

body,
h1,
h2,
h3,
h4,
p,
figure,
picture {
  margin: 0;
}

/* Body set up */

html {
  font-size: 62.5%;

 
}

body {
  line-height: 1.5;
  letter-spacing: 1px;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--bg-black);
}



/* Forms */

input,
button,
textarea,
select,
option {
  font: inherit;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

h1 {
  font-size: 6.4rem;
  font-weight: 800;
  color: var(--white);
  width: 15ch;
  line-height: 6.6rem;
  

  span {

    color: var(--green);
  
}
  

  @media screen and (max-width: 1180px ) {
    font-size: 5.4rem;
    width: 15ch;
    line-height: 6.4rem;
  }

  @media screen and (max-width: 1080px ) {
    font-size: 4.4rem;
    line-height: 5.4rem;
  }

  @media screen and (max-width: 550px ) {
    font-size: 3.4rem;

  }
  @media screen and (max-width: 400px ) {
    font-size: 2.6rem;
width: 16ch;
line-height: 4.4rem;
  }

} 


h2 {
  font-size: 4.2rem;
  font-weight: 700;
  color: var(--white);

  span {
    background: linear-gradient(to right, #18E9C3, #624CAB ); 
  background: -webkit-linear-gradient(to right, #18E9C3, #624CAB);
  background-clip: content-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 575px ) {
    font-size: 2.8rem;
    line-height: 3.4rem;

  }
}

h3 {
  font-size: 1.8rem;
  color: var(--white);
}

.text-sm {
  font-size: var(--text-sm);
  color: var(--text-light-gray);
}
.text-md {
  font-size: var(--text-md);
  color: var(--text-light-gray);

  @media screen and (max-width: 550px ) {
    font-size: var(--text-sm);
   

  }
}

h4 {
  font-size: 2.8rem;
  color: var(--white);
}

.active {
  background-color: hsla(169, 83%, 50%, 0.17);
            color: var(--green) !important;
}

p {
  color: var(--white);
  font-size: var(--text-sm);
  white-space: pre-line;


}

.text {
  max-width: 75ch;

   @media screen and (max-width: 900px) {

    width: auto;
  }
}

.in-view-false {
  opacity: 0;
  transition: opacity 1s ease;
}
.in-view {

  animation: inView 1s ease;
  transition: opacity 1s ease;
}

@keyframes inView {
  0% {
    opacity: 0;

  }

  100% {
    opacity: 1;


  }
}




`;
