function namify(users) {
  //return users.map(item => item.name);

  return users.map(({name}) => name); // деструктурузировал объект
}
