async function certificados() {
    const requestURL = 'https://chseidler.github.io/json/data.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const myObj = await response.json();

    const class1 = document.createElement('div');
    class1.setAttribute('class', 'row row-cols-1 row-cols-md-3 mb-3 text-center');

    for (const i in myObj) {

        const cartaoCompleto = document.createElement('div');
        cartaoCompleto.setAttribute('class', 'col d-flex');

        const cabecalhoCartao = document.createElement('div');
        cabecalhoCartao.setAttribute('class', 'card mb-4 rounded-3 shadow-sm');

        const tituloCabecalho = document.createElement('div');
        tituloCabecalho.setAttribute('class', 'card-header py-1 bg-dark');

        const escritaTitulo = document.createElement('h4');
        escritaTitulo.setAttribute('class', 'my-0 text-light bg-dark');
        escritaTitulo.textContent = myObj[i].certificador;

        const corpoCartao = document.createElement('div');
        corpoCartao.setAttribute('class', 'card-body bg-dark');

        const escritaCorpo = document.createElement('h4');
        escritaCorpo.setAttribute('class', 'card-title pricing-card-title');
        escritaCorpo.textContent = myObj[i].descricao;

        const corpoHoras = document.createElement('ul');
        corpoHoras.setAttribute('class', 'list-unstyled mt-3 mb-4');

        const escritaHoras = document.createElement('li');
        escritaHoras.textContent = myObj[i].horas + " h";

        const linkCompleto = document.createElement('a');
        linkCompleto.setAttribute('href', myObj[i].link);
        linkCompleto.setAttribute('target', '_blank');
        linkCompleto.setAttribute('class', 'btnCh');
        linkCompleto.textContent = "Link";

        class1.appendChild(cartaoCompleto);
        cartaoCompleto.appendChild(cabecalhoCartao);
        cabecalhoCartao.appendChild(tituloCabecalho);
        tituloCabecalho.appendChild(escritaTitulo);
        cabecalhoCartao.appendChild(corpoCartao);
        corpoCartao.appendChild(escritaCorpo);
        corpoCartao.appendChild(corpoHoras);
        corpoHoras.appendChild(escritaHoras);
        corpoCartao.appendChild(linkCompleto);
    }

    document.getElementById("certificados").appendChild(class1);
}