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

function selectedTextFinder(degrees){
  switch((degrees/90)%4) {
    case 0:
      return 1;
      break;
    case 1:
      return 4;
      break;
    case 2:
      return 3;
      break;
    case 3:
      return 2;
      break;
  }

}

function selectedTextFinder2(degrees, direction){
  switch((degrees/90)%4) {
    case 0:
      return 1;
      break;
    case 1:
      if (direction === 'clockwise') {
        return 4;
      } else return 2;
      
      break;
    case 2:
      return 3;
      break;
    case 3:
      if (direction === 'clockwise') {
        return 2;
      } else return 4;
      return 2;
      break;
  }

}

console.log(selectedTextFinder(90));

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
    let bigFinalText = `${document.getElementById(`big-text${selectedTextFinder2(finalRotationDegreeBig, 'clockwise')}`).innerText}`;
    let mediumFinalText = `${document.getElementById(`medium-text${selectedTextFinder2(finalRotationDegreeMedium, 'anti-clockwise')}`).innerText}`; 
    let smallFinalText = `${document.getElementById(`small-text${selectedTextFinder2(finalRotationDegreeSmall, 'clockwise')}`).innerText}`; 
    
    //document.getElementById('big-final').innerHTML = `${document.getElementById(`big-text${selectedTextFinder2(finalRotationDegreeBig, 'clockwise')}`).innerHTML}${finalRotationDegreeBig}`;
    //document.getElementById('medium-final').innerHTML = `${document.getElementById(`medium-text${selectedTextFinder2(finalRotationDegreeMedium, 'anti-clockwise')}`).innerHTML}${finalRotationDegreeMedium}`; 
    //document.getElementById('small-final').innerHTML = `${document.getElementById(`small-text${selectedTextFinder2(finalRotationDegreeSmall, 'clockwise')}`).innerHTML}${finalRotationDegreeSmall}`; 

    document.getElementById('arrow-button').ariaLabel = bigFinalText + mediumFinalText + smallFinalText;



  }

  //console.log(randomDegreeGenerator());

  function randomRotate2() {
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
    clearInterval(idMedium);
    clearInterval(idSmall);
    id = setInterval(function(){
      frame1();
      frame2();
      frame3();
      
    }, 5);
    function frame1() {
      if (rotationDegreeBig !== finalRotationDegreeBig) {
        rotationDegreeBig++;
        bigCircle.style.transform = `rotate(${rotationDegreeBig}deg)`;


        //clearInterval(id);
        
      } /*else {
        clearInterval(id);
      }
        /*rotationDegreeBig++;
        
        bigCircle.style.transform = `rotate(${rotationDegreeBig}deg)`
        //mediumCircle.style.transform = `rotate(${-rotationDegree}deg)`
        //smallCircle.style.transform = `rotate(${rotationDegree}deg)`*/
      
    }
    
    //idMedium = setInterval(frame2, 5);
    function frame2() {
      if (rotationDegreeMedium !== finalRotationDegreeMedium) {
        rotationDegreeMedium++;
        mediumCircle.style.transform = `rotate(${-rotationDegreeMedium}deg)`
        //clearInterval(id);
      } /*else {
        rotationDegreeMedium++;
        
        //bigCircle.style.transform = `rotate(${rotationDegree}deg)`
        mediumCircle.style.transform = `rotate(${-rotationDegreeMedium}deg)`
        //smallCircle.style.transform = `rotate(${rotationDegree}deg)`
      }*/
    }
    
    //idSmall = setInterval(frame3, 5);
    function frame3() {
      if (rotationDegreeSmall !== finalRotationDegreeSmall) {
        rotationDegreeSmall++;
        smallCircle.style.transform = `rotate(${rotationDegreeSmall}deg)`
        //clearInterval(id);
      } /*else {
        rotationDegreeSmall++;
        
        //bigCircle.style.transform = `rotate(${rotationDegree}deg)`
        //mediumCircle.style.transform = `rotate(${-rotationDegree}deg)`
        smallCircle.style.transform = `rotate(${rotationDegreeSmall}deg)`
      }*/
    }
    
  }