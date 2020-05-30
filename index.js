const getRoot = () => document.getElementById("root");
const init = () => getRoot().innerHTML = '';
const appendContent = content => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(content));
    getRoot().appendChild(li);
}
const show = json => json.forEach(d => appendContent(d.fields.content_name[0]));
const BASE_URL = 'https://198182tj3g.execute-api.ap-northeast-1.amazonaws.com/edbaseapi';
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
