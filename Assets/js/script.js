var currentDayEl = $("#currentDay");
var timeBlocksEl = $(".time-block");

var timeBlockTextArr = []


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

    var saveTask = function() {
        var text = $(this).siblings(".description").val()   
        console.log(text);

        
        }
    
    
    $(".saveBtn").on("click", saveTask)


    // $(".list-group").on("click", "p", function() {
    //     var text = $(this)
    //     .text()
    //     .trim();
    //     var textInput = $("<textarea>")
    //     .addClass("form-control")
    //     .val(text);
    //     $(this).replaceWith(textInput);
    //     textInput.trigger("focus");
    //   });


    
    // setTimeout(function(){
    //     location.reload();
    // }, (1000*60)*10);
    
    

    





    


 