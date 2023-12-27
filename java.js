const anmol = document.querySelector('.anmol');
anmol.addEventListener('click',(e)=>{
    console.log(e.target.parentNode);
    let removeit = e.target.parentNode;
    removeit.remove();

} )