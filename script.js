/* Import Google font */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #E3F2FD;
}
.wrapper {
  width: 65vmin;
  height: 70vmin;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  background: #293447;
  box-shadow: 0 20px 40px rgba(52, 87, 220, 0.2);
}
.game-details {
  color: #B8C6DC;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 20px 27px;
  display: flex;
  justify-content: space-between;
}
.play-board {
  height: 100%;
  width: 100%;
  display: grid;
  background: #212837;
  grid-template: repeat(30, 1fr) / repeat(30, 1fr);
}
.play-board .food {
  background: #FF003D;
}
.play-board .head {
  background: #60CBFF;
}
.controls {
  display: none;
  justify-content: space-between;
}
.controls i {
  padding: 25px 0;
  text-align: center;
  font-size: 1.3rem;
  color: #B8C6DC;
  width: calc(100% / 4);
  cursor: pointer;
  border-right: 1px solid #171B26;
}
@media screen and (max-width: 800px) {
  .wrapper {
    width: 90vmin;
    height: 115vmin;
  }
  .game-details {
    font-size: 1rem;
    padding: 15px 27px;
  }
  .controls {
    display: flex;
  }
  .controls i {
    padding: 15px 0;
    font-size: 1rem;
  }
}