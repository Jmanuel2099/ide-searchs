import React, { useRef, useEffect } from "react";
import canibal from "./assets/canibal.png";
import misionero from "./assets/misionero.png";

const Canvas = (props) => {
  const { data, form, setDesactivar, desactivar } = props;
  const canvasRef = useRef(null);

  const canibals = (ctx, position) => {
    var imageObj1 = new Image();
    imageObj1.src = canibal;
    imageObj1.onload = function () {
      ctx.drawImage(imageObj1, 100, 30, 30, 30);
    };
    var imageObj2 = new Image();
    imageObj2.src = canibal;
    imageObj2.onload = function () {
      ctx.drawImage(imageObj1, 0, 60, 30, 30);
    };
    var imageObj3 = new Image();
    imageObj3.src = canibal;
    imageObj3.onload = function () {
      ctx.drawImage(imageObj1, 0, 90, 30, 30);
    };
  };

  const misioners = (ctx, position) => {
    var imageObj1 = new Image();
    imageObj1.src = misionero;
    imageObj1.onload = function () {
      ctx.drawImage(imageObj1, 250, 30, 30, 30);
    };
    var imageObj2 = new Image();
    imageObj2.src = misionero;
    imageObj2.onload = function () {
      ctx.drawImage(imageObj1, 155, 60, 30, 30);
    };
    var imageObj3 = new Image();
    imageObj3.src = misionero;
    imageObj3.onload = function () {
      ctx.drawImage(imageObj1, 35, 90, 30, 30);
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
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.msImageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    // canvas.style.background = "#ff8";

    //context.fillRect(0,50,0,0);

    let animationFrameId;
    //Our draw came here
    const render = () => {
      canibals(context);

      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [canibals]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.msImageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    // canvas.style.background = "#ff8";

    //context.fillRect(0,50,0,0);

    let animationFrameId;
    //Our draw came here
    const render = () => {
      misioners(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [misioners]);

  return <canvas ref={canvasRef} {...props} className="canvas" />;
};

export default Canvas;
