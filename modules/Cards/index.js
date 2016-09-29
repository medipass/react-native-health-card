import AHMCard from './AHMCard';
import GenericCard from './GenericCard';
import HCFCard from './HCFCard';
import MedibankCard from './MedibankCard';

export const getCardComponent = (type) => {
  switch (type) {
    case 'ahm':
      return AHMCard;
    case 'generic':
      return GenericCard;
    case 'hcf':
      return HCFCard;
    case 'medibank':
      return MedibankCard;
    default:
      return GenericCard;
  }
};
