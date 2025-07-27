using Application.TaskItems.DTOs;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<TaskItem, TaskItem>();
            CreateMap<AddTaskItemDto, TaskItem>();
        }
    }
}