using Domain.Entities.General;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public sealed class ProductConfiguration: IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
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
        
        builder.HasMany(x=>x.Products)
            .WithOne(x=>x.Product)
            .HasForeignKey(x=>x.ProductId)
            .OnDelete(DeleteBehavior.Cascade);
        
        builder.HasOne(x=>x.Sale)
            .WithOne(x=>x.Product)
            .HasForeignKey<Sale>(x=>x.ProductId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}