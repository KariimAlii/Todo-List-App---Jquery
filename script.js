$(function () {
    $("#btnAdd").click(() => {
        $taskText = $("#taskInput").val();
        $("#taskInput").val("");
        let taskBox = $(`<div class="taskBox"></div>`);
        let taskTextElm = $(`<div class="task">${$taskText}</div>`);
        let doneBtn = $(`<button class="done">Done</button>`);
        let deleteBtn = $(`<button class="done">Delete</button>`);
        doneBtn.click(function() {
            if($(this).parent().hasClass("TaskDone")) $(this).parent().removeClass("TaskDone");
            else $(this).parent().addClass("TaskDone");
        })
        deleteBtn.click(function() {
            $(this).parent().remove();
        })
        taskBox.append(taskTextElm);
        taskBox.append(doneBtn);
        taskBox.append(deleteBtn);
        $(".tasksBox").append(taskBox);
    });

});


