function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
        elem.style.transform = `rotate(${pos}deg)`
      }
    }
  }

  function myRotate() {
    let id = null;
    const bigCircle = document.getElementById("big");
    const mediumCircle = document.getElementById("medium");
    const smallCircle = document.getElementById("small");
    let rotationDegree = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (rotationDegree == 60) {
        clearInterval(id);
      } else {
        rotationDegree++;
        
        bigCircle.style.transform = `rotate(${rotationDegree}deg)`
        mediumCircle.style.transform = `rotate(${-rotationDegree}deg)`
        smallCircle.style.transform = `rotate(${rotationDegree}deg)`
      }
    }
  }

function randomDegreeGenerator() {
  let multiple = Math.floor(Math.random() * 10);
  let factor = 90;
  return 90 + multiple * factor;
}


  function randomRotate() {
    let idBig = null;
    let idMedium = null;
    let idSmall = null;
    const bigCircle = document.getElementById("big");
    const mediumCircle = document.getElementById("medium");
    const smallCircle = document.getElementById("small");
    let rotationDegreeBig = 0;
    let rotationDegreeMedium = 0;
    let rotationDegreeSmall = 0;
    let finalRotationDegreeBig = randomDegreeGenerator();
    let finalRotationDegreeMedium = randomDegreeGenerator();
    let finalRotationDegreeSmall = randomDegreeGenerator();
    clearInterval(idBig);
    idBig = setInterval(frame1, 5);
    function frame1() {
      if (rotationDegreeBig == finalRotationDegreeBig) {
        clearInterval(idBig);
      } else {
        rotationDegreeBig++;
        
        bigCircle.style.transform = `rotate(${rotationDegreeBig}deg)`
        //mediumCircle.style.transform = `rotate(${-rotationDegree}deg)`
        //smallCircle.style.transform = `rotate(${rotationDegree}deg)`
      }
    }
    clearInterval(idMedium);
    idMedium = setInterval(frame2, 5);
    function frame2() {
      if (rotationDegreeMedium == finalRotationDegreeMedium) {
        clearInterval(idMedium);
      } else {
        rotationDegreeMedium++;
        
        //bigCircle.style.transform = `rotate(${rotationDegree}deg)`
        mediumCircle.style.transform = `rotate(${-rotationDegreeMedium}deg)`
        //smallCircle.style.transform = `rotate(${rotationDegree}deg)`
      }
    }
    clearInterval(idSmall);
    idSmall = setInterval(frame3, 5);
    function frame3() {
      if (rotationDegreeSmall == finalRotationDegreeSmall) {
        clearInterval(idSmall);
      } else {
        rotationDegreeSmall++;
        
        //bigCircle.style.transform = `rotate(${rotationDegree}deg)`
        //mediumCircle.style.transform = `rotate(${-rotationDegree}deg)`
        smallCircle.style.transform = `rotate(${rotationDegreeSmall}deg)`
      }
    }
    
  }

  //console.log(randomDegreeGenerator());