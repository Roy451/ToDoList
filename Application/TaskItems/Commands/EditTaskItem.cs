using Application.Core;
using Application.TaskItems.DTOs;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.TaskItems.Commands
{
    public class EditTaskItem
    {
        public class Command : IRequest<Result<Unit>>
        {
            public required EditTaskItemDto TaskItemDto { get; set; }
        }

        public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command, Result<Unit>>
        {
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var taskItem = await context.TaskItems.FindAsync([request.TaskItemDto.Id], cancellationToken);

                if (taskItem == null)
                {
                    return Result<Unit>.Failure("Could Not Edit TaskItem", 404);
                }

                mapper.Map(request.TaskItemDto, taskItem);

                var result = await context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                {
                    return Result<Unit>.Failure("Failed To Update The TaskItem", 400);
                }

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}