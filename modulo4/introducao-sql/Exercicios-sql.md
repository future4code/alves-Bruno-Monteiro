## EXERCICIO 1
### a) 
- Utilizamos o VARCHAR para declarar id com no maximo 255 caracteres e é um primary key. 
- Utilizamos o VARCHAR para declarar id tambem com o maximo de 255 caracteres e ele nao pode ser nulo.
- Utilizamos FLOAT para declarar salary e tambem nao pode ser vazio.
- Utilizamos DATE para declarar birth_date e nao pode ser vazio.
- Utilizamos VARCHAR no gender  com no maximo 6 caracteres que nao pode ser vazio.

### b)
- SHOW DATABASES;# Foi mostrado o nome das bases de dados existentes
- SHOW TABLES; # Foi mostrado a tabela de dados existente

### c)
- DESCRIBE Actor;
- Mostra as propriedades e as descricoes das colunas da tabela

## EXERCICIO 2

-- INSERT INTO Actor (id, name, salary, birth_date, gender)
-- VALUES(
--   "001", 
--   "Tony Ramos",
--   400000,
--   "1948-08-25", 
--   "male"
-- );

### a)
-- INSERT INTO Actor (id, name, salary, birth_date, gender)
-- VALUES(
--   "002", 
--   "GLoria Pires",
--   12000000,
--   "1963-08-23", 
--   "female"
-- );

### b)
-- INSERT INTO Actor (id, name, salary, birth_date, gender)
-- VALUES(
--   "002", 
--   "Bruno Monteiro",
--   15000000,
--   "1986-12-28", 
--   "male"
-- );
- Foi gerado um erro de duplicacao com a seguinte mensagem: Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'

### c)
-- INSERT INTO Actor (id, name, salary,birth_date, gender)
-- VALUES(
--   "003", 
--   "Fernanda Montenegro",
--   300000,
--   "1929-10-19", 
--   "female"
-- );
- Foi gerado o erro(Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1) Faltam as propriedades birth_date, gender.

### d)
-- INSERT INTO Actor (name,id, salary, birth_date, gender)
-- VALUES(
--   "004",
--   "Wagner Moura",
--   400000,
--   "1949-04-18", 
--   "male"
-- );
- Foi gerado o erro(Código do erro: 1364. O campo 'name' não tem um valor padrão) Falta a propriedade nome.

#e)
-- INSERT INTO Actor (id, name, salary, birth_date, gender)
-- VALUES(
--   "005", 
--   "Juliana Paes",
--   719333.33,
--   "1979-03-26", 
--   "female"
-- );
- Foi gerado o erro(Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1) faltavam aspas no birth date

### f)
-- INSERT INTO Actor (id, name, salary, birth_date, gender)
-- VALUES(
--   "006", 
--   "Lazaro Ramos",
--   700000,
--   "1972-05-19", 
--   "male"
-- );

-- INSERT INTO Actor (id, name, salary, birth_date, gender)
-- VALUES(
--   "007", 
--   "Anne Hathaway",
--   800000,
--   "1982-11-12", 
--   "female"
-- );

## EXERCICIO 3

### a)
-- SELECT * from Actor 
-- WHERE gender = "female"

### b)
-- SELECT salary from Actor 
-- WHERE name = "Tony Ramos"

### c)
-- SELECT * from Actor 
-- WHERE gender = "invalid"
- O resultado é 0 pois nao existe nenhum registro com o gender invalid.

### d)
-- SELECT id, name, salary from Actor 
-- WHERE salary   >=	50000

### e)
-- SELECT id, nome from Actor WHERE id = "002"
- Foi gerado o erro (Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos') Esse ocorreu pq o correto deveria ser name.

## EXERCICIO 4

### a) A Query acima nesta selecionando todas as propriedades da tabela ator para os regidstros que respeitem a condicao seguinte: Nome comecando com A ou J e um salario acima de 300K

### b) 
-- SELECT * FROM Actor
-- WHERE (name NOT LIKE "A%") AND salary > 350000

### c)
-- SELECT * FROM Actor
-- WHERE name LIKE "%g%" OR name LIKE "%G%";

### d)
-- SELECT * FROM Actor
-- WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000

## EXERCICIO 5


-- CREATE TABLE Movies (
--     id VARCHAR(255) PRIMARY KEY,
--     name VARCHAR (255) NOT NULL,
--     sinopse TEXT NOT NULL,
--     data_de_lancamento DATE NOT NULL,
--     avaliacao FLOAT NOT NULL
-- );

-- INSERT INTO Movies (id, name, sinopse, data_de_lancamento, avaliacao)
-- VALUES(
-- "001",
-- "Se eu Fosse Voce",
-- "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
-- "2006-01-06",
-- "7"
-- );

-- INSERT INTO Movies (id, name, sinopse, data_de_lancamento, avaliacao)
-- VALUES(
-- "002",
-- "Doce de mãe",
-- "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
-- "2012-12-27",
-- "10"
-- );

-- INSERT INTO Movies (id, name, sinopse, data_de_lancamento, avaliacao)
-- VALUES(
-- "003",
-- "Dona Flor e Seus Dois Maridos",
-- "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
-- "2017-11-02",
-- "8"
-- );

-- INSERT INTO Movies (id, name, sinopse, data_de_lancamento, avaliacao)
-- VALUES(
-- "004",
-- "Cidade de Deus",
-- "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio.",
-- "2003-01-17",
-- "9"
-- );

## EXERCICIO 6

### a)
-- SELECT id, name, avaliacao from Movies 
-- WHERE id = "004"

### b)
-- SELECT * from Movies 
-- WHERE name = "Doce de mãe"

### c)
-- SELECT id, name, sinopse from Movies 
-- WHERE avaliacao < 7

## EXERCICIO 7

### a)
-- SELECT * from Movies 
-- WHERE name LIKE "%vida%"

### b)
-- SELECT * FROM Movies
-- WHERE name LIKE "%cidade%" OR
--       sinopse LIKE "%senhora%";

### c)
-- SELECT * FROM Movies
-- WHERE data_de_lancamento < "2022-08-22";

### d)

-- SELECT * FROM Movies
-- WHERE data_de_lancamento < "2022-08-22" AND 
--       (name LIKE "%flor%" OR
--       sinopse LIKE "%casados%") AND avaliacao > 7;

