import BrandTitle from '../BrandTitle/BrandTitle';
import './EaselImage.scss';

function EaselImage({ showImg, imgSrc, onClick }) {
  return (
    <div
      className="image-holder"
      data-style={!showImg && 'opaque'}
      onClick={onClick}
    >
      <div
        className="blur-background"
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      {showImg ? <img id="meme-img" src={imgSrc} alt="" /> : <BrandTitle />}
    </div>
  );
}

export default EaselImage;
