<!-- criar um banco de dados com nome Ecommerce -->
create database Ecommerce

<!-- entrar no banco de dados Ecommerce -->
use Ecommerce

<!-- criar tabela Produtos com colunas Codigo, Nome, Descricao, Preco -->
create table Produtos
(
  Codigo int not null,
  Nome varchar(100) not null,
  Descricao varchar(200) not null,
  Preco float
)

<!-- tipos de informação -->
varchar -> caracteres alfanuméricos 
char -> caracteres alfanuméricos com espaços pré-definidos
int -> números inteiros
bigInt -> números inteiros grandes (ex. CPF)
float -> números reais
bit -> 0, 1
datetime -> data

null é a ausência de valores
null -> aceita nulos
not null -> não aceita nulos

<!-- excluir uma tabela -->
drop table Produtos

<!-- Selecionar uma tabela -->
select * from Produtos
<!-- mostrar mais informações da tabela -->
+ alt F1

<!-- inserir uma linha/adicionar com informações -->
<!--  ; indica o final da instrução/da linha -->
insert into Produtos (Codigo, Nome, Descricao, Preco) values (1, 'caneta', 'caneta azul', 3.80);
<!-- é possível enviar os valores fora de ordem, desde que sejam ordenadas as colunas antes -->
insert into Produtos (Codigo, Nome, Preco, Descricao) values (1, 'caneta', 3.80, 'caneta azul');
<!-- é possível omitir o comando into -->
insert Produtos (Codigo, Nome, Descricao, Preco) values (1, 'caneta', 'caneta azul', 3.80);
<!-- é possível omitir as colunas, porém ele considera as colunas na ordem que existem -->
insert Produtos values (1, 'caneta', 'caneta azul', 3.80);
<!-- é possível enviar mais de uma informação, separadas por vírgula -->
insert Produtos values (1, 'caneta', 'caneta azul', 3.80), (2, 'caneta', 'caneta vermelha', 3.90);

<!-- * seleciona todas as colunas da tabela -->
select *
from Produtos

<!-- seleciona as colunas Codigo e Preco da tabela -->
select Codigo, Preco
from Produtos

<!-- seleciona as linhas que contém o Nome caneta (todos) -->
select *
from Produtos
where Nome = 'caneta'

<!-- modifica o Codigo e o Nome das linhas que tem o Preco = 3.90 -->
update Produtos
set Codigo = 3,
    Nome = Caneta
where Preco = 3.90

<!-- um update sem a clausula where atualiza todas as linhas da tabela -->
update Produtos
set Preco = 2.20

<!-- deleta todos os Produtos da tabela -->
delete
from Produtos

<!-- deleta Produtos que tem Codigo igual a 2 -->
delete
from Produtos
where Codigo = 2

<!-- seleciona Produto com as duas condições (Codigo e Nome) -->
select *
from Produtos
where Codigo = 1
AND Nome = 'caneta azul'

<!-- seleciona Produto com uma das duas condições (Codigo ou Nome) -->
select *
from Produtos
where Codigo = 1
OR Nome = 'caneta azul'

<!-- função do SQL para data atual -->
getDate()

<!-- retorna a data atual na coluna DataCriacao em que os valores são nulos -->
select isnull(DataCriacao, getdate()), *
from Produtos

<!-- caso o TipoPessoa seja ____ escreva ____, senão escreva ____ -->
select *,
      case
          when TipoPessoa = 'J' then 'Jurídica'
          when TipoPessoa = 'F' then 'Física'
          else 'Pessoa indefinida'
      end
from Clientes

<!-- conversão de tipagem da coluna DataSolicitacao para varchar com até 50 caracteres e na formatação 103 (padrão brasileiro, o envio da formatação não é obrigatório) -->
select *, convert(varchar(50), DataSolicitacao, 103)
from Clientes

<!-- é possível concatenar as tarefas após o end -->
select *,
      case
          when TipoPessoa = 'J' then 'Jurídica'
          when TipoPessoa = 'F' then 'Física'
          else 'Pessoa indefinida'
      end + convert(varchar, GETDATE(), 103)
from Clientes

<!-- chave primária -->
- identifica um registro
- tem que ser única
- gera melhor performance
- exemplo: cpf do cliente, código, etc

<!-- chave estrangeira -->
- chave que faz a relação de uma tabela com outra tabela
- é uma cópia da chave primária, pois se referencia a ela

<!-- adiciona a coluna Codigo como chave primária -->
<!-- não é possível adicionar um código igual -->
select *
from Clientes

alter table Clientes add constraint pk_cliente primary key (Codigo)

<!-- é possível omitir essa informação e deixar na responsabilidade do banco de dados (incrementa de 1 em 1) -->
insert Produtos values ('caneta', 'caneta azul', 3.80)

<!-- referenciar uma coluna primary key de outra tabela -->
select *
from PedidoItem

alter table PedidoItem add constraint fk_pedido foreign key (CodigoPedido) reference Pedido (Codigo)

<!-- normalização de dados -->
- eliminar grupos repetidos em tabelas individuais
- criar uma tabela separada para cada conjunto de dados relacionados
- identificar cada conjunto de dados relacionados com uma chave primária
- criar tabelas separadas para conjuntos de valores que se aplicam a vários registros
- relacionas essas tabelas com uma chave estrangeira
- eliminar campos que não dependem da chave

<!-- é possíel adicionar um apelido para a tabela -->
select *
from Clientes cli

<!-- inner join analisa e retorna as colunas iguais de 2 tabelas (Clientes e Pedidos) -->
select *
from Clientes cli
inner join Pedido ped
on cli.Codigo = ped.CodigoCliente

<!-- left join analisa e retorna as colunas a esquerda de 2 tabelas (Clientes e Pedidos) -->
select *
from Clientes cli
left join Pedido ped
on cli.Codigo = ped.CodigoCliente

<!-- direita join analisa e retorna as colunas a direita de 2 tabelas (Clientes e Pedidos) -->
select *
from Clientes cli
right join Pedido ped
on cli.Codigo = ped.CodigoCliente

<!-- sum() -->
soma os itens selecionados da tabela

<!-- avg() -->
faz a média dos itens selecionados da tabela

<!-- count() -->
retorna a quantidade de linhas da seleção

<!-- group by -->
agrega as informações para retornar alguma função

<!-- order by -->
ordena as informações selecionadas (caso não seja enviado nenhuma informação ele retorna por default de forma crescente, se quiser decrescente adicionar desc no fim do comando)
utilizar se quiser ordenar pelo resultado final de uma operação

<!-- not in -->
que não esteja em...

<!-- between -->
que está dentro do range de valor

<!-- not between -->
que não está dentro do range de valor

<!-- ltrim -->
retira os espaços a esquerda do varchar

<!-- like 'Dart%' ou 'Vader%' ou '%Vader%' -->
pesquisa por Dart... por ...Vader por ...Vader...

