// Mock Image Analysis Service for Mango Flower Buds

export const SAMPLE_BUD_IMAGES = [
  {
    id: 'img-1',
    url: '/samples/mango_sample_1.jpg',
    fallbackUrl: '/samples/mango_sample_1.jpg',
    title: 'Panicle Sample #1 (North Canopy)',
    stage: 'Panicle Elongation & Bloom',
    classification: 'Healthy Bud',
    confidence: 94.2,
    status: 'healthy',
    detectedBuds: 45,
    healthyBuds: 42,
    affectedBuds: 3,
    notes: 'Vigorous terminal axis elongation with uniform floral branching and zero anthracnose lesions.',
    boxes: [
      { x: 25, y: 15, width: 50, height: 60, label: 'Healthy Panicle', score: 0.95, status: 'healthy' }
    ]
  },
  {
    id: 'img-2',
    url: '/samples/mango_sample_2.jpg',
    fallbackUrl: '/samples/mango_sample_2.jpg',
    title: 'Panicle Sample #2 (East Canopy)',
    stage: 'Early Fruitlet Setting',
    classification: 'Healthy Bud',
    confidence: 91.8,
    status: 'healthy',
    detectedBuds: 48,
    healthyBuds: 44,
    affectedBuds: 4,
    notes: 'Uniform pea-stage fruitlet emergence on healthy reddish rachis branches.',
    boxes: [
      { x: 18, y: 20, width: 48, height: 65, label: 'Fruitlet Cluster', score: 0.93, status: 'healthy' }
    ]
  },
  {
    id: 'img-3',
    url: '/samples/mango_sample_3.jpg',
    fallbackUrl: '/samples/mango_sample_3.jpg',
    title: 'Panicle Sample #3 (Inner Canopy)',
    stage: 'Active Bloom & Anthesis',
    classification: 'Pest Risk (Mango Hopper)',
    confidence: 83.5,
    status: 'pest_risk',
    detectedBuds: 42,
    healthyBuds: 30,
    affectedBuds: 12,
    notes: 'Honeydew deposition and hopper activity suspected along secondary rachis branches.',
    boxes: [
      { x: 22, y: 28, width: 55, height: 50, label: 'Hopper Activity', score: 0.84, status: 'pest_risk' }
    ]
  },
  {
    id: 'img-4',
    url: '/samples/mango_sample_4.png',
    fallbackUrl: '/samples/mango_sample_4.png',
    title: 'Panicle Sample #4 (South Edge)',
    stage: 'Late Bloom & Desiccation Check',
    classification: 'Flower Drop Risk',
    confidence: 86.4,
    status: 'drop_risk',
    detectedBuds: 38,
    healthyBuds: 24,
    affectedBuds: 14,
    notes: 'Dry brownish floret desiccation with early flower drop risk detected on terminal cluster.',
    boxes: [
      { x: 20, y: 25, width: 60, height: 65, label: 'Desiccated Florets', score: 0.87, status: 'drop_risk' }
    ]
  }
];

export const mockImageAnalysisService = {
  getSampleImages: async () => {
    return [...SAMPLE_BUD_IMAGES];
  },

  // Simulates deep learning CNN inference batch pipeline
  analyzeImageBatch: async (images, onProgress) => {
    const total = images.length || 4;
    const results = [];

    for (let i = 0; i < total; i++) {
      if (onProgress) {
        onProgress({
          currentIndex: i + 1,
          total,
          percent: Math.round(((i + 1) / total) * 100),
          currentImageTitle: images[i]?.title || `Sample #${i + 1}`
        });
      }
      // slight delay for UI feedback
      await new Promise(r => setTimeout(r, 220));
      
      const sample = images[i] || SAMPLE_BUD_IMAGES[i % SAMPLE_BUD_IMAGES.length];
      results.push(sample);
    }

    const totalBuds = results.reduce((acc, r) => acc + (r.detectedBuds || 40), 0);
    const healthyBuds = results.reduce((acc, r) => acc + (r.healthyBuds || 32), 0);
    const affectedBuds = totalBuds - healthyBuds;
    const healthPercentage = Math.round((healthyBuds / totalBuds) * 100);

    const diseasedCount = results.filter(r => r.status === 'diseased').length;
    const pestCount = results.filter(r => r.status === 'pest_risk').length;
    const dropCount = results.filter(r => r.status === 'drop_risk').length;
    const healthyCount = results.filter(r => r.status === 'healthy').length;

    return {
      success: true,
      isDemo: true,
      analysisTimestamp: new Date().toISOString(),
      summary: {
        totalImagesAnalyzed: results.length,
        totalBudsDetected: totalBuds,
        healthyBudsCount: healthyBuds,
        affectedBudsCount: affectedBuds,
        overallHealthScore: healthPercentage,
        distribution: {
          healthyPercentage: healthPercentage,
          riskPercentage: 100 - healthPercentage,
          diseasedRatio: Math.round((diseasedCount / results.length) * 100),
          pestRatio: Math.round((pestCount / results.length) * 100),
          dropRiskRatio: Math.round((dropCount / results.length) * 100),
          healthyRatio: Math.round((healthyCount / results.length) * 100)
        },
        flowerDropRisk: healthPercentage >= 80 ? 'Low' : healthPercentage >= 70 ? 'Moderate' : 'High',
        confidenceScore: 89.2
      },
      images: results
    };
  }
};
