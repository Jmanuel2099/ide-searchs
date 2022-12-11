import React, { useRef, useEffect } from "react";
import canibal from "./assets/canibal.jpg";
import misionero from "./assets/misionero.png";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const misionero1 = (ctx, frameCount) => {
    var imageObj1 = new Image();
    imageObj1.src = misionero;
    imageObj1.onload = function () {
      ctx.drawImage(imageObj1, 30, 30, 30, 30);
    };
  };
  const misionero2 = (ctx, frameCount) => {
    var imageObj1 = new Image();
    imageObj1.src = misionero;
    imageObj1.onload = function () {
      ctx.drawImage(imageObj1, 30, 60, 30, 30);
    };
  };
  const misionero3 = (ctx, frameCount) => {
    var imageObj1 = new Image();
    imageObj1.src = misionero;
    imageObj1.onload = function () {
      ctx.drawImage(imageObj1, 30, 90, 30, 30);
    };
  };
  const canibal1 = (ctx, frameCount) => {
    var imageObj1 = new Image();
    imageObj1.src = canibal;
    imageObj1.onload = function () {
      ctx.drawImage(imageObj1, 0, 30, 30, 30);
    };
  };
  const canibal2 = (ctx, frameCount) => {
    var imageObj1 = new Image();
    imageObj1.src = canibal;
    imageObj1.onload = function () {
      ctx.drawImage(imageObj1, 0, 60, 30, 30);
    };
  };
  const canibal3 = (ctx, frameCount) => {
    var imageObj1 = new Image();
    imageObj1.src = canibal;
    imageObj1.onload = function () {
      ctx.drawImage(imageObj1, 0, 90, 30, 30);
    };
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.msImageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    let frameCount = 1;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      frameCount++;

      canibal1(context, frameCount);
      canibal2(context, frameCount);
      canibal3(context, frameCount);
      misionero1(context, frameCount);
      misionero2(context, frameCount);
      misionero3(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [canibal1, canibal2, canibal3, misionero1, misionero2, misionero3]);

  return <canvas ref={canvasRef} {...props} className="canvas" />;
};

export default Canvas;
