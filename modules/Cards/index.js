import GenericCard from './GenericCard';
import MedibankCard from './MedibankCard';

export const getCardComponent = (type) => {
  switch (type) {
    case 'generic':
      return GenericCard;
    case 'medibank':
      return MedibankCard;
    default:
      return GenericCard;
  }
};
