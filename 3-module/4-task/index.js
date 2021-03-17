function showSalary(users, age) {
  return users
    // .filter(item => item.age <= age)
    // .map(item => `${item.name}, ${item.balance}`)
    // .join('\n');
    .filter(item => item.age <= age)
    .map(({name, balance}) => `${name}, ${balance}`)
    .join('\n');
}
