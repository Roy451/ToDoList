using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Core
{
    public class AppException(int statusCode, string errorMessage, string? details)
    {
        public int StatusCode { get; set; } = statusCode;
        public string ErrorMessage { get; set; } = errorMessage;
        public string? Details { get; set; } = details;
    }
}