//Loop within a loop
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log("i=" + i + "j=" + j);
  }
}

//example 2
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log("i=" + i + "j=" + j);
  }
}
//example 3
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("i=" + i + "j=" + j);
  }
}

//example 4
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log("i=" + i + "j=" + j);
  }
}
