package br.com.vmc.auction.service;

import br.com.vmc.auction.entity.AuctionItem;
import br.com.vmc.auction.repository.IAuctionItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AuctionService {

    private final IAuctionItemRepository auctionItemRepository;

    @Autowired
    public AuctionService(IAuctionItemRepository auctionItemRepository) {
        this.auctionItemRepository = auctionItemRepository;
    }

    public List<AuctionItem> getAllActiveItems() {
        return auctionItemRepository.findByActiveTrue();
    }

    public Optional<AuctionItem> getItemById(String id) {
        return auctionItemRepository.findById(id);
    }

    // For demo data initialization
    public void initializeDemoData() {
        if (auctionItemRepository.count() == 0) {
            // Create sample auction items
            createSampleAuctionItem(
                "Vintage Watch", 
                "A beautiful antique watch from the 1950s, in excellent condition.",
                "https://images.unsplash.com/photo-1539874754764-5a96559165b0",
                new BigDecimal("299.99"), 
                LocalDateTime.now().plusDays(3),
                "seller1"
            );
            
            createSampleAuctionItem(
                "Gaming Laptop", 
                "High-end gaming laptop with RTX 4080, 32GB RAM, and 1TB SSD.",
                "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
                new BigDecimal("1499.99"), 
                LocalDateTime.now().plusDays(5),
                "seller2"
            );
            
            createSampleAuctionItem(
                "Diamond Ring", 
                "14k Gold ring with 1.5 carat diamond, certified.",
                "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
                new BigDecimal("3999.99"), 
                LocalDateTime.now().plusDays(7),
                "seller1"
            );
            
            createSampleAuctionItem(
                "Antique Desk", 
                "Handcrafted oak desk from the 19th century, restored to perfect condition.",
                "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd",
                new BigDecimal("799.99"), 
                LocalDateTime.now().plusDays(4),
                "seller3"
            );
            
            createSampleAuctionItem(
                "Modern Art Painting", 
                "Original abstract artwork by emerging artist, 36\" x 48\" canvas.",
                "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
                new BigDecimal("599.99"), 
                LocalDateTime.now().plusDays(6),
                "seller2"
            );
        }
    }

    private void createSampleAuctionItem(String name, String description, String imageUrl, 
                                         BigDecimal startingPrice, LocalDateTime endTime, String sellerId) {
        AuctionItem item = new AuctionItem(name, description, imageUrl, startingPrice, endTime, sellerId);
        auctionItemRepository.save(item);
    }
}
