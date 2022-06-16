using System.ComponentModel.DataAnnotations;

namespace NewsServiceSystem.Models
{
    public class Customer
    {
        [Key]
        public int CusId { get; set; }
        [Required]
        public string? CusName { get; set; }
        public string? ShippingAddress { get; set; }
    }
}
