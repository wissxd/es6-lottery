{
  let str = '\u{20bb7}abc';
  for(let code of str){
    console.log('es6',code);
  }
}

{
  let str = 'string';
  console.log('includes',str.includes('c'));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

{
  let str = 'abc';
  console.log(str.repeat(7));
}

{
  let name = 'wissxd';
  let info = 'hello es6';
  let m = `I\'m ${name},${info}`;
  console.log(m);
}

{
  console.log('1'.padStart(2,'0'));
  console.log('1'.padEnd(2,'0'));
}
