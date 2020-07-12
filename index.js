const getRoot = () => document.getElementById("root");
const init = () => getRoot().innerHTML = '';
const createDiv = text => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div;
}
const appendContent = content => {
    let li = document.createElement('li');
    li.appendChild(createDiv(d.name));
    li.appendChild(createDiv(d.detail));
    getRoot().appendChild(li);
}
const show = json => json.forEach(d => appendContent(d.field));
const BASE_URL = 'https://198182tj3g.execute-api.ap-northeast-1.amazonaws.com/edbaseapi/v1/search';
const search = q => fetch(`${BASE_URL}?q=${q}`, {mode: 'cors'})
    .then(res => res.json())
    .then(show);
const format = d => d;
const submit = () => {
    const q = document.getElementById('q').value;
    init();
    search(q);
}

document.getElementById("submit").addEventListener("click", submit);
document.getElementById("q").addEventListener("keydown", e => (e.key === 'Enter') && submit());
