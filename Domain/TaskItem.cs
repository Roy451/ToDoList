using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class TaskItem
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string Title { get; set; }
        public DateTime DateAdded { get; set; }
        public required string Category { get; set; }
        public bool IsCompleted { get; set; }
    }
}