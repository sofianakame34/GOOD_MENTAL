import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import NavBar from './NavBar';

// Register required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const monthlyPerformance = {
  maxScore: 40,
  weeks: [
    { week: 1, score: 3, maxPoints: 5, description: 'Amélioration modeste au début du mois.' },
    { week: 2, score: 6, maxPoints: 5, description: 'Progression notable.' },
    { week: 3, score: 9, maxPoints: 5, description: 'Évolution positive continue.' },
    { week: 4, score: 12, maxPoints: 5, description: 'Bonnes performances à la fin du mois.' },
  ],
  totalScore: 30,
  trend: "La courbe s'améliore chaque semaine avec une augmentation régulière des points.",
};

export default function Dashboard() {
    // Prepare data for the line chart
    const chartData = {
      labels: monthlyPerformance.weeks.map((week) => `Semaine ${week.week}`),
      datasets: [
        {
          label: 'Score',
          data: monthlyPerformance.weeks.map((week) => week.score),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4,
        },
      ],
    };

    return (
        <div>
        <NavBar/>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard de Performance Mensuelle
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">
              Score Total: {monthlyPerformance.totalScore}/{monthlyPerformance.maxScore}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Tendance: {monthlyPerformance.trend}
            </Typography>
          </CardContent>
        </Card>
        <Box sx={{ marginTop: 2 }}>
          <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </Box>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {monthlyPerformance.weeks.map((week) => (
            <Grid item xs={12} sm={6} md={3} key={week.week}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">Semaine {week.week}</Typography>
                  <Typography variant="body1">
                    Score: {week.score}/{week.maxPoints}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {week.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      </div>

    );
  }
