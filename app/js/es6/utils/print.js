const printArray = (...items) => {
  for(let item of items){
    console.log(`Printing: ${item}`);
  }
}

export {printArray};
