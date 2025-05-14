export interface AuctionItem {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    startingPrice: number;
    currentBid: number;
    endTime: string;
    active: boolean;
    sellerId: string;
    winningBidderId?: string;
}
