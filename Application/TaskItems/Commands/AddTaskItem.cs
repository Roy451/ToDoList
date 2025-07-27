using Application.Core;
using Application.TaskItems.DTOs;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.TaskItems.Commands
{
    public class AddTaskItem
    {
        public class Command : IRequest<Result<string>>
        {
            public required AddTaskItemDto TaskItemDto { get; set; }
        }

        public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command, Result<string>>
        {
            public async Task<Result<string>> Handle(Command request, CancellationToken cancellationToken)
            {
                var taskItem = mapper.Map<TaskItem>(request.TaskItemDto);

                context.TaskItems.Add(taskItem);

                var result = await context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                {     
                    return Result<string>.Failure("Could Not Add New TaskItem", 400);
                }

                return Result<string>.Success(taskItem.Id);
            }
        }
    }
}