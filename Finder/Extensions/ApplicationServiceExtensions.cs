﻿using Finder.Data;
using Finder.Helpers;
using Finder.Interfaces;
using Finder.Services;
using Microsoft.EntityFrameworkCore;

namespace Finder.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,
             IConfiguration config)
        {
            services.AddDbContext<DataContext>(options => options.UseSqlServer(config.GetConnectionString("DataContext")));
            services.AddCors();
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.Configure<CloudinarySettings>(config.GetSection("CloudinarySettings"));
            services.AddScoped<IPhotoService, PhotoService>();
            services.AddScoped<LogUserActivity>();

            return services;
        }
    }
}
