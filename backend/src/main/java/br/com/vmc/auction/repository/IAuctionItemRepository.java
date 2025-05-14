package br.com.vmc.auction.repository;

import br.com.vmc.auction.entity.AuctionItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAuctionItemRepository extends MongoRepository<AuctionItem, String> {
    List<AuctionItem> findByActiveTrue();
}
