export const CustomSVG = ({ svgData }) => {
  const { id, width, height, viewBox, className, data, fill } = svgData;
  return (
    <div className={`letter ${id}`}>
      <svg
        className="letter__svg"
        width={width}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className={className} d={data} fill={fill} />
      </svg>
    </div>
  );
};
