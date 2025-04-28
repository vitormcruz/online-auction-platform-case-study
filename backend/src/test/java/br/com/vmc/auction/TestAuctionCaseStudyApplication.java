package br.com.vmc.auction;

import org.springframework.boot.SpringApplication;

public class TestAuctionCaseStudyApplication {

	public static void main(String[] args) {
		SpringApplication.from(AuctionCaseStudyApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
