import GenericCard from './GenericCard';

export const getCardComponent = (type) => {
  switch (type) {
    case 'generic':
      return GenericCard;
    default:
      return GenericCard;
  }
};
