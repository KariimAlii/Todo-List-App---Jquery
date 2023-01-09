$(function () {
    $("#btnAdd").click(() => {
        $taskText = $("#taskInput").val();
        let taskBox = $(`<div class="task"></div>`);
        let taskTextElm = $(`<div class="taskText">${$taskText}</div>`);
        let doneBtn = $(`<button class="done">Done</button>`);
        let deleteBtn = $(`<button class="done">Delete</button>`);
        doneBtn.click(function() {
            $(this).parent().addClass("TaskDone");
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


