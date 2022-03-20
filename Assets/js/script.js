var currentDayEl = $("#currentDay");
var timeBlocksEl = $(".time-block");


currentDayEl.text(moment().format('dddd, MMMM Do'));



    timeBlocksEl.each(function(){
        var time = $(this).data("time");
        
        if (moment().format("H") == time){
            $(this).addClass("present")
            console.log("present")
        }
        else if (moment().format("H") > time){
            $(this).addClass("past")
            console.log("past")
        }  
        else if(moment().format("H") < time){
            $(this).addClass("future")
            console.log("future")
        }

    });
    
        
    
    

    





    


 