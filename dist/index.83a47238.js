const String = `
<style>
body{
    background:red;
}
</style>

`;
let n = 1;
demo.innerText = String.substr(0, n);
demo2.innerHTML = String.substr(0, n);
console.log(n);
let id = setInterval(()=>{
    n += 1;
    if (n > String.length) {
        window.clearInterval(id);
        return;
    }
    console.log(n + ":" + String.substr(0, n));
    demo.innerText = String.substr(0, n);
    demo2.innerHTML = String.substr(0, n);
}, setTimeout(300));

//# sourceMappingURL=index.83a47238.js.map
