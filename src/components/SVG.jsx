const LogoSVG = ({ svg, className }) => (
  <div dangerouslySetInnerHTML={{ __html: svg }} className={className} />
);
export default LogoSVG;
