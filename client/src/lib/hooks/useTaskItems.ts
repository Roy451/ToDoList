import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import agent from "../api/agent"

export const useTaskItems = () => {

    const queryClient = useQueryClient();


    const { data: taskItems, isPending } = useQuery({
        queryKey: ['taskItems'],
        queryFn: async () => {
            const response = await agent.get<TaskItem[]>('/taskItems');
            return response.data;
        }
    });


    const updateTaskItem = useMutation({
        mutationFn: async (taskItem: TaskItem) => {
            await agent.put('/taskItems', taskItem);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['taskItems']
            })
        }
    });


    const createTaskItem = useMutation({
        mutationFn: async (taskItem: TaskItem) => {
            const response = await agent.post('/taskItems', taskItem);
            return response.data;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['taskItems']
            })
        }

    });


    const deleteTaskItem = useMutation({
        mutationFn: async (id: string) => {
            await agent.delete(`/taskItems/${id}`)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['taskItems']
            })
        }
    });


    const markTaskCompleted = useMutation({
        mutationFn: async (taskItem: TaskItem) => {
            await agent.put('/taskItems', taskItem);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['taskItems'] });
        }
    });


    return {
        taskItems,
        isPending,
        createTaskItem,
        deleteTaskItem,
        updateTaskItem,
        markTaskCompleted

    }
}