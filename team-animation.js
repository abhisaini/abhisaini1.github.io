var page=["#Faculty_Advisors","#a"];
function animate2(x,navhover){
		if(x==page[0]){
			return;
		}
		else{
           /* 
            $(page[0]).css({ "transform": "rotateY(180deg)", "transition": "all 0.8s linear" });
            //$(page[0]).fadeTo(600, '0.5');
            $(page[0]).delay(800).queue(function (next) {
                $(this).css({ "transform": "rotateY(0deg)", "transition": "all 0.1s linear", "display": "none" });
                $(x).css({ "display": "block" });
                next();
            });
            //$(x).fadeTo(800, '1');*/
            $(x).css({ "opacity": "1"});
            $(navhover).css({ "color": "black" });
            $(page[1]).css({ "color": "white" });
            $(page[0]).slideUp(1000);
            $(page[0]).css({ "opacity": "0.7", "transition": 'opacity 1s' });
            $(x).slideDown(1000);
            page = [x, navhover];
        
		}
		
		 
}
