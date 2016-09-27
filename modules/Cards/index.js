import AHMCard from './AHMCard';
import GenericCard from './GenericCard';
import MedibankCard from './MedibankCard';

export const getCardComponent = (type) => {
  switch (type) {
    case 'ahm':
      return AHMCard;
    case 'generic':
      return GenericCard;
    case 'medibank':
      return MedibankCard;
    default:
      return GenericCard;
  }
};
