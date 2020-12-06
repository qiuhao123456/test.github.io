/*点击后滑块固定在当前点击的条目上*/
window.onload = initLinkStyle; 
function initLinkStyle() { 
  if(document.getElementsByName('myset')){ 
    var arrLink = document.getElementsByName('myset'); 
    for(i = 0; i < arrLink.length; i++) { 
      var link = arrLink[i]; 
      link.className='middle0_3_1';     
      link.onclick = clickNav;   
    } 
  } 
} 

function clickNav(event) { 
  var target = event.currentTarget;
  if(document.getElementsByName('myset')){ 
    var arrLink = document.getElementsByName('myset'); 
    for(i = 0; i < arrLink.length; i++) { 
      var link = arrLink[i]; 
      if(link.className == 'middle0_3_2') { 
        link.className = 'middle0_3_1'; 
      } 
    } 
  } 
  target.className = 'middle0_3_2'; 
}