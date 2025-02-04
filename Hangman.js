 /* Tooltip container */
 div.tooltip-div {
     position: relative;
     display: inline-block;
 }

 body {
     transition-duration: 4s;
     background: rgba(255, 255, 255, 0.8);
     background-image: url('https://raw.githubusercontent.com/Aatmaj-Zephyr/Hangman/main/UER3IW.png');
     background-blend-mode: screen;
     background-size: cover;
     background-repeat: no-repeat;
     height: 100vh;
     background-position: center;
     cursor: url('./pokeball.png'), pointer;
 }

 /* laoder styles */
 .loader-wrapper {
     width: 100vw;
     height: 100vh;
     position: absolute;
     top: 0;
     left: 0;
     background-color: #333;
     display: flex;
     justify-content: center;
     align-items: center;
     z-index: 999;
 }

 .loader-container {
     display: inline-block;
     width: 50px;
     height: 50px;
     border-radius: 25px;
     position: relative;
     border: 4px solid #fff;
 }

 .loader {
     display: inline-block;
     height: 100%;
     border-radius: 50%;
     background-color: #fff;
     animation: loader 2s infinite ease-in;
 }

 @keyframes loader {
     0% {
         width: 0%;
         transform: rotate(0deg);
     }

     25% {
         width: 0%;
         transform: rotate(25deg);
     }

     50% {
         width: 100%;
         transform: rotate(0deg);
     }

     75% {
         width: 100%;
         transform: rotate(25deg);
     }

     100% {
         width: 0%;
         transform: rotate(0deg);
     }
 }

 p#welcome {
     font-size: 100px;
     animation-name: coloranimation;
     animation-duration: 4s;
     animation-iteration-count: infinite;
     transition-duration: 4s;
 }

 button#play {
     width:  0.92%;    transition:  1s; 
     animation-name: coloranimation2;
     background-image: url(./poke-btn.png);
     background-color: transparent !important;
     Filter: drop-shadow(2px 4px 8px #585858);
     background-size: contain;
     background-repeat: no-repeat;
     background-position: center;
     height: 200px;
     width: 200px;
     border: none !important;
     cursor: url('./pokeball-hover.png'), pointer;
     animation-duration: 1s;
     font-size: 48px;
     animation-iteration-count: infinite;
     margin-top: 2%;
     padding-top: 60px;
     position: relative;
 }

 button#play:hover {
     height: 250px;
     width: 250px;
     transition: 1.5s;
 }

 @keyframes slideMe {
     0% {
         transform: translateY(-150px);
         opacity: 0;
     }

     60% {
         transform: translateY(30px);
     }

     62% {
         opacity: 1;
     }

     80% {
         transform: translate(0);
     }

     90% {
         transform: skew(-5deg);
     }

     100% {
         transform: skew(0deg);
     }
 }

 @keyframes effect {
     0% {
         transform: translateX(0px) rotate(0deg);
     }

     20% {
         transform: translateX(-4px) rotate(-2deg);
     }

     40% {
         transform: translateX(-2px) rotate(-1deg);
     }

     60% {
         transform: translateX(4px) rotate(2deg);
     }

     80% {
         transform: translateX(2px) rotate(1deg);
     }

     100% {
         transform: translateX(0px) rotate(0deg);
     }
 }

 @keyframes appear {
     0% {
         opacity: 0%
     }

     20% {
         opacity: 20%
     }

     40% {
         opacity: 40%
     }

     60% {
         opacity: 60%
     }

     80% {
         opacity: 80%
     }

     100% {
         opacity: 100%
     }
 }

 /* Tooltip text */
 div.tooltip-div .tooltiptext {
     visibility: hidden;
     width: 120px;
     background-color: aqua;
     color: red;
     text-align: center;
     padding: 5px 0;
     border-radius: 6px;
     /* Position the tooltip text - see examples below! */
     position: absolute;
     z-index: 1;
 }

 /* Show the tooltip text when you mouse over the tooltip container */
 div.tooltip-div:hover .tooltiptext {
     visibility: visible;
     opacity: 0;
     transition: opacity 3s;
 }

 .h1 {
     font-family: "Brush Script MT", cursive;
     color: red;
 }

 .keys .btn {
     background-color: #ffffff;
     border: 2px solid #3d3d3d;
     font-weight: 500;
 }

 .keys .btn:hover {
     background-color: yellow;
     color: black;
 }

 .keys {
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     grid-gap: 20px;
     padding: 15px;
 }

 .tooltip-btn {
     width: 1.2em;
     height: 1.2em;
     line-height: 0;
 }

 @keyframes coloranimation {
     0% {
         color: red;
     }

     25% {
         color: yellow;
     }

     50% {
         color: blue;
     }

     100% {
         color: green;
     }
 }

 @keyframes coloranimation2 {
     50% {
         color: red;
     }

     100% {
         color: blue;
     }
 }

 .footer {
     position: fixed;
     left: 0;
     bottom: 0;
     width: 100%;
     color: Red;
     text-align: center;
 }

 #scrollText {
     font-weight: bold;
 }
