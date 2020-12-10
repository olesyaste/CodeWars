function songDecoder(song) {
    const arr = song.split('WUB');
    let answer = '';
    arr.forEach((item) => {
      if (item) {
        answer = answer + ' ' + item;
      }
    });
  return answer.trim();
}
  
  
  songDecoder("WUBJKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWUBWVWUBWUB") // "A B C","WUB should be replaced by 1 space");
  songDecoder("AWUBWUBWUBBWUBWUBWUBC") // "A B C","multiples WUB should be replaced by only 1 space");
  songDecoder("WUBAWUBBWUBCWUB")