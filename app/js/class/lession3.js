{
  let regex = new RegExp(/xyz/ig,'i');
  console.log(regex.flags);
}

{
  let s = 'bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;

  console.log('one',a1.exec(s),a2.exec(s));
  console.log('two',a1.exec(s),a2.exec(s));

  //判断是否开启了y修饰符
  console.log(a1.sticky,a2.sticky);
}
