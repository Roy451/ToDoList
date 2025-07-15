using Application.TaskItems.Commands;
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
        public async Task<ActionResult<string>> CreateTaskItem(TaskItem newTaskItem)
        {
            return await Mediator.Send(new AddTaskItem.Command { TaskItem = newTaskItem });
        }

        [HttpPut]
        public async Task<ActionResult> EditTaskItem(TaskItem taskItem)
        {
            await Mediator.Send(new EditTaskItem.Command { TaskItem = taskItem });

            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTaskItem(string id)
        {
            await Mediator.Send(new DeleteTaskItem.Command { Id = id });

            return Ok();
        }
    }
}