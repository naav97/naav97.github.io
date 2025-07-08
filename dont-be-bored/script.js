const preguntas = [
  "pregunta 1",
  "pregunta 2",
  "pregunta 3",
];

let ultima_preg_index = -1;

const set_pregunta = () => {
  const pregunta_cont = document.getElementById("pregunta");
  let rand_index = Math.floor(Math.random()*preguntas.length);
  while(rand_index == ultima_preg_index) {
    rand_index = Math.floor(Math.random()*preguntas.length);
  }
  const pregunta = preguntas[rand_index];
  pregunta_cont.innerText = pregunta;
  ultima_preg_index = rand_index;
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");
  const reload_btn = document.getElementById("reload");
  reload_btn.addEventListener("click", set_pregunta);
  set_pregunta();
});
