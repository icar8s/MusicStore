using Domain.Entities.Abstract;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public sealed class EventInfEntityConfiguration: IEntityTypeConfiguration<EventInfEntity>
{
    public void Configure(EntityTypeBuilder<EventInfEntity> builder)
    {
        builder.Property(e => e.CreatedDate)
            .HasDefaultValueSql("GETDATE()")
            .ValueGeneratedOnAdd();
        
        builder.Property(e => e.LastModifiedDate)
            .HasDefaultValueSql("GETDATE()")
            .ValueGeneratedOnAddOrUpdate();
    }
}