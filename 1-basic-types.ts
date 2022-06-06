enum Role {
  ADMIN, SUPER, AUTHOR
};

const person = {
  name: 'Suppa hot fire',
  age: 25,
  hobbies: ['Sports', 'Music'],
  role: Role.AUTHOR,
}

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('is AUTHOR');
}
