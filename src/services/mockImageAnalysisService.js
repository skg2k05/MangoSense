// Mock Image Analysis Service for Mango Flower Buds

export const SAMPLE_BUD_IMAGES = [
  {
    id: 'img-1',
    url: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
    title: 'Panicle Sample #1 (North Canopy)',
    stage: 'Elongating Panicle',
    classification: 'Healthy Bud',
    confidence: 91.4,
    status: 'healthy',
    detectedBuds: 42,
    healthyBuds: 38,
    affectedBuds: 4,
    notes: 'Vigorous axis elongation, uniform yellowish-green panicle with zero anthracnose lesion.',
    boxes: [
      { x: 30, y: 25, width: 35, height: 45, label: 'Healthy Panicle', score: 0.94, status: 'healthy' }
    ]
  },
  {
    id: 'img-2',
    url: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    title: 'Panicle Sample #2 (East Branch)',
    stage: 'Early Bud Burst',
    classification: 'Healthy Bud',
    confidence: 88.7,
    status: 'healthy',
    detectedBuds: 36,
    healthyBuds: 32,
    affectedBuds: 4,
    notes: 'Firm floral buds emerging evenly from terminal shoot.',
    boxes: [
      { x: 20, y: 15, width: 40, height: 55, label: 'Healthy Cluster', score: 0.91, status: 'healthy' }
    ]
  },
  {
    id: 'img-3',
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
    title: 'Panicle Sample #3 (Inner Canopy)',
    stage: 'Active Bloom',
    classification: 'Pest Risk (Mango Hopper)',
    confidence: 79.2,
    status: 'pest_risk',
    detectedBuds: 50,
    healthyBuds: 34,
    affectedBuds: 16,
    notes: 'Minor honeydew deposition observed on secondary branches. Hopper presence suspected.',
    boxes: [
      { x: 45, y: 35, width: 28, height: 32, label: 'Hopper Activity', score: 0.81, status: 'pest_risk' }
    ]
  },
  {
    id: 'img-4',
    url: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80',
    title: 'Panicle Sample #4 (South Edge)',
    stage: 'Flowering & Drop Check',
    classification: 'Flower Drop Risk',
    confidence: 82.5,
    status: 'drop_risk',
    detectedBuds: 48,
    healthyBuds: 35,
    affectedBuds: 13,
    notes: 'Premature shedding of hermaphrodite flowers due to dry atmospheric breeze.',
    boxes: [
      { x: 25, y: 40, width: 35, height: 35, label: 'Desiccated Pedicel', score: 0.84, status: 'drop_risk' }
    ]
  },
  {
    id: 'img-5',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    title: 'Panicle Sample #5 (West Corner)',
    stage: 'Bud Emergence',
    classification: 'Healthy Bud',
    confidence: 93.1,
    status: 'healthy',
    detectedBuds: 38,
    healthyBuds: 36,
    affectedBuds: 2,
    notes: 'Dense, clean panicle with excellent trichome density.',
    boxes: [
      { x: 35, y: 20, width: 45, height: 50, label: 'Robust Panicle', score: 0.95, status: 'healthy' }
    ]
  },
  {
    id: 'img-6',
    url: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    title: 'Panicle Sample #6 (Lower Tier)',
    stage: 'Bloom Phase',
    classification: 'Diseased (Powdery Mildew Risk)',
    confidence: 84.6,
    status: 'diseased',
    detectedBuds: 44,
    healthyBuds: 30,
    affectedBuds: 14,
    notes: 'White powdery fungal coating on tertiary branch tips. Requires sulphur spray.',
    boxes: [
      { x: 40, y: 30, width: 30, height: 35, label: 'Mildew Patch', score: 0.86, status: 'diseased' }
    ]
  },
  {
    id: 'img-7',
    url: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80',
    title: 'Panicle Sample #7 (Central Tree #14)',
    stage: 'Elongation Stage',
    classification: 'Healthy Bud',
    confidence: 90.0,
    status: 'healthy',
    detectedBuds: 40,
    healthyBuds: 37,
    affectedBuds: 3,
    notes: 'High vigor floral panicle, robust peduncle branching.',
    boxes: [
      { x: 28, y: 22, width: 42, height: 48, label: 'Healthy Floral Axis', score: 0.92, status: 'healthy' }
    ]
  },
  {
    id: 'img-8',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    title: 'Panicle Sample #8 (South West Quadrant)',
    stage: 'Late Bloom Stage',
    classification: 'Healthy Bud',
    confidence: 87.3,
    status: 'healthy',
    detectedBuds: 46,
    healthyBuds: 40,
    affectedBuds: 6,
    notes: 'Normal honeybee pollination activity noted with healthy ovary swelling.',
    boxes: [
      { x: 32, y: 28, width: 38, height: 42, label: 'Pollinated Panicle', score: 0.89, status: 'healthy' }
    ]
  }
];

export const mockImageAnalysisService = {
  getSampleImages: async () => {
    return [...SAMPLE_BUD_IMAGES];
  },

  // Simulates deep learning CNN inference batch pipeline
  analyzeImageBatch: async (images, onProgress) => {
    const total = images.length || 8;
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
