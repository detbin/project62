const nombre='David'
const apellido='Eskenazi'
alumno= {
    nombre,
    apellido
}
sessionStorage.setItem('estudiante',alumno)
localStorage.setItem('estudiante',alumno)
document.cookie=("Nombre"+alumno)
document.cookie="nombreCaducidad=Nombre;expires="+new Date(120000).toUTCString()
