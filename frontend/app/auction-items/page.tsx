"use client";

import { useState, useEffect } from "react";
import {  Box, Grid, Typography, Card, CardContent, CardMedia, CardActionArea, Chip, CircularProgress, Container,
          useMediaQuery, useTheme } from "@mui/material";
import { AuctionItem } from "../types/auctionItem";
import { fetchAuctionItems, formatCurrency, formatRemainingTime, calculateRemainingTimeInSeconds }
    from "../services/auctionService";

export default function AuctionItems() {
  const [items, setItems] = useState<AuctionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [remainingTimes, setRemainingTimes] = useState<Record<string, number>>({});
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    const loadItems = async () => {
      try {
        setLoading(true);
        const data = await fetchAuctionItems();
        setItems(data);        // Initialize remaining times
        const initialTimes: Record<string, number> = {};
        data.forEach(item => {
          initialTimes[item.id] = calculateRemainingTimeInSeconds(item.endTime);
        });
        setRemainingTimes(initialTimes);
        setRemainingTimes(initialTimes);
        
        setError(null);
      } catch (err) {
        setError("Failed to load auction items. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadItems();
  }, []);
  
  // Update countdown timers every second
  useEffect(() => {
    if (items.length === 0) return;
    
    const timerId = setInterval(() => {
      setRemainingTimes(prev => {
        const updated = { ...prev };
        let needsUpdate = false;
        
        for (const id in updated) {
          if (updated[id] > 0) {
            updated[id] -= 1;
            needsUpdate = true;
          }
        }
        
        return needsUpdate ? updated : prev;
      });
    }, 1000);
    
    return () => clearInterval(timerId);
  }, [items]);
  
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }
  
  if (error) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }
  
  if (items.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6">
          No auction items available at the moment.
        </Typography>
      </Box>
    );
  }

  // Determine grid columns based on screen size
  const getGridColumns = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Current Auction Items
      </Typography>      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 6
                }
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.imageUrl}
                  alt={item.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: '40px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body1" fontWeight="bold" color="primary">
                      {formatCurrency(item.currentBid)}
                    </Typography>
                    <Chip 
                      label={formatRemainingTime(remainingTimes[item.id] || 0)}
                      color={remainingTimes[item.id] > 86400 ? "success" : remainingTimes[item.id] > 3600 ? "info" : "error"}
                      size="small"
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
