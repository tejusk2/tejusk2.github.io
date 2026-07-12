**Project**: Onboarding Project for Silicon Jackets Analog Subteam

**Description:** Design, simulate, and layout a ring oscillator in cadence virtuoso

**Dates:** Jan 26 \- Mar 26

**Technologies:** Cadence Virtuoso  


---

This project was the onboarding task for the analog and mixed signal design team of Silicon Jackets. The goal was to design a ring oscillator that fell within these requirements from 0-70 at the typical corner. (Also shown are simulated values for my design).

| Name | Min | Max | Sim | Unit | Notes |
| ----- | ----- | ----- | ----- | ----- | ----- |
| VDD | \-- | 1.8 | 1.8 | V |  |
| GND | \-- | 0 | 0 | V |  |
| Oscillator Power | \-- | 500 | 141.2 | uW |  |
| Cload | \-- | 1 | 1 | pF |  |
| f o s c | 450 | 550 | 527.9 | MHz |  |
| t r / t f (10% \-\> 90%) | \-- | 250 | 125.5 | pS | |
| Duty Cycle | 40 | 60 | 52.56 | % |  |
| Vmin | 0 | 0.1 | 0 | V |  |
| Vmax | 1.7 | 1.8 | 1.8 | V |  |

For simplicity purposes, I decided to use a standard inverter chain with 9 inverters for my ring oscillator​. Starting from the original minimum size inverter with a fan out of one, I manipulated widths and lengths so that the Low to High and High to Low propagation delay roughly matched and the oscillation frequency was within bounds​. I also designed a digital buffer to drive the 1 pF load.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSClfeShm2Sc_cSq1eDgQ-ApcEwOYp5fEXUTKRSaBGk6OXB4nYA_EQ1IG7e-GeIoZ-PcAXuljRpxm8Y/pubembed?start=false&loop=false&delayms=30000" frameborder="0" width="100%" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

