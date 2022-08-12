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

  /** 캔버스 크기, 유닛 크기 설정 */
  useLayoutEffect(() => {
    const newSize = getMainUnitWidth();
    const newUnit = newSize / CANVAS_SIZE;

    setSize(newSize);
    setUnit(newUnit);
  }, []);

  /** 캔버스 기본 배경색 화이트로 설정 */
  useEffect(() => {
    if (context) {
      context.fillStyle = '#fff';
      context.fillRect(0, 0, size, size);
    }
  }, [context, size]);

  /** 브러쉬 굵기 설정 */
  useLayoutEffect(() => {
    setLineWidth(unit * lineWidthStep);
  }, [unit, lineWidthStep]);

  /** 좌표 구함 */
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

  /** 선 그리기 */
  const drawLine = (originalMousePosition: Coordinate) => {
    if (!context) return;

    const unitPixelX = getUnitPoition(originalMousePosition.x);
    const unitPixelY = getUnitPoition(originalMousePosition.y);

    context.fillStyle = action === '브러쉬' ? color : BACK_GROUND;
    context.fillRect(unitPixelX, unitPixelY, lineWidth, lineWidth);
  };

  /** 그림 그리기 시작 (isPainting, mousePosition) */
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

  /** 그림 그림 (선 그리고, 다음 포지션 설정) */
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

  /** 그림 멈춤 (브러쉬, 지우개면 마지막 점 찍음) */
  const stopPaint = useCallback(() => {
    if (!isPainting) return;
    if (!(action === '브러쉬' || action === '지우개')) return;

    if (mousePosition) drawLine(mousePosition);
    setIsPainting(false);
  }, [mousePosition, action]);

  /** 색상 값 꺼냄 */
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

  /** 캔버스 이벤트 핸들러 등록 */
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
