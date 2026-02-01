using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.TaskItems.DTOs;
using FluentValidation;

namespace Application.TaskItems.Validators
{
    public class BaseTaskItemValidator<T, TDto> : AbstractValidator<T> where TDto : BaseTaskItemDto
    {
        public BaseTaskItemValidator(Func<T, TDto> selector)
        {
            RuleFor(x => selector(x).Title).NotEmpty().WithMessage("Title is Required")
            .MaximumLength(50).WithMessage("Title must not exceed 50 characters");

            RuleFor(x => selector(x).Category)
                .NotEmpty().WithMessage("Category is required");

            RuleFor(x => selector(x).DateAdded)
                .GreaterThan(DateTime.UtcNow).WithMessage("Date must be in the future");

        }
    }
}