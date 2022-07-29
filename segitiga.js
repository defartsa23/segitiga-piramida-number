let num = 6;
for (let i = 0; i < num; i++){
  let tampung = '';
  let temp = 0;

  for (let j = 1; j < num - i; j++){
    tampung += ' '
  }

  for (let k = 0; k < i + i + 1; k++){
    const div = Math.round( (i + i + 1) / 2 );
    
    if (k > 0 && k < div) {
        temp *= 2
    } else if (k >= div) { 
        temp /= 2
    } else if (k+1 == i+i+1) {
        temp = 1
    } else {
        temp = k+1
    }
    
    tampung += temp
  }
  console.log(tampung);
}