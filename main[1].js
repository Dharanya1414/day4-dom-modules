// main.js — Create Card mini-activity
const createCardBtn = document.getElementById('create-card-btn');
const cardsContainer = document.getElementById('cards-container');

createCardBtn.addEventListener('click', () => {
  // Create card element
  const card = document.createElement('div');
  card.className = 'card';

  // Add some content
  const cardTitle = document.createElement('div');
  cardTitle.textContent = 'New Card';
  cardTitle.className = 'card-name';
  card.appendChild(cardTitle);

  // Add Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    card.remove(); // removes this card
  });

  // Add button to card actions
  const actions = document.createElement('div');
  actions.className = 'card-actions';
  actions.appendChild(deleteBtn);
  card.appendChild(actions);

  // Add card to container
  cardsContainer.appendChild(card);
});

