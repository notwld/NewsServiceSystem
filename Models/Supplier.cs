using System.ComponentModel.DataAnnotations;

namespace NewsServiceSystem.Models
{
    public class Supplier
    {
        [Key]
        public int SupplierId { get; set; }
        [Required]
        public string? SupplierName { get; set; }
        public string? Phone { get; set; }
    }
}
