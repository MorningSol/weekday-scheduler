var currentDayEl = $("#currentDay");
var timeBlocksEl = $(".time-block");

var timeBlockArr = []


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
    var text = $(this).siblings(".description").val().trim(); 
    var timeSlot = $(this).parent().attr("id")
    var taskSame = false;
       
    var timeBlockInfo = {
        time: timeSlot,
        descript: text
    }
    
    for (i = 0; i < timeBlockArr.length; i++) {
        
        if (timeBlockArr[i].time === timeBlockInfo.time){
            taskSame = true;
            var index = i
            break    
        }    
    };
   
    if (taskSame){
        timeBlockArr[index].descript = timeBlockInfo.descript;
    }
    else {
        timeBlockArr.push(timeBlockInfo)
    }
     
    localStorage.setItem("timeBlockArr", JSON.stringify(timeBlockArr));
};
    

var loadTasks = function(){
    var loadedTasks = localStorage.getItem("timeBlockArr");

    if (!loadedTasks) {
        return false;
    };

    loadedTasks = JSON.parse(loadedTasks);

    timeBlockArr = loadedTasks
    
    for (var i = 0; i < loadedTasks.length; i++) {
        fillOutWorkDay(loadedTasks[i]);
    };
};

    var fillOutWorkDay = function(timeBlockInfo){
         switch (timeBlockInfo.time) {

            case "9":
                $("#9").children(".description").text(timeBlockInfo.descript)
                break;

            case "10":
                $("#10").children(".description").text(timeBlockInfo.descript)
                break;    
            
            case "11":
                $("#11").children(".description").text(timeBlockInfo.descript)
                break; 

            case "12":
                $("#12").children(".description").text(timeBlockInfo.descript)
                break; 

            case "13":
                $("#13").children(".description").text(timeBlockInfo.descript)
                break;

            case "14":
                $("#14").children(".description").text(timeBlockInfo.descript)
                break;

            case "15":
                $("#15").children(".description").text(timeBlockInfo.descript)
                break; 

            case "16":
                $("#15").children(".description").text(timeBlockInfo.descript)
                break;
            
            case "17":
                $("#15").children(".description").text(timeBlockInfo.descript)
                break;
         }
    };
    
   

    $(".saveBtn").on("click", saveTask);
    
    loadTasks();
    
    
     setTimeout(function(){
        location.reload()
        }, (1000*60)*10);

        // if (moment().hour() > 17) {
        //     console.log("delete")
        // }
    