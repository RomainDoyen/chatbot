/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('faqs').del()
  await knex('faqs').insert([
    {question: 'Quels sont vos horaires ?', answer: 'Nous sommes ouverts de 9h à 18h.'},
    {question: 'Quels sont vos tarifs ?', answer: 'Nos tarifs commencent à partir de 50€.'},
    {question: 'Où êtes-vous situés ?', answer: 'Nous sommes situés au 1 rue de Rivoli à Paris.'},
    {question: 'Pouvez-vous me donner votre numéro de téléphone ?', answer: 'Vous pouvez nous joindre au 01 23 45 67 89.'},
  ]);
};
