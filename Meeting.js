function meeting(s) {
    let ar = s.split(';').join().toUpperCase()
    spl = ar.split(' ')
    let arr;
    for(let i = 0; i < spl.length; i++){
     arr = spl[i].split(',')
    }
    let newar = [];
    for(let i = 0; i < arr.length; i++){
     newar.push(arr[i].split(':').reverse().join(', '))
    }
    return '(' + newar.sort().join(')(') + ')'
}
