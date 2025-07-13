using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class DbInitializer
    {
        public static async Task SeedData(AppDbContext context)
        {
            if (context.TaskItems.Any())
            {
                return;
            }

            var taskItems = new List<TaskItem>
            {
                new TaskItem()
                {
                    Title = "Buy Milk",
                    Category = "Groceries",
                    DateAdded = DateTime.Now.AddDays(7)
                },
                new TaskItem()
                {
                    Title = "Study",
                    Category = "Personal",
                    DateAdded = DateTime.Now.AddDays(14)
                },
                new TaskItem()
                {
                    Title = "Test1",
                    Category = "Work",
                    DateAdded = DateTime.Now.AddDays(6)
                },
            };

            context.TaskItems.AddRange(taskItems);

            await context.SaveChangesAsync();
        }
    }
}