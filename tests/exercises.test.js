const  { readFileSync } = require('fs');
const path = require('path');
const { connection } = require('./utils/mysql');
const { seedDatabase } = require('./utils/seed');
const resultadoExercicio1 = require('./expected_results/exercicio1');

describe('Queries de seleção', () => {
  beforeAll(async () => {
    await seedDatabase();
  });

  afterAll(async () => {
    await connection.end();
  });


  describe('01 - Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.', () => {
    it('Verifica o resultado da query', async () => {
      const challengeQuery = readFileSync(path.join(__dirname, '..','src','exercicio1.sql'), 'utf8');

      const [data] = await connection.query(challengeQuery);
      expect(data).toEqual(resultadoExercicio1);
    });
  });
});
