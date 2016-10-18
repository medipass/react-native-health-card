import AHMCard from './AHMCard';
import BupaCard from './BupaCard';
import GenericCard from './GenericCard';
import HCFCard from './HCFCard';
import MedibankCard from './MedibankCard';

export const getCardComponent = (type) => {
  switch (type) {
    case 'ahm': return AHMCard;
    case 'bup': return BupaCard;
    case 'generic': return GenericCard;
    case 'hcf': return HCFCard;
    case 'mbp': return MedibankCard;
    default: return GenericCard;
  }
};
