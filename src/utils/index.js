export function hydrateData(data) {
  return {
    displayName: data.displayName,
    phoneNumbers: data.phoneNumbers,
  }
}

export function getInitials(fullname) {
  const names = fullname.split(' ')
  const initials = names.map(name => name[0])
  return initials.join('')
}
