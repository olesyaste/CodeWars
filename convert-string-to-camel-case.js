function toCamelCase(str){
    let ar
    if(str.includes('-')) { 
      ar = str.split('-')
    } else {
    ar = str.split('_')
    }
    let r = []
    for(let i = 1; i < ar.length; i++){
      r.push(`${ar[i][0].toUpperCase()}${ar[i].slice(1).toLowerCase()}`)
    }
      return ar[0] + (r.join(''))
}
  
  toCamelCase('') // '', "An empty string was provided but not returned")
  toCamelCase("the_stealth_warrior") // "theStealthWarrior", toCamelCase('the_stealth_warrior') // did not return correct value")
  toCamelCase("The-Stealth-Warrior") // "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
  toCamelCase("A-B-C") // "ABC", "toCamelCase('A-B-C') did not return correct value")