using Domain.Entities.General;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public sealed class SaleConfiguration: IEntityTypeConfiguration<Sale>
{
    public void Configure(EntityTypeBuilder<Sale> builder)
    {
        builder.Property(x => x.Percentage)
            .IsRequired();
        
        builder.HasMany(x=>x.SaleProducts)
            .WithOne(x=>x.Sale)
            .HasForeignKey(x=>x.SaleId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}