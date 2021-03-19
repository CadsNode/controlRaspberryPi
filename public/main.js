var socket = io(); 


window.addEventListener("load", function(){ //when page loads
  if( isMobile.any() ) {
//    alert('Mobile');  
    document.addEventListener("touchstart", ReportTouchStart, false);  
  }else{
//    alert('Desktop');     
    document.addEventListener("mousedown", ReportMouseDown, false);
  }
  
});


socket.on('GPIO2', function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO2').checked = data;
});


socket.on('GPIO3', function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO3').checked = data;
});

socket.on('GPIO4', function (data) {  
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO4').checked = data;
});

socket.on('GPIO14', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO14').checked = data;
});

socket.on('GPIO15', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO15').checked = data;
});

socket.on('GPIO17', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO17').checked = data;
});

socket.on('GPIO18', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO18').checked = data;
});

socket.on('GPIO27', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO27').checked = data;
});

socket.on('GPIO22', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO22').checked = data;
});

socket.on('GPIO23', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO23').checked = data;
});

socket.on('GPIO24', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO24').checked = data;
});

socket.on('GPIO10', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO10').checked = data;
});

socket.on('GPIO9', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO9').checked = data;
});

socket.on('GPIO25', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO25').checked = data;
});

socket.on('GPIO11', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO11').checked = data;
});

socket.on('GPIO8', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO8').checked = data;
});

socket.on('GPIO7', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO7').checked = data;
});

socket.on('GPIO5', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO5').checked = data;
});

socket.on('GPIO6', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO6').checked = data;
});

socket.on('GPIO12', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO12').checked = data;
});

socket.on('GPIO13', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO13').checked = data;
});

socket.on('GPIO19', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO19').checked = data;
});

socket.on('GPIO16', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO16').checked = data;
});

socket.on('GPIO26', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO26').checked = data;
});

socket.on('GPIO20', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO20').checked = data;
});

socket.on('GPIO21', function (data) { 
  var myJSON = JSON.stringify(data);
  document.getElementById('GPIO21').checked = data;
});


function ReportTouchStart(e) {
  var y = e.target.previousElementSibling;
  if (y !== null) var x = y.id;
  if (x !== null) { 
  // Send GPIO button toggle to node.js server
    if (x === "GPIO2") {
      socket.emit("GPIO2T");  // 
    } 
    else if (x === "GPIO3") {
      socket.emit("GPIO3T");  
    } 
    else if (x === "GPIO4") {
      socket.emit("GPIO4T");  
    } 
    else if (x === "GPIO5") {
      socket.emit("GPIO5T");  
    }
    else if (x === "GPIO6") {
      socket.emit("GPIO6T");  
    } 
    else if (x === "GPIO7") {
      socket.emit("GPIO7T");  
    } 
    else if (x === "GPIO8") {
      socket.emit("GPIO8T");  
    }
    else if (x === "GPIO9") {
      socket.emit("GPIO9T");  
    }
    else if (x === "GPIO10") {
      socket.emit("GPIO10T");  
    }
    else if (x === "GPIO11") {
      socket.emit("GPIO11T");  
    }
    else if (x === "GPIO12") {
      socket.emit("GPIO12T");  
    }
    else if (x === "GPIO13") {
      socket.emit("GPIO13T");  
    }
    else if (x === "GPIO14") {
      socket.emit("GPIO14T");  
    }
    else if (x === "GPIO15") {
      socket.emit("GPIO15T");  
    }
    else if (x === "GPIO16") {
      socket.emit("GPIO16T");  
    }
    else if (x === "GPIO17") {
      socket.emit("GPIO17T");  
    }
    else if (x === "GPIO18") {
      socket.emit("GPIO18T");  
    }
    else if (x === "GPIO19") {
      socket.emit("GPIO19T");  
    }
    else if (x === "GPIO20") {
      socket.emit("GPIO20T");  
    }
    else if (x === "GPIO21") {
      socket.emit("GPIO21T");  
    }
    else if (x === "GPIO22") {
      socket.emit("GPIO22T");  
    }
    else if (x === "GPIO23") {
      socket.emit("GPIO23T");  
    } 
    else if (x === "GPIO24") {
      socket.emit("GPIO24T");  
    }
    else if (x === "GPIO25") {
      socket.emit("GPIO25T");  
    }
    else if (x === "GPIO26") {
      socket.emit("GPIO26T");  
    }
    else if (x === "GPIO27") {
      socket.emit("GPIO27T");  
    }                    
  }
}




function ReportMouseDown(e) {
  var y = e.target.previousElementSibling;
  if (y !== null) var x = y.id;
  if (x !== null) { 
  // Send GPIO button toggle to node.js server
    if (x === "GPIO2") {
      socket.emit("GPIO2T");  // 
    } 
    else if (x === "GPIO3") {
      socket.emit("GPIO3T");  
    } 
    else if (x === "GPIO4") {
      socket.emit("GPIO4T");  
    } 
    else if (x === "GPIO5") {
      socket.emit("GPIO5T");  
    }
    else if (x === "GPIO6") {
      socket.emit("GPIO6T");  
    } 
    else if (x === "GPIO7") {
      socket.emit("GPIO7T");  
    } 
    else if (x === "GPIO8") {
      socket.emit("GPIO8T");  
    }
    else if (x === "GPIO9") {
      socket.emit("GPIO9T");  
    }
    else if (x === "GPIO10") {
      socket.emit("GPIO10T");  
    }
    else if (x === "GPIO11") {
      socket.emit("GPIO11T");  
    }
    else if (x === "GPIO12") {
      socket.emit("GPIO12T");  
    }
    else if (x === "GPIO13") {
      socket.emit("GPIO13T");  
    }
    else if (x === "GPIO14") {
      socket.emit("GPIO14T");  
    }
    else if (x === "GPIO15") {
      socket.emit("GPIO15T");  
    }
    else if (x === "GPIO16") {
      socket.emit("GPIO16T");  
    }
    else if (x === "GPIO17") {
      socket.emit("GPIO17T");  
    }
    else if (x === "GPIO18") {
      socket.emit("GPIO18T");  
    }
    else if (x === "GPIO19") {
      socket.emit("GPIO19T");  
    }
    else if (x === "GPIO20") {
      socket.emit("GPIO20T");  
    }
    else if (x === "GPIO21") {
      socket.emit("GPIO21T");  
    }
    else if (x === "GPIO22") {
      socket.emit("GPIO22T");  
    }
    else if (x === "GPIO23") {
      socket.emit("GPIO23T");  
    } 
    else if (x === "GPIO24") {
      socket.emit("GPIO24T");  
    }
    else if (x === "GPIO25") {
      socket.emit("GPIO25T");  
    }
    else if (x === "GPIO26") {
      socket.emit("GPIO26T");  
    }
    else if (x === "GPIO27") {
      socket.emit("GPIO27T");  
    }                    
  }
}




/** function to sense if device is a mobile device ***/
// Reference: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser

var isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};


