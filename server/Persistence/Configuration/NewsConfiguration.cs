using Domain.Entities.General;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class NewsConfiguration: IEntityTypeConfiguration<News>
{
    public void Configure(EntityTypeBuilder<News> builder)
    {
        builder.Property(p => p.Name)
            .HasMaxLength(50)
            .IsRequired();
        
        builder.Property(p => p.Description)
            .HasMaxLength(500)
            .IsRequired();
        
        builder.Property(p => p.BlobId)
            .HasMaxLength(20)
            .IsRequired();
    }
}