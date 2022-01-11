function getAdmins(map) {
  let admins = []
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

const usuarios = new Map()

usuarios.set('Luiz', 'User')
usuarios.set('Stephany', 'Admin')
usuarios.set('Jorge', 'User')
usuarios.set('Gil', 'Admin')
usuarios.set('Natallia', 'Admin')

console.log(getAdmins(usuarios))