const colorToHex = (color: number) => {
  var hexadecimal = color.toString(16);
  return hexadecimal.length === 1 ? '0' + hexadecimal : hexadecimal;
};

type rgbToHexProps = {
  red: number;
  green: number;
  blue: number;
};

export const rgbToHex = ({ red, green, blue }: rgbToHexProps) => {
  return '#' + colorToHex(red) + colorToHex(green) + colorToHex(blue);
};
