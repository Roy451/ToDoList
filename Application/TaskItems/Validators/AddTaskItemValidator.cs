using Application.TaskItems.Commands;
using Application.TaskItems.DTOs;
using FluentValidation;

namespace Application.TaskItems.Validators
{
    public class AddTaskItemValidator : BaseTaskItemValidator<AddTaskItem.Command, AddTaskItemDto>
    {
        public AddTaskItemValidator() : base(x => x.TaskItemDto)
        {
            
        }
    }
}