/* ================================
   Calculadora de impacto
==================================*/

if (document.getElementById("donacion")) {
    const input = document.getElementById('donacion');
    const web = document.getElementById('impact-web');
    const robot = document.getElementById('impact-robot');
    const conect = document.getElementById('impact-conect');

    const costo = { web:1200, robot:1500, conect:800 };

    function updateImpact(){
        const monto = Number(input.value) || 0;
        web.textContent = Math.floor(monto / costo.web);
        robot.textContent = Math.floor(monto / costo.robot);
        conect.textContent = Math.floor(monto / costo.conect);
    }

    input.addEventListener('input', updateImpact);
}


/* ================================
   FORMULARIO VOLUNTARIADO
==================================*/

if (document.getElementById("voluntarioForm")) {

    const form = document.getElementById("voluntarioForm");
    const formSection = document.getElementById("form-section");
    const successSection = document.getElementById("success-section");

    successSection.style.display = "none";

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        formSection.style.display = "none";
        successSection.style.display = "block";
        form.reset();
    });

};

if (document.getElementById("confirmarDonacion")) {
   const btnDonar = document.getElementById("confirmarDonacion");
   const msgGracias = document.getElementById("mensajeGracias");
   const impactoSection = document.querySelector(".impacto-section");
   const hero = document.querySelector(".hero-donation");


   btnDonar.addEventListener("click", () => {
      impactoSection.style.display = "none";
      hero.style.display = "none";
      msgGracias.style.display = "block";
   });
};