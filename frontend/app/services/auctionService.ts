import { AuctionItem } from "../types/auctionItem";

const API_URL = "http://localhost:8080/api/auction";

export async function fetchAuctionItems(): Promise<AuctionItem[]> {
  try {
    const response = await fetch(`${API_URL}/items`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch auction items:", error);
    return [];
  }
}

export async function fetchAuctionItemById(id: string): Promise<AuctionItem | null> {
  try {
    const response = await fetch(`${API_URL}/items/${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch auction item with id ${id}:`, error);
    return null;
  }
}

export function calculateRemainingTimeInSeconds(endTimeString: string): number {
  const endTime = new Date(endTimeString);
  const now = new Date();
  const diffMs = endTime.getTime() - now.getTime();
  return Math.max(0, Math.floor(diffMs / 1000));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function formatRemainingTime(seconds: number): string {
  if (seconds <= 0) return "Auction ended";
  
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (days > 0) {
    return `${days}d ${hours}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  }
}
