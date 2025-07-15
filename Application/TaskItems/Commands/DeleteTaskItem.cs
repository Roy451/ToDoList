using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.TaskItems.Commands
{
    public class DeleteTaskItem
    {
        public class Command : IRequest
        {
            public required string Id { get; set; }
        }

        public class Handler(AppDbContext context) : IRequestHandler<Command>
        {
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var taskItem = await context.TaskItems.FindAsync([request.Id], cancellationToken);

                if (taskItem == null)
                {
                    throw new Exception("Could Not Find TaskItem To Delete");
                }

                context.TaskItems.Remove(taskItem);

                await context.SaveChangesAsync(cancellationToken);
            }
        }
    }
}