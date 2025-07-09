const preguntas = [
  "¿Qué emociones experimenté hoy? ¿Puedo identificar por qué?",
  "¿Qué me dio paz hoy?",
  "¿Qué me generó incomodidad o tensión?",
  "¿Qué logré hoy que me hace sentir satisfecho?",
  "¿Tomé decisiones alineadas con mis objetivos?",
  "¿Qué hice hoy que me acercó (o me alejó) de la persona que quiero ser?",
  "¿Contribuí al bienestar de otra persona hoy, aunque fuera en algo pequeño?",
  "¿Qué aprendí hoy? ¿Sobre mí, sobre otros, sobre el mundo?",
  "¿Hoy hice algo que me pareció significativo?",
  "¿Me sentí conectado con algo más grande que yo (una causa, un ideal, una emoción)?",
  "¿De qué me siento agradecido hoy?",
  "¿Qué deseo para mí mañana?",
  "¿Si pudiera repetir solo un momento del día, cuál sería y por qué?",
  "¿Qué idea me rodean en este momento? ¿Por qué esta idea me llama la atención ahora?",
  "¿Qué idea me rodean en este momento? ¿Esta idea me da energía o me drena?",
  "¿Quién soy cuando no estoy haciendo nada?",
  "¿Soy la misma persona que era hace 5 años? ¿Qué ha cambiado?",
  "¿Hacia dónde estoy yendo? ¿Ese rumbo me sigue haciendo sentido?",
  "¿Estoy persiguiendo algo porque lo deseo o porque otros lo esperan de mí?",
  "¿Estoy sacrificando algo esencial por algo secundario?",
  "¿Qué necesidad o deseo profundo está detrás de mi plan de vida?",
  "¿A quién podría pedir ayuda y no lo he hecho?",
  "¿Qué pasó hoy que me hizo sonreír, aunque fuera un segundo?",
  "¿Qué recuerdo compartido con alguien me llena el corazón?",
  "¿Qué decisión tomé en el pasado que me está beneficiando hoy?",
  "¿Qué lección aprendí de algo doloroso?",
  "¿Qué problema ya superé que antes parecía imposible?",
  "¿A quién podría expresarle gratitud esta semana?",
  "Haz una mini historieta de lo que podría estar pensando un objetoque tengas a tu alrededor.",
  "Dibuja lo primero que venga a tu mente si cierras los ojos 10 segundos.",
  "Dibuja una escena que te gustaría estar viviendo en ese momento.",
  "¿Qué te está funcionando? ¿Qué no? ¿Qué hábito nuevo te haría bien?",
  "¿Qué hábito tengo que ya no me sirve, pero mantengo por comodidad?",
  "¿Qué me da energía cada día, y qué me la drena?",
  "¿Qué pensamientos aparecen cada mañana al despertar?",
  "¿Estoy construyendo hábitos que alimentan la versión de mí que quiero ser?",
  "¿Hay algo que hago todos los días que ya no sé por qué hago?",
  "¿Qué hábitos (que tengo) reflejan autocuidado, y cuáles autoabandono?",
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
