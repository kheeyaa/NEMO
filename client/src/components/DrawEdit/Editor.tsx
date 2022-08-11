import { css } from '@emotion/react';
import { BACK_GROUND, CANVAS_SIZE } from 'const/Canvas/canvas';
import { colors } from 'const/style/colors';
import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  actionState,
  colorPickerState,
  contextState,
  lineWidthStepState,
} from 'recoil/edit';
import { rgbToHex } from 'utils/rgbToHex';
import { pxToRem } from 'utils/style/pxToRem';

interface Coordinate {
  x: number;
  y: number;
}

// 참고: https://basketdeveloper.tistory.com/79
function Editor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
    undefined,
  );
  const [isPainting, setIsPainting] = useState(false);
  const [size, setSize] = useState(500);
  const [unit, setUnit] = useState(1);
  const [lineWidth, setLineWidth] = useState(unit);

  const action = useRecoilValue(actionState);
  const [color, setColor] = useRecoilState(colorPickerState);
  const [context, setContext] = useRecoilState(contextState);
  const [lineWidthStep] = useRecoilState(lineWidthStepState);

  const getUnitPoition = (position: number) =>
    Math.floor(position / lineWidth) * lineWidth;

  const getMainUnitWidth = () => {
    const main = document.querySelector('main')!;
    const width = window.getComputedStyle(main).width.replace('px', '');
    const result = Math.floor(+width / CANVAS_SIZE) * CANVAS_SIZE;
    return result;
  };

  useLayoutEffect(() => {
    const newSize = getMainUnitWidth();
    const newUnit = newSize / CANVAS_SIZE;
    setSize(newSize);
    setUnit(newUnit);
  }, []);

  useLayoutEffect(() => {
    setLineWidth(unit * lineWidthStep);
  }, [unit, lineWidthStep]);

  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop,
    };
  };

  const drawLine = (originalMousePosition: Coordinate) => {
    if (!context) return;

    const pixelX = getUnitPoition(originalMousePosition.x);
    const pixelY = getUnitPoition(originalMousePosition.y);

    context.fillStyle = action === '브러쉬' ? color : BACK_GROUND;
    context.fillRect(pixelX, pixelY, lineWidth, lineWidth);
    console.log('drawLine');
  };

  const startPaint = useCallback(
    (event: MouseEvent) => {
      if (!(action === '브러쉬' || action === '지우개')) return;

      const coordinates = getCoordinates(event);
      if (coordinates) {
        setIsPainting(true);
        setMousePosition(coordinates);
      }
    },
    [action],
  );

  useEffect(() => {
    console.log({ isPainting });
  }, [isPainting]);

  const paint = useCallback(
    (event: MouseEvent) => {
      if (!isPainting) return;

      event.preventDefault();

      const newMousePosition = getCoordinates(event);
      if (mousePosition) {
        drawLine(mousePosition);
        setMousePosition(newMousePosition);
      }
    },
    [isPainting, mousePosition],
  );

  const stopPaint = useCallback(() => {
    if (!isPainting) return;
    if (!(action === '브러쉬' || action === '지우개')) return;

    if (mousePosition) drawLine(mousePosition);
    setIsPainting(false);
  }, [mousePosition, action]);

  const pickColor = useCallback(
    (event: MouseEvent) => {
      if (action !== '스포이드') return;
      if (!context) return;

      const { x, y } = getCoordinates(event)!;
      const pixel = context.getImageData(x, y, 1, 1);
      const { data } = pixel;

      setColor(rgbToHex({ red: data[0], green: data[1], blue: data[2] }));
    },
    [action],
  );

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    setContext(canvas.getContext('2d'));

    canvas.addEventListener('click', pickColor);
    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseup', stopPaint);
    canvas.addEventListener('mouseleave', stopPaint);

    return () => {
      canvas.removeEventListener('click', pickColor);
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('mouseup', stopPaint);
      canvas.removeEventListener('mouseleave', stopPaint);
    };
  }, [startPaint, paint, stopPaint, pickColor]);

  return (
    <div css={editorStyle}>
      <canvas ref={canvasRef} height={size} width={size} />
    </div>
  );
}

const editorStyle = css`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${pxToRem(16)};

  canvas {
    border: 1px solid ${colors.gray[200]};
  }
`;

export default Editor;
