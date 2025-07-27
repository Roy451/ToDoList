using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.TaskItems.Commands
{
    public class DeleteTaskItem
    {
        public class Command : IRequest<Result<Unit>>
        {
            public required string Id { get; set; }
        }

        public class Handler(AppDbContext context) : IRequestHandler<Command, Result<Unit>>
        {
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var taskItem = await context.TaskItems.FindAsync([request.Id], cancellationToken);

                if (taskItem == null)
                {
                    return Result<Unit>.Failure("TaskItem Not Found", 404);
                }

                context.TaskItems.Remove(taskItem);

                var result = await context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                {
                    return Result<Unit>.Failure("Failed To Delete The TaskItem", 400);
                }

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}