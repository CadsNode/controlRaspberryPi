var http = require('http').createServer(handler); 
var fs = require('fs'); 
var url = require('url');
var path = require('path');
var io = require('socket.io','net')(http) 
var gpio = require('onoff').Gpio; 

var LED2 = new gpio(2, 'out'); 
var LED3 = new gpio(3, 'out');
var LED4 = new gpio(4, 'out');
var LED5 = new gpio(5, 'out');
var LED6 = new gpio(6, 'out');
var LED7 = new gpio(7, 'out');
var LED8 = new gpio(8, 'out');
var LED9 = new gpio(9, 'out');
var LED10 = new gpio(10, 'out');
var LED11 = new gpio(11, 'out');
var LED12 = new gpio(12, 'out');
var LED13 = new gpio(13, 'out');
var LED14 = new gpio(14, 'out'); 
var LED15 = new gpio(15, 'out');
var LED16 = new gpio(16, 'out');
var LED17 = new gpio(17, 'out');
var LED18 = new gpio(18, 'out');
var LED19 = new gpio(19, 'out');
var LED20 = new gpio(20, 'out');
var LED21 = new gpio(21, 'out');
var LED22 = new gpio(22, 'out');
var LED23 = new gpio(23, 'out');
var LED24 = new gpio(24, 'out');
var LED25 = new gpio(25, 'out');
var LED26 = new gpio(26, 'out');
var LED27 = new gpio(27, 'out');


// Default Values
var gpio2Value = 0;  
var gpio3Value = 0; 
var gpio4Value = 0; 
var gpio5Value = 0; 
var gpio6Value = 0; 
var gpio7Value = 0; 
var gpio8Value = 0; 
var gpio9Value = 0; 
var gpio10Value = 0; 
var gpio11Value = 0; 
var gpio12Value = 0; 
var gpio13Value = 0; 
var gpio14Value = 0;  
var gpio15Value = 1; 
var gpio16Value = 1; 
var gpio17Value = 1; 
var gpio18Value = 1; 
var gpio19Value = 1; 
var gpio20Value = 1;
var gpio21Value = 1; 
var gpio22Value = 1; 
var gpio23Value = 1; 
var gpio24Value = 1; 
var gpio25Value = 1; 
var gpio26Value = 1; 
var gpio27Value = 1; 

/****** CONSTANTS******************************************************/


const port = 80;


// Start http webserver
http.listen(port, function() {  // This gets call when the web server is first started.
	// Turn LED on or off
	LED2.writeSync(gpio2Value);
	LED3.writeSync(gpio3Value);
	LED4.writeSync(gpio4Value);
	LED5.writeSync(gpio5Value);
	LED6.writeSync(gpio6Value);
	LED7.writeSync(gpio7Value);
	LED8.writeSync(gpio8Value);
	LED9.writeSync(gpio9Value);
	LED10.writeSync(gpio10Value);
	LED11.writeSync(gpio11Value);
	LED12.writeSync(gpio12Value);
	LED13.writeSync(gpio13Value);
	LED14.writeSync(gpio14Value);
	LED15.writeSync(gpio15Value);
	LED16.writeSync(gpio16Value);
	LED17.writeSync(gpio17Value);
	LED18.writeSync(gpio18Value);
	LED19.writeSync(gpio19Value);
	LED20.writeSync(gpio20Value);
	LED21.writeSync(gpio21Value);
	LED22.writeSync(gpio22Value);
	LED23.writeSync(gpio23Value);
	LED24.writeSync(gpio24Value);
	LED25.writeSync(gpio25Value);
	LED26.writeSync(gpio26Value);
	LED27.writeSync(gpio27Value);

	console.log('Server running on Port '+port);	
	console.log('GPIO2 = '+gpio2Value);
	console.log('GPIO3 = '+gpio3Value);
	console.log('GPIO4 = '+gpio4Value);
	console.log('GPIO5 = '+gpio5Value);
	console.log('GPIO6 = '+gpio6Value);
	console.log('GPIO7 = '+gpio7Value);
	console.log('GPIO8 = '+gpio8Value);
	console.log('GPIO9 = '+gpio9Value);
	console.log('GPIO10 = '+gpio10Value);
	console.log('GPIO12 = '+gpio12Value);
	console.log('GPIO13 = '+gpio13Value);
	console.log('GPIO14 = '+gpio14Value);
	console.log('GPIO15 = '+gpio15Value);
	console.log('GPIO16 = '+gpio16Value);
	console.log('GPIO17 = '+gpio17Value);
	console.log('GPIO18 = '+gpio18Value);
	console.log('GPIO19 = '+gpio19Value);
	console.log('GPIO20 = '+gpio20Value);
	console.log('GPIO21 = '+gpio21Value);
	console.log('GPIO22 = '+gpio22Value);
	console.log('GPIO23 = '+gpio23Value);
	console.log('GPIO24 = '+gpio24Value);
	console.log('GPIO25 = '+gpio25Value);
	console.log('GPIO26 = '+gpio26Value);
	console.log('GPIO27 = '+gpio27Value);
	} 
); 


// function handler is called whenever a client makes an http request to the server
// such as requesting a web page.
function handler (req, res) { 
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    console.log('filename='+filename);
    var extname = path.extname(filename);
    if (filename=='./') {
      console.log('retrieving default index.html file');
      filename= './index.html';
    }
    
    // Initial content type
    var contentType = 'text/html';
    
    // Check ext and set content type
    switch(extname) {
	case '.js':
	    contentType = 'text/javascript';
	    break;
	case '.css':
	    contentType = 'text/css';
	    break;
	case '.json':
	    contentType = 'application/json';
	    break;	
    }
    
    
fs.readFile(__dirname + '/public/' + filename, function(err, content) {
	if(err) {
	    console.log('File not found. Filename='+filename);	    
	}
	else {
	    // Success
	    res.writeHead(200, {'Content-Type': contentType}); 
	    return res.end(content,'utf8');
	}
      
    });
}


// Execute this when web server is terminated
process.on('SIGINT', function () { //on ctrl+c
  LED2.writeSync(0); // Turn LED off
  LED2.unexport(); // Unexport LED GPIO to free resources
  
  LED3.writeSync(0); // Turn LED off
  LED3.unexport(); // Unexport LED GPIO to free resources
  
  LED4.writeSync(0); // Turn LED off
  LED4.unexport(); // Unexport LED GPIO to free resources
  
  LED5.writeSync(0); // Turn LED off
  LED5.unexport(); // Unexport LED GPIO to free resources

  LED6.writeSync(0); // Turn LED off
  LED6.unexport(); // Unexport LED GPIO to free resources

  LED7.writeSync(0); // Turn LED off
  LED7.unexport(); // Unexport LED GPIO to free resources

  LED8.writeSync(0); // Turn LED off
  LED8.unexport(); // Unexport LED GPIO to free resources

  LED9.writeSync(0); // Turn LED off
  LED9.unexport(); // Unexport LED GPIO to free resources

  LED10.writeSync(0); // Turn LED off
  LED10.unexport(); // Unexport LED GPIO to free resources

  LED11.writeSync(0); // Turn LED off
  LED11.unexport(); // Unexport LED GPIO to free resources

  LED12.writeSync(0); // Turn LED off
  LED12.unexport(); // Unexport LED GPIO to free resources

  LED13.writeSync(0); // Turn LED off
  LED13.unexport(); // Unexport LED GPIO to free resources

  LED14.writeSync(0); // Turn LED off
  LED14.unexport(); // Unexport LED GPIO to free resources

  LED15.writeSync(0); // Turn LED off
  LED15.unexport(); // Unexport LED GPIO to free resources

  LED16.writeSync(0); // Turn LED off
  LED16.unexport(); // Unexport LED GPIO to free resources

  LED17.writeSync(0); // Turn LED off
  LED17.unexport(); // Unexport LED GPIO to free resources

  LED18.writeSync(0); // Turn LED off
  LED18.unexport(); // Unexport LED GPIO to free resources

  LED19.writeSync(0); // Turn LED off
  LED19.unexport(); // Unexport LED GPIO to free resources

  LED20.writeSync(0); // Turn LED off
  LED20.unexport(); // Unexport LED GPIO to free resources

  LED21.writeSync(0); // Turn LED off
  LED21.unexport(); // Unexport LED GPIO to free resources

  LED22.writeSync(0); // Turn LED off
  LED22.unexport(); // Unexport LED GPIO to free resources

  LED23.writeSync(0); // Turn LED off
  LED23.unexport(); // Unexport LED GPIO to free resources

  LED24.writeSync(0); // Turn LED off
  LED24.unexport(); // Unexport LED GPIO to free resources

  LED25.writeSync(0); // Turn LED off
  LED25.unexport(); // Unexport LED GPIO to free resources

  LED26.writeSync(0); // Turn LED off
  LED26.unexport(); // Unexport LED GPIO to free resources

  LED27.writeSync(0); // Turn LED off
  LED27.unexport(); // Unexport LED GPIO to free resources

  process.exit(); //exit completely
}); 


/****** io.socket is the websocket connection to the client's browser********/

io.sockets.on('connection', function (socket) {// WebSocket Connection
    console.log('A new client has connectioned. Send LED status');
    socket.emit('GPIO2', gpio2Value);
    socket.emit('GPIO3', gpio3Value);
    socket.emit('GPIO4', gpio4Value);
    socket.emit('GPIO5', gpio5Value);

    socket.emit('GPIO6', gpio6Value);
    socket.emit('GPIO7', gpio7Value);
    socket.emit('GPIO8', gpio8Value);
    socket.emit('GPIO9', gpio9Value);

    socket.emit('GPIO10', gpio10Value);
    socket.emit('GPIO11', gpio11Value);
    socket.emit('GPIO12', gpio12Value);
    socket.emit('GPIO13', gpio13Value);

    socket.emit('GPIO14', gpio14Value);
    socket.emit('GPIO15', gpio15Value);
    socket.emit('GPIO16', gpio16Value);
    socket.emit('GPIO17', gpio17Value);

    socket.emit('GPIO18', gpio18Value);
    socket.emit('GPIO19', gpio19Value);
    socket.emit('GPIO20', gpio20Value);
    socket.emit('GPIO21', gpio21Value);

    socket.emit('GPIO22', gpio22Value);
    socket.emit('GPIO23', gpio23Value);
    socket.emit('GPIO24', gpio24Value);
    socket.emit('GPIO25', gpio25Value);
    socket.emit('GPIO26', gpio26Value);
    socket.emit('GPIO27', gpio27Value);

    
    // this gets called whenever client presses toggle 
    socket.on('GPIO2T', function(data) { 
		if (gpio2Value) gpio2Value = 0;		
		else gpio2Value = 1;
		console.log('new GPIO2 value=' + gpio2Value);
		LED2.writeSync(gpio2Value); //turn LED on or off
		console.log('Send new GPIO2 state to ALL clients');
		io.emit('GPIO2', gpio2Value); //send button status to ALL clients 
    });

     socket.on('GPIO3T', function(data) { 
		if (gpio3Value) gpio3Value = 0;		
		else gpio3Value = 1;
		console.log('new GPIO3 value=' + gpio3Value);
		LED3.writeSync(gpio3Value); //turn LED on or off
		console.log('Send new GPIO3 state to ALL clients');
		io.emit('GPIO3', gpio3Value); //send button status to ALL clients 
    }); 

     socket.on('GPIO4T', function(data) { 
		if (gpio4Value) gpio4Value = 0;		
		else gpio4Value = 1;
		console.log('new GPIO4 value=' + gpio4Value);
		LED4.writeSync(gpio4Value); //turn LED on or off
		console.log('Send new GPIO4 state to ALL clients');
		io.emit('GPIO4', gpio4Value); //send button status to ALL clients 
    }); 

     socket.on('GPIO5T', function(data) { 
		if (gpio5Value) gpio5Value = 0;		
		else gpio5Value = 1;
		console.log('new GPIO5 value=' + gpio5Value);
		LED5.writeSync(gpio5Value); //turn LED on or off
		console.log('Send new GPIO5 state to ALL clients');
		io.emit('GPIO5', gpio5Value); //send button status to ALL clients 
    });   

      socket.on('GPIO6T', function(data) { 
		if (gpio6Value) gpio6Value = 0;		
		else gpio6Value = 1;
		console.log('new GPIO6 value=' + gpio6Value);
		LED6.writeSync(gpio6Value); //turn LED on or off
		console.log('Send new GPIO6 state to ALL clients');
		io.emit('GPIO6', gpio6Value); //send button status to ALL clients 
    }); 

	  socket.on('GPIO7T', function(data) { 
		if (gpio7Value) gpio7Value = 0;		
		else gpio7Value = 1;
		console.log('new GPIO7 value=' + gpio7Value);
		LED7.writeSync(gpio7Value); //turn LED on or off
		console.log('Send new GPIO7 state to ALL clients');
		io.emit('GPIO7', gpio7Value); //send button status to ALL clients 
	});


	 socket.on('GPIO8T', function(data) { 
		if (gpio8Value) gpio8Value = 0;		
		else gpio8Value = 1;
		console.log('new GPIO8 value=' + gpio8Value);
		LED8.writeSync(gpio8Value); //turn LED on or off
		console.log('Send new GPIO8 state to ALL clients');
		io.emit('GPIO8', gpio8Value); //send button status to ALL clients 
    });

     socket.on('GPIO9T', function(data) { 
		if (gpio9Value) gpio9Value = 0;		
		else gpio9Value = 1;
		console.log('new GPIO9 value=' + gpio9Value);
		LED9.writeSync(gpio9Value); //turn LED on or off
		console.log('Send new GPIO9 state to ALL clients');
		io.emit('GPIO9', gpio9Value); //send button status to ALL clients 
    });

     socket.on('GPIO10T', function(data) { 
		if (gpio10Value) gpio10Value = 0;		
		else gpio10Value = 1;
		console.log('new GPIO10 value=' + gpio10Value);
		LED10.writeSync(gpio10Value); //turn LED on or off
		console.log('Send new GPIO10 state to ALL clients');
		io.emit('GPIO10', gpio10Value); //send button status to ALL clients 
    });

     socket.on('GPIO11T', function(data) { 
		if (gpio11Value) gpio11Value = 0;		
		else gpio11Value = 1;
		console.log('new GPIO11 value=' + gpio11Value);
		LED11.writeSync(gpio11Value); //turn LED on or off
		console.log('Send new GPIO11 state to ALL clients');
		io.emit('GPIO11', gpio11Value); //send button status to ALL clients 
    }); 

     socket.on('GPIO12T', function(data) { 
		if (gpio12Value) gpio12Value = 0;		
		else gpio12Value = 1;
		console.log('new GPIO12 value=' + gpio12Value);
		LED12.writeSync(gpio12Value); //turn LED on or off
		console.log('Send new GPIO12 state to ALL clients');
		io.emit('GPIO12', gpio12Value); //send button status to ALL clients 
    });

     socket.on('GPIO13T', function(data) { 
		if (gpio13Value) gpio13Value = 0;		
		else gpio13Value = 1;
		console.log('new GPIO13 value=' + gpio13Value);
		LED13.writeSync(gpio13Value); //turn LED on or off
		console.log('Send new GPIO13 state to ALL clients');
		io.emit('GPIO13', gpio13Value); //send button status to ALL clients 
    }); 

     socket.on('GPIO14T', function(data) { 
		if (gpio14Value) gpio14Value = 0;		
		else gpio14Value = 1;
		console.log('new GPIO14 value=' + gpio14Value);
		LED14.writeSync(gpio14Value); //turn LED on or off
		console.log('Send new GPIO14 state to ALL clients');
		io.emit('GPIO14', gpio14Value); //send button status to ALL clients 
    });  

     socket.on('GPIO15T', function(data) { 
		if (gpio15Value) gpio15Value = 0;		
		else gpio15Value = 1;
		console.log('new GPIO15 value=' + gpio15Value);
		LED15.writeSync(gpio15Value); //turn LED on or off
		console.log('Send new GPIO15 state to ALL clients');
		io.emit('GPIO15', gpio15Value); //send button status to ALL clients 
    });  

     socket.on('GPIO16T', function(data) { 
		if (gpio16Value) gpio16Value = 0;		
		else gpio16Value = 1;
		console.log('new GPIO16 value=' + gpio16Value);
		LED16.writeSync(gpio16Value); //turn LED on or off
		console.log('Send new GPIO16 state to ALL clients');
		io.emit('GPIO16', gpio16Value); //send button status to ALL clients 
    });

     socket.on('GPIO17T', function(data) { 
		if (gpio17Value) gpio17Value = 0;		
		else gpio17Value = 1;
		console.log('new GPIO17 value=' + gpio17Value);
		LED17.writeSync(gpio17Value); //turn LED on or off
		console.log('Send new GPIO17 state to ALL clients');
		io.emit('GPIO17', gpio17Value); //send button status to ALL clients 
    });

     socket.on('GPIO18T', function(data) { 
		if (gpio18Value) gpio18Value = 0;		
		else gpio18Value = 1;
		console.log('new GPIO18 value=' + gpio18Value);
		LED18.writeSync(gpio18Value); //turn LED on or off
		console.log('Send new GPIO18 state to ALL clients');
		io.emit('GPIO18', gpio18Value); //send button status to ALL clients 
    }); 

     socket.on('GPIO19T', function(data) { 
		if (gpio19Value) gpio19Value = 0;		
		else gpio19Value = 1;
		console.log('new GPIO19 value=' + gpio19Value);
		LED19.writeSync(gpio19Value); //turn LED on or off
		console.log('Send new GPIO19 state to ALL clients');
		io.emit('GPIO19', gpio19Value); //send button status to ALL clients 
    });

     socket.on('GPIO20T', function(data) { 
		if (gpio20Value) gpio20Value = 0;		
		else gpio20Value = 1;
		console.log('new GPIO20 value=' + gpio20Value);
		LED20.writeSync(gpio20Value); //turn LED on or off
		console.log('Send new GPIO20 state to ALL clients');
		io.emit('GPIO20', gpio20Value); //send button status to ALL clients 
    }); 

     socket.on('GPIO21T', function(data) { 
		if (gpio21Value) gpio21Value = 0;		
		else gpio21Value = 1;
		console.log('new GPIO21 value=' + gpio21Value);
		LED21.writeSync(gpio21Value); //turn LED on or off
		console.log('Send new GPIO21 state to ALL clients');
		io.emit('GPIO21', gpio21Value); //send button status to ALL clients 
    }); 

     socket.on('GPIO22T', function(data) { 
		if (gpio22Value) gpio22Value = 0;		
		else gpio22Value = 1;
		console.log('new GPIO22 value=' + gpio22Value);
		LED22.writeSync(gpio22Value); //turn LED on or off
		console.log('Send new GPIO22 state to ALL clients');
		io.emit('GPIO22', gpio22Value); //send button status to ALL clients 
    });

     socket.on('GPIO23T', function(data) { 
		if (gpio23Value) gpio23Value = 0;		
		else gpio23Value = 1;
		console.log('new GPIO23 value=' + gpio23Value);
		LED23.writeSync(gpio23Value); //turn LED on or off
		console.log('Send new GPIO23 state to ALL clients');
		io.emit('GPIO23', gpio23Value); //send button status to ALL clients 
    });

     socket.on('GPIO24T', function(data) { 
		if (gpio24Value) gpio24Value = 0;		
		else gpio24Value = 1;
		console.log('new GPIO24 value=' + gpio24Value);
		LED24.writeSync(gpio24Value); //turn LED on or off
		console.log('Send new GPIO24 state to ALL clients');
		io.emit('GPIO24', gpio24Value); //send button status to ALL clients 
    }); 

     socket.on('GPIO25T', function(data) { 
		if (gpio25Value) gpio25Value = 0;		
		else gpio25Value = 1;
		console.log('new GPIO25 value=' + gpio25Value);
		LED25.writeSync(gpio25Value); //turn LED on or off
		console.log('Send new GPIO25 state to ALL clients');
		io.emit('GPIO25', gpio25Value); //send button status to ALL clients 
    });

     socket.on('GPIO26T', function(data) { 
		if (gpio26Value) gpio26Value = 0;		
		else gpio26Value = 1;
		console.log('new GPIO26 value=' + gpio26Value);
		LED26.writeSync(gpio26Value); //turn LED on or off
		console.log('Send new GPIO26 state to ALL clients');
		io.emit('GPIO26', gpio26Value); //send button status to ALL clients 
    });  

     socket.on('GPIO27T', function(data) { 
		if (gpio27Value) gpio27Value = 0;		
		else gpio27Value = 1;
		console.log('new GPIO27 value=' + gpio27Value);
		LED27.writeSync(gpio27Value); //turn LED on or off
		console.log('Send new GPIO27 state to ALL clients');
		io.emit('GPIO27', gpio27Value); //send button status to ALL clients 
    });         


////////////////
    socket.on('GPIO2', function(data) { 
		gpio2Value = data;
		if (gpio2Value != LED2.readSync()) { //only change LED if status has changed
		    LED2.writeSync(gpio2Value); //turn LED on or off
		    console.log('Send new GPIO2 state to ALL clients');
		    io.emit('GPIO2', gpio2Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO3', function(data) { 
		gpio3Value = data;
		if (gpio3Value != LED3.readSync()) { //only change LED if status has changed
		    LED3.writeSync(gpio3Value); //turn LED on or off
		    console.log('Send new GPIO3 state to ALL clients');
		    io.emit('GPIO3', gpio3Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO4', function(data) { 
		gpio4Value = data;
		if (gpio4Value != LED4.readSync()) { //only change LED if status has changed
		    LED4.writeSync(gpio4Value); //turn LED on or off
		    console.log('Send new GPIO4 state to ALL clients');
		    io.emit('GPIO4', gpio2Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO5', function(data) { 
		gpio5Value = data;
		if (gpio5Value != LED5.readSync()) { //only change LED if status has changed
		    LED5.writeSync(gpio5Value); //turn LED on or off
		    console.log('Send new GPIO5 state to ALL clients');
		    io.emit('GPIO5', gpio5Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO6', function(data) { 
		gpio6Value = data;
		if (gpio6Value != LED6.readSync()) { //only change LED if status has changed
		    LED6.writeSync(gpio6Value); //turn LED on or off
		    console.log('Send new GPIO6 state to ALL clients');
		    io.emit('GPIO6', gpio2Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO7', function(data) { 
		gpio7Value = data;
		if (gpio7Value != LED7.readSync()) { //only change LED if status has changed
		    LED7.writeSync(gpio7Value); //turn LED on or off
		    console.log('Send new GPIO7 state to ALL clients');
		    io.emit('GPIO2', gpio7Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO8', function(data) { 
		gpio8Value = data;
		if (gpio8Value != LED8.readSync()) { //only change LED if status has changed
		    LED8.writeSync(gpio8Value); //turn LED on or off
		    console.log('Send new GPIO8 state to ALL clients');
		    io.emit('GPIO8', gpio8Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO9', function(data) { 
		gpio9Value = data;
		if (gpio9Value != LED9.readSync()) { //only change LED if status has changed
		    LED9.writeSync(gpio9Value); //turn LED on or off
		    console.log('Send new GPIO9 state to ALL clients');
		    io.emit('GPIO9', gpio9Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO10', function(data) { 
		gpio10Value = data;
		if (gpio10Value != LED10.readSync()) { //only change LED if status has changed
		    LED10.writeSync(gpio10Value); //turn LED on or off
		    console.log('Send new GPIO10 state to ALL clients');
		    io.emit('GPIO10', gpio10Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO11', function(data) { 
		gpio11Value = data;
		if (gpio11Value != LED11.readSync()) { //only change LED if status has changed
		    LED11.writeSync(gpio11Value); //turn LED on or off
		    console.log('Send new GPIO11 state to ALL clients');
		    io.emit('GPIO11', gpio11Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO12', function(data) { 
		gpio12Value = data;
		if (gpio12Value != LED12.readSync()) { //only change LED if status has changed
		    LED12.writeSync(gpio12Value); //turn LED on or off
		    console.log('Send new GPIO12 state to ALL clients');
		    io.emit('GPIO12', gpio12Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO13', function(data) { 
		gpio13Value = data;
		if (gpio13Value != LED13.readSync()) { //only change LED if status has changed
		    LED13.writeSync(gpio13Value); //turn LED on or off
		    console.log('Send new GPIO13 state to ALL clients');
		    io.emit('GPIO13', gpio13Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO14', function(data) { 
		gpio14Value = data;
		if (gpio14Value != LED14.readSync()) { //only change LED if status has changed
		    LED14.writeSync(gpio14Value); //turn LED on or off
		    console.log('Send new GPIO14 state to ALL clients');
		    io.emit('GPIO14', gpio14Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO15', function(data) { 
		gpio15Value = data;
		if (gpio15Value != LED15.readSync()) { //only change LED if status has changed
		    LED15.writeSync(gpio15Value); //turn LED on or off
		    console.log('Send new GPIO15 state to ALL clients');
		    io.emit('GPIO15', gpio15Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO16', function(data) { 
		gpio16Value = data;
		if (gpio16Value != LED16.readSync()) { //only change LED if status has changed
		    LED16.writeSync(gpio16Value); //turn LED on or off
		    console.log('Send new GPIO16 state to ALL clients');
		    io.emit('GPIO16', gpio16Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO17', function(data) { 
		gpio17Value = data;
		if (gpio17Value != LED17.readSync()) { //only change LED if status has changed
		    LED17.writeSync(gpio17Value); //turn LED on or off
		    console.log('Send new GPIO17 state to ALL clients');
		    io.emit('GPIO17', gpio17Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO18', function(data) { 
		gpio18Value = data;
		if (gpio18Value != LED18.readSync()) { //only change LED if status has changed
		    LED18.writeSync(gpio18Value); //turn LED on or off
		    console.log('Send new GPIO18 state to ALL clients');
		    io.emit('GPIO18', gpio18Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO19', function(data) { 
		gpio19Value = data;
		if (gpio19Value != LED19.readSync()) { //only change LED if status has changed
		    LED19.writeSync(gpio19Value); //turn LED on or off
		    console.log('Send new GPIO19 state to ALL clients');
		    io.emit('GPIO19', gpio19Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO20', function(data) { 
		gpio20Value = data;
		if (gpio20Value != LED20.readSync()) { //only change LED if status has changed
		    LED20.writeSync(gpio20Value); //turn LED on or off
		    console.log('Send new GPIO20 state to ALL clients');
		    io.emit('GPIO20', gpio20Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO21', function(data) { 
		gpio21Value = data;
		if (gpio21Value != LED21.readSync()) { //only change LED if status has changed
		    LED21.writeSync(gpio21Value); //turn LED on or off
		    console.log('Send new GPIO21 state to ALL clients');
		    io.emit('GPIO21', gpio21Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO22', function(data) { 
		gpio22Value = data;
		if (gpio22Value != LED22.readSync()) { //only change LED if status has changed
		    LED22.writeSync(gpio22Value); //turn LED on or off
		    console.log('Send new GPIO22 state to ALL clients');
		    io.emit('GPIO22', gpio22Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO23', function(data) { 
		gpio23Value = data;
		if (gpio23Value != LED23.readSync()) { //only change LED if status has changed
		    LED23.writeSync(gpio23Value); //turn LED on or off
		    console.log('Send new GPIO23 state to ALL clients');
		    io.emit('GPIO23', gpio23Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO24', function(data) { 
		gpio24Value = data;
		if (gpio24Value != LED24.readSync()) { //only change LED if status has changed
		    LED24.writeSync(gpio24Value); //turn LED on or off
		    console.log('Send new GPIO24 state to ALL clients');
		    io.emit('GPIO24', gpio24Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO25', function(data) { 
		gpio25Value = data;
		if (gpio25Value != LED25.readSync()) { //only change LED if status has changed
		    LED25.writeSync(gpio25Value); //turn LED on or off
		    console.log('Send new GPIO25 state to ALL clients');
		    io.emit('GPIO25', gpio25Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO26', function(data) { 
		gpio26Value = data;
		if (gpio26Value != LED26.readSync()) { //only change LED if status has changed
		    LED26.writeSync(gpio26Value); //turn LED on or off
		    console.log('Send new GPIO26 state to ALL clients');
		    io.emit('GPIO26', gpio26Value); //send button status to ALL clients 
		};	
    });

    socket.on('GPIO27', function(data) { 
		gpio27Value = data;
		if (gpio27Value != LED27.readSync()) { //only change LED if status has changed
		    LED27.writeSync(gpio27Value); //turn LED on or off
		    console.log('Send new GPIO27 state to ALL clients');
		    io.emit('GPIO27', gpio27Value); //send button status to ALL clients 
		};	
    });
     

    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
		console.log('A user disconnected');
    });
    

}); 


 



