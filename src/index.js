function question() {
  const x = prompt('Вопрос?');

  if (Number(x)) {
    console.log('Это было число');
  } else {
    console.log('Это, похоже, не было числом (но это не точно)');
  }
}

question();
