namespace Application.TaskItems.DTOs
{
    public class BaseTaskItemDto
    {
        public string Title { get; set; } = "";
        public DateTime DateAdded { get; set; }
        public string Category { get; set; } = "";
        public bool IsCompleted { get; set; }
    }
}