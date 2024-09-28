# Binario

Aprenda números binários

## O que é binário?

Binário é um sistema de numeração posicional em que todas as quantidades se representam com base em dois números, 0 e 1. O sistema binário é o sistema de numeração mais simples que se conhece e é a base de todos os computadores digitais.

## Como funciona?

O sistema binário é baseado em potências de 2. Cada dígito binário é chamado de bit. O bit é a menor unidade de informação que pode ser armazenada ou transmitida. Um conjunto de 8 bits forma um byte.

## Conversão de decimal para binário

Para converter um número decimal em binário, basta dividir o número decimal por 2 e anotar o resto da divisão. Em seguida, dividir o resultado da divisão anterior por 2 e anotar o resto da divisão. Repetir o processo até que o resultado da divisão seja 0.

### Exemplo

Vamos converter o número decimal 13 em binário.

```
13 / 2 = 6 resto 1
6 / 2 = 3 resto 0
3 / 2 = 1 resto 1
1 / 2 = 0 resto 1
```

Agora, leia os restos de baixo para cima: 1101. Portanto, 13 em binário é 1101.

### Conversão de binário para decimal

Para converter um número binário em decimal, basta multiplicar cada dígito binário pela potência de 2 correspondente à sua posição e somar os resultados.

### Exemplo

Vamos converter o número binário 1101 em decimal.

```
1 * 2^3 = 1 * 8 = 8
1 * 2^2 = 1 * 4 = 4
0 * 2^1 = 0 * 2 = 0
1 * 2^0 = 1 * 1 = 1
```

Agora, some os resultados: 8 + 4 + 0 + 1 = 13. Portanto, 1101 em decimal é 13.

## Deslocamento Binário

O deslocamento binário é uma operação que move todos os bits de um número para a esquerda ou para a direita. O deslocamento para a esquerda é equivalente a multiplicar o número por 2, enquanto o deslocamento para a direita é equivalente a dividir o número por 2.

### Exemplo

Vamos deslocar o número binário 1101 para a esquerda.

```
1101 << 1 = 11010
```

Agora, vamos deslocar o número binário 1101 para a direita.

```
1101 >> 1 = 110
```