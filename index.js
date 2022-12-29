const nombre='David'
const apellido='Eskenazi'
alumno= {
    nombre,
    apellido
}
sessionStorage.setItem('estudiante',alumno)
localStorage.setItem('estudiante',alumno)
document.cookie=("Nombre"+alumno)
document.cookie="nombreCaducidad=Nombre;expires="+new Date(2023,14,08).toUTCString()
