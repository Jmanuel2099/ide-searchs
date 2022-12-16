import React, { useRef, useEffect, useState } from "react";
import canibal from "./assets/canibal.png";
import misionero from "./assets/misionero.png";

const Canvas = (props) => {
  const { data, form, cani1, cani2, cani3, min1, min2, min3 } = props;

  const canvasRef = useRef(null);

  const canibals = (ctx) => {
    let imageObj1 = new Image();
    imageObj1.src = canibal;

    imageObj1.onload = function () {
      ctx.drawImage(imageObj1, cani1.x, cani1.y, 30, 30);
    };
    let imageObj2 = new Image();
    imageObj2.src = canibal;
    imageObj2.onload = function () {
      ctx.drawImage(imageObj2, cani2.x, cani2.y, 30, 30);
    };
    let imageObj3 = new Image();
    imageObj3.src = canibal;
    imageObj3.onload = function () {
      ctx.drawImage(imageObj3, cani3.x, cani3.y, 30, 30);
    };
    let imageObj4 = new Image();
    imageObj4.src = misionero;

    imageObj4.onload = function () {
      ctx.drawImage(imageObj4, min1.x, min1.y, 30, 30);
    };
    let imageObj5 = new Image();
    imageObj5.src = misionero;
    imageObj5.onload = function () {
      ctx.drawImage(imageObj5, min2.x, min2.y, 30, 30);
    };
    let imageObj6 = new Image();
    imageObj6.src = misionero;
    imageObj6.onload = function () {
      ctx.drawImage(imageObj6, min3.x, min3.y, 30, 30);
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    //Our first draw
    context.fillStyle = "#008f39";
    context.fillRect(0, 0, context.canvas.width / 3, context.canvas.height);
    context.fillRect(
      (context.canvas.width / 3) * 2,
      0,
      context.canvas.width / 3,
      context.canvas.height
    );
    context.fillStyle = "#0096d2";
    context.fillRect(
      context.canvas.width / 3,
      0,
      context.canvas.width / 3,
      context.canvas.height
    );

    let animationFrameId;
    const render = () => {
      canibals(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [canibals]);

  return <canvas ref={canvasRef} {...props} className="canvas" />;
};

export default Canvas;
