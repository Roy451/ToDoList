using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.TaskItems.Commands;
using Application.TaskItems.DTOs;
using FluentValidation;

namespace Application.TaskItems.Validators
{
    public class EditTaskItemValidator : BaseTaskItemValidator<EditTaskItem.Command, EditTaskItemDto>
    {
        public EditTaskItemValidator() : base(x => x.TaskItemDto)
        {
            RuleFor(x => x.TaskItemDto.Id)
            .NotEmpty().WithMessage("Id is Required");
        }
    }
}