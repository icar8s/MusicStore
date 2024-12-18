using Domain.Entities.General;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public sealed class CartConfiguration: IEntityTypeConfiguration<Cart>
{
    public void Configure(EntityTypeBuilder<Cart> builder)
    {
        builder.HasOne(x=>x.User)
            .WithOne(x=>x.Cart)
            .HasForeignKey<Cart>(x=>x.UserId)
            .OnDelete(DeleteBehavior.Cascade);
        
        builder.HasMany(x=>x.Products)
            .WithOne(x=>x.Cart)
            .HasForeignKey(x=>x.CartId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}