using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.TaskItems.Queries
{
    public class GetTaskItemDetails
    {
        public class Query : IRequest<Result<TaskItem>>
        {
            public required string Id { get; set; }
        }

        public class Handler(AppDbContext context) : IRequestHandler<Query, Result<TaskItem>>
        {
            public async Task<Result<TaskItem>> Handle(Query request, CancellationToken cancellationToken)
            {
                var taskItem = await context.TaskItems.FindAsync([request.Id], cancellationToken);

                if (taskItem == null)
                {
                    return Result<TaskItem>.Failure("TaskItem was not found", 404);
                }

                return Result<TaskItem>.Success(taskItem);
            }
        }
    }
}