// TODO List app. Store data in localstorage. add option to create delete and access all todos.
let count=0;
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let titlec = title.value;
    let descc = desc.value;
    localStorage.setItem(titlec, descc);
    count++;
    console.log(e);
    table.innerHTML += `
    <tr>
        <th scope="row">${count}</th>
        <td>${titlec}</td>
        <td>${descc}</td>
    </tr>
    `
    titlec.value="";
    descc.value="";

});

deleteB.addEventListener("click", (e) => {
    e.preventDefault();
    let titlecd = title.value;
    localStorage.removeItem(titlecd);
    table.innerHTML += `



    `
    document.getElementById("table").deleteRow({count});
    console.log(e);

})