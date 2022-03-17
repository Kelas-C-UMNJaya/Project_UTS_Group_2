const startTime = () => {
    i = 0;
  
    let timeRun = setInterval(() => {
      if (win == true) {
        clearInterval(timeRun);
      }
      i++;
  
      if (win == true  go == true) {
        clearInterval(timeRun);
      }
  
      if (i > 59) {
        hour++;
  
        if (!(win == true  go == true)) {
          if (hour == 5) {
            clickSound("berkokok");
          }
        }
  
        if (hour > 23) {
          hour = 0;
        }
  
        cekTime(hour);
        setBackground(hour);
  