package br.com.vmc.auction.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Document(collection = "auction_items")
public class AuctionItem {
    
    @Id
    private String id;
    private String name;
    private String description;
    private String imageUrl;
    private BigDecimal startingPrice;
    private BigDecimal currentBid;
    private LocalDateTime endTime;
    private String sellerId;
    private String winningBidderId;
    private boolean active;

    public AuctionItem() {
    }

    public AuctionItem(String name, String description, String imageUrl, BigDecimal startingPrice, LocalDateTime endTime, String sellerId) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.startingPrice = startingPrice;
        this.currentBid = startingPrice;
        this.endTime = endTime;
        this.sellerId = sellerId;
        this.active = true;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public BigDecimal getStartingPrice() {
        return startingPrice;
    }

    public void setStartingPrice(BigDecimal startingPrice) {
        this.startingPrice = startingPrice;
    }

    public BigDecimal getCurrentBid() {
        return currentBid;
    }

    public void setCurrentBid(BigDecimal currentBid) {
        this.currentBid = currentBid;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public String getSellerId() {
        return sellerId;
    }

    public void setSellerId(String sellerId) {
        this.sellerId = sellerId;
    }

    public String getWinningBidderId() {
        return winningBidderId;
    }

    public void setWinningBidderId(String winningBidderId) {
        this.winningBidderId = winningBidderId;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
