package br.com.vmc.auction.controller;

import br.com.vmc.auction.entity.AuctionItem;
import br.com.vmc.auction.service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auction")
@CrossOrigin(origins = "*") // For development - restrict in production
public class AuctionController {

    private final AuctionService auctionService;

    @Autowired
    public AuctionController(AuctionService auctionService) {
        this.auctionService = auctionService;
    }

    @GetMapping("/items")
    public ResponseEntity<List<AuctionItem>> getAllActiveItems() {
        return ResponseEntity.ok(auctionService.getAllActiveItems());
    }

    @GetMapping("/items/{id}")
    public ResponseEntity<AuctionItem> getItemById(@PathVariable String id) {
        return auctionService.getItemById(id)
                             .map(ResponseEntity::ok)
                             .orElse(ResponseEntity.notFound().build());
    }

    // Initialize demo data
    @PostMapping("/initialize-demo")
    public ResponseEntity<String> initializeDemoData() {
        auctionService.initializeDemoData();
        return ResponseEntity.ok("Demo data initialized successfully");
    }
}
