import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [start, setStart] = useState(false);
  const [sHeight, setSHeight] = useState(null);
  const [sWidth, setSWidth] = useState(null);
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    if (start) {
      move();
    }
  }, [start]);

  useEffect(() => {
    if (start) {
      move();
    }
  }, [direction]);

  useEffect(() => {
    if ((x || y) && start) {
      setTimeout(() => {
        move();
      }, 100);
    }
  }, [x, y]);

  //runs one time
  useEffect(() => {
    document.addEventListener("keyup", keyPressed);
  }, []);

  function move() {
    setTimeout(() => {
      if (direction === "right") {
        setX(x + 5);
      }
      if (direction === "left") {
        setX(x - 5);
      }
      if (direction === "up") {
        setY(y - 5);
      }
      if (direction === "down") {
        setY(y + 5);
      }
    }, 1);
  }
  function keyPressed(e) {
    if (e.repeat) {
      return;
    }
    if (e.code === "ArrowUp") {
      setDirection("up");
    }
    if (e.code === "ArrowDown") {
      setDirection("down");
    }
    if (e.code === "ArrowLeft") {
      setDirection("left");
    }
    if (e.code === "ArrowRight") {
      setDirection("right");
    }

    if (e.code === "Space") {
      setStart(true);
    }
    if (e.code === "KeyP") {
      setStart(false);
    }
    console.log(e.code + Math.random());
  }

  return (
    <div className="app">
      <div className="dot" style={{ left: `${x}px`, top: `${y}px` }}></div>
    </div>
  );
}
