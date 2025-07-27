using Application.TaskItems.Commands;
using Application.TaskItems.DTOs;
using Application.TaskItems.Queries;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class TaskItemsController() : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<TaskItem>>> GetTaskItemsList()
        {
            return await Mediator.Send(new GetTaskItemsList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItem>> GetTaskItemById(string id)
        {
            return HandleResult(await Mediator.Send(new GetTaskItemDetails.Query { Id = id }));
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreateTaskItem(AddTaskItemDto newTaskItemDto)
        {
            return HandleResult(await Mediator.Send(new AddTaskItem.Command { TaskItemDto = newTaskItemDto }));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> EditTaskItem(string id, TaskItem taskItem)
        {
            taskItem.Id = id;
            return HandleResult(await Mediator.Send(new EditTaskItem.Command { TaskItem = taskItem }));
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTaskItem(string id)
        {
            return HandleResult(await Mediator.Send(new DeleteTaskItem.Command { Id = id }));
        }
    }
}