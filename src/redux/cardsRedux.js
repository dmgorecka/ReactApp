import shortid from 'shortid';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

export const getCardsForSearchResult = ({cards}, searchString) => cards.filter(card => {
  return new RegExp(searchString, 'i').test(card.title);
});

const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_CARD = createActionName('ADD_CARD');

export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
