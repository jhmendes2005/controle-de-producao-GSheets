<h1>CPv0.0.1 - Controle de Produção</h2>

<hr>
<h2>DESCRIÇÃO E EXPLICAÇÃO DO PROJETO COMPLETA:</h2>

<p>Este projeto foi desenvolvido para suprir nescessidades simples e básicas de uma micro-indústria do ramo de embalagens, caso você busque algo para sua máquina de extrusão ou algo do tipo, você entrou no lugar certo (eu espero haha)! O intuito era trocar a utulização de papéis, por planilhas virtuais que possam ser utilizadas sem um grande volume físico, algo que era um impasse gigante, pois utilizamos cerca de 3 folhas por dia em cerca de 97% de todos os dias do ano. Pensando nisto, desenvolvi esta simples planilha com funções de um ERP simples, só que com um custo MUITO menor, algo que chamou a atenção da empresa, que buscava simplicidade e um custo benefício. Mas por que utilizamos o Google Sheets? Pelo simples fato dele ser mais fácil de ser compilado em diversas plataformas para todos que queiram acompanhar a produção em tempo real, de onde estiver (sem precisar configurar clouds ou etc.). A planilha visa controlar a produção por medida produzida, para podermos controlar a razão entre tempo X quilos, sejam eles por minutos, horas, dias, meses ou até mesmo por ano (algo que era impossível com aquele mar de papéis aleatórios)! Não possuo experiência em desenvolvimento, mas utilizei oque eu sei neste projeto e pretendo evoluir ele constantemente!</p>
<hr>

<h2>COMO USAR?</h2>

<p>Bom, primeiramente você deve acessar nosso modelo de <a href="https://docs.google.com/spreadsheets/d/14J-pIhruHfn2RYxb8vkIBeFng88iTih3uTrxfc02u7g/edit#gid=0">PLANILHA</a> que já estão com seus ranges configurados diretamente nas linhas de códigos do sistema. Após acessar, crie uma cópia (ARQUIVO > FAZER UMA CÓPIA) para que você possa editar e ter acesso ao source diretamente da IDE do Google Script, feito isto, basta ir em: EXTENSÕES > APPS SCRIPT, e lá estará o código completo para editar ou utilizar como quiser! Caso queira editar em uma IDE prórpia, recomendamos utilizar o Framework Clasp e importar o código diretamente em sua IDE (lembre-se de sempre dar commit). Lembrando que qualquer tipo de alteração diretamente na planilha, deverá ser atualizado o range do source manualmente!</p>

<p>AVISO:
Os arquivos fora do /src/ são arquivos para utilização do Clasp. Ou seja, não tem nescessidades caso você vá utilizar o Google Scripts diretamente. Utilize os packages caso de algum tipo de erro ao utilizar o Clasp!</p>
<hr>

<h2>FUNCIONALIDADES:</h2>
Obs.: Vou lançar as funcionalidades aqui no README aos poucos.

<p>Aqui temos a planilha principal, onde temos alguns botões e inputs de textos configurados.</p>
<img src="https://user-images.githubusercontent.com/82621707/201161306-787d5e57-f522-485b-ae8a-5cb95587b2bf.png" style="width:800px;"/>
<hr>

<p>Ao acionarmos o botão "NOVA ATIVIDADE MÁQUINA 1", ele extrai as informações de Data apartir do clique, e as mesmas são salvas na célula abaixo.</p>
<img src="https://user-images.githubusercontent.com/82621707/201193177-7d337365-8e04-4c08-9735-f2b8f2794960.png" style="width:800px;"/>
<hr>

<p>Aqui faremos as configurações básicas de acordo com nossa máquina! Neste caso temos que preencher 3 itens iniciais, que estão em destaque de acordo com a imagem:</p>
<img src="https://user-images.githubusercontent.com/82621707/201194158-fd660832-1512-429f-86f5-ab8490ba141e.png" style="width:800px;"/>
<p>No item de cor Amarela, nós deixaremos com o valor padrão, que é a "Produção", futuramente será implementado mais registros como Paradas, que relatará quais quer tipos de paudas por erros, falta de insumos ou etc.<p>
<p>No item de cor Verde, nós selecionaremos o tamanho da bobina que será produzida, esta lista pode ser editada a qualquer momento na pasta do próprio Google Sheet (irei mostrar em breve).</p>
<p>No item de cor Azul, segue o mesmo esquema do item Amarelo, deveremos selecionar o tipo de pigmentação que será usada nesta bobina.</p>
<hr>

<p>Após iniciarmos a produção, nosso extrusor deverá reportar o peso de sua primeira bobina válida, para podermos tirar a média de peso das demais bobinas, facilitando o retrabalho de pesar as demais, já que todas saem no mesmo peso e tamanho, tendo apenas uma margem de erro considerada de 1%.</p>
<img src="https://user-images.githubusercontent.com/82621707/201196596-b7add302-f9a1-48c3-b35c-ed40c3370070.png" style="width:800px;"/>
<hr>

<p>Por último, deverá ser preenchido ao fim da produção, a quantidade de bobinas feitas desta mesma medida.</p>
<img src="https://user-images.githubusercontent.com/82621707/201197389-875fc5e0-1284-4930-bc00-ded067660c33.png" style="width:800px;"/>
<hr>

<p>Após todas as células necessárias respondidas, usaremos o botão "FINALIZAR ATIVIDADE" de sua respectiva máquina, para podermos finalizar a produção atual.</p>
<img src="https://user-images.githubusercontent.com/82621707/201199116-479232ba-726a-4820-b544-e6ca1defe1dd.png" style="width:800px;"/>
<hr>

<p>Após finalizarmos, nossa planilha contabiliza a produção de acordo com a data, ou seja, a soma da produção diária se reseta automaticamente a cada dia que passa!</p>
<img src="https://user-images.githubusercontent.com/82621707/201199394-71c76bd3-f7a0-4cd3-ab12-dc45625d4b86.png" style="width:800px;"/>
<hr>

<p>Mas para onde foram os dados coletados? Os dados coletados se encontram na pasta "produção", e lá contém todas as produções já realizadas e reportadas das três máquinas!</p>
<img src="https://user-images.githubusercontent.com/82621707/201200096-faddbe27-7f8f-4ef2-ba39-25f5ba7051af.png" style="width:800px;"/>
<p>Na planilha nós podemos encontrar todas as informações sobre as produções já reportadas, informações que podem ser filtradas com mais facilidade! A planilha também conta com um sistema que define qual é o operador de acordo com o horário e com a data semanal!</p>
<hr>

<h2>PRÓXIMAS ATUALIZAÇÕES PREVISTAS:</h2>

<ul>
    <li>
        <h3>Sitemas de ID's por registro de produção.</h3>
        <p>Visando um maior controle, e maior facilidade em localizar produções específicas, implementarei um sistema de geração de ID's para cada produção realizada.</p>
    </li>
    <li>
        <h3>Botão para adição na contagem de bobinas produzidas.</h3>
        <p>Para uma maior facilidade do operador, iremos adicionar botões para fácil adição de novas bobinas na contagem de Bobina/Unds!</p>
    </li>
    <li>
        <h3></h3>
        <p></p>
    </li>
</ul>

<h2>Autores:</h2>

<ul>
    <li>
        <h3>João Henrique Mendes, Desenvolvedor, 17 Anos</h3>
        <a href="https://www.linkedin.com/in/jo%C3%A3o-henrique-mendes-015819207">LinkedIn<a>
    </li>
    <li>
        <h3>Soberano Embalagens</h3>
        <a href="https://www.soberanoembalagens.com.br">Site<a>
    </li>
<ul>