export const calcularEdad = () => {
  const fechaNacimiento = new Date("2004-01-14");
  const hoy = new Date();

  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes = hoy.getMonth();
  const dia = hoy.getDate();

  if (
    mes < fechaNacimiento.getMonth() ||
    (mes === fechaNacimiento.getMonth() && dia < fechaNacimiento.getDate())
  ) {
    edad--;
  }

  return edad;
};

// Parpadeo de la sombra
export const toggleShadow = (setIsShadowActive, time) => {
  const interval = setInterval(() => {
    setIsShadowActive((prev) => !prev);
  }, time);

  return () => clearInterval(interval);
};
