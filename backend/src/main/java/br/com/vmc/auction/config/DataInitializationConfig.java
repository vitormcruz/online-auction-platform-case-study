package br.com.vmc.auction.config;

import br.com.vmc.auction.service.AuctionService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializationConfig {

    @Bean
    public CommandLineRunner initializeDemoData(AuctionService auctionService) {
        return args -> {
            // Initialize demo data on startup
            auctionService.initializeDemoData();
        };
    }
}
