# semana 3
Proyecto de backend de un modulo de inicio de sesion 
se utilizo express y una base de datos
el login se realiza mediante la ruta /api/auth/signin
responde con tres estados 
200 - si se logea exitosamente
404 - si el usuario no existe
401 - si la contraseña esta equivocada

el modelo usa los campos name, email, password

se crearon dos rutas adicionales 
/api/auth/register  permite añadir un usuario

/api/auth    lista los ususarios de la BD con todos sus campos
