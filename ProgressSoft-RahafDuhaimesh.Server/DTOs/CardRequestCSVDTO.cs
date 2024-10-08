﻿namespace ProgressSoft_RahafDuhaimesh.Server.DTOs
{
    public class CardRequestCSVDTO
    {
        public string? Name { get; set; }
        public string? Gender { get; set; }
        public int? DateOfBirthYear { get; set; }
        public int? DateOfBirthMonth { get; set; }
        public int? DateOfBirthDay { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? Photo { get; set; } // أو يمكنك تركها null إذا كانت فارغة
        public string? Address { get; set; }
    }
}
