function getOrder(input) {
    const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
    let ar = [];
    for(let item of menu){
     const num = input.split(item.toLowerCase()).length-1
      for(let i = 0; i < num; i++){
        ar.push(item)
      }
    }
  return ar.join(' ');
}