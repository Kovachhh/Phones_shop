import React, { useState } from 'react';
import cn from 'classnames';

import './index.scss';
import { ProductExtended } from '../../types/ProductExtended';
import { ICONS } from '../../images';
import { ProductsList } from '../ProductsList/ProductsList';

type Props = {
  title: string;
  products: ProductExtended[];
};

const CARD_WIDTH = 272;
const CART_GAP = 16;
const CART_BLOCK = CARD_WIDTH + CART_GAP;

export const ProductsSlider: React.FC<Props> = ({ title, products }) => {
  const [translate, setTranslate] = useState(0);
  const sliderWidth = CART_BLOCK * products.length - CART_BLOCK * 4;

  // eslint-disable-next-line operator-linebreak
  const stepRight =
    sliderWidth > translate + CART_BLOCK * 4
      ? CART_BLOCK * 4
      : sliderWidth - translate;

  const stepLeft = translate - CART_BLOCK * 4 > 0 ? CART_BLOCK * 4 : translate;

  const translateStyle = {
    transform: `translateX(-${translate}px)`,
  };

  const onLeftClick = () => {
    setTranslate(prevNum => prevNum - stepLeft);
  };

  const onRightClick = () => {
    setTranslate(prevNum => prevNum + stepRight);
  };

  const rightClickDisabled = stepRight === 0;
  const leftClickDisabled = stepLeft === 0;

  return (
    <div className="productsSlider">
      <div className="productsSlider__top">
        <h1 className="productsSlider__top__title">{title}</h1>
        <div className="productsSlider__top__buttons">
          <button
            type="button"
            className={cn('smallButton productsSlider__top__buttons', {
              'smallButton--disabled': leftClickDisabled,
            })}
            onClick={onLeftClick}
            disabled={leftClickDisabled}
          >
            <img
              src={
                leftClickDisabled ? ICONS.arrowLeftDisabled : ICONS.arrowLeft
              }
              alt="Previous"
            />
          </button>
          <button
            type="button"
            className={cn('smallButton productsSlider__top__buttons', {
              'smallButton--disabled': rightClickDisabled,
            })}
            onClick={onRightClick}
            disabled={rightClickDisabled}
          >
            <img
              src={
                rightClickDisabled ? ICONS.arrowRightDisabled : ICONS.arrowRight
              }
              alt="Next"
            />
          </button>
        </div>
      </div>

      <div className="productsSlider__content" style={translateStyle}>
        <ProductsList products={products} />
      </div>
    </div>
  );
};
