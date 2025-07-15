using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.TaskItems.Commands
{
    public class AddTaskItem
    {
        public class Command : IRequest<string>
        {
            public required TaskItem TaskItem { get; set; }
        }

        public class Handler(AppDbContext context) : IRequestHandler<Command, string>
        {
            public async Task<string> Handle(Command request, CancellationToken cancellationToken)
            {
                context.TaskItems.Add(request.TaskItem);

                await context.SaveChangesAsync(cancellationToken);

                return request.TaskItem.Id;
            }
        }
    }
}