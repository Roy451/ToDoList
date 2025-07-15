using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.TaskItems.Commands
{
    public class EditTaskItem
    {
        public class Command : IRequest
        {
            public required TaskItem TaskItem { get; set; }
        }

        public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
        {
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var taskItem = await context.TaskItems.FindAsync([request.TaskItem.Id], cancellationToken);

                if (taskItem == null)
                {
                    throw new Exception("Could Not Find The TaskItem");
                }

                mapper.Map(request.TaskItem, taskItem);

                await context.SaveChangesAsync(cancellationToken);
            }
        }
    }
}