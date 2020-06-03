
  document.querySelector('#tab-1').addEventListener('click' , function(){

  document.querySelector('#tab-2').classList.remove('tab-border');
  document.querySelector('#tab-3').classList.remove('tab-border');
  document.querySelector('#tab-1').classList.add('tab-border');
  document.querySelector('#tab-3-content').classList.remove('show');
  document.querySelector('#tab-2-content').classList.remove('show');
  document.querySelector('#tab-1-content').classList.add('show');
    // show tab-1-content
  });

  document.querySelector('#tab-2').addEventListener('click' , function(){

  document.querySelector('#tab-1').classList.remove('tab-border');
  document.querySelector('#tab-3').classList.remove('tab-border');
  document.querySelector('#tab-2').classList.add('tab-border');
  document.querySelector('#tab-1-content').classList.remove('show');
  document.querySelector('#tab-3-content').classList.remove('show');
  document.querySelector('#tab-2-content').classList.add('show');
    // show tab-1-content
  });

  document.querySelector('#tab-3').addEventListener('click' , function(){

  document.querySelector('#tab-2').classList.remove('tab-border');
  document.querySelector('#tab-1').classList.remove('tab-border');
  document.querySelector('#tab-3').classList.add('tab-border');
  document.querySelector('#tab-2-content').classList.remove('show');
  document.querySelector('#tab-1-content').classList.remove('show');
  document.querySelector('#tab-3-content').classList.add('show');
    // show tab-1-content
  })
