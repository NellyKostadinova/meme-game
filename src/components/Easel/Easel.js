import { useState } from 'react';
import BrandTitle from '../BrandTitle/BrandTitle';
import EaselImage from '../EaselImage/EaselImage';
import Images from '../../constants/Images';
import { SPACE_KEYS } from '../../constants/keys';
import { getRandomEl } from '../../helpers/helpers';
import useEventListener from '../hooks/useEventListener';
import './Easel.scss';

export default function Easel() {
  const [url, setUrl] = useState('');
  const [showImg, setShowImg] = useState(false);
  const [images, setImages] = useState(Images);

  const handleKeyPress = ({ key }) => {
    if (SPACE_KEYS.includes(key)) {
      changeImage();
    }
  };

  const changeImage = () => {
    if (images.length && !showImg) {
      setShowImg(true);
    }

    if (!images.length) {
      setShowImg(false);
      return;
    }

    const selectedImage = getRandomEl(images);
    setUrl(urlFromName(selectedImage));
    removeUsedImage(selectedImage);
  };

  const urlFromName = (imgName) => {
    return `${process.env.PUBLIC_URL}/assets/images/${imgName}`;
  };

  const removeUsedImage = (usedImg) => {
    setImages(
      images.filter((img) => {
        return img !== usedImg;
      })
    );
  };

  useEventListener('keydown', handleKeyPress);

  return (
    <div className="wrapper">
      <div className="easel">
        <div className="easel-part arm arm-left"></div>
        <div className="easel-part arm arm-right"></div>
        <EaselImage showImg={showImg} imgSrc={url} />
        <BrandTitle addClasses="easel-part" />
      </div>
    </div>
  );
}
