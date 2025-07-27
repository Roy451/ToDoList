using Application.TaskItems.Commands;
using FluentValidation;

namespace Application.TaskItems.Validators
{
    public class AddTaskItemValidator : AbstractValidator<AddTaskItem.Command>
    {
        public AddTaskItemValidator()
        {
            RuleFor(x => x.TaskItemDto.Title).NotEmpty().WithMessage("Title is Required");
            RuleFor(x => x.TaskItemDto.Category).NotEmpty().WithMessage("Category is Required");
        }
    }
}