var currentDayEl = $("#currentDay");
var timeBlocksEl = $(".time-block");
var saveConfirmEl = $("#save-confirm")
var timeBlockArr = []

//display current date
currentDayEl.text(moment().format('dddd, MMMM Do'));

// Sets time block color according to hour
timeBlocksEl.each(function(){
    var time = $(this).data("time");
        
    if (moment().format("H") == time){
        $(this).addClass("present") 
    }
    else if (moment().format("H") > time){
        $(this).addClass("past")   
    }  
    else if(moment().format("H") < time){
        $(this).addClass("future")
    }
});

// save the added task to localstorage
var saveTask = function() {
    
    // feedback that task is being saved
    saveConfirmEl.text("Saving in progress...");
    setTimeout(function(){
        saveConfirmEl.text("");
    }, 1600)
   
    var text = $(this).siblings(".description").val().trim(); 
    var timeSlot = $(this).parent().attr("id")
    var taskSame = false;
       
    var timeBlockInfo = {
        time: timeSlot,
        descript: text
    }
    // checks already existing time block task input
    // if it already exist, just change description, if no previous info, create new time block info and save to localstorage
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
    
// load pre existing task descriptions when page is refreshed
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

    // set loaded tasks to appropriate time block
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
    
    // refresh page every ten minutes, to set appropriate time color coding
    setTimeout(function(){location.reload()}, (1000*60)*10);
   