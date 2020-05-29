const show = json => console.table(json);
const search = q => fetch(`http://search-ed-base-z45dxy5xynu2rgy7v6zoicokcm.ap-northeast-1.cloudsearch.amazonaws.com/2013-01-01/search?q=${q}`)
    .then(res => res.json())
    .then(show);
const format = d => d;
const submit = () => {
    const q = document.getElementById('q').value;
    search(q);
}

document.getElementById("submit").addEventListener("click", submit);
