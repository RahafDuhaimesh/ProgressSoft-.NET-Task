using CsvHelper.Configuration;
using Microsoft.AspNetCore.Http.Metadata;

namespace ProgressSoft_RahafDuhaimesh.Server.DTOs
{
    public class CardRequestDTO
    {
        public string? Name { get; set; }
        public string? Gender { get; set; }
        public int? DateOfBirthYear { get; set; }
        public int? DateOfBirthMonth { get; set; }
        public int? DateOfBirthDay { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public IFormFile? Photo { get; set; }
        public string? Address { get; set; }
    }

public class CardRequestMap : ClassMap<CardRequestDTO>
    {
        public CardRequestMap()
        {
            Map(m => m.Name);
            Map(m => m.Gender);
            Map(m => m.DateOfBirthMonth);
            Map(m => m.DateOfBirthYear);
            Map(m => m.DateOfBirthDay);
            Map(m => m.Email);
            Map(m => m.Phone);
            Map(m => m.Photo);
            Map(m => m.Address);
        }
    }

}
