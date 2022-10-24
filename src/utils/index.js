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

export function sortedContacts(arr) {
  return [...arr].sort((a, b) => {
    if (a.displayName.toLowerCase() < b.displayName.toLowerCase()) {
      return -1
    }
    if (a.displayName.toLowerCase() > b.displayName.toLowerCase()) {
      return 1
    }
    return 0
  })
}
