using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.TaskItems.DTOs
{
    public class AddTaskItemDto
    {
        public string Title { get; set; } = "";
        public DateTime DateAdded { get; set; }
        public string Category { get; set; } = "";
    }
}