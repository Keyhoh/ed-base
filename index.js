const getRoot = () => document.getElementById("root");
const init = () => getRoot().innerHTML = '';
const createContent = d => {
    let div = document.createElement('div');
    const htmlString = `<p><strong>${d.name}</strong></p><p>${d.detail}</p>`;
    div.innerHTML = htmlString
    return div;
}
const appendContent = d => {
    let li = document.createElement('li');
    li.appendChild(createContent(d));
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
