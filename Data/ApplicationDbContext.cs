using Microsoft.EntityFrameworkCore;
using NewsServiceSystem.Models;

namespace NewsServiceSystem.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        //Table Creation
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Newsletter> Newsletters { get; set; }
        public DbSet<Supplier> Supplier { get; set; }
    }
}
