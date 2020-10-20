function dup(s) {
    let n = s.toString().split('')
    let arr = [];
    for(let i = 0; i < n.length; i++){
      if ((n[i]) !== n[i+1]){
        arr.push(n[i])
      }
    }
    return arr.join('').split(',')
  };

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]);
//['codewars','picaniny','hubububo']);
dup(["abracadabra","allottee","assessee"]);
//['abracadabra','alote','asese']);
dup(["kelless","keenness"]);
//['keles','kenes']);
dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]);
//['Wolomolo','flodoromonlighters','chuchchi']);