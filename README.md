# GATO-E-RATO

## Sobre o Projeto

Este projeto consiste em uma simulação interativa e animada baseada no clássico comportamento de perseguição entre um gato e um rato. A aplicação foi desenvolvida utilizando HTML, CSS e a biblioteca **p5.js** junto com a extensão **p5.play** para gerenciar o carregamento de sprites, a troca de animações de estado e a detecção de proximidade em tempo real.

Na simulação, o rato inicialmente permanece parado reproduzindo uma animação de provocação. Ao pressionar a barra de espaço, o gato altera seu comportamento e começa a se mover em direção ao rato mudando sua animação para uma corrida/caminhada. Quando o gato entra no raio de colisão (hitbox) do rato, ambos interrompem o movimento e alteram seus estados visuais: o gato senta e o rato permanece imóvel apenas observando o felino.

---

## Funcionalidades

* Controle e gatilho da simulação acionados através do teclado (Tecla Space).
* Troca dinâmica de estados e animações baseada no ciclo de eventos do jogo.
* Sistema de movimentação e vetor de direção fazendo com que o gato persiga a posição do rato.
* Cálculo de proximidade e detecção precisa de hitbox usando `p5.play` para interromper o movimento.
* Renderização de cenário estático de fundo (`garden.png`) integrado com os sprites móveis.
* Interação visual contínua com troca de frames para simular ações de provocar, andar e sentar/observar.

---

## Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **p5.js** (e extensões: p5.dom, p5.play)

---

## Objetivo

O principal objetivo deste projeto é aplicar os conceitos de Máquina de Estados Finitos (FSM) em jogos web, controlando o comportamento e os quadros de animação dos personagens de acordo com as ações do usuário (input de teclado) e com as condições físicas do cenário (distância e colisão de hitboxes).

---

## Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos como:

* Criação e gerenciamento de grupos de animações compostas por múltiplos arquivos de imagem (`cat1` a `cat4` e `mouse1` a `mouse4`).
* Controle e transição de estados de animação (`changeAnimation`) através de gatilhos condicionais.
* Utilização de funções de escuta de teclado nativas do p5.js, como `keyPressed()` ou condicionais de monitoramento de teclas.
* Algoritmos de aproximação linear ou perseguição de coordenadas em eixos bidimensionais.
* Configuração e manipulação do tamanho e formato de hitboxes com `p5.play` para garantir uma parada natural dos personagens antes que eles se sobreponham completamente.

---

## Como Executar

1. Clone este repositório:
```bash
git clone [https://github.com/seu-usuario/GATO-E-RATO.git](https://github.com/seu-usuario/GATO-E-RATO.git)
```
 
2. Acesse a pasta do projeto:

```bash
cd GATO-E-RATO
```

3. Abra o arquivo index.html em seu navegador de preferência e utilize a barra de espaço para interagir com os personagens.

## Estrutura do Projeto

```text
GATO-E-RATO/
│
├── assets\img/
│   ├── cat1.png
│   ├── cat2.png
│   ├── cat3.png
│   ├── cat4.png
│   ├── garden.png
│   ├── mouse1.png
│   ├── mouse2.png
│   ├── mouse3.png
│   └── mouse4.png
│
├── scripts/
│   ├── p5.dom.min.js
│   ├── p5.js
│   ├── p5.play.js
│   └── sketch.js
│
├── style/
│   └── style.css
│
├── index.html
└── README.md
```

--- 

## Licença
Este projeto foi desenvolvido exclusivamente para fins educacionais e de aprendizado.

Desenvolvido como prática de lógica de animações e manipulação de sprites, criando a interação de perseguição controlada entre o Gato e o Rato utilizando a biblioteca p5.js.
