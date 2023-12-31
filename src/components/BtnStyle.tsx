import { CSSProperties } from "react";

type BtnStyleProps = {
  style: CSSProperties;
};

const BtnStyle = ({ style }: BtnStyleProps) => {
  return (
    <div className="btn-style">
      <p style={style}>Style Props</p>
    </div>
  );
};

export default BtnStyle;
