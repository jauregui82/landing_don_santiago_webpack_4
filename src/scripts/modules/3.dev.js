const dev = () => {
  let nom = "Jauregui", ap = "Crespo", web = "https://jauregui82.github.io/cv/", text = `Sitio Web Desarrollado por: ${nom} ${ap}`;
  console.log(text);
  console.log("Sitio web de contacto: ", web);
}

const init = () => {
  window.dev = dev;
}
export {
  init
}
