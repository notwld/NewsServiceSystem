using System.ComponentModel.DataAnnotations;

namespace NewsServiceSystem.Models
{
    public class Newsletter
    {
        [Key]
        public int LetterId { get; set; }
        [Required]
        public string? NewsLetterName { get; set; }
        public string? Version { get; set; }
        public DateTime CreatedDateTime { get; set; } = DateTime.Now;

    }
}
