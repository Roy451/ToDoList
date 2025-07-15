using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.TaskItems.Queries
{
    public class GetTaskItemsList
    {
        public class Query : IRequest<List<TaskItem>>
        {

        }

        public class Handler(AppDbContext context) : IRequestHandler<Query, List<TaskItem>>
        {
            public async Task<List<TaskItem>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.TaskItems.ToListAsync(cancellationToken);
            }
        }
    }
}